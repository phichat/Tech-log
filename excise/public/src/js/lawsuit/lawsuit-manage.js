$(document).ready(function () {
    var modeUrl = getUrlParameter('mode'),
        date = new Date(),
        h = addZero(date.getHours()),
        m = addZero(date.getMinutes());

    var loadMultiFile = {
        // โหลดไฟล์ .html
        'section.header': '../navbar.html #topheader',
        'section.sidebar': '../sidebar.html #leftsidebar',
        '#listStaffModal .card .body': '../staff/staff-list-popup.html'
    }

    $.each(loadMultiFile, function (tag, url) {
        $(tag).load(url, function () {
            var ele = $('.menu .list > li');
            $(ele).each(function (i, s) {
                if ($(s).data('page') == 'lawsuit') {
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
        });
    })

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
        $('#sle_arrestRegion').html(sleRegion)
    })
    // -- end โหลดข้อมูล ตำบล/อำเภอ/จังหวัด --

    // เขียนที่หน่วยงาน
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
            valueField: 'name',
            labelField: 'code',
            searchField: ['name', 'code'],
            create: false,
            options: option,
            render: {
                option: function (item, escape) {
                    return '<div>' +
                        '<span class="title">' +
                        '<span class="name">' + escape(item.code) + '</span>' +
                        '</span>' +
                        '<span class="description">' + escape(item.name) + '</span>' +
                        '</div>';
                }
            }
        });
    });
    // --- end เขียนที่หน่วยงาน ---

    $('select').selectize({
        create: false,
        sortField: 'value'
    });

    if (modeUrl == undefined || modeUrl == '') {
        $("input.datepicker").datepicker("setDate", "0")
        $("input.time24").val(h + ":" + m).inputmask('hh:mm');
        $('span#spn_caseNo').html('/ ' + parseDateBE(date).split('/').slice(2)) // แปลงเป็น พ.ศ. แล้วเลือกเอาเฉพาะปี
    }

    $.getScript('../../lib/adminbsb-materialdesign/js/admin.js');
    $.getScript('../../lib/selectize.js-master/dist/js/standalone/selectize.min.js');
})

// List staff Modal // รายชื่อพนักงาน
function onSelectStaff() {
    $('#tableStaffList tbody tr').each(function (i, el) {
        if ($(el).find('input[type=checkbox]').is(':checked')) {
            $('#txt_lawsuitStaff').val($(el).find('td.staff-name').html())
            return false;
        }
    })

    $('#tableStaffList').find('input[type=checkbox]').prop('checked', false);
}
//==========================

$('#lawsuitManage').change(function () {
    // จาก lib/excise-custom/js/validate.js
    unhighlight('#lawsuitManage');
})

function onSaveLawsuit(e) {
    // จาก lib/excise-custom/js/validate.js
    if (!validate(e)) {
        return false;
    }

    if (confirm('MsgBox "ยืนยันการทำรายการหรือไม่"')) {

    }
}

function onCancelLawsuit() {
    if (confirm('MsgBox "ยืนยันการทำรายการหรือไม่"')) {
        location.href = 'lawsuit-list.html'
    }
}