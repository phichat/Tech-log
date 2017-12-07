
$(document).ready(function () {
    var loadMultifile = {
        'section.header': '../navbar.html #topheader',
        'section.sidebar': '../sidebar.html #leftsidebar'
    }

    $(".datepicker").datepicker("setDate", "0")

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
            switch (tag){
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

    onSearchNoticeList('#txt_nlSearch', '.advanced-search');
});

function onSearchNoticeList(boxSearch, advSearch) {
    var array = [],
        isArrest = $('input[name=isArrest]:checked').length == 1 ? $('input[name="isArrest"]:checked').val() : 2,
        expireDate = $('input[name=expireDate]:checked').length == 1 ? $('input[name="expireDate"]:checked').val() : 2;

    if ($(advSearch).css('display') == 'none') {
        var arr = {
            keyWord: ($(boxSearch).val() == '' ? ' ' : $(boxSearch).val()),
            isArrest: isArrest,
            expireDate: expireDate,
            sortBy: '2'
        }

        getNoticeListNoticeByKeyword(arr, function callback(xmlDoc) {
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
                            $(el).find('sub_district_name').text() + ' ' +
                            $(el).find('district_name_th').text() + ' ' +
                            $(el).find('province_name_th').text(),
                        endDate: addDate($(el).find('noticedate').text(), $(el).find('noticeduedate').text())
                    })
                })
        })

    } else {
        var arr = {
            noticeDateForm: $(advSearch).find('#txt_nlNoticeDateFrom').val(),
            noticeDateTo: $(advSearch).find('#txt_nlNoticeDateTo').val(),
            groupName: $(advSearch).find('#txt_nlGroupName').val(),
            noticeCode: $(advSearch).find('#txt_nlNoticeCode').val(),
            departmentNameReceive: $(advSearch).find('#txt_nlNoticeDepartmentNameRecieve').val(),
            staffNameReceiv: $(advSearch).find('#txt_nlStaffNameReceive').val(),
            infoName: $(advSearch).find('#txt_nlNoticeInform').val(),
            noticeDueDate: '',
            isArrest: isArrest,
            expireDate: expireDate,
            sortBy: '2'
        }


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
                            $(el).find('sub_district_name').text() + ' ' +
                            $(el).find('district_name_th').text() + ' ' +
                            $(el).find('province_name_th').text(),
                        endDate: addDate($(el).find('noticedate').text(), $(el).find('noticeduedate').text())
                    })
                })
        })
    }

    var tr = ''
    $(array).each(function (i, e) {
        var noticeCode = '"' + e.noticecode + '"'
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
        tr += '<a href="javascript:void(0)" onclick=onDelRecord(this);>'
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

}

function onToggleAdvancedSearch() {
    $('.advanced-search').slideToggle();
    $('#txt_nlSearch').prop('disabled', function (i, v) { return !v; });
}

function onClearFormSearch() {
    $('.notice-list input[type=text]').not('input#txt_nlNoticeDepartmentNameRecieve').val('');
    $('.notice-list input[type=date]').val('');
}

function onDelRecord(e) {
    var tr = $(e).closest('tr'),
        noticeCode = $(tr).find('td:eq(1)').text()

    if (confirm("ต้องการลบใบแจ้งความนำจับเลขที่ " + noticeCode + " หรือไม่?")) {
        var arg = {
            code: noticeCode,
            updateUser: 'User login'
        }

        var productStatusCode = '',
            noticeStatusCode = '',
            informStatusCode = '',
            locationStatusCode = ''

        delNoticeNoticeByCon(arg, function (xml) {
            $(xml).find('responseHeader')
                .each(function (i, e) {
                    noticeStatusCode = $(e).find('code').text()
                })
        })

        delNoticeInformByCon(arg, function (xml) {
            $(xml).find('responseHeader')
                .each(function (i, e) {
                    informStatusCode = $(e).find('code').text()
                })
        })

        delNoticeLocationByCon(arg, function (xml) {
            $(xml).find('responseHeader')
                .each(function (i, e) {
                    locationStatusCode = $(e).find('code').text()
                })
        })

        delNoticeListProducListByCon(arg, function (xml) {
            $(xml).find('responseHeader')
                .each(function (i, e) {
                    productStatusCode = $(e).find('code').text()
                })
        })

        if (noticeStatusCode == 200 && informStatusCode == 200 &&
            locationStatusCode == 200 && productStatusCode == 200) {
            var table = $('#table_nlNoticeList'),
                no = 0;
            $(table).find('tbody tr').each(function (i, e) {
                if ($(e).find('td:eq(1)').text() == noticeCode) {
                    $(e).remove();
                } else {
                    $(e).find('td:eq(0)').text(++no);
                }
            })

            $(table).find('tbody').pageMe({
                pagerSelector: '#notice_pagination',
                pageInfo: '#notice_pageinfo',
                showPrevNext: true,
                hidePageNumbers: false,
                perPage: 5
            });

            alert("บันทึกสำเร็จ")
        } else {
            alert(
                'Notice: ' + noticeStatusCode + '\r\n' +
                'Inform: ' + informStatusCode + '\r\n' +
                'Location: ' + locationStatusCode + '\r\n' +
                'Product list: ' + productStatusCode
            );
        }
    }
}

$('#btn_nlAddNotice').on('click', function () {
    window.location.href = 'notice-manage.html'
});


