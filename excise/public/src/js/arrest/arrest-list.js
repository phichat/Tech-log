function onDelRecord(e) {
    if (confirm('Msg ยืนยันการทำรายการหรือไม่?')) {
        alert(e)
    }
}

function onClearFormSearch() {
    $('input[type=text]').val('');
    $('input[type=date]').val('');
}

function onToggleAdvancedSearch() {
    $('.advanced-search').slideToggle();
}

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
                if ($(s).data('page') == 'arrest') {
                    $(this).addClass('active')
                }
            })
            // จาก lib/exicse-custom/js/main.js
            // กำหนดเส้นทาง link ใหม่ให้กับเมนู
            changePathUri($('.ml-menu'));
        });
    })

    $.getScript('../../lib/adminbsb-materialdesign/js/admin.js')

    // var date = new Date()
    // $('#txt_OccurrenceDate').bootstrapMaterialDatePicker().on('change', function (e, date) {
    //     $('#txt_OccurrenceDateTo').bootstrapMaterialDatePicker('setMinDate', date);
    // });

    // $('#txt_TakeDate').bootstrapMaterialDatePicker().on('change', function (e, date) {
    //     $('#txt_TakeDateTo').bootstrapMaterialDatePicker('setMinDate', date);
    // });

    // $('#txt_LawSuitDate').bootstrapMaterialDatePicker().on('change', function (e, date) {
    //     $('#txt_LawSuitDateTo').bootstrapMaterialDatePicker('setMinDate', date);
    // });

    var option = '<option disabled selected></option>';
    for (var i = 1; i < 50; i++) {
        option += '<option value="value' + i + '">Item ' + i + '</option>'
    }
    $('select').not('.paging_listbox_select').html(option);
    $('select').not('.paging_listbox_select').selectize({
        create: true,
        sortField: 'text'
    });

    var tr = '';
    for (var i = 1; i < 87; i++) {
        tr += '<tr>'
        tr += '<td>' + i + '</td>'
        tr += '<td><a href="javascript:void(0);">Notice code</a></td>'
        tr += '<td>สท.....</td>'
        tr += '<td>.....</td>'
        tr += '<td>.....</td>'
        tr += '<td>dd/mm/yyyy</td>'
        tr += '<td>dd/mm/yyyy</td>'
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
    $('#table_ArrestList tbody').html(tr)
    $('#table_ArrestList tbody').pageMe({
        pagerSelector: '#notice_pagination',
        pageInfo: '#notice_pageinfo',
        showPrevNext: true,
        hidePageNumbers: false,
        perPage: 5
    });

    // dataTables pagination style
    $('.paging_listbox').find('select').addClass('paging_listbox_select');
});

$('#btn_nlAddArrest').on('click', function () {
    window.location.href = 'arrest-manage.html'
})