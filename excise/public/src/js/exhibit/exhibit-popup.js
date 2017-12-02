
function onSaveExhibit(form) {
    var isSave = false
    if (
        $(form).find('input#txt_productName').val() == '' &&
        $(form).find('input#txt_qty').val() == '' &&
        $(form).find('input#txt_netWeight').val() == '' &&
        $(form).find('input#txt_carNo').val() == '' &&
        $(form).find('select#sle_isDomestic option:selected').text() == '' &&
        $(form).find('select#sle_isStatusExhibit option:selected').text() == ''
    ) {
        alert('กรุณาระบุรายการบัญชีสิ่งของ')
        return false;
    } else {
        isSave = true;
    }

    if (isSave) {
        // เรียกใช้งาน ฟังชั่นก์ ในหน้า arrest-manage.html
        onSetExhibit(form);
        onCancelExhibit();
    }
}

function confirmCancelExhibit() {
    if (confirm('ยืนยันการทำรายการหรือไม่?')) {
        onCancelExhibit();
    }
}

function onCancelExhibit() {
    $('.exhibit-popup input').val('');
    $('.exhibit-popup select').each(function (i, e) {
        var $select = $(e).selectize();
        var control = $select[0].selectize;
        control.clear();
    })
    $('.modal').modal('hide');
}