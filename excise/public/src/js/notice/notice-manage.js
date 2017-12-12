$(document).ready(function () {

    var modeUrl = getUrlParameter('mode'),
        noticeCodeUrl = getUrlParameter('notice-code'),
        date = new Date(),
        h = addZero(date.getHours()),
        m = addZero(date.getMinutes());

    if (modeUrl == undefined || modeUrl == '') {
        $("input.datepicker").datepicker("setDate", "0")
        $("input.time24").val(h + ":" + m).inputmask('hh:mm');
    }

    var loadMultifile = {
        'section.header': '../navbar.html #topheader',
        'section.sidebar': '../sidebar.html #leftsidebar',
        '#listStaffModal .card .body': '../staff/staff-list-popup.html'
    }

    $.each(loadMultifile, function (tag, url) {
        $(tag).load(url, function () {
            var ele = $('.menu .list > li');
            $(ele).each(function (i, s) {
                if ($(s).data('page') == 'notice') {
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

    $.getScript('../../lib/adminbsb-materialdesign/js/admin.js')

    //โหลดข้อมูล ตำบล/อำเภอ/จังหวัด
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
                create: false,
                sortField: 'text'
            });
    });
    // --- end สินค้า ---

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
        $('#sle_nmNoticeStation').selectize({
            valueField: 'code',
            labelField: 'name',
            searchField: 'name',
            create: false,
            options: option
        });
    });
    // --- end เขียนที่ ---

    // หน่วยงาน
    getDepartmentByCon('', function (xml) {
        var department = []
        $(xml).find('departmentDTOList')
            .each(function (i, e) {
                department.push({
                    deptCode: $(e).find('departmentCode').text(),
                    deptName: $(e).find('departmentNameTh').text()
                })
            })

        $('#sle_nmDepartmentName').selectize({
            valueField: 'deptCode',
            labelField: 'deptName',
            searchField: 'deptName',
            create: false,
            sortField: 'text',
            options: department
        })
    })
    // --- end หน่วยงาน ---

    // ผู้แจ้งความ
    $('#sle_nmInformType').selectize({
        create: false,
        sortField: 'value'
    });
    // --- end ผู้แจ้งความ ---

    // Mode edit
    if (modeUrl !== undefined && modeUrl == 'edit') {
        toggleButtonPrint();
        loadFormEdit(noticeCodeUrl);
    }
    // --- end Mode edit ---
})


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

                var nmStaff = $('.notice-manage').find('#sle_nmStaff').selectize();
                var nmStaffZe = nmStaff[0].selectize
                nmStaffZe.setValue($(el).find('td.staff-code').html(), true)

                $('#txt_nmPosition').val($(el).find('td.staff-position').html())
                $('#txt_nmDepartment').val($(el).find('td.staff-department').html())

                $('#tableStaffList').find('input[type=checkbox]').prop('checked', false);

                $('#listStaffModal').modal('hide');
                return false;
            }
        })
    }

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

function onCheckInt(text) {
    var int = $(text).val()
    if (isNaN(int) || int == 00) {
        $(text).val('')
        return false;
    } else {
        return true
    }
}

function onChangDueDate(noticeDate, dueDate, endDate) {
    var date = $(noticeDate).val();
    var due = $(dueDate).val();

    if (!onCheckInt(dueDate)) {
        return false
    }

    if (date !== '' && due !== '' && due !== 00) {
        // addDate จาก lib/excise-custom/js/main.js
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
                    parseDateAD($(e).find('noticedate').text())
                    $('#txt_nmNoticeDate').datepicker('update', parseDateAD($(e).find('noticedate').text()));
                    $('#txt_nmDueDate').val($(e).find('noticeduedate').text());
                    $('#txt_nmNoticeTime').val($(e).find('noticetime').text());
                    $('#txt_nmEndDate').val(addDate($(e).find('noticedate').text(), $(e).find('noticeduedate').text()))
                    $('#txt_nmPosition').val($(e).find('positionnamereceive').text());
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

                    // เขียนที่
                    var noticeStation = $('#sle_nmNoticeStation').selectize(),
                        noticeStationZe = noticeStation[0].selectize,
                        stationText = $(e).find('noticeStation').text();
                    for (s in noticeStationZe.options) {
                        if (stationText == noticeStationZe.options[s].name) {
                            noticeStationZe.setValue(noticeStationZe.options[s].code, true) // set value ให้กับ dropdown
                            break;
                        };
                    }
                    // --- end เขียนที่ ---

                    // หน่วยงาน
                    var department = $('#sle_nmDepartmentName').selectize(),
                        departmentZe = department[0].selectize,
                        departmentCodeReceive = $(e).find('departmentCodeReceive').text().trim()
                    departmentZe.setValue(departmentCodeReceive, true)
                    // --- end หน่วยงาน ---

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

    })
    // --- end getNoticeProductlist ---
}
// ====================== End Load Data Edit ======================


// =========================== Save ===========================
$('#noticeManage').change(function () {
    // จาก lib/excise-custom/js/validate.js
    unhighlight('#noticeManage');
})

