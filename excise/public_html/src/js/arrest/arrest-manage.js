$(document).ready(function () {
    // โหลดข้อมูล ตำบล/อำเภอ/จังหวัด
    var sleRegion = '<option value="" selected></option>'
    getSubdistrictByKeyword('', function callback(xml) {
        $(xml).find('subDistrictDTOList')
            .each(function (i, e) {
                sleRegion += '<option value="';
                sleRegion += $(e).find('subDistrictNameTh').text();
                sleRegion += $(e).find('districtNameTh').text();
                sleRegion += $(e).find('provinceNameTh').text();
                sleRegion += '">'
                sleRegion += $(e).find('subDistrictNameTh').text() + '/';
                sleRegion += $(e).find('districtNameTh').text() + '/';
                sleRegion += $(e).find('provinceNameTh').text() + '</option>';
            })
    })

    // สินค้า
    var sleDutyGroup = '<option value="" selected></option>';
    getDutygroupByKeyword('', function (xml) {
        $(xml).find('dutygroupDTOList')
            .each(function (i, e) {
                sleDutyGroup += '<option value="' + $(e).find('groupCode').text() + '">';
                sleDutyGroup += $(e).find('groupNameTh').text()
                sleDutyGroup += '</option>'
            })

        $('#sle_nmGoodName')
            .html(sleDutyGroup)
            .selectize({
                create: true,
                sortField: 'text'
            });
    });
    // --- end สินค้า ---

    var loadMultiFile = {
        // โหลดไฟล์ .html
        '#noticeByConModal .card .body': '../notice/notice-list-popup.html',
        '#listStaffModal .card .body': '../staff/staff-list-popup.html',
        '#arrestTeamModal .card .body': '../staff/arrest-team-list-popup.html',
        '#indictmentModal .card .body': '../indictment/indictment-list-popup.html',

        // โหลดเฉพาะ tag class และ element ที่อยู่ภายใน
        '#exhibitModal .card .body': '../exhibit/exhibit-popup.html .exhibit-popup',
        '#lawbreakerModal .card .body': '../lawbreaker/lawbreaker-list-popup.html .lawbreaker-list-popup'
    }

    $.each(loadMultiFile, function (tag, url) {
        $(tag).load(url, function () {
            // โหลด Script ให้กับ element ภายใต้ไฟล์ / tags ที่ถูกโหลดมา
            $.getScript('../js/exhibit/exhibit-popup.js');
            $.getScript('../js/lawbreaker/lawbreaker-list-popup.js');

            $.getScript('../../lib/adminbsb-materialdesign/js/admin.js');
            $.getScript('../../lib/selectize.js-master/dist/js/standalone/selectize.min.js');

            // set script ให้กับ element ภายใต้ไฟล์ / tags ที่ถูกโหลดมา
            $('select.region').html(sleRegion);
            $('select').not('.paging_listbox_select').selectize({
                create: true,
                sortField: 'text'
            });

            $('input.datepicker').bootstrapMaterialDatePicker({
                format: 'DD/MM/YYYY',
                weekStart: 0,
                lang: 'th',
                time: false
            });

            $("input.number").inputmask({
                'alias': 'numeric',
                'groupSeparator': ',',
                'autoGroup': true,
                'digits': 2,
                'digitsOptional': false,
                'placeholder': '0'
            });
        });
    })

    // set script ให้กับ element ภายใต้ไฟล์ arest-manage.js
    $('select.region').html(sleRegion);

    //==========================


    // Indictment
    var tr = '';
    for (var i = 1; i < 4; i++) {
        tr += '<tr>'
        tr += '<td><input type="checkbox" id="indictmentByConCheckboxTd' + i + '" name="indictmentByConCheckboxTd' + i + '" class="filled-in";">';
        tr += '<label for="indictmentByConCheckboxTd' + i + '"></label></td>'
        tr += '<td>' + i + '</td>'
        tr += '<td class="caselawid">' + i + '</td>'
        tr += '<td class="penality-caselawid">.....</td>'
        tr += '<td class="built-base-name">.....</td>'
        tr += '</tr>'
    }

    $('#tableIndictmentByCon tbody').html(tr);
    //==========================


    // Exhibit บัญชีสิ่งของ
    tr = '';
    for (var i = 1; i < 4; i++) {
        tr += '<tr>'
        tr += '<td><input type="checkbox" id="exhibitCheckboxTd' + i + '" name="exhibitCheckboxTd' + i + '" class="filled-in";">';
        tr += '<label for="exhibitCheckboxTd' + i + '"></label></td>'
        tr += '<td>' + i + '</td>'
        tr += '<td class="exhibit-product-name">.....</td>'
        tr += '<td class="exhibit-qty">.....</td>'
        tr += '<td class="exhibit-net-weight">.....</td>'
        tr += '<td class="exhibit-carsn">.....</td>'
        tr += '<td class="exhibit-i-o">.....</td>'
        tr += '<td class="exhibit-is-status">.....</td>'
        tr += '</tr>'
    }

    $('#tableExhibitByCon tbody').html(tr);
    //==========================


    // Lawbreaker รายชื่อผู้กระทำความผิด
    tr = '';
    for (var i = 1; i < 4; i++) {
        tr += '<tr>'
        tr += '<td><input type="checkbox" id="lawBreakerCheckboxTd' + i + '" name="lawBreakerCheckboxTd' + i + '" class="filled-in";">';
        tr += '<label for="lawBreakerCheckboxTd' + i + '"></label></td>'
        tr += '<td>' + i + '</td>'
        tr += '<td class="law-name">.....</td>'
        tr += '<td class="law-type">.....</td>'
        tr += '<td class="law-creer">.....</td>'
        tr += '<td class="law-birthday">.....</td>'
        tr += '<td class="law-idcard">.....</td>'
        tr += '<td class="law-passpord">.....</td>'
        tr += '<td class="law-reac">.....</td>'
        tr += '<td class="law-nationllity">.....</td>'
        tr += '<td class="law-address">.....</td>'
        tr += '<td class="law-father-name">.....</td>'
        tr += '<td class="law-mather-name">.....</td>'
        tr += '</tr>'
    }

    $('#tableLawbreakerByCon tbody').html(tr);
    //==========================


    // ArrestTeam ทีมจับกุม
    tr = '';
    for (var i = 1; i < 4; i++) {
        tr += '<tr>'
        tr += '<td><input type="checkbox" id="arrestteamCheckboxTd' + i + '" name="arrestteamCheckboxTd' + i + '" class="filled-in";">';
        tr += '<label for="arrestteamCheckboxTd' + i + '"></label></td>'
        tr += '<td>' + i + '</td>'
        tr += '<td class="arrestTeam-code hidden">code' + i + '</td>'
        tr += '<td class="arrestTeam-name">.....</td>'
        tr += '<td class="arrestTeam-position">.....</td>'
        tr += '<td class="arrestTeam-department">.....</td>'
        tr += '<td><select name="arrestBy' + i + '" id="sle_arrestBy' + i + '"><option value="ผู้ร่วมจับกุม" selected></option></select></td>'
        tr += '</tr>'
    }

    $('#tableArrestTeam tbody').html(tr);
    //==========================
})
//====================================================


