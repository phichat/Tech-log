function onToggleCardBody(e) {
    $(e).find('i.material-icons').text(function (i, text) {
        return text == "arrow_drop_down" ? "arrow_drop_up" : "arrow_drop_down";
    })
    var divCard = $(e).closest('div.card')
    divCard.find('div.body').slideToggle()
}

// checkbox, col(index)
function checkedBox(e, table, col) {
    //Check All checkbox in table
    $(table).find('tbody tr').each(function (i, ele) {
        $(ele)
            .find('td:eq(' + col + ') input[type=checkbox]')
            .prop('checked', $(e).prop('checked'));
    });

}

$(document).ready(function () {
    $('input.datepicker').bootstrapMaterialDatePicker({
        format: 'DD/MM/YYYY',
        weekStart: 0,
        time: false
    });

    var option = '<option disabled selected></option>';
    for (var i = 1; i < 50; i++) {
        option += '<option value="value' + i + '">Item ' + i + '</option>'
    }
    $('select').html(option);

    $("input.time24").inputmask('hh:mm');

    $("input.number").inputmask({
        'alias': 'numeric',
        'groupSeparator': ',',
        'autoGroup': true,
        'digits': 2,
        'digitsOptional': false,
        'placeholder': '0'
    });

 })

// //แปลงข้อมูลที่แสดงในแถบด้านท้ายตารางให้เป็น ภาษาที่ต้องการ
// function regExpStringDatatable(mapObj, str) {
//     var re = new RegExp(Object.keys(mapObj).join("|"), "gi");
//     return str.replace(re, function (matched) {
//         return mapObj[matched];
//     });
// }