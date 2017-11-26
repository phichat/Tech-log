$(document).ready(function () {

    var modeUrl = getUrlParameter('mode'),
        noticeCodeUrl = getUrlParameter('notice-code')
    debugger
    $('input.datepicker').bootstrapMaterialDatePicker({
        weekStart: 0,
        format: 'DD/MM/YYYY',
        lang: 'th',
        time: false
    })

    // $('#txt_nmNoticeDate').val(buddhistDate(new Date()))

    //โหลดข้อมูล ตำบล/อำเภอ/จังหวัด
    var sleRegion = '<option value="" selected></option>'
    getSubdistrictByKeyword('', function callback(xml) {
        var subdistrict = []
        $(xml).find('subDistrictDTOList')
            .each(function (i, e) {
                subdistrict.push({
                    subDistrictCode: $(e).find('subDistrictCode').text(),
                    region: $(e).find('subDistrictNameTh').text() + '/' +
                        $(e).find('districtNameTh').text() + '/' +
                        $(e).find('provinceNameTh').text()
                })
            })
        $('select.region')
            .selectize({
                valueField: 'subDistrictCode',
                labelField: 'region',
                searchField: 'region',
                create: false,
                sortField: 'subDistrictCode',
                options: subdistrict
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

    // Mode edit
    if (modeUrl !== undefined && modeUrl == 'edit') {
        loadFormEdit(noticeCodeUrl);
    }
    // --- end Mode edit ---

    // โหลด form staff list popup
    $('#listStaffModal .card .body').load('../staff/staff-list-popup.html');
    // --- end form staff list popup ---
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
        $(endDate).val(addDate(date, due))
    } else {
        $(endDate).val('')
    }

}

// ====================== Load Data Edit ======================
function loadFormEdit(noticeCodeUrl) {
    var noticeStatusCode = '',
        locationStatusCode = '',
        productListcode = ''

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
            $(xml).find('noticeInfom')
                .each(function (i, e) {
                    $('#txt_nmNoticeCode').val($(e).find('noticecode').text());
                    $('#txt_nmNoticeDate').val($(e).find('noticedate').text());
                    $('#txt_nmDueDate').val($(e).find('noticeduedate').text());
                    $('#txt_nmNoticeTime').val($(e).find('noticetime').text());
                    $('#txt_nmEndDate').val(addDate($(e).find('noticedate').text(), $(e).find('noticeduedate').text()))
                    $('#txt_nmPosition').val($(e).find('staffnamereceive').text());
                    $('#txt_nmDepartment').val($(e).find('departmentnamereceive').text());

                    // ผู้รับแจ้งความนำจับ
                    var noticeStaff = $('#sle_nmStaff').selectize(),
                        noticeStaffZe = noticeStaff[0].selectize,
                        staffNameText = $(e).find('staffnamereceive').text();
                    for (s in noticeStaffZe.options) {
                        if (staffNameText == noticeStaffZe.options[s].staffName) {
                            noticeStaffZe.setValue(s, true) // set value ให้กับ dropdown
                            break;
                        };
                    }
                    // --- end ผู้รับแจ้งความนำจับ ---

                    // เขียนที่หน่วยงาน
                    var noticeStation = $('#sle_nmDepartmentName').selectize(),
                        noticeStationZe = noticeStation[0].selectize,
                        stationText = $(e).find('noticestation').text();
                    for (s in noticeStationZe.options) {
                        if (stationText == noticeStationZe.options[s].text) {
                            noticeStationZe.setValue(s, true) // set value ให้กับ dropdown
                            break;
                        };
                    }
                    // --- end เขียนที่หน่วยงาน ---

                    // ผู้แจ้งความ 
                    var informType = $('#sle_nmInformType').selectize(),
                        informTypeZe = informType[0].selectize
                    informTypeZe.setValue($(e).find('informtype').text(), true)
                    onChangeTypeInfrom('#sle_nmInformType', '#txt_nmInfromAlies');
                    // --- end ผู้แจ้งความ ---

                    $('#txt_nmInfromAlies')
                        .val($(e).find('titlename').text() + ' ' + $(e).find('firstname').text() + ' ' + $(e).find('lastname').text())
                        .attr('data-id', $(e).find('inFormID').text())
                    $('#txt_nmInfromAge').val($(e).find('age').text())
                    $('#txt_nmInfromAddress').val($(e).find('address').text())
                    $('#txt_nmInfromVillage').val($(e).find('village').text())
                    $('#txt_nmInfromBuilding').val($(e).find('building').text())
                    $('#txt_nmInfromRoom').val($(e).find('room').text())
                    $('#txt_nmInfromFloor').val($(e).find('floor').text())
                    $('#txt_nmInfromAlley').val($(e).find('alley').text())
                    $('#txt_nmInfromRoad').val($(e).find('road').text())

                    var infomrRegion = $('#sle_nmInfromRegion').selectize(),
                        informRegionZe = infomrRegion[0].selectize
                    informRegionZe.setValue($(e).find('subdistrictcode').text(), true)

                    // ละติจูด-ลองติจูด
                    $('#txt_nmOpsCoordinateX').val($(e).find('coordinatex').text())
                    $('#txt_nmOpsCoordinateY').val($(e).find('coordinatey').text())
                    // --- end ละติจูด-ลองติจูด ---
                });
        } else {
            return false;
        }
    });
    // --- end Notice ---

    // locationByCon
    var locationByCon = {}
    locationByCon.noticeCode = noticeCodeUrl;
    locationByCon.locationID = '';
    getNoticeLocationByCon(locationByCon, function (xml) {
        $(xml).find('responseHeader')
            .each(function (i, e) {
                locationStatusCode = $(e).find('code').text()
            })

        if (locationStatusCode == 200) {
            $(xml).find('locationDTO')
                .each(function (i, e) {
                    $('#txt_nmLocation')
                        .val($(e).find('locationName').text())
                        .attr('data-id', $(e).find('locationId').text())
                    $('#txt_nmOpsAddress').val($(e).find('address').text())
                    $('#txt_nmOpsVillage').val($(e).find('village').text())
                    $('#txt_nmOpsBuilding').val($(e).find('building').text())
                    $('#txt_nmOpsRoom').val($(e).find('room').text())
                    $('#txt_nmOpsFloor').val($(e).find('floor').text())
                    $('#txt_nmOpsAlley').val($(e).find('alley').text())
                    $('#txt_nmOpsRoad').val($(e).find('road').text())

                    var infomrRegion = $('#sle_nmOpsRegion').selectize(),
                        informRegionZe = infomrRegion[0].selectize
                    informRegionZe.setValue($(e).find('subdistrictCode').text(), true)
                })

        } else {
            return false;
        }
    })
    // --- end locationByCon ---

    // getNoticeProductlist
    getNoticeProductlist(noticeCodeUrl, function (xml) {
        $(xml).find('responseHeader')
            .each(function (i, e) {
                productListcode = $(e).find('code').text()
            })

        if (productListcode == 200) {
            var productList = '',
                li = '',
                liCheck = ''
            $(xml).find('productListDTO')
                .each(function (i, e) {
                    li += '<li><span class="good-name-tag" data-value="' + $(e).find('groupCode').text() + '">'
                    li += $(e).find('groupName').text()
                    li += '</span><a href="javascript:void(0);"'
                    li += 'onclick="onDelGoodNameTag(this);">X</a></li>'

                    liCheck += '<li><span class="good-name-tag" data-id="' + $(e).find('productListID').text() + '"'
                    liCheck += ' data-value="' + $(e).find('groupCode').text() + '"></span></li>'
                })
            $('#ul_nmGoodName').html(li)
            $('#ul_nmGoodNameCheck').html(liCheck)
        } else {
            return false;
        }
    })
    // --- end getNoticeProductlist ---
}
// ====================== End Load Data Edit ======================

// =========================== Save ===========================
function onSaveNotice(e) {
    if ($(e).find('#sle_nmDepartmentName').val() == '' ||
        $(e).find('#txt_nmNoticeDate').val() == '' ||
        $(e).find('#txt_nmNoticeTime').val() == '' ||
        $(e).find('#sle_nmStaff option:selected').val() == '' ||
        $(e).find('#txt_nmPosition').val() == '' |
        $(e).find('#txt_nmDepartment').val() == '' ||
        $(e).find('#sle_nmInformType option:selected').val() == '' ||
        $(e).find('#infromAlies').val() == '' ||
        $(e).find('#ul_nmGoodName li').length == 0) {
        alert("กรุณาระบุข้อมูลให้ครบถ้วน");
        return false;
    }

    if (confirm('MsgBox “ยืนยันการทำรายการหรือไม่?”')) {
        var modeUrl = getUrlParameter('mode')

        // NoticeNoticeAll
        var noticeNoticeAll = {}
        noticeNoticeAll.arrestDesc = ''
        noticeNoticeAll.createBy = 'User login'
        noticeNoticeAll.departmentCodeReceive = ''
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
        // --- End NoticeNoticeAll ---

        // NoticeInformAll
        var noticeInformAll = {}
        noticeInformAll.address = $(e).find('#txt_nmInfromAddress').val()
        noticeInformAll.age = $(e).find('#txt_nmInfromAge').val()
        noticeInformAll.alley = $(e).find('#txt_nmInfromAlley').val()
        noticeInformAll.building = $(e).find('#txt_nmInfromBuilding').val()
        noticeInformAll.createdBy = 'User login'
        noticeInformAll.firstName = $(e).find('#txt_nmInfromAlies').val()
        noticeInformAll.floor = $(e).find('#txt_nmInfromFloor').val()
        noticeInformAll.genderType = 'F'
        noticeInformAll.inFormID = $(e).find('#txt_nmInfromAlies').data('id')
        noticeInformAll.lastName = ' '
        noticeInformAll.noticeCode = $(e).find('#txt_nmNoticeCode').val()
        noticeInformAll.postCode = ''
        noticeInformAll.road = $(e).find('#txt_nmInfromRoad').val()
        noticeInformAll.room = $(e).find('#txt_nmInfromRoom').val()
        noticeInformAll.subdistrictCode = $(e).find('#sle_nmInfromRegion option:selected').val()
        noticeInformAll.titleCode = ' '
        noticeInformAll.titleName = ' '
        noticeInformAll.village = $(e).find('#txt_nmInfromVillage').val()
        noticeInformAll.iDCard = ''
        // --- End NoticeInformAll ---

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
        noticeLocationAll.locationId = $(e).find('#txt_nmLocation').data('id')
        noticeLocationAll.locationName = $(e).find('#txt_nmLocation').val()
        noticeLocationAll.noticeCode = $(e).find('#txt_nmNoticeCode').val()
        noticeLocationAll.policeStation = ''
        noticeLocationAll.road = $(e).find('#txt_nmOpsRoad').val()
        noticeLocationAll.room = $(e).find('#txt_nmOpsRoom').val()
        noticeLocationAll.subdistrictCode = $(e).find('#sle_nmOpsRegion option:selected').val()
        noticeLocationAll.village = $(e).find('#txt_nmOpsVillage').val()
        // --- End location ---

        // noticeProductlistAll
        var productArray = [];
        if (modeUrl !== undefined && modeUrl == 'edit') {
            // การตรวจสอบข้อมูลสินค้าเก่า-ใหม่
            // - ตรวจสอบสินค้าใหม่ - เก่า (ถ้า ของใหม่ ไม่มีอยู่ในรายการ ของเก่า ข้อมูลจะถูกเพิ่ม)
            // - ตรวจสอบสินค้าเก่า - ใหม่ (ถ้า ของเก่า ไม่มีอยู่ในรายการ ของใหม่ ข้อมูลจะถูกลบ)
            var checkItem = false,
                delProduct = [],
                insProduct = []
            // ตรวจสอบข้อมูลสินค้าที่ถูกเพิ่มเข้าใหม่ 
            $(e).find('#ul_nmGoodName li .good-name-tag').each(function (i, el) {
                checkItem = false;
                // ตรวสอบข้อมูล ในรายการสินค้า 
                $(e).find('#ul_nmGoodNameCheck li .good-name-tag').each(function (j, ele) {
                    if ($(el).data('value') == $(ele).data('value')) {
                        checkItem = true;
                        return false;
                    }
                })

                // ถ้าข้อมูลสินค้าไม่ตรงกัน จะ insert
                if (checkItem == false) {
                    insProduct.push
                        ({
                            groupCode: $(el).data('value'),
                            noticeCode: $(e).find('#txt_nmNoticeCode').val(),
                            groupName: $(el).text(),
                            lawsuitCode: 1,
                            createUser: 'User login'
                        })
                }
            })

            // ตรวจสอบข้อมูลสินค้าจาก ข้อมูลเดิม กับข้อมูลชุดใหม่ เพื่อลบข้อมูลที่ไม่ตรงกัน
            $(e).find('#ul_nmGoodNameCheck li .good-name-tag').each(function (i, el) {
                checkItem = false;
                $(e).find('#ul_nmGoodName li .good-name-tag').each(function (i, ele) {
                    if ($(el).data('value') == $(ele).data('value')) {
                        checkItem = true;
                        return false;
                    }
                })

                // ถ้าข้อมูลสินค้าไม่ตรงกัน จะ delete
                if (checkItem == false) {
                    delProduct.push
                        ({
                            code: ($(el).data('id') == '' ? 1 : $(el).data('id')),
                            groupCode: $(el).data('value'),
                            updateUser: 'User login'
                        })
                }
            })

            // เพิ่มข้อมูลทั้งสอง (insProduct, delProduct) เข้าไปใน array เพื่อดำเนินการต่อ
            productArray.push
                ({
                    ins: insProduct,
                    del: delProduct
                })

        } else {

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
        }
        // --- End NoticeProductlistAll ---

        var objAllsave = {
            notice: noticeNoticeAll,
            inform: noticeInformAll,
            location: noticeLocationAll,
            productlist: productArray
        }

        if (modeUrl !== undefined && modeUrl == 'edit') {
            updateNotice(e, objAllsave)
        } else {
            saveNotice(e, objAllsave);
        }
    }
}
// =========================== End Save ===========================

function saveNotice(e, obj) {
    var noticeAllCode = '',
        noticeAllDescription = '',

        informAllCode = '',
        informAllDescription = '',

        locationAllCode = '',
        locationAllDescription = '',

        productListAllCode = '',
        productListAllDescription = ''

    insNoticeNoticeAll(obj.notice, function (xml) {
        $(xml).find('responseHeader')
            .each(function (i, e) {
                noticeAllCode = $(e).find('code').text()
                noticeAllDescription = $(e).find('description').text()
            })
    })

    insNoticeInformAll(obj.inform, function (xml) {
        $(xml).find('responseHeader')
            .each(function (i, e) {
                informAllCode = $(e).find('code').text()
                informAllDescription = $(e).find('description').text()
            })
    })

    insNoticeLocationAll(obj.location, function (xml) {
        $(xml).find('responseHeader')
            .each(function (i, e) {
                locationAllCode = $(e).find('code').text()
                locationAllDescription = $(e).find('description').text()
            })
    })

    insNoticeProductlistAll(obj.productlist, function (xml) {
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

function updateNotice(e, obj) {

    var noticeAllCode = '',
        informAllCode = '',
        locationAllCode = '',
        productListInsCode = '',
        productListDelCode = ''

    // NoticeNotice
    updNoticeNoticeByCon(obj.notice, function (xml) {
        $(xml).find('responseHeader')
            .each(function (i, e) {
                noticeAllCode = $(e).find('code').text()
            })
    })
    // --- end NoticeNotice ---

    // NoticeInform
    updNoticeInformByCon(obj.inform, function (xml) {
        $(xml).find('responseHeader')
            .each(function (i, e) {
                informAllCode = $(e).find('code').text()
            })
    })
    // --- end NoticeInform ---

    // NoticeLocation
    updNoticeLocationByCon(obj.location, function (xml) {
        $(xml).find('responseHeader')
            .each(function (i, e) {
                locationAllCode = $(e).find('code').text()
            })
    })
    // --- end NoticeLocation ---

    // productlist delete
    if (obj.productlist[0].del.length > 0) {
        delNoticeProductlistByCon(obj.productlist[0].del, function (xml) {
            $(xml).find('responseHeader')
                .each(function (i, e) {
                    productListDelCode = $(e).find('code').text()
                })
        })
    }
    // --- end productlist delete ---

    // productlist insert 
    if (obj.productlist[0].ins.length > 0) {
        insNoticeProductlistAll(obj.productlist[0].ins, function (xml) {
            $(xml).find('responseHeader')
                .each(function (i, e) {
                    productListInsCode = $(e).find('code').text()
                })
        })
    }
    // --- end productlist insert ---

    if (noticeAllCode == 200 && informAllCode == 200 &&
        locationAllCode == 200 &&
        (productListDelCode == '' || productListDelCode == 200) &&
        (productListInsCode == '' || productListInsCode == 200)) {
        alert('บันทึกสำเร็จ');
    } else {
        alert(
            'Notice: ' + noticeAllCode + '\r\n' +
            'Inform: ' + informAllCode + '\r\n' +
            'Location: ' + locationAllCode + '\r\n' +
            'Product ins: ' + productListInsCode + '\r\n' +
            'Product del: ' + productListDelCode
        );
    }

}
// =========================== End Save ===========================

function onCancelNotice() {
    if (confirm('MsgBox “ยืนยันการทำรายการหรือไม่?”')) {
        location.href = 'notice-list.html'
    }
}

