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

// ลบข้อมูล Tag สินค้า
function onDelGoodNameTag(e) {
    $(e).closest('li').remove();
}

// ลบข้อมูลในตาราง
function onRemoveItemInTable(table) {
    if (confirm('ยืนยันการทำรายการหรือไม่?')) {
        var checked = false;
        $(table).find('tbody tr').each(function (i, e) {
            var checkbox = $(e).find('td:eq(0) input[type=checkbox]');
            if ($(checkbox).is(':checked')) {
                $(e).remove();
                checked = true;
            }
        })

        if (checked === false) {
            alert('กรุณาเลือกรายการที่ต้องการลบ');
        } else {
            $(table).find('tbody tr').each(function (i, e) {
                $(e).find('td:eq(1)').html(++i);
            })
        }

        $(table).find('input[type=checkbox]').prop('checked', false)
    }
}

// เพิ่มสินค้าเข้าไปใน Tag
function onChangGoodName(e) {
    // var x = event.which || event.keyCode;
    // if (x === 13) {
    var goodName = $(e).text()
    var goodCode = $(e).val()
    if (goodName !== '') {
        var checkItem = false;
        $('.list-tags li .good-name-tag').each(function (i, el) {
            if (goodName == $(el).text()) {
                checkItem = true;
                return false;
            }
        })

        if (checkItem === false) {
            var li = '<li><span class="good-name-tag" data-value="' + goodCode + '">' + goodName
            li += '</span><a href="javascript:void(0);"'
            li += 'onclick="onDelGoodNameTag(this);">X</a></li>'

            $('.list-tags').append(li)
        } else {
            alert('รายการสินค้า ' + goodName + ' ถูกเลือกแล้ว!')
        }

        var $select = $(e).selectize();
        var control = $select[0].selectize;
        control.clear();
    }
    // }
}

// function checkMaxlength(e) {
//     if ($(e).val().length == 2) return false;
//     $(e).val($(e).val().match(/[0-9]*/));
// }

function checkBetweenDate(f, t) {
    if ($(f).val() !== '' && $(t).val() !== '') {
        var df = replaceAll($(f).val(), '/', '');
        var dt = replaceAll($(t).val(), '/', '');
        if (Number(df) > Number(dt)) {
            alert('"วันที่สิ้นสุด" ต้องไม่น้อยกว่า "วันที่เริ่มต้น"')
            $(f).val($(t).val())
        }
    }
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

$(document).ready(function () {

    $('input.datepicker').bootstrapMaterialDatePicker({
        weekStart: 0,
        format: 'DD/MM/YYYY',
        lang: 'th',
        time: false
    })

    $('input.datepicker').val(buddhistDate(new Date()))




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

function parseDate(datetime) {
    var today = new Date(datetime);
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();

    dd = dd < 10 ? '0' + dd : dd;
    mm = mm < 10 ? '0' + mm : mm;

    var today = dd + '/' + mm + '/' + yyyy;
    return today;
}

function buddhistDate(date) {
    dateNow = new Date(date),
        dd = dateNow.getDate(),
        mm = (dateNow.getMonth() + 1),
        yyyy = (dateNow.getFullYear() + 543)

    dd = dd < 10 ? '0' + dd : dd;
    mm = mm < 10 ? '0' + mm : mm;
    return dd + '/' + mm + '/' + yyyy;
}

var getUrlParameter = function (sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        };
    };
};

// //แปลงข้อมูลที่แสดงในแถบด้านท้ายตารางให้เป็น ภาษาที่ต้องการ
// function regExpStringDatatable(mapObj, str) {
//     var re = new RegExp(Object.keys(mapObj).join("|"), "gi");
//     return str.replace(re, function (matched) {
//         return mapObj[matched];
//     });
// }