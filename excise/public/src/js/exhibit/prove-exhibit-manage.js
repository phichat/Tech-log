$(document).ready(function () {
    var modeUrl = getUrlParameter('mode'),
        date = new Date(),
        h = addZero(date.getHours()),
        m = addZero(date.getMinutes());

    var loadMultiFile = {
        // โหลดไฟล์ .html
        '#noticeByConModal .card .body': '../notice/notice-list-popup.html .notice-list-popup',
        '#listStaffModal .card .body': '../staff/staff-list-popup.html .staff-list',
        '#proveNameModal .card .body': '../staff/prove-staff-list-popup.html .prove-staff-list',
        '#exhibitModal .card .body': '../exhibit/exhibit-popup.html .exhibit-popup',
    }

    $.each(loadMultiFile, function (tag, url) {
        $(tag).load(url, function () {
            switch (tag) {
                case '#noticeByConModal .card .body':
                    $.getScript('../js/notice/notice-list-popup.js');
                    break;

                case '#listStaffModal .card .body':
                    $.getScript('../js/staff/staff-list-popup.js');
                    break;

                case '#proveNameModal .card .body':
                    $.getScript('../js/staff/prove-staff-list-popup.js');
                    break;

                case '#exhibitModal .card .body':
                    $.getScript('../js/exhibit/exhibit-popup.js');
                    $('select').not('.paging_listbox_select').selectize({
                        create: false,
                        sortField: 'value'
                    });
                    break;
            }
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
    getSubdistrictByKeyword('', function callback(xml) {
        var sleRegion = '<option value="" selected></option>'
        $(xml).find('subDistrictDTOList')
            .each(function (i, e) {
                sleRegion += '<option value="' + $(e).find('subDistrictCode').text() + '">'
                sleRegion += $(e).find('subDistrictNameTh').text() + '/';
                sleRegion += $(e).find('districtNameTh').text() + '/';
                sleRegion += $(e).find('provinceNameTh').text() + '</option>';
            })
        $('#sle_region').html(sleRegion).selectize({
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

    // สินค้า
    getDutygroupByKeyword('', function (xml) {
        var checkBox = ''
        $(xml).find('dutygroupDTOList')
            .each(function (i, e) {
                checkBox += '<div class="col-lg-12 col-md-12 col-sm-12 col-xs-6">'
                checkBox += '<input type="checkbox" id="chb_groupName' + i + '" name="groupName' + i + '"'
                checkBox += ' class="filled-in" value="' + $(e).find('groupCode').text() + '">'
                checkBox += '<label for="chb_groupName' + i + '">' + $(e).find('groupNameTh').text() + '</label>'
                checkBox += '</div>'
            })

        $('#chb_GoodName').html(checkBox)
            .slimScroll({
                height: '170px'
            });
    });
    // --- end สินค้า ---

    if (modeUrl == undefined || modeUrl == '') {
        $("input.datepicker").datepicker("setDate", "0")
        $("input.time24").val(h + ":" + m).inputmask('hh:mm');
        $('span#spn_exhibitReportNo').html('/ ' + parseDateBE(date).split('/').slice(2)) // แปลงเป็น พ.ศ. แล้วเลือกเอาเฉพาะปี
    }

    // โหลด Script ให้กับ element ภายใต้ไฟล์ / tags ที่ถูกโหลดมา
    $.getScript('../../lib/adminbsb-materialdesign/js/admin.js');
    $.getScript('../../lib/selectize.js-master/dist/js/standalone/selectize.min.js');
})

// List staff Modal // รายชื่อพนักงาน
function onSelectStaff() {
    var item = 0;
    $('#tableStaffList tbody tr').each(function (i, el) {
        if ($(el).find('input[type=checkbox]').is(':checked')) {
            item++
        }
    })

    if (item > 1) {
        alert('สามารถเลือกได้เพียง 1 คนเท่านั้น')
        return false;
    }

    $('#tableStaffList tbody tr').each(function (i, el) {
        if ($(el).find('input[type=checkbox]').is(':checked')) {
            $('#txt_Staff').val($(el).find('td.staff-name').html())
            $('#txt_Position').val($(el).find('td.staff-position').html())
            $('#txt_deptName').val($(el).find('td.staff-department').html())
            return false;
        }
    })

    $('#tableStaffList').find('input[type=checkbox]').prop('checked', false);
    $('.modal').modal('hide')
}
//==========================

// Prove staff modal // รายชื่อเจ้าหน้าที่ดำเนินคดี
function onSelectProveStaff() {
    var item = 0;
    $('#tableProveStaffList tbody tr').each(function (i, el) {
        if ($(el).find('input[type=checkbox]').is(':checked')) {
            item++
        }
    })

    if (item > 1) {
        alert('สามารถเลือกได้เพียง 1 คนเท่านั้น')
        return false;
    }

    $('#tableProveStaffList tbody tr').each(function (i, el) {
        if ($(el).find('input[type=checkbox]').is(':checked')) {
            $('#txt_proveName').val($(el).find('td.prove-staff-name').html())
            $('#txt_provePosition').val($(el).find('td.prove-staff-position').html())
        }
    })

    $('#tableProveStaffList').find('input[type=checkbox]').prop('checked', false)
    $('.modal').modal('hide')
}
//==========================

// NoticeteByCon Modal // รายการแจ้งความนำจับ
function onSelectNotice(table) {
    var item = 0;
    $(table).find('tbody tr').each(function (i, el) {
        if ($(el).find('input[type=checkbox]').is(':checked')) {
            item++
        }
    })

    if (item > 1) {
        alert('สามารถเลือกได้เพียง 1 รายการเท่านั้น')
        return false;
    }

    if (item == 1) {
        var noticeCode = ''
        $(table).find('tbody tr').each(function (i, el) {
            if ($(el).find('input[type=checkbox]').is(':checked')) {
                noticeCode = $(el).find('td.notice-code').html()
                $('#txt_noticeCode').val(noticeCode)
                $('#txt_noticeName').val($(el).find('td.notice-name').text().trim())
                return false;
            }
        })

        $(table).find('tr input[type=checkbox]').prop('checked', false);

        if (noticeCode !== '') {
            var noticeByCon = {
                noticeCode: noticeCode,
                noticeDateTo: '',
                noticeDateForm: '',
            }

            getNoticeProductlistByCon(noticeCode, function (xml) {
                checkBox = $('input[type=checkbox][name*=groupName]');
                $(xml).find('productListDTO')
                    .each(function (i, e) {
                        $(checkBox).each(function () {
                            if ($(this).val() === $(e).find('groupCode').text()) {
                                $(this).prop("checked", true);
                                return false;
                            }
                        })
                    })
            })

            var arr = {
                noticeCode: noticeCode,
                locationID: ''
            }
            getNoticeLocationByCon(arr, function (xml) {
                $(xml).find('locationDTO')
                    .each(function (i, e) {
                        $('#txt_locationName')
                            .val($(e).find('locationName').text())
                            .attr('data-id', $(e).find('locationId').text())
                        $('#txt_address').val($(e).find('address').text())
                        $('#txt_village').val($(e).find('village').text())
                        $('#txt_building').val($(e).find('building').text())
                        $('#txt_room').val($(e).find('room').text())
                        $('#txt_floor').val($(e).find('floor').text())
                        $('#txt_alley').val($(e).find('alley').text())
                        $('#txt_road').val($(e).find('road').text())

                        var infomrRegion = $('#sle_region').selectize(),
                            informRegionZe = infomrRegion[0].selectize
                        informRegionZe.setValue($(e).find('subdistrictCode').text(), true)
                    })
            })
        }

        $('.modal').modal('hide');
        // จาก lib/excise-custom/js/validate.js
        // unhighlight('#lawsuitManage');
    }


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