// Indictment
function onSelectIndictment(table) {
    $(table).find('tbody tr').each(function (i, e) {
        var matching = false;
        var s_caseLawId = $(e).find('td.caselawid').html();
        var s_penalityCaseLawId = $(e).find('td.penality-caselawid').html();
        var s_buildBaseName = $(e).find('td.built-base-name').html();

        $('#tableIndictmentByCon tbody tr').each(function (j, el) {
            // ตรวจสอบข้อมูลจากตารางปลายทาง และต้นทางว่ามีข้อมูลที่ซ้ำกันหรือไม่
            if (s_caseLawId == $(el).find('td.caselawid').html()) {
                matching = true
                return false;
            }
        })

        // ถ้าข้อมูลไม่ซ้ำให้เพิ่มข้อมูลเข้าไปยัง ตารางปลายทาง
        if (matching === false) {
            var index = $('#tableIndictmentByCon tbody tr:last').index() + 2
            var tr = ''
            tr += '<tr>'
            tr += '<td><input type="checkbox" id="indictmentByConCheckboxTd' + index + '" name="indictmentByConCheckboxTd' + index + '" class="filled-in";">';
            tr += '<label for="indictmentByConCheckboxTd' + index + '"></label></td>'
            tr += '<td>' + index + '</td>'
            tr += '<td class="caselawid">' + s_caseLawId + '</td>'
            tr += '<td class="penality-caselawid">' + s_penalityCaseLawId + '</td>'
            tr += '<td class="built-base-name">' + s_buildBaseName + '</td>'
            tr += '</tr>'
            $('#tableIndictmentByCon tbody').append(tr);
        }

    })
    $(table).find('input[type=checkbox]').prop('checked', false);
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
        tr += '</tr>'
        $('#tableExhibitByCon tbody').append(tr)
    }
}
//==========================

