$(document).ready(function () {
    var tr = ''
    tr += '<tr>'
    tr += '<td></td>'
    tr += '<td></td>'
    tr += '<td></td>'
    tr += '<td></td>'
    tr += '<td></td>'
    tr += '<td></td>'
    tr += '<td></td>'
    tr += '</tr>'

    $('#tableStaffList tbody').html(tr)
    $('#tableStaffList').DataTable({
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
    $('.staff-list input[type=text]').val('');
}

function onCancelSelectStaff() {
    $('#tableStaffList tr').find('input[type=checkbox]').prop('checked', false);
}


function staff(no, checkbox, staffName, position, orgName, pertype) {
    this.no = no;
    this.checkbox = checkbox;
    this.staffName = staffName;
    this.position = position;
    this.orgName = orgName;
    this.pertype = pertype;
};

function onSearchFormStaff(e) {
    getStaffByKeyword($(e).val(), function callback(xml) {
        var tr = ''
        $(xml).find('staffDTOList')
            .each(function (i, e) {
                var no = (++i);
                var staffName = $(e).find('firstName').text() + ' ' + $(e).find('lastName').text();
                var position = $(e).find('positionName').text();
                var orgName = $(e).find('orgName').text();
                var pertype = $(e).find('perType').text()

                tr += '<tr>'
                tr += '<td><input type="checkbox" id="staffCheckboxTd' + i + '" name="staffCheckboxTd' + i + '" class="filled-in";">';
                tr += '<label for="staffCheckboxTd' + i + '"></label></td>'
                tr += '<td>' + i + '</td>'
                tr += '<td class="staff-code">Staff code' + i + '</td>'
                tr += '<td class="staff-name">' + $(e).find('firstName').text() + ' ' + $(e).find('lastName').text() + '</td>'
                tr += '<td class="staff-position">' + position + '</td>'
                tr += '<td class="staff-department">' + orgName + '</td>'
                tr += '<td class="staff-pertype">' + pertype + '</td>'
                tr += '</tr>'
            })



        html = $(tr.trim().replace(/\s+/g, " ").replace(/\<\/tr\> \<tr/g, '</tr><tr'))

        var mytable = $('#tableStaffList');

        var dt = mytable.DataTable({
            scrollY: "300px",
            scrollX: true,
            scrollCollapse: true,
            ordering: false,
            searching: false,
            lengthChange: false,
            pageLength: 5,
            sPaginationType: "listbox",
            // "columnDefs": [{
            //     // "defaultContent": "",
            //     // "targets": "_all"
            // }],
            "dom": '<<"row form-group"<"col-lg-12 col-md-12 col-sm-12 col-xs-12"t>><"row form-group"<"col-lg-6 col-sm-6"p><"col-lg-6 col-sm-6 text-right"i>>>'
        });


        dt.clear();
        dt.rows.add(html).draw();
        // mytable.show();


        // $('#tableStaffList tbody').html(tr);
        // $('#tableStaffList').DataTable({
        //     scrollY: "300px",
        //     scrollX: true,
        //     scrollCollapse: true,
        //     "ordering": false,
        //     "searching": false,
        //     "lengthChange": false,
        //     "pageLength": 5,
        //     "sPaginationType": "listbox",
        //     "dom": '<<"row form-group"<"col-lg-12 col-md-12 col-sm-12 col-xs-12"t>><"row form-group"<"col-lg-6 col-sm-6"p><"col-lg-6 col-sm-6 text-right"i>>>'
        // });

        // dataTables pagination style
        $('.paging_listbox').find('select').addClass('paging_listbox_select');

    })


}

