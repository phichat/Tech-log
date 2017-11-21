$(document).ready(function () {
    var tr = '';
    for (var i = 1; i < 87; i++) {
        tr += '<tr>'
        tr += '<td>' + i + '</td>'
        tr += '<td class="caselawid">20' + i + '</td>'
        tr += '<td class="penality-caselawid">20' + i + '</td>'
        tr += '<td class="built-base-name">มีไว้ในครอบครอง.......</td>'
        tr += '<td class="exhibit-wild"><input type="checkbox" id="exhibitWildCheckboxTd' + i + '" name="exhibitWildCheckboxTd' + i + '" class="filled-in">';
        tr += '<label for="exhibitWildCheckboxTd' + i + '"></label></td>'
        tr += '</tr>'
    }
    $('#tableIndictmentAll tbody').html(tr)

    $('#tableIndictmentAll').DataTable({
        // scrollY: "300px",
        scrollX: true,
        scrollCollapse: true,
        "ordering": false,
        "searching": false,
        "lengthChange": false,
        "pageLength": 5,
        "sPaginationType": "listbox",
        "dom": '<<"row form-group"<"col-lg-12 col-md-12 col-sm-12 col-xs-12"t>><"row form-group"<"col-lg-6 col-sm-6"p><"col-lg-6 col-sm-6 text-right"i>>>'
    })


    // dataTables pagination style
    $('.paging_listbox').find('select').addClass('paging_listbox_select');
});

function onClearFormSearch() {
    $('.indictment-list-popup input[type=text]').val('');
}