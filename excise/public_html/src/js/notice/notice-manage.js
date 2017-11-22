$(document).ready(function () {

    //โหลดข้อมูล ตำบล/อำเภอ/จังหวัด
    var sleRegion = '<option value="" selected></option>'
    getSubdistrictByKeyword('', function callback(xml) {
        $(xml).find('subDistrictDTOList')
            .each(function (i, e) {
                sleRegion += '<option value="' + $(e).find('subDistrictCode').text() + '">'
                sleRegion += $(e).find('subDistrictNameTh').text() + '/';
                sleRegion += $(e).find('districtNameTh').text() + '/';
                sleRegion += $(e).find('provinceNameTh').text() + '</option>';
            })
        $('select.region')
            .html(sleRegion)
            .selectize({
                create: true,
                sortField: 'value'
            });
    });
    // --- end ---

    // // รายชื่อเจ้าหน้าที่
    // getStaffByKeyword($(e).val(), function callback(xml) {
    //     var sleStaff = [];
    //     $(xml).find('staffDTOList')
    //         .each(function (i, e) {
    //             sleStaff.push(
    //                 {
    //                     staffCode: $(e).find('staffCode').text(),
    //                     staffName: $(e).find('firstName').text() + ' ' + $(e).find('lastName').text(),
    //                     orgName: $(e).find('orgName').text()
    //                 }
    //             )
    //         })

    //     $('#sle_nmStaff').selectize({
    //         valueField: 'name',
    //         labelField: 'code',
    //         searchField: ['name', 'code'],
    //         create: false,
    //         options: option,
    //         render: {
    //             option: function (item, escape) {
    //                 return '<div>' +
    //                     '<span class="title">' +
    //                     '<span class="name">' + escape(item.code) + '</span>' +
    //                     '</span>' +
    //                     '<span class="description">' + escape(item.name) + '</span>' +
    //                     '</div>';
    //             }
    //         }
    //     });
    // })

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
    // --- end ---

    // เขียนที่หน่วยงาน
    getOfficeByKeyword('', function (xml) {
        var sleNoticeStation = '<option value="" selected></option>';
        $(xml).find('officeDTOList')
            .each(function (i, e) {
                sleNoticeStation += '<option value="' + $(e).find('officeCode').text() + '">';
                sleNoticeStation += $(e).find('officeShortName').text() + '</option>'
            })
        $('#sle_nmDepartmentName')
            .html(sleNoticeStation)
            .selectize({
                create: true,
                sortField: 'text'
            });
    });
    // --- end ---

    // ผู้แจ้งความ
    $('#sle_nmInfrom').selectize({
        create: true,
        sortField: 'value'
    });
    // --- end ---

    $('#listStaffModal .card .body').load('../staff/staff-list-popup.html');

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

function onChangeTypeInfrom(sle, txt) {
    if ($(sle).val() == 0) {
        $(txt).val('สายลับ(ขอปิดนาม)').prop('disabled', true)

    } else if ($(sle).val() == 1) {
        $(txt).val('').prop('disabled', false)
    }
}

function onChangDueDate(noticeDate, dueDate, ) {
    var date = $(noticeDate).val();
    var due = $(dueDate).val();
    if (date !== '' && due !== '') {
        // d.setDate(due)
        // alert(d.getDate + '/' + (d.getMonth + 1) + '/' + d.getFullYear)
    }

}



// =========================== Save ===========================
function onSaveNotice(e) {
    if (confirm('MsgBox “ยืนยันการทำรายการหรือไม่?”')) {
        saveNotice(e);
    }
}

function saveNotice(e) {

    // insNoticeNoticeAll
    var noticeNoticeAll = {}
    noticeNoticeAll.arrestDesc = ''
    noticeNoticeAll.createBy = 'User login'
    noticeNoticeAll.departmentNameCommander = '?'
    noticeNoticeAll.departmentNameReceive = $(e).find('#txt_nmDepartment').val()
    noticeNoticeAll.informType = $(e).find('#sle_nmInfrom option:selected').val()
    noticeNoticeAll.noticeCode = '?'
    noticeNoticeAll.noticeDate = $(e).find('#txt_nmNoticeDate').val()
    noticeNoticeAll.noticeDueDate = $(e).find('#txt_nmDueDate').val()
    noticeNoticeAll.noticeStation = $(e).find('#sle_nmDepartmentName option:selected').text()
    noticeNoticeAll.noticeTime = $(e).find('txt_nmNoticeTime').val()
    noticeNoticeAll.positionNameReceive = $(e).find('txt_nmPosition').val()
    noticeNoticeAll.remarks = ''
    noticeNoticeAll.secretLevel = ''
    noticeNoticeAll.staffNameAccept = ''
    noticeNoticeAll.staffNameReceive = $(e).find('#txt_nmStaff').val()
    // End insNoticeNoticeAll

    // insNoticeInformAll
    var noticeInformAll = {}
    noticeInformAll.address = $(e).find('#txt_nmInfromAddress').val()
    noticeInformAll.age = $(e).find('#txt_nmInfromAge').val()
    noticeInformAll.alley = $(e).find('#txt_nmInfromAlley').val()
    noticeInformAll.building = $(e).find('#txt_nmInfromBuilding').val()
    noticeInformAll.createdBy = 'User login'
    noticeInformAll.firstName = $(e).find('#txt_nmInfromAlies').val()
    noticeInformAll.floor = $(e).find('#txt_nmInfromClass').val()
    noticeInformAll.genderType = $(e).find('#sle_nmGenderType option:selected').val()
    noticeInformAll.inFormID = ''
    noticeInformAll.lastName = '?'
    noticeInformAll.noticeCode = '?'
    noticeInformAll.postCode = ''
    noticeInformAll.road = $(e).find('#txt_nmInfromRoad').val()
    noticeInformAll.room = $(e).find('#txt_nmInfromRoom').val()
    noticeInformAll.subdistrictCode = $(e).find('#sle_nmInfromRegion option:selected').val()
    noticeInformAll.titleCode = '?'
    noticeInformAll.titleName = '?'
    noticeInformAll.village = $(e).find('#txt_nmInfromVillage').val()
    noticeInformAll.iDCard = '?'
    // End insNoticeInformAll

    // location
    var noticeLocationAll = {}
    noticeLocationAll.address = $(e).find('#txt_nmOpsAddress').val()
    noticeLocationAll.alley = $(e).find('#txt_nmOpsAlley').val()
    noticeLocationAll.building = $(e).find('#txt_nmOpsBuilding').val()
    noticeLocationAll.coodinateX = $(e).find('#txt_nmOpsCoordinateX').val()
    noticeLocationAll.coodinateY = $(e).find('#txt_nmOpsCoordinateY').val()
    noticeLocationAll.createdBy = 'User login'
    noticeLocationAll.floor = $(e).find('#txt_nmOpsFloor').val()
    noticeLocationAll.lawsuitCode = '?'
    noticeLocationAll.locationId = ''
    noticeLocationAll.locationName = $(e).find('#txt_nmLocation').val()
    noticeLocationAll.noticeCode = '?'
    noticeLocationAll.policeStation = '?'
    noticeLocationAll.road = $(e).find('#txt_nmOpsRoad').val()
    noticeLocationAll.room = $(e).find('#txt_nmOpsRoom').val()
    noticeLocationAll.subdistrictCode = $(e).find('#sle_nmOpsRegion option:selected').val()
    noticeLocationAll.village = $(e).find('#txt_nmOpsVillage').val()
    // End location

    // noticeProductlistAll
    var productArray = []
    var noticeProductlistAll = {}
    $(e).find('#ul_nmGoodName li .good-name-tag')
        .each(function (i, el) {
            noticeProductlistAll.groupCode = $(el).data('value')
            noticeProductlistAll.noticeCode = '?'
            noticeProductlistAll.groupName = $(el).text()
            noticeProductlistAll.lawsuitCode = '?'
            noticeProductlistAll.createUser = 'User login'
            productArray.push(noticeProductlistAll)
        })
    // End insNoticeProductlistAll



    var noticeAllCode = '',
        noticeAllDescription = '',

        informAllCode = '',
        informAllDescription = '',

        locationAllCode = '',
        locationAllDescription = '',

        productListAllCode = '',
        productListAllDescription = ''

    insNoticeNoticeAll(noticeNoticeAll, function (xml) {
        $(xml).find('responseHeader')
            .each(function (i, e) {
                noticeAllCode = $(e).find('code').text()
                noticeAllDescription = $(e).find('description').text()
            })
    })

    insNoticeInformAll(noticeInformAll, function (xml) {
        $(xml).find('responseHeader')
            .each(function (i, e) {
                informAllCode = $(e).find('code').text()
                informAllDescription = $(e).find('description').text()
            })
    })

    insNoticeLocationAll(noticeLocationAll, function (xml) {
        $(xml).find('responseHeader')
            .each(function (i, e) {
                locationAllCode = $(e).find('code').text()
                locationAllDescription = $(e).find('description').text()
            })
    })

    insNoticeProductlistAll(productArray, function (xml) {
        $(xml).find('responseHeader')
            .each(function (i, e) {
                productListAllCode = $(e).find('code').text()
                productListAllDescription = $(e).find('description').text()
            })
    })


    if (noticeAllCode == 200 && informAllCode == 200 &&
        locationAllCode == 200 && productListAllCode == 200) {
        alert('บันทึกสำเร็จ');
    } else {
        alert(
            'Notice: ' + noticeAllCode + '\r\n' +
            'Inform: ' + informAllCode + '\r\n' +
            'Location: ' + locationAllCode + '\r\n' +
            'Product list: ' + productListAllCode
        );
    }
}

// =========================== End Save ===========================

function onCancelNotice() {
    if (confirm('MsgBox “ยืนยันการทำรายการหรือไม่?”')) {
        location.href = 'notice-list.html'
    }
}

