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

    $('input.datepicker').bootstrapMaterialDatePicker({
        format: 'DD/MM/YYYY',
        weekStart: 0,
        time: false
    });

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
    $('#table_ArrestList').DataTable({
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