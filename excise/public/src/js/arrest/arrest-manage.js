$(document).ready(function () {
    var modeUrl = getUrlParameter('mode'),
        date = new Date(),
        h = addZero(date.getHours()),
        m = addZero(date.getMinutes());

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

    // พื้นที่
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
    // --- end พื้นที่ ---

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
                create: false,
                sortField: 'text'
            });
    });
    // --- end สินค้า ---

    var loadMultiFile = {
        // โหลดไฟล์ .html
        'section.header': '../navbar.html #topheader',
        'section.sidebar': '../sidebar.html #leftsidebar',
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
            var ele = $('.menu .list > li');
            $(ele).each(function (i, s) {
                if ($(s).data('page') == 'arrest') {
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

                case '#exhibitModal .card .body':
                    $.getScript('../js/exhibit/exhibit-popup.js');
                    break;

                case '#lawbreakerModal .card .body':
                    $.getScript('../js/lawbreaker/lawbreaker-list-popup.js');
                    getTitleByKeyword('', function (json) {
                        var option = '<option selected disabled></option>'
                        for (i = 0; i < json.detail.length; i++) {
                            option += '<option value="' + json.detail[i].TitleCode + '">'
                            option += json.detail[i].TitleShortName + '</option>'
                        }
                        $('select#sle_titleName').html(option).selectize({
                            create: false,
                            sortField: 'text'
                        });
                    });

                    getNationalityByKeyword('', function (json) {
                        var option = '<option selected disabled></option>'
                        for (i = 0; i < json.detail.length; i++) {
                            option += '<option value="' + json.detail[i].NationalityCode + '">'
                            option += json.detail[i].NationalityNameTh + '</option>'
                        }
                        $('select#sle_lawNationallity').html(option).selectize({
                            create: false,
                            sortField: 'text'
                        });
                    })
                    break;

            }

            $('input.datepicker').datepicker({
                format: 'dd/mm/yyyy',
                todayBtn: true,
                language: 'th',
                thaiyear: true
            }).on('changeDate', dateChanged);

            if (modeUrl == undefined || modeUrl == '') {
                $("input.datepicker").datepicker("setDate", "0")
                $("input.time24").val(h + ":" + m).inputmask('hh:mm');
            }

            // set script ให้กับ element ภายใต้ไฟล์ / tags ที่ถูกโหลดมา
            $('select.region').html(sleRegion);
            $('select').not('.paging_listbox_select').selectize({
                create: false,
                sortField: 'value'
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

    // โหลด Script ให้กับ element ภายใต้ไฟล์ / tags ที่ถูกโหลดมา
    $.getScript('../../lib/adminbsb-materialdesign/js/admin.js');
    // $.getScript('../../lib/selectize.js-master/dist/js/standalone/selectize.min.js');
    // $.getScript('../../lib/excise-custom/js/sort-table.js');

    // set script ให้กับ element ภายใต้ไฟล์ arest-manage.js
    $('select.region').html(sleRegion)
        .selectize({
            create: false,
            sortField: 'value'
        });
    //==========================



    // Indictment
    var tr = '';
    // for (var i = 1; i < 4; i++) {
    //     tr += '<tr>'
    //     tr += '<td><input type="checkbox" id="indictmentByConCheckboxTd' + i + '" name="indictmentByConCheckboxTd' + i + '" class="filled-in";">';
    //     tr += '<label for="indictmentByConCheckboxTd' + i + '"></label></td>'
    //     tr += '<td>' + i + '</td>'
    //     tr += '<td class="caselawid">' + i + '</td>'
    //     tr += '<td class="penality-caselawid">.....</td>'
    //     tr += '<td class="built-base-name">.....</td>'
    //     tr += '</tr>'
    // }

    $('#tableIndictmentByCon tbody').html(tr);
    //==========================


    // Exhibit บัญชีสิ่งของ
    tr = '';
    // for (var i = 1; i < 4; i++) {
    //     tr += '<tr>'
    //     tr += '<td><input type="checkbox" id="exhibitCheckboxTd' + i + '" name="exhibitCheckboxTd' + i + '" class="filled-in";">';
    //     tr += '<label for="exhibitCheckboxTd' + i + '"></label></td>'
    //     tr += '<td>' + i + '</td>'
    //     tr += '<td class="exhibit-product-name">.....</td>'
    //     tr += '<td class="exhibit-qty">.....</td>'
    //     tr += '<td class="exhibit-net-weight">.....</td>'
    //     tr += '<td class="exhibit-carsn">.....</td>'
    //     tr += '<td class="exhibit-i-o">.....</td>'
    //     tr += '<td class="exhibit-is-status">.....</td>'
    //     tr += '</tr>'
    // }

    $('#tableExhibitByCon tbody').html(tr);
    //==========================


    // Lawbreaker รายชื่อผู้กระทำความผิด
    tr = '';
    // for (var i = 1; i < 4; i++) {
    //     tr += '<tr>'
    //     tr += '<td><input type="checkbox" id="lawBreakerCheckboxTd' + i + '" name="lawBreakerCheckboxTd' + i + '" class="filled-in";">';
    //     tr += '<label for="lawBreakerCheckboxTd' + i + '"></label></td>'
    //     tr += '<td>' + i + '</td>'
    //     tr += '<td class="law-name">.....</td>'
    //     tr += '<td class="law-type">.....</td>'
    //     tr += '<td class="law-creer">.....</td>'
    //     tr += '<td class="law-birthday">.....</td>'
    //     tr += '<td class="law-idcard">.....</td>'
    //     tr += '<td class="law-passpord">.....</td>'
    //     tr += '<td class="law-reac">.....</td>'
    //     tr += '<td class="law-nationllity">.....</td>'
    //     tr += '<td class="law-address">.....</td>'
    //     tr += '<td class="law-father-name">.....</td>'
    //     tr += '<td class="law-mather-name">.....</td>'
    //     tr += '</tr>'
    // }

    $('#tableLawbreakerByCon tbody').html(tr);
    //==========================


    // ArrestTeam ทีมจับกุม
    tr = '';
    // for (var i = 1; i < 4; i++) {
    //     tr += '<tr>'
    //     tr += '<td><input type="checkbox" id="arrestteamCheckboxTd' + i + '" name="arrestteamCheckboxTd' + i + '" class="filled-in";">';
    //     tr += '<label for="arrestteamCheckboxTd' + i + '"></label></td>'
    //     tr += '<td>' + i + '</td>'
    //     tr += '<td class="arrestTeam-code hidden">code' + i + '</td>'
    //     tr += '<td class="arrestTeam-name">.....</td>'
    //     tr += '<td class="arrestTeam-position">.....</td>'
    //     tr += '<td class="arrestTeam-department">.....</td>'
    //     tr += '<td><select name="arrestBy' + i + '" id="sle_arrestBy' + i + '"><option value="ผู้ร่วมจับกุม" selected></option></select></td>'
    //     tr += '</tr>'
    // }

    $('#tableArrestTeam tbody').html(tr);
    //==========================
})
//====================================================

function onChangeIsNotice(e) {
    var isNotice = $(e).find('option:selected').val()
    if (isNotice == 2) {
        $('#txt_noticeCode').prop('disabled', true)
        $('#txt_noticeName').prop('disabled', true)
    } else {
        $('#txt_noticeCode').prop('disabled', false)
        $('#txt_noticeName').prop('disabled', false)
    }
}

// --- คำนวนอายุ ---
function onCalculateAge(birthday, age) {
    // จาก /lib/excise-custom/js/main.js/calculateAge
    var newAge = calculateAge(birthday)
    $(age).val(newAge == 0 ? '' : newAge)
}
// --- end คำนวนอายุ ---

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
    var item = 0;
    $(table).find('tbody tr').each(function (i, el) {
        if ($(el).find('input[type=checkbox]').is(':checked')) {
            item++
        }
    })

    if (item > 1) {
        alert('สามารถเลือกได้เพียง 1 คนเท่านั้น')
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
            debugger
            var noticeByCon = {
                noticeCode: noticeCode,
                noticeDateTo: '',
                noticeDateForm: '',
            }

            getNoticeProductlistByCon(noticeCode, function (xml) {
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


}
//==========================

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

    if (item == 1) {
        $('#tableStaffList tbody tr').each(function (i, el) {
            if ($(el).find('input[type=checkbox]').is(':checked')) {
                $('#txt_Staff').val($(el).find('td.staff-name').html())
                $('#txt_Position').val($(el).find('td.staff-position').html())
                $('#txt_Department').val($(el).find('td.staff-department').html())
                return false;
            }
        })
    }

    $('#tableStaffList').find('input[type=checkbox]').prop('checked', false);
}
//==========================