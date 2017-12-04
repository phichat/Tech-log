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
                if ($(s).data('page') == 'prove-exhibit') {
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

    $('select').not('.paging_listbox_select').selectize({
        create: true,
        sortField: 'text'
    });

    var tr = '';
    for (var i = 1; i < 87; i++) {
        tr += '<tr>'
        tr += '<td>' + i + '</td>'
        tr += '<td><a href="javascript:void(0);">Notice code</a></td>'
        tr += '<td>.....</td>'
        tr += '<td>.....</td>'
        tr += '<td>.....</td>'
        tr += '<td>.....</td>'
        tr += '<td>.....</td>'
        tr += '<td>.....</td>'
        tr += '<td>.....</td>'
        tr += '<td>.....</td>'
        tr += '<td>.....</td>'
        tr += '<td>'
        tr += '<a href="notice-manage.html">'
        tr += '<i class="material-icons col-teal">print</i>'
        tr += '</a>'
        tr += '</td>'
        tr += '<td>'
        tr += '<a href="arrest-manage.html">'
        tr += '<i class="material-icons col-teal">mode_edit</i>'
        tr += '</a>'
        tr += '</td>'
        tr += '<td>'
        tr += '<a href="javascript:void(0)" onclick="onDelRecord(123)">'
        tr += '<i class="material-icons col-pink">delete</i>'
        tr += '</a>'
        tr += '</td>'
        tr += '</tr>'
    }
    $('#table_proveExhibitList tbody').html(tr)
    $('#table_proveExhibitList tbody').pageMe({
        pagerSelector: '#proveExhibit_pagination',
        pageInfo: '#proveExhibit_pageinfo',
        showPrevNext: true,
        hidePageNumbers: false,
        perPage: 5
    });
})

$('#btn_addExhibit').on('click', function () {
    window.location.href = 'prove-exhibit-manage.html'
})

function onToggleAdvancedSearch() {
    $('.advanced-search').slideToggle();
}

function onClearFormSearch() {
    $('input[type=text]').val('');
    $('input[type=date]').val('');
    $('input[type=checkbox]').prop('checked', false);
}