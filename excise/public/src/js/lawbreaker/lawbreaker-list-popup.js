// $(document).ready(function () {

// })

function onSaveLawbreaker(form) {
    var isSave = false;
    // if (
    //     $(form).find('select#sle_titleName option:selected').text() == '' &&
    //     $(form).find('input#txt_firstName').val() == '' &&
    //     $(form).find('input#txt_lastName').val() == '' &&
    //     $(form).find('select#sle_lawbreakerType option:selected').text() == '' &&
    //     $(form).find('input#txt_lawCreer').val() == '' &&
    //     $(form).find('input#txt_lawBirthDay').val() == '' &&
    //     ($(form).find('input#txt_idCard').val() == '' || $(form).find('input#txt_passport').val() == '') &&
    //     $(form).find('select#sle_lawRace option:selected').text() == '' &&
    //     $(form).find('select#sle_lawNationallity option:selected').text() == '' &&
    //     $(form).find('input#txt_lawAddress').val() == '' &&
    //     $(form).find('input#txt_lawVillage').val() == '' &&
    //     $(form).find('input#txt_lawAlley').val() == '' &&
    //     $(form).find('input#txt_lawRoad').val() == '' &&
    //     $(form).find('select#sle_lawRegion option:selected').text() == '' &&
    //     $(form).find('input#txt_lawFatherName').val() == '' &&
    //     $(form).find('input#txt_lawMatherName').val() == ''
    // ) {
    //     alert('กรุณาระบุข้อมูลผู้กระทำความผิด')
    //     return false;
    // } else {
    //     isSave = true;
    // }
    var isSave = true;

    if (isSave) {
        // เรียกใช้งาน ฟังชั่นก์ ในหน้า arrest-manage.html
        onSetLawbreaker(form);
        onClearLawbreaker();
        $('.modal').modal('hide');
    }
}

function onSearchLawbreaker(e) {
    getArrestLawbreakerByKeyword()
}

function onClearLawbreaker() {
    $('.lawbreaker-list-popup .form-manage input').val('');
    $('.lawbreaker-list-popup .form-manage select').each(function (i, e) {
        var $select = $(e).selectize();
        var control = $select[0].selectize;
        control.clear();
    });
}

function onCancelLawbreaker() {
    if (confirm('ยืนยันการทำรายการหรือไม่?')) {
        onClearLawbreaker();
        $('.modal').modal('hide');
    }
}


var $autocomplete = $('<ul class="autocomplete"></ul>').hide().insertAfter($('.textSearch').parents('.form-line'));
var selectedItem = null;
var setSelectedItem = function (item) {
    selectedItem = item;
    if (selectedItem === null) {
        $autocomplete.slideUp(200);
        return;
    }
    if (selectedItem < 0) {
        selectedItem = 0;
    }
    if (selectedItem >= $autocomplete.find('li').length) {
        selectedItem = $autocomplete.find('li').length - 1;
    }
    $autocomplete.find('li').removeClass('selected').eq(selectedItem)
        .addClass('selected');
    $autocomplete.slideDown(200);
};
var populateSearchField = function () {
    $('.textSearch').val($autocomplete.find('li .title').eq(selectedItem).text());
    setSelectedItem(null);
};

var timer;

$('.textSearch').attr('autocomplete', 'on').keyup(function (event) {

    if (event.keyCode > 40 || event.keyCode == 8) {
        // Keys with codes 40 and below are special
        // (enter, arrow keys, escape, etc.).
        // Key code 8 is backspace.
        if (this.value.length > 2) {
            var key = this.value;
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(function () {
                getArrestLawbreakerByKeyword(key, function (json) {
                    if (typeof Array[json.detail] !== null) {
                        $autocomplete.empty();
                        $.each(json.detail, function (index, term) {
                            var item = '<li><div>' +
                                '<span class="title" data-id="' + term.LawbreakerID + '">' +
                                '<span class="name">' + term.FirstName + ' ' + term.LastName + '</span>' +
                                '</span>' +
                                '<span class="description">' +
                                ((term.LawbreakerIDCard !== null && term.LawbreakerIDCard !== 'null') ? 'เลขบัตร ปชช.: ' + term.LawbreakerIDCard : '') +
                                ((term.LawbreakerPassport !== null && term.LawbreakerPassport !== 'null') ? ' Passport: ' + term.LawbreakerPassport : '') +
                                '</span>' +
                                '</li></div>';

                            $(item)
                                .appendTo($autocomplete)
                                .mouseenter(function () {
                                    setSelectedItem(index);
                                }).click(populateSearchField);
                        });
                        setSelectedItem(0);
                    }
                    else {
                        setSelectedItem(null);
                    }
                })
            }, 200);
        }

    }
    else if (event.keyCode == 38 && selectedItem !== null) {
        // User pressed up arrow.
        setSelectedItem(selectedItem - 1);
        event.preventDefault();
    }
    else if (event.keyCode == 40) {
        // User pressed down arrow.
        setSelectedItem(selectedItem !== null ? selectedItem + 1 : 0);
        event.preventDefault();
    }
    else if (event.keyCode == 27 && selectedItem !== null) {
        // User pressed escape key.
        setSelectedItem(null);
    }
}).keypress(function (event) {
    if (event.keyCode == 13 && selectedItem !== null) {
        // User pressed enter key.
        populateSearchField();
        event.preventDefault();
    }
}).blur(function (event) {
    setTimeout(function () {
        setSelectedItem(null);
    }, 250);
}).focusin(function () {
    $autocomplete.slideDown(200);
});
