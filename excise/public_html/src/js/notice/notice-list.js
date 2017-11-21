
$(document).ready(function () {
    $('input.datepicker').bootstrapMaterialDatePicker({
        format: 'DD/MM/YYYY',
        weekStart: 0,
        time: false
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
        tr += '<td>'
        tr += '<a href="notice-manage.html">'
        tr += '<i class="material-icons col-teal">print</i>'
        tr += '</a>'
        tr += '</td>'
        tr += '<td>'
        tr += '<a href="notice-manage.html">'
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
    $('#table_nlNoticeList tbody').html(tr)
    $('#table_nlNoticeList').DataTable({
        scrollX: true,
        scrollCollapse: true,
        "ordering": false,
        "searching": false,
        "lengthChange": false,
        "pageLength": 5,
        "sPaginationType": "listbox",
        "dom": '<<"row form-group"<"col-lg-12 col-md-12 col-sm-12 col-xs-12"t>><"row form-group"<"col-lg-6 col-sm-6"p><"col-lg-6 col-sm-6 text-right"i>>>'
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


function onToggleAdvancedSearch() {
    $('.advanced-search').slideToggle();
}

function onClearFormSearch() {
    $('input[type=text]').val('');
    $('input[type=date]').val('');
}