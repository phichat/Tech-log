
$(document).ready(function () {

    $('#txt_nlNoticeDateFrom').bootstrapMaterialDatePicker().on('change', function (e, date) {
        $('#txt_nlNoticeDateTo').bootstrapMaterialDatePicker('setMinDate', date);
    });

    // var tr = '';
    // tr += '<tr>'
    // tr += '<td></td>'
    // tr += '<td></td>'
    // tr += '<td></td>'
    // tr += '<td></td>'
    // tr += '<td></td>'
    // tr += '<td></td>'
    // tr += '<td></td>'
    // tr += '<td></td>'
    // tr += '<td></td>'
    // tr += '<td></td>'
    // tr += '<td></td>'
    // tr += '</tr>'
    // $('#table_nlNoticeList tbody').html(tr)
    $('#table_nlNoticeList tbody').pageMe({
        pagerSelector: '#notice_pagination',
        pageInfo: '#notice_pageinfo',
        showPrevNext: true,
        hidePageNumbers: false,
        perPage: 5
    });

    // dataTables pagination style
    $('.paging_listbox').find('select').addClass('paging_listbox_select');
});

function onDelRecord(e) {
    if (confirm("ต้องการลบใบแจ้งความนำจับเลขที่ " + e + " หรือไม่?")) {
        alert(e)
    }
}


$('#btn_nlAddNotice').on('click', function () {
    window.location.href = 'notice-manage.html'
});

// function noticeList(noticecode, department, noticeDate, groupName, staffName) {
//     this.noticecode = noticecode
//     this.department = department
//     this.noticeDate = noticeDate 
//     this.groupName = groupName
//     this.staffName = staffName
//     this.location = location
//     this.endDate = endDate
// }

function onSearchNoticeList(boxSearch, advSearch) {
    var array = [];

    if ($(advSearch).css('display') == 'none') {
        if ($(boxSearch).val() == '') {
            alert('กรุณาระบุคำที่ต้องการค้นหา');
            return false;
        }

        getNoticeListNoticeByKeyword($(boxSearch).val(), function callback(xmlDoc) {
            $(xmlDoc).find('noticeList')
                .each(function (i, el) {
                    array.push({
                        no: (++i),
                        noticecode: $(el).find('noticecode').text(),
                        department: $(el).find('departmentnamereceive').text(),
                        noticeDate: $(el).find('noticedate').text(),
                        groupName: $(el).find('groupname').text(),
                        staffRecive: $(el).find('staffnamereceive').text(),
                        localtion: $(el).find('locationname').text() + ' ' +
                            $(el).find('sub_district_name').text() + '/' +
                            $(el).find('district_name_th').text() + '/' +
                            $(el).find('province_name_th').text(),
                        endDate: 'ใช้ field ไหน'
                    })
                })
        })

    } else {
        var arr = {}
        arr["noticeDate"] = $(advSearch).find('#txt_nlNoticeDateFrom').val();
        arr["noticeDueDate"] = $(advSearch).find('#txt_nlNoticeDateTo').val();
        arr["groupName"] = $(advSearch).find('#txt_nlGroupName').val();
        arr["noticeCode"] = $(advSearch).find('#txt_nlNoticeCode').val();
        arr["departmentNameReceive"] = $(advSearch).find('#txt_nlNoticeDepartmentNameRecieve').val();
        arr["staffNameReceiv"] = $(advSearch).find('#txt_nlStaffNameReceive').val();
        arr["titleName"] = '';
        arr["firstName"] = $(advSearch).find('#txt_nlNoticeInform').val();
        arr["lastName"] = '';

        getNoticeListNoticeByConAdv(arr, function callback(xmlDoc) {
            $(xmlDoc).find('noticeList')
                .each(function (i, el) {
                    array.push({
                        no: (++i),
                        noticecode: $(el).find('noticecode').text(),
                        department: $(el).find('departmentnamereceive').text(),
                        noticeDate: $(el).find('noticedate').text(),
                        groupName: $(el).find('groupname').text(),
                        staffRecive: $(el).find('staffnamereceive').text(),
                        localtion: $(el).find('locationname').text() + ' ' +
                            $(el).find('sub_district_name').text() + '/' +
                            $(el).find('district_name_th').text() + '/' +
                            $(el).find('province_name_th').text(),
                        endDate: 'ใช้ field ไหน'
                    })
                })
        })
    }

    var tr = ''
    $(array).each(function (i, e) {
       
        tr += '<tr>'
        tr += '<td>' + e.no + '</td>'
        tr += '<td>' + e.noticecode + '</td>'
        tr += '<td>' + e.department + '</td>'
        tr += '<td>' + e.noticeDate + '</td>'
        tr += '<td>' + e.groupName + '</td>'
        tr += '<td>' + e.staffRecive + '</td>'
        tr += '<td>' + e.localtion + '</td>'
        tr += '<td>' + e.endDate + '</td>'
        tr += '<td>'
        tr += '<a href="notice-manage.html">'
        tr += '<i class="material-icons col-teal">print</i>'
        tr += '</a>'
        tr += '</td>'
        tr += '<td>'
        tr += '<a href="notice-manage.html?mode=edit&notice-code=' + e.noticecode + '">'
        tr += '<i class="material-icons col-teal">mode_edit</i>'
        tr += '</a>'
        tr += '</td>'
        tr += '<td>'
        tr += '<a href="javascript:void(0)" onclick="onDelRecord(' + e.noticecode + ')">'
        tr += '<i class="material-icons col-pink">delete</i>'
        tr += '</a>'
        tr += '</td>'
        tr += '</tr>'

        $('#table_nlNoticeList tbody').html(tr)
        $('#table_nlNoticeList tbody').pageMe({
            pagerSelector: '#notice_pagination',
            pageInfo: '#notice_pageinfo',
            showPrevNext: true,
            hidePageNumbers: false,
            perPage: 5
        });
    })

}



function onToggleAdvancedSearch() {
    $('.advanced-search').slideToggle();
    $('#txt_nlSearch').prop('disabled', function (i, v) { return !v; });
}

function onClearFormSearch() {
    $('.notice-list input[type=text]').val('');
    $('.notice-list input[type=date]').val('');
}



