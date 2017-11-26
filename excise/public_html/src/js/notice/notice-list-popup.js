
$(document).ready(function () {

    // var tr = '';
    // for (var i = 1; i < 87; i++) {
    //     tr += '<tr>'
    //     tr += '<td><input type="checkbox" id="noticeAllCheckboxTd' + i + '" name="noticeAllCheckboxTd' + i + '" class="filled-in";">';
    //     tr += '<label for="noticeAllCheckboxTd' + i + '"></label></td>'
    //     tr += '<td>' + i + '</td>'
    //     tr += '<td class="notice-code">LS000000000' + i + '</td>'
    //     tr += '<td class="notice-name">สายลับ(ขอปิดนาม)</td>'
    //     tr += '<td class="notice-date">dd/mm/yyyy</td>'
    //     tr += "<td class=''><input type='button' value='ดูใบแจ้งความนำจับ' class='btn-default-notice' onclick=getNotice('LS000000000" + i + "')></td>"
    //     tr += '</tr>'
    // }
    // $('#tableNoticeAll tbody').html(tr)
    // $('#tableNoticeAll').DataTable({
    //     // scrollY: "300px",
    //     scrollX: true,
    //     scrollCollapse: true,
    //     "ordering": false,
    //     "searching": false,
    //     "lengthChange": false,
    //     "pageLength": 5,
    //     "sPaginationType": "listbox",
    //     "dom": '<<"row form-group"<"col-lg-12 col-md-12 col-sm-12 col-xs-12"t>><"row form-group"<"col-lg-6 col-sm-6"p><"col-lg-6 col-sm-6 text-right"i>>>'
    // });

    // // dataTables pagination style
    // $('.paging_listbox').find('select').addClass('paging_listbox_select');
    $('#tableNoticeAll tbody').pageMe({
        pagerSelector: '#notice_pagination',
        pageInfo: '#notice_pageinfo',
        showPrevNext: true,
        hidePageNumbers: false,
        perPage: 5
    });
});

function onSearchNotice(e) {
    if ($(e).val() == '') {
        alert('กรุณาระบุข้อมูลที่ต้องกาารค้นหา');
        return false;
    }

    var array = []
    getNoticeListNoticeByKeyword($(e).val(), function callback(xmlDoc) {
        $(xmlDoc).find('noticeList')
            .each(function (i, el) {
                array.push({
                    no: (++i),
                    noticeCode: $(el).find('noticecode').text(),
                    noticeDate: $(el).find('noticedate').text(),
                    informName: $(el).find('titlename').text() + ' ' +
                        $(el).find('firstname').text() + ' ' +
                        $(el).find('lastname').text()
                })
            })
    })

    var tr = ''
    $(array).each(function (i, e) {
        tr += '<tr>'
        tr += '<td><input type="checkbox" id="noticeAllCheckboxTd' + i + '" name="noticeAllCheckboxTd' + i + '" class="filled-in";">';
        tr += '<label for="noticeAllCheckboxTd' + i + '"></label></td>'
        tr += '<td>' + e.no + '</td>'
        tr += '<td class="notice-code">' + e.noticeCode + '</td>'
        tr += '<td class="notice-name">' + e.informName + '</td>'
        tr += '<td class="notice-date">' + e.noticeDate + '</td>'
        tr += "<td class=''><input type='button' value='ดูใบแจ้งความนำจับ' class='btn-default-notice' onclick=getNotice(" + e.noticeCode + "')></td>"
        // tr += '<td class="notice-" style="display:none;">'+ e. +'</td>'
        tr += '</tr>'
    })
    debugger
    $('#tableNoticeAll tbody').html(tr).pageMe({
        pagerSelector: '#notice_pagination',
        pageInfo: '#notice_pageinfo',
        showPrevNext: true,
        hidePageNumbers: false,
        perPage: 5
    });
}

function onClearFormSearch() {
    $('.notice-list-popup input[type=text]').val('');
}

function getNotice(noticeCode) {
    window.open('../notice/notice-manage.html?notice-code=' + noticeCode, '_blank')
}

function onCancelSelectNotice() {
    $('#tableNoticeAll tr').find('input[type=checkbox]').prop('checked', false);
}