// Lawbreaker รายชื่อผู้กระทำความผิด
function onSetLawbreaker(form) {
    var matching = false;
    var lawName = $(form).find('select#sle_titleName option:selected').text();
    lawName += ' ' + $(form).find('input#txt_firstName').val();
    lawName += ' ' + $(form).find('input#txt_lastName').val();
    var lawType = $(form).find('select#sle_lawbreakerType option:selected').text();
    var lawCreer = $(form).find('input#txt_lawCreer').val();
    var lawBirthDay = $(form).find('input#txt_lawBirthDay').val();
    var lawIdCard = $(form).find('input#txt_idCard').val()
    var lawPassport = $(form).find('input#txt_passport').val();
    var lawReac = $(form).find('select#sle_lawRace option:selected').text();
    var lawNationllity = $(form).find('select#sle_lawNationallity option:selected').text();
    var lawAddress = $(form).find('input#txt_lawAddress').val();
    lawAddress += ' ' + $(form).find('input#txt_lawVillage').val();
    lawAddress += ' ' + $(form).find('input#txt_lawAlley').val();
    lawAddress += ' ' + $(form).find('input#txt_lawRoad').val();
    lawAddress += ' ' + $(form).find('select#sle_lawRegion option:selected').text();
    var lawFatherName = $(form).find('input#txt_lawFatherName').val();
    var lawMatherName = $(form).find('input#txt_lawMatherName').val();

    $('#tableLawbreakerByCon tbody tr').each(function (i, e) {
        // ตรวจสอบว่ามีข้อมูลที่ซ้ำกัน กับตารางปลายทางหรือไม่
        // IdCard, Passport, BirthDay
        if ((lawIdCard == $(e).find('td.law-idcard').html() || lawPassport == $(e).find('td.law-passpord').html()) &&
            lawBirthDay == $(e).find('td.law-birthday').html()) {
            matching = true;
            return false;
        }
    })

    if (matching === false) {
        var no = $('#tableLawbreakerByCon tbody tr:last').index() + 2
        var tr = '';
        tr += '<tr>'
        tr += '<td><input type="checkbox" id="lawBreakerCheckboxTd' + no + '" name="lawBreakerCheckboxTd' + no + '" class="filled-in";">';
        tr += '<label for="lawBreakerCheckboxTd' + no + '"></label></td>'
        tr += '<td>' + no + '</td>'
        tr += '<td class="law-name">' + lawName + '</td>'
        tr += '<td class="law-type">' + lawType + '</td>'
        tr += '<td class="law-creer">' + lawCreer + '</td>'
        tr += '<td class="law-birthday">' + lawBirthDay + '</td>'
        tr += '<td class="law-idcard">' + lawIdCard + '</td>'
        tr += '<td class="law-passpord">' + lawPassport + '</td>'
        tr += '<td class="law-reac">' + lawReac + '</td>'
        tr += '<td class="law-nationllity">' + lawNationllity + '</td>'
        tr += '<td class="law-address">' + lawAddress + '</td>'
        tr += '<td class="law-father-name">' + lawFatherName + '</td>'
        tr += '<td class="law-mather-name">' + lawMatherName + '</td>'
        tr += '</tr>'
        $('#tableLawbreakerByCon tbody').append(tr)
    }
}
//==========================

