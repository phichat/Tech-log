$(document).ready(function () {

    var modeUrl = getUrlParameter('mode'),
        noticeCodeUrl = getUrlParameter('notice-code')

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
    // --- end ตำบล/อำเภอ/จังหวัด ---

    // รายชื่อเจ้าหน้าที่
    var GetStaff = onGetStaff('');
    $('#sle_nmStaff').selectize({
        valueField: 'staffCode',
        labelField: 'staffName',
        searchField: 'staffName',
        create: false,
        sortField: 'text',
        options: GetStaff
    })
    // --- end รายชื่อเจ้าหน้าที่ ---

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
    // --- end เขียนที่หน่วยงาน ---

    // ผู้แจ้งความ
    $('#sle_nmInformType').selectize({
        create: true,
        sortField: 'value'
    });
    // --- end ผู้แจ้งความ ---

    $('#listStaffModal .card .body').load('../staff/staff-list-popup.html');

    // Mode edit
    if (modeUrl !== undefined && modeUrl == 'edit') {
        var noticeStatusCode = '',
            description = ''

        // Notice by con
        var noticeByCon = {};
        noticeByCon.noticeCode = noticeCodeUrl;
        noticeByCon.noticeDateTo = ''
        noticeByCon.noticeDateForm = ''
        getNoticeNoticeByCon(noticeByCon, function (xml) {
            $(xml).find('responseHeader')
                .each(function (i, e) {
                    noticeStatusCode = $(e).find('code').text()
                });

            if (noticeStatusCode == 200) {
                $(xml).find('noticeDTO')
                    .each(function (i, e) {
                        $('#txt_nmNoticeCode').val($(e).find('noticeCode').text());
                        $('#txt_nmNoticeDate').val(parseDate($(e).find('noticeDate').text()));
                        $('#txt_nmDueDate').val($(e).find('noticeDueDate').text());
                        $('#txt_nmNoticeTime').val($(e).find('noticeTime').text());
                        $('#txt_nmPosition').val($(e).find('positionNameReceive').text());
                        
                        $('#txt_nmDepartment').val($(e).find('departmentNameReceive').text());

                        var department = $('#sle_nmDepartmentName').selectize(),
                            departmentZe = department[0].selectize;
                        departmentZe.options
                        // var noticeStaff = $('.notice-manage').find('#sle_nmStaff').selectize();
                        // var noticeStaffZe = noticeStaff[0].selectize
                        // noticeStaffZe.setValue($(e).find('staffNameReceive').text(), true)

                        var noticeStation = $('#sle_nmDepartmentName').selectize(),
                            noticeStationZe = noticeStation[0].selectize;
                        noticeStationZe.setValue($(e).find('noticeStation').text(), true)

                        var informType = $('#sle_nmInformType').selectize(),
                            informTypeZe = informType[0].selectize
                        informTypeZe.setValue($(e).find('informType').text(), true)
                    });

                // $(xml).find('informSelDTO')
                //     .each(function (i, e) {

                //         var informType = $('.notice-manage').find('#sle_nmInformType').selectize();
                //         var informTypeZe = informType[0].selectize;
                //         informTypeZe.setValue($(e).find('informType').text(), true)

                //     });
            } else {
                return false;
            }
        })
        // --- end Notice ---
    }
    // --- end Mode edit ---

})

function onSelectStaff() {
    $('#tableStaffList tbody tr').each(function (i, el) {
        if ($(el).find('input[type=checkbox]').is(':checked')) {

            var nmStaff = $('.notice-manage').find('#sle_nmStaff').selectize();
            var nmStaffZe = nmStaff[0].selectize
            nmStaffZe.setValue($(el).find('td.staff-code').html(), true)

            // $('#txt_nmStaff').val(unescape($(el).find('td.staff-name').html()))
            $('#txt_nmPosition').val($(el).find('td.staff-position').html())
            $('#txt_nmDepartment').val($(el).find('td.staff-department').html())

            $('#tableStaffList').find('input[type=checkbox]').prop('checked', false);

            $('#listStaffModal').modal('hide');
            return false;
        }
    })
}

function onChangeStaff(e) {
    var value = $(e).find('option:selected').val()
    var nmStaff = $(e).selectize();
    var nmStaffZe = nmStaff[0].selectize
    var item = nmStaffZe.options[value];
    $('#txt_nmPosition').val(item.positionName);
    $('#txt_nmDepartment').val(item.orgName);
}

