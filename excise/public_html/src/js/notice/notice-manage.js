$(document).ready(function () {

    //โหลดข้อมูล ตำบล/อำเภอ/จังหวัด
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

    $('#listStaffModal .card .body').load('../staff/staff-list-popup.html');


    // set script ให้กับ element ภายใต้ไฟล์ arest-manage.js
    $('select.region').html(sleRegion);

})

function onSelectStaff() {
    $('#tableStaffList tbody tr').each(function (i, el) {
        if ($(el).find('input[type=checkbox]').is(':checked')) {
            $('#txt_nmStaff').val(unescape($(el).find('td.staff-name').html()))
            $('#txt_nmPosition').val($(el).find('td.staff-position').html())
            $('#txt_nmDepartment').val($(el).find('td.staff-department').html())

            $('#tableStaffList').find('input[type=checkbox]').prop('checked', false);

            $('#listStaffModal').modal('hide');
            return false;
        }
    })
}


function onSaveNotice() {
    if (confirm('MsgBox “ยืนยันการทำรายการหรือไม่?”')) {

    }
}

function onCancelNotice() {
    if (confirm('MsgBox “ยืนยันการทำรายการหรือไม่?”')) {
        location.href = 'notice-list.html'
    }
}