// ArrestTeam ทีมจับกุม
function onSelectArrestTeam(table) {
    $(table).find('tbody tr').each(function (i, e) {
        var checkbox = $(e).find('td:eq(0) input[type=checkbox]').is(':checked');
        // ตรวจสอบว่ามีรายการใดที่ถูกเลือกหรือไม่
        // ถ้ามีรายการที่ถูกเลือกให้ทำงานต่อไป
        if (checkbox) {
            var matching = false;
            var s_arrestTeamCode = $(e).find('td.arrestTeam-code').html();
            var s_arrestTeamName = $(e).find('td.arrestTeam-name').html();
            var s_arrestTeamPosition = $(e).find('td.arrestTeam-position').html();
            var s_arrestTeamDepartment = $(e).find('td.arrestTeam-department').html();

            $('#tableArrestTeam tbody tr').each(function (j, el) {
                // ตรวจสอบว่ามีข้อมูลที่ซ้ำกันหรือไม่
                if (s_arrestTeamCode == $(el).find('td.arrestTeam-code').html()) {
                    matching = true
                    return false;
                }
            })

            // ถ้าข้อมูลไม่ซ้ำให้เพิ่มข้อมูลเข้าไปยัง ตารางปลายทาง
            if (matching === false) {
                var index = $('#tableArrestTeam tbody tr:last').index() + 2
                var tr = ''
                tr += '<tr>'
                tr += '<td><input type="checkbox" id="arrestteamCheckboxTd' + index + '" name="arrestteamCheckboxTd' + index + '" class="filled-in";">';
                tr += '<label for="arrestteamCheckboxTd' + index + '"></label></td>'
                tr += '<td>' + index + '</td>'
                tr += '<td class="arrestTeam-code hidden">' + s_arrestTeamCode + '</td>'
                tr += '<td class="arrestTeam-name">' + s_arrestTeamName + '</td>'
                tr += '<td class="arrestTeam-position">' + s_arrestTeamPosition + '</td>'
                tr += '<td class="arrestTeam-department">' + s_arrestTeamDepartment + '</td>'
                tr += '<td><select name="arrestBy' + index + '" id="sle_arrestBy' + index + '"><option value="ผู้ร่วมจับกุม" selected>ผู้ร่วมจับกุม</option></select></td>'
                tr += '</tr>'
                $('#tableArrestTeam tbody').append(tr);
                $('select#sle_arrestBy' + index).selectize({
                    create: true,
                    sortField: 'text'
                })
            }
        }
    })
    $(table).find('input[type=checkbox]').prop('checked', false);
}
//==========================

// Button
function onSaveArrest() {
    if (confirm('MsgBox “ยืนยันการทำรายการหรือไม่?”')) {

    }
}

function onCancelArrest() {
    if (confirm('MsgBox “ยืนยันการทำรายการหรือไม่?”')) {
        location.href = 'arrest-list.html'
    }
}
//==========================

// NoticeteByCon Modal // รายการแจ้งความนำจับ
function onSelectNotice(table) {

    var noticeCode = ''
    $(table).find('tbody tr').each(function (i, el) {
        if ($(el).find('input[type=checkbox]').is(':checked')) {
            noticeCode = $(el).find('td.notice-code').html()
            $('#txt_noticeCode').val(unescape($(el).find('td.notice-code').html()))
            $('#txt_noticeName').val($(el).find('td.notice-name').html())
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
        getNoticeNoticeByCon(noticeByCon, function (xml) {
            $(xml).find('noticeInfom')
                .each(function (i, e) {
                    // เขียนที่หน่วยงาน
                    $('#txt_lawsuitLocation').val($(e).find('noticestation').text());
                    // --- end เขียนที่หน่วยงาน ---

                    // ละติจูด-ลองติจูด
                    $('#txt_nmOpsCoordinateX').val($(e).find('coordinatex').text())
                    $('#txt_nmOpsCoordinateY').val($(e).find('coordinatey').text())
                    // --- end ละติจูด-ลองติจูด ---
                });
        });

        getNoticeProductlist(noticeCode, function (xml) {
            var li = ''
            $(xml).find('productListDTO')
                .each(function (i, e) {
                    li += '<li><span class="good-name-tag" data-value="' + $(e).find('groupCode').text() + '">'
                    li += $(e).find('groupName').text()
                    li += '</span><a href="javascript:void(0);"'
                    li += 'onclick="onDelGoodNameTag(this);">X</a></li>'
                })
            $('#ul_nmGoodName').html(li)
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

}
//==========================

// List staff Modal // รายชื่อพนักงาน
function onSelectStaff() {
    $('#tableStaffList tbody tr').each(function (i, el) {
        if ($(el).find('input[type=checkbox]').is(':checked')) {
            $('#txt_Staff').val($(el).find('td.staff-name').html())
            $('#txt_Position').val($(el).find('td.staff-position').html())
            $('#txt_Department').val($(el).find('td.staff-department').html())
            return false;
        }
    })

    $('#tableStaffList').find('input[type=checkbox]').prop('checked', false);
}
//==========================