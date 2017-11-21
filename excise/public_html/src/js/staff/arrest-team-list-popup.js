$(document).ready(function () {
    var tr = '';
    for (var i = 1; i < 87; i++) {
        tr += '<tr>'
        tr += '<td><input type="checkbox" id="arrestTeamCheckboxTd' + i + '" name="arrestTeamCheckboxTd' + i + '" class="filled-in";">';
        tr += '<label for="arrestTeamCheckboxTd' + i + '"></label></td>'
        tr += '<td>' + i + '</td>'
        tr += '<td class="arrestTeam-code">Arrest(staff) code'+ i +'</td>'
        tr += '<td class="arrestTeam-name">Arrest(staff' + i + ') first name & last name</td>'
        tr += '<td class="arrestTeam-position">Position</td>'
        tr += '<td class="arrestTeam-department">Department</td>'
        tr += '<td class="arrestTeam-pertype">Staff pertype</td>'
        tr += '</tr>'
    }
    $('#tableArrestTeamList tbody').html(tr)
    $('#tableArrestTeamList').DataTable({
        // scrollY: "300px",
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


function onClearFormSearch() {
    $('.arrest-team-list-popup input[type=text]').val('');
}

function onCancelSelectArrestTeam() {
    $('#tableArrestTeamList').find('input[type=checkbox]').prop('checked', false);
}