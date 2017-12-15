

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

    $('select').not('.paging_listbox_select').selectize({
        create: false,
        sortField: 'text'
    });

    // getArrestNoticieByKeyword('LS411016000002', function (jsonData) {
    //     var tr = '';
    //     $(jsonData).find('detail').each(function (i, e) {
    //         tr += '<tr>'
    //         tr += '<td>' + (i + 1) + '</td>'
    //         tr += '<td><a href="javascript:void(0);">Notice code</a></td>'
    //         tr += '<td>สท.....</td>'
    //         tr += '<td>.....</td>'
    //         tr += '<td>.....</td>'
    //         tr += '<td>dd/mm/yyyy</td>'
    //         tr += '<td>dd/mm/yyyy</td>'
    //         tr += '<td>.....</td>'
    //         tr += '<td>.....</td>'
    //         tr += '<td>'
    //         tr += '<a href="notice-manage.html">'
    //         tr += '<i class="material-icons col-teal">print</i>'
    //         tr += '</a>'
    //         tr += '</td>'
    //         tr += '<td>'
    //         tr += '<a href="arrest-manage.html">'
    //         tr += '<i class="material-icons col-teal">mode_edit</i>'
    //         tr += '</a>'
    //         tr += '</td>'
    //         tr += '<td>'
    //         tr += '<a href="javascript:void(0)" onclick="onDelRecord(123)">'
    //         tr += '<i class="material-icons col-pink">delete</i>'
    //         tr += '</a>'
    //         tr += '</td>'
    //         tr += '</tr>'
    //     })

    //     $('#table_ArrestList tbody').html(tr)
    //     $('#table_ArrestList tbody').pageMe({
    //         pagerSelector: '#notice_pagination',
    //         pageInfo: '#notice_pageinfo',
    //         showPrevNext: true,
    //         hidePageNumbers: false,
    //         perPage: 5
    //     });
    // })
});

$('#btn_nlAddArrest').on('click', function () {
    window.location.href = 'arrest-manage.html'
})

function onDelRecord(e) {
    if (confirm('Msg ยืนยันการทำรายการหรือไม่?')) {
        alert(e)
    }
}

function onClearFormSearch() {
    $('input[type=text]').val('');
    $('input[type=checkbox]').prop('checked', false);
    $('input[type=date]').val('');
    var $select = $('select').not('.paging_listbox_select').selectize(),
        control = $select[0].selectize;
    control.clear();
}

function onToggleAdvancedSearch() {
    $('.advanced-search').slideToggle();
    $('#txt_search').prop('disabled', function (i, v) { return !v; });
}

