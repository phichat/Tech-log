
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

function onSearchNoticeList(boxSearch, advSearch) {
    if ($(advSearch).css('display') == 'none') {
        if ($(boxSearch).val() == '') {
            alert('กรุณาระบุคำที่ต้องการค้นหา');
            return false;
        }

        getNoticeListNoticeByKeyword($(boxSearch).val(), function callback(xmlDoc) {
            var tr = '';
            $(xmlDoc).find('noticeList')
                .each(function (i, el) {
                    var no = (++i)
                    var noticecode = $(el).find('noticecode').text()
                    var depCommander = $(el).find('departmentnamecommander').text()
                    var noticeDate = $(el).find('noticedate').text()
                    var groupName = $(el).find('groupname').text()
                    var staffRecive = $(el).find('staffnamereceive').text()
                    var localtion = $(el).find('locationname').text() + ' '
                    localtion += $(el).find('sub_district_name').text() + '/'
                    localtion += $(el).find('district_name_th').text() + '/'
                    localtion += $(el).find('province_name_th').text()
                    var endDate = 'ใช้ field ไหน';


                    tr += '<tr>'
                    tr += '<td>' + no + '</td>'
                    tr += '<td>' + noticecode + '</td>'
                    tr += '<td>' + depCommander + '</td>'
                    tr += '<td>' + noticeDate + '</td>'
                    tr += '<td>' + groupName + '</td>'
                    tr += '<td>' + staffRecive + '</td>'
                    tr += '<td>' + localtion + '</td>'
                    tr += '<td>' + endDate + '</td>'
                    tr += '<td>'
                    tr += '<a href="notice-manage.html">'
                    tr += '<i class="material-icons col-teal">print</i>'
                    tr += '</a>'
                    tr += '</td>'
                    tr += '<td>'
                    tr += '<a href="notice-manage.html?notice-code=' + noticecode + '">'
                    tr += '<i class="material-icons col-teal">mode_edit</i>'
                    tr += '</a>'
                    tr += '</td>'
                    tr += '<td>'
                    tr += '<a href="javascript:void(0)" onclick="onDelRecord(' + noticecode + ')">'
                    tr += '<i class="material-icons col-pink">delete</i>'
                    tr += '</a>'
                    tr += '</td>'
                    tr += '</tr>'
                })

            $('#table_nlNoticeList tbody').html(tr)
            $('#table_nlNoticeList tbody').pageMe({
                pagerSelector: '#notice_pagination',
                pageInfo: '#notice_pageinfo',
                showPrevNext: true,
                hidePageNumbers: false,
                perPage: 5
            });
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
            var tr = '';
            $(xmlDoc).find('noticeList')
                .each(function (i, el) {
                    debugger
                    var no = (++i)
                    var noticecode = $(el).find('noticecode').text()
                    var depCommander = $(el).find('departmentnamecommander').text()
                    var noticeDate = $(el).find('noticedate').text()
                    var groupName = $(el).find('groupname').text()
                    var staffRecive = $(el).find('staffnamereceive').text()
                    var localtion = $(el).find('locationname').text() + ' '
                    localtion += $(el).find('sub_district_name').text() + ' '
                    localtion += $(el).find('district_name_th').text() + ' '
                    localtion += $(el).find('province_name_th').text()
                    var endDate = 'ใช้ field ไหน';


                    tr += '<tr>'
                    tr += '<td>' + no + '</td>'
                    tr += '<td>' + noticecode + '</td>'
                    tr += '<td>' + depCommander + '</td>'
                    tr += '<td>' + noticeDate + '</td>'
                    tr += '<td>' + groupName + '</td>'
                    tr += '<td>' + staffRecive + '</td>'
                    tr += '<td>' + localtion + '</td>'
                    tr += '<td>' + endDate + '</td>'
                    tr += '<td>'
                    tr += '<a href="notice-manage.html">'
                    tr += '<i class="material-icons col-teal">print</i>'
                    tr += '</a>'
                    tr += '</td>'
                    tr += '<td>'
                    tr += '<a href="notice-manage.html?notice-code=' + noticecode + '">'
                    tr += '<i class="material-icons col-teal">mode_edit</i>'
                    tr += '</a>'
                    tr += '</td>'
                    tr += '<td>'
                    tr += '<a href="javascript:void(0)" onclick="onDelRecord(' + noticecode + ')">'
                    tr += '<i class="material-icons col-pink">delete</i>'
                    tr += '</a>'
                    tr += '</td>'
                    tr += '</tr>'
                })

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



}

function onToggleAdvancedSearch() {
    $('.advanced-search').slideToggle();
    $('#txt_nlSearch').prop('disabled', function (i, v) { return !v; });
}

function onClearFormSearch() {
    $('.notice-list input[type=text]').val('');
    $('.notice-list input[type=date]').val('');
}



