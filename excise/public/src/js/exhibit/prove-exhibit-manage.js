$(document).ready(function () {
    var modeUrl = getUrlParameter('mode'),
        date = new Date(),
        h = addZero(date.getHours()),
        m = addZero(date.getMinutes());

    var loadMultiFile = {
        // โหลดไฟล์ .html
        'section.header': '../navbar.html #topheader',
        'section.sidebar': '../sidebar.html #leftsidebar',
        '#listStaffModal .card .body': '../staff/staff-list-popup.html',

        '#exhibitModal .card .body': '../exhibit/exhibit-popup.html .exhibit-popup',
    }

    $.each(loadMultiFile, function (tag, url) {
        $(tag).load(url, function () {
            var ele = $('.menu .list > li');
            $(ele).each(function (i, s) {
                if ($(s).data('page') == 'prove-exhibit') {
                    $(this).addClass('active')
                }
            })
            // จาก lib/exicse-custom/js/main.js
            // กำหนดเส้นทาง link ใหม่ให้กับเมนู
            switch (tag) {
                case 'section.header':
                    $('img.logo').attr('src', leaveSrcPathUri($('img.logo').attr('src'), '../../'))
                    $('a.index').attr('href', leaveSrcPathUri($('a.index').attr('href'), '../../'))
                    break;
                case 'section.sidebar':
                    srcPathUri($('.ml-menu'));
                    $('img.userImg').attr('src', leaveSrcPathUri($('img.userImg').attr('src'), '../../'))
                    break;
            }

            $('select').not('.paging_listbox_select').selectize({
                create: false,
                sortField: 'value'
            });
        });
    })

    // เขียนที่
    getDepartmentByKeyword('', function (xml) {
        var department = []
        $(xml).find('departmentDTOList')
            .each(function (i, e) {
                department.push({
                    deptCode: $(e).find('departmentCode').text(),
                    deptName: $(e).find('departmentNameTh').text()
                })
            })

        $('#sle_lawsuitLocation').selectize({
            valueField: 'deptCode',
            labelField: 'deptName',
            searchField: 'deptName',
            create: false,
            sortField: 'deptName',
            options: department
        })
    })
    // --- end เขียนที่ ---

    // โหลดข้อมูล ตำบล/อำเภอ/จังหวัด
    var sleRegion = '<option value="" selected></option>'
    getSubdistrictByKeyword('', function callback(xml) {
        $(xml).find('subDistrictDTOList')
            .each(function (i, e) {
                sleRegion += '<option value="' + $(e).find('subDistrictCode').text() + '">'
                sleRegion += $(e).find('subDistrictNameTh').text() + '/';
                sleRegion += $(e).find('districtNameTh').text() + '/';
                sleRegion += $(e).find('provinceNameTh').text() + '</option>';
            })
        $('#sle_arrestRegion').html(sleRegion).selectize({
            create: false,
            sortField: 'value'
        })
    })
    // -- end โหลดข้อมูล ตำบล/อำเภอ/จังหวัด --

    // เขียนที่
    getOfficeByKeyword('', function (xml) {
        var option = [];
        $(xml).find('officeDTOList')
            .each(function (i, e) {
                option.push({
                    "code": $(e).find('officeCode').text(),
                    "name": $(e).find('officeShortName').text()
                })
            })
        $('#sle_lawsuitArea').selectize({
            valueField: 'code',
            labelField: 'name',
            searchField: 'name',
            create: false,
            options: option
        });
    });
    // --- end เขียนที่หน่วยงาน ---



    if (modeUrl == undefined || modeUrl == '') {
        $("input.datepicker").datepicker("setDate", "0")
        $("input.time24").val(h + ":" + m).inputmask('hh:mm');
        $('span#spn_exhibitReportNo').html('/ ' + parseDateBE(date).split('/').slice(2)) // แปลงเป็น พ.ศ. แล้วเลือกเอาเฉพาะปี
    }

    // โหลด Script ให้กับ element ภายใต้ไฟล์ / tags ที่ถูกโหลดมา
    $.getScript('../js/exhibit/exhibit-popup.js');

    $.getScript('../../lib/adminbsb-materialdesign/js/admin.js');
    $.getScript('../../lib/selectize.js-master/dist/js/standalone/selectize.min.js');
})

// List staff Modal // รายชื่อพนักงาน
function onSelectStaff() {
    $('#tableStaffList tbody tr').each(function (i, el) {
        if ($(el).find('input[type=checkbox]').is(':checked')) {
            $('#txt_proveName').val($(el).find('td.staff-name').html())
            $('#txt_provePosition').val($(el).find('td.staff-position').html())
            return false;
        }
    })

    $('#tableStaffList').find('input[type=checkbox]').prop('checked', false);
}
//==========================

// Exhibit บัญชีสิ่งของ
function onSetExhibit(form) {
    var matching = false;
    var productName = $(form).find('input#txt_productName').val();
    var qty = $(form).find('input#txt_qty').val();
    var netWeight = $(form).find('input#txt_netWeight').val();
    var carNo = $(form).find('input#txt_carNo').val();
    var isDomestic = $(form).find('select#sle_isDomestic option:selected').text()
    var isStatusExhibit = $(form).find('select#sle_isStatusExhibit option:selected').text();

    $('#tableExhibitByCon tbody tr').each(function (i, e) {
        // ตรวจสอบว่ามีข้อมูลที่ซ้ำกัน กับตารางปลายทางหรือไม่
        if (productName == $(e).find('td.exhibit-product-name').html()) {
            matching = true;
            return false;
        }
    })

    if (matching === false) {
        var index = $('#tableExhibitByCon tbody tr:last').index() + 2
        var tr = '';
        tr += '<tr>'
        tr += '<td><input type="checkbox" id="exhibitCheckboxTd' + index + '" name="exhibitCheckboxTd' + index + '" class="filled-in";">';
        tr += '<label for="exhibitCheckboxTd' + index + '"></label></td>'
        tr += '<td>' + index + '</td>'
        tr += '<td class="exhibit-product-name">' + productName + '</td>'
        tr += '<td class="exhibit-qty">' + qty + '</td>'
        tr += '<td class="exhibit-net-weight">' + netWeight + '</td>'
        tr += '<td class="exhibit-carsn">' + carNo + '</td>'
        tr += '<td class="exhibit-i-o">' + isDomestic + '</td>'
        tr += '<td class="exhibit-is-status">' + isStatusExhibit + '</td>'
        tr += '<td></td>'
        tr += '<td></td>'
        tr += '<td></td>'
        tr += '<td></td>'
        tr += '</tr>'
        $('#tableExhibitByCon tbody').append(tr)
    }
}
//==========================

$('#proveExhibitManage').on('change', '.required', function () {
    // จาก lib/excise-custom/js/validate.js
    if ($(this).parents('.form-group').find('label.error').length) {
        unhighlight('#proveExhibitManage');
    }
})

function onSaveLawsuit(e) {
    // จาก lib/excise-custom/js/validate.js
    if (!validate(e)) {
        return false;
    }

    if (confirm('MsgBox "ยืนยันการทำรายการหรือไม่"')) {

    }
}

function onCancelProve() {
    if (confirm('MsgBox "ยืนยันการทำรายการหรือไม่"')) {
        location.href = 'prove-exhibit-list.html'
    }
}