function onGetStaff(keyword) {
    var sleStaff = [];
    getStaffByKeyword(keyword, function (xml) {
        $(xml).find('staffDTOList')
            .each(function (i, e) {
                sleStaff.push(
                    {
                        staffCode: $(e).find('staffCode').text(),
                        staffName: $(e).find('firstName').text() + ' ' + $(e).find('lastName').text(),
                        positionName: $(e).find('positionName').text(),
                        orgName: $(e).find('orgName').text()
                    }
                )
            });
    });
    return sleStaff;
}

function onChangeTypeInfrom(sle, txt) {
    if ($(sle).val() == 0) {
        $(txt).val('สายลับ(ขอปิดนาม)').prop('disabled', true)

    } else if ($(sle).val() == 1) {
        $(txt).val('').prop('disabled', false)
    }
}

function onChangDueDate(noticeDate, dueDate, endDate) {
    var date = $(noticeDate).val();
    var due = $(dueDate).val();
    if (date !== '' && due !== '') {
        var dd = date.split('/')[0],
            mm = date.split('/')[1],
            yyyy = Number(date.split('/')[2]) + 543,
            dateA = yyyy + '-' + mm + '-' + dd,
            dateB = new Date(dateA)
            
        dateA = dateB.setDate(dateB.getDate() + Number(due))
        var dateC = new Date(dateA)

        dd = dateC.getDate() < 10 ? '0' + dateC.getDate() : dateC.getDate();
        mm = (dateC.getMonth() + 1) < 10 ? '0' + (dateC.getMonth() + 1) : (dateC.getMonth() + 1);

        $(endDate).val(dd + '/' + mm + '/' + dateC.getFullYear())

    } else {
        $(endDate).val('')
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
    noticeNoticeAll.informType = $(e).find('#sle_nmInformType option:selected').val()
    noticeNoticeAll.noticeCode = $(e).find('#txt_nmNoticeCode').val()
    noticeNoticeAll.noticeDate = $(e).find('#txt_nmNoticeDate').val()
    noticeNoticeAll.noticeDueDate = $(e).find('#txt_nmDueDate').val()
    noticeNoticeAll.noticeStation = $(e).find('#sle_nmDepartmentName option:selected').text()
    noticeNoticeAll.noticeTime = $(e).find('#txt_nmNoticeTime').val()
    noticeNoticeAll.positionNameReceive = $(e).find('#txt_nmPosition').val()
    noticeNoticeAll.remarks = ''
    noticeNoticeAll.secretLevel = ''
    noticeNoticeAll.staffNameAccept = ''
    noticeNoticeAll.staffNameReceive = $(e).find('#sle_nmStaff option:selected').text()
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
    noticeInformAll.genderType = 'F'
    noticeInformAll.inFormID = '1'
    noticeInformAll.lastName = '?'
    noticeInformAll.noticeCode = $(e).find('#txt_nmNoticeCode').val()
    noticeInformAll.postCode = ''
    noticeInformAll.road = $(e).find('#txt_nmInfromRoad').val()
    noticeInformAll.room = $(e).find('#txt_nmInfromRoom').val()
    noticeInformAll.subdistrictCode = $(e).find('#sle_nmInfromRegion option:selected').val()
    noticeInformAll.titleCode = '?'
    noticeInformAll.titleName = '?'
    noticeInformAll.village = $(e).find('#txt_nmInfromVillage').val()
    noticeInformAll.iDCard = ''
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
    noticeLocationAll.lawsuitCode = ''
    noticeLocationAll.locationId = ''
    noticeLocationAll.locationName = $(e).find('#txt_nmLocation').val()
    noticeLocationAll.noticeCode = $(e).find('#txt_nmNoticeCode').val()
    noticeLocationAll.policeStation = ''
    noticeLocationAll.road = $(e).find('#txt_nmOpsRoad').val()
    noticeLocationAll.room = $(e).find('#txt_nmOpsRoom').val()
    noticeLocationAll.subdistrictCode = $(e).find('#sle_nmOpsRegion option:selected').val()
    noticeLocationAll.village = $(e).find('#txt_nmOpsVillage').val()
    // End location

    // noticeProductlistAll
    var productArray = []
    $(e).find('#ul_nmGoodName li .good-name-tag')
        .each(function (i, el) {
            productArray.push
                ({
                    groupCode: $(el).data('value'),
                    noticeCode: $(e).find('#txt_nmNoticeCode').val(),
                    groupName: $(el).text(),
                    lawsuitCode: 1,
                    createUser: 'User login'
                })
        })
    // End insNoticeProductlistAll

    debugger

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

