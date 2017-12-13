
$(document).ready(function () {
    var tr = ''
    $('#tableNoticeAll tbody').html(tr).pageMe({
        pagerSelector: '#notice_pagination',
        pageInfo: '#notice_pageinfo',
        showPrevNext: true,
        hidePageNumbers: false,
        perPage: 5
    });
});

function onkeypressSearchNoticeList(e) {
    var x = event.which || event.keyCode;
    if (x === 13) {
        searchNotice(e);
    }
}

function onSearchNotice(e) {
    searchNotice(e);
}

function searchNotice(e) {
    if ($(e).val() == '') {
        alert('กรุณาระบุข้อมูลที่ต้องกาารค้นหา');
        return false;
    }

    getArrestNoticieByKeyword($(e).val(), function (jsonData) {
        var tr = '',
            j = 0;
        for (i = 0; i < jsonData.detail.length; i++) {
            tr += '<tr>'
            tr += '<td><input type="checkbox" id="noticeAllCheckboxTd' + i + '" name="noticeAllCheckboxTd' + i + '" class="filled-in";">';
            tr += '<label for="noticeAllCheckboxTd' + i + '"></label></td>'
            tr += '<td>' + (++j) + '</td>'
            tr += '<td class="notice-code">' + jsonData.detail[i].NoticeCode + '</td>'
            tr += '<td class="notice-name">' + jsonData.detail[i].TitleName + ' '
            tr += jsonData.detail[i].FirstName + ' '
            tr += jsonData.detail[i].LastName
            tr += '</td>'
            tr += '<td class="notice-date">' + jsonData.detail[i].NoticeDate + '</td>'
            tr += "<td class=''><input type='button' value='ดูใบแจ้งความนำจับ' class='btn-default-notice' onclick=getNotice('" + jsonData.detail[i].NoticeCode + "')></td>"
            tr += '</tr>'
        }

        $('#tableNoticeAll tbody').html(tr).pageMe({
            pagerSelector: '#notice_pagination',
            pageInfo: '#notice_pageinfo',
            showPrevNext: true,
            hidePageNumbers: false,
            perPage: 5
        });
    })
}

function onClearFormSearch() {
    $('.notice-list-popup input[type=text]').val('');
}

function getNotice(noticeCode) {
    window.open('../notice/notice-manage.html?mode=edit&notice-code=' + noticeCode, '_blank')
}

function onCancelSelectNotice() {
    $('#tableNoticeAll tr').find('input[type=checkbox]').prop('checked', false);
}