function onSaveNotice(e) {
    // จาก lib/excise-custom/js/validate.js
    if (!validate(e)) {
        return false;
    }

    if (confirm('MsgBox “ยืนยันการทำรายการหรือไม่?”')) {
        var modeUrl = getUrlParameter('mode')

        // NoticeNoticeAll
        var noticeNoticeAll = {
            arrestDesc: '',
            createBy: 'User login',
            departmentCodeReceive: $(e).find('#sle_nmDepartmentName option:selected').val(), // รหัสหน่วยงาน
            departmentNameCommander: ' ',
            departmentNameReceive: $(e).find('#txt_nmDepartment').val(),                    // สังกัด
            informType: $(e).find('#sle_nmInformType option:selected').val(),               // ผู้แจ้งความ
            noticeCode: $(e).find('#txt_nmNoticeCode').val(),                               // เลขที่แจ้งความ
            noticeDate: $(e).find('#txt_nmNoticeDate').val(),                               // วันที่แจ้งความ
            noticeDueDate: $(e).find('#txt_nmDueDate').val(),                               // สินสุดใบแจ้งความ
            noticeStation: $(e).find('#sle_nmNoticeStation option:selected').text(),         // เขียนที่
            noticeStationCode: $(e).find('#sle_nmNoticeStation option:selected').val(),    // รหัส เขียนที่
            noticeTime: $(e).find('#txt_nmNoticeTime').val(),                               // เวลา
            positionNameReceive: $(e).find('#txt_nmPosition').val(),                        // ตำแหน่ง
            remarks: '',
            secretLevel: '',
            staffNameAccept: '',
            staffNameReceive: $(e).find('#sle_nmStaff option:selected').text()             // ผู้รับแจ้ง
        }
        // --- End NoticeNoticeAll ---

        // NoticeInformAll
        var noticeInformAll = {
            address: $(e).find('#txt_nmInfromAddress').val(),
            age: $(e).find('#txt_nmInfromAge').val(),
            alley: $(e).find('#txt_nmInfromAlley').val(),
            building: $(e).find('#txt_nmInfromBuilding').val(),
            createdBy: 'User login',
            firstName: $(e).find('#txt_nmInfromAlies').val(),
            floor: $(e).find('#txt_nmInfromFloor').val(),
            genderType: '1',
            inFormID: $(e).find('#txt_nmInfromAlies').data('id'),
            lastName: ' ',
            noticeCode: $(e).find('#txt_nmNoticeCode').val(),
            postCode: '',
            road: $(e).find('#txt_nmInfromRoad').val(),
            room: $(e).find('#txt_nmInfromRoom').val(),
            subdistrictCode: $(e).find('#sle_nmInfromRegion option:selected').val(),
            titleCode: ' ',
            titleName: ' ',
            village: $(e).find('#txt_nmInfromVillage').val(),
            iDCard: ''
        }
        // --- End NoticeInformAll ---

        // location
        var noticeLocationAll = {
            address: $(e).find('#txt_nmOpsAddress').val(),
            alley: $(e).find('#txt_nmOpsAlley').val(),
            building: $(e).find('#txt_nmOpsBuilding').val(),
            coodinateX: '',
            coodinateY: '',
            createdBy: 'User login',
            floor: $(e).find('#txt_nmOpsFloor').val(),
            lawsuitCode: '',
            locationId: $(e).find('#txt_nmLocation').data('id'),
            locationName: $(e).find('#txt_nmLocation').val(),
            noticeCode: $(e).find('#txt_nmNoticeCode').val(),
            policeStation: '',
            road: $(e).find('#txt_nmOpsRoad').val(),
            room: $(e).find('#txt_nmOpsRoom').val(),
            subdistrictCode: $(e).find('#sle_nmOpsRegion option:selected').val(),
            village: $(e).find('#txt_nmOpsVillage').val()
        }
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
                            lwsuitCode: 1,
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
        productListAllDescription = '',

        noticeCode = ''

    insNoticeNoticeAll(obj.notice, function (xml) {
        $(xml).find('mergeResponse')
            .each(function (i, e) {
                noticeCode = $(e).find('id').text()
                noticeAllCode = $(e).find('code').text()
                noticeAllDescription = $(e).find('description').text()
            })
    })

    $(e).find('#txt_nmNoticeCode').val(noticeCode)
    obj.inform.noticeCode = noticeCode
    insNoticeInformAll(obj.inform, function (xml) {
        $(xml).find('responseHeader')
            .each(function (i, e) {
                informAllCode = $(e).find('code').text()
                informAllDescription = $(e).find('description').text()
            })
    })

    obj.location.noticeCode = noticeCode
    insNoticeLocationAll(obj.location, function (xml) {
        $(xml).find('responseHeader')
            .each(function (i, e) {
                locationAllCode = $(e).find('code').text()
                locationAllDescription = $(e).find('description').text()
            })
    })


    $(obj.productlist).each(function (i, e) {
        e.noticeCode = noticeCode
    })
    insNoticeProductlistAllMul(obj.productlist, function (xml) {
        $(xml).find('responseHeader')
            .each(function (i, e) {
                productListAllCode = $(e).find('code').text()
                productListAllDescription = $(e).find('description').text()
            })
    })

    if (noticeAllCode == 200 && informAllCode == 200 &&
        locationAllCode == 200 && productListAllCode == 200) {
        alert('บันทึกสำเร็จ');
        history.pushState(null, "", "notice-manage.html?mode=edit&notice-code=" + noticeCode);
        // Load data edit
        loadFormEdit(noticeCode);
        toggleButtonPrint();
        // --- end Load data edit ---
    } else {
        alert(
            'Notice: ' + noticeAllCode + '\r\n' +
            'Inform: ' + informAllCode + '\r\n' +
            'Location: ' + locationAllCode + '\r\n' +
            'Product list: ' + productListAllCode
        );
    }
}

function toggleButtonPrint() {
    $('#printNotice').removeClass('hidden');
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
        delNoticeProductlistByConMul(obj.productlist[0].del, function (xml) {
            $(xml).find('responseHeader')
                .each(function (i, e) {
                    productListDelCode = $(e).find('code').text()
                })
        })
    }
    // --- end productlist delete ---

    // productlist insert 
    if (obj.productlist[0].ins.length > 0) {
        insNoticeProductlistAllMul(obj.productlist[0].ins, function (xml) {
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

