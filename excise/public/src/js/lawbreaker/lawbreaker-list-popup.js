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

function onKeyupSearchLawbreaker(e) {
    debugger
    new autoComplete({
        selector: 'input[name="searchLawbreaker"]',
        source: function (term, response) {
            getArrestLawbreakerByKeyword(term, function (json) {
                response(json)
            })
        }
    });
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