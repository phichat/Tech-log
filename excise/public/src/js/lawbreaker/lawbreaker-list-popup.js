// $(document).ready(function () {
//     new autoComplete({
//         selector: 'input[name=searchLawbreaker]',
//         minChars: 1,
//         source: function (term, suggest) {
//             term = term.toLowerCase();
//             var choices = [['Australia', 'au'], ['Austria', 'at'], ['Brasil', 'br']];
//             var suggestions = [];
//             for (i = 0; i < choices.length; i++)
//                 if (~(choices[i][0] + ' ' + choices[i][1]).toLowerCase().indexOf(term)) suggestions.push(choices[i]);
//             suggest(suggestions);
//         },
//         renderItem: function (item, search) {
//             search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
//             var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
//             return '<div class="autocomplete-suggestion" data-langname="' + item[0] + '" data-lang="' + item[1] + '" data-val="' + search + '">' + item[0].replace(re, "<b>$1</b>") + '</div>';
//         },
//         onSelect: function (e, term, item) {
//             alert('Item "' + item.getAttribute('data-langname') + ' (' + item.getAttribute('data-lang') + ')" selected by ' + (e.type == 'keydown' ? 'pressing enter' : 'mouse click') + '.');
//         }
//     });
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


var $autocomplete = $('<ul class="autocomplete"><li>1</il><li>2</il></ul>').hide().insertAfter($('.textSearch').parents('.form-line'));
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
    $('.textSearch').val($autocomplete.find('li').eq(selectedItem)
        .text());
    setSelectedItem(null);
};

var timer;

$('.textSearch').attr('autocomplete', 'on').keyup(function (event) {
    debugger
    if (event.keyCode > 40 || event.keyCode == 8) {
        // Keys with codes 40 and below are special
        // (enter, arrow keys, escape, etc.).
        // Key code 8 is backspace.
        if (this.value.length > 2) {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(function () {
                getArrestLawbreakerByKeyword($(this).val(), function (json) {
                    if (typeof Array[json.detail] !== null) {
                        $autocomplete.empty();
                        $.each(json.detail, function (index, term) {
                            $('<li></li>')
                                .text(term.FirstName)
                                .appendTo($autocomplete)
                                .mouseover(function () {
                                    setSelectedItem(index);
                                }).click(populateSearchField);
                        });
                        setSelectedItem(0);
                    }
                    else {
                        setSelectedItem(null);
                    }
                })
            }, 500);
        }

    }
    else if (event.keyCode == 38 && selectedItem !== null) {
        // User pressed up arrow.
        setSelectedItem(selectedItem - 1);
        event.preventDefault();
    }
    else if (event.keyCode == 40 && selectedItem !== null) {
        // User pressed down arrow.
        setSelectedItem(selectedItem + 1);
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
});
