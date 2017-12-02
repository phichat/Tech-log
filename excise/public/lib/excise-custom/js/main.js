$(document).ready(function () {
    // var date = new Date()

    $('.datepicker').datepicker({
        format: 'dd/mm/yyyy',
        todayBtn: true,
        language: 'th',             //เปลี่ยน label ต่างของ ปฏิทิน ให้เป็น ภาษาไทย   (ต้องใช้ไฟล์ bootstrap-datepicker.th.min.js นี้ด้วย)
        thaiyear: true              //Set เป็นปี พ.ศ.
    });

    // var h = addZero(date.getHours()),
    //     m = addZero(date.getMinutes());
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

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function checkBetweenDate(f, t) {
    if ($(f).val() !== '' && $(t).val() !== '') {
        var df = setNewdate($(f).val());
        var dt = setNewdate($(t).val());
        if (df > dt) {
            alert('"วันที่สิ้นสุด" ต้องไม่น้อยกว่า "วันที่เริ่มต้น"')
            $(f).val($(t).val())
        }
    }
}

function replaceAll(str, find, replace) {
    return str.replace(new RegExp(find, 'g'), replace);
}

function parseDate(datetime) {
    var today = new Date(datetime),
        dd = addZero(today.getDate()),
        mm = addZero(today.getMonth() + 1),
        yyyy = today.getFullYear();
    return dd + '/' + mm + '/' + yyyy;
}

function parseDateBE(date) {
    dateNow = new Date(date),
        dd = addZero(dateNow.getDate()),
        mm = addZero(dateNow.getMonth() + 1),
        yyyy = (dateNow.getFullYear() + 543)
    return dd + '/' + mm + '/' + yyyy;
}

function parseDateAD(date) {
    var dateA = setNewdate(date),
        dd = addZero(dateA.getDate()),
        mm = addZero(dateA.getMonth() + 1),
        yyyy = (dateA.getFullYear() - 543)
    return dd + '/' + mm + '/' + yyyy;
}

function addDate(date, int) {
    if (date !== '' && int !== '') {
        var dateB = setNewdate(date),
            dateA = dateB.setDate(dateB.getDate() + Number(int)),
            dateC = new Date(dateA),
            dd = addZero(dateC.getDate()),
            mm = addZero(dateC.getMonth() + 1);
        return dd + '/' + mm + '/' + dateC.getFullYear() + ' 00:00 น.';
    } else {
        return '';
    }
}

function setNewdate(date) {
    var dd = date.split('/')[0],
        mm = date.split('/')[1],
        yyyy = date.split('/')[2],
        dateA = yyyy + '-' + mm + '-' + dd,
        dateB = new Date(dateA);
    return dateB;
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

// กำหนดเส้นทาง link ใหม่ให้กับเมนู
function changePathUri(menu) {
    path = window.location.pathname.split('/').slice(0, -2);
    for (i = 0; i < menu.length; i++) {
        var a = menu[i].getElementsByClassName('link-href')
        if (a.length > 0) {
            var href = a[0].href.split('/')
            a[0].href = window.location.origin + path.join('/') + '/' + href.slice(-2).join('/')
        }

    }
}

// //แปลงข้อมูลที่แสดงในแถบด้านท้ายตารางให้เป็น ภาษาที่ต้องการ
// function regExpStringDatatable(mapObj, str) {
//     var re = new RegExp(Object.keys(mapObj).join("|"), "gi");
//     return str.replace(re, function (matched) {
//         return mapObj[matched];
//     });
// }