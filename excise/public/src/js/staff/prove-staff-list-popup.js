$(document).ready(function () {

    $('#tableProveStaffList tbody').pageMe({
        pagerSelector: '#proveStaffList_pagination',
        pageInfo: '#proveStaffList_pageinfo',
        showPrevNext: true,
        hidePageNumbers: false,
        perPage: 5
    });
});

function onSearchFormProveStaff() {
    $('.prove-staff-list input[type=text]').val('');
}

// function onCancelSelectProveStaff() {
//     $('#tableProveStaffList tr').find('input[type=checkbox]').prop('checked', false);
// }


function staff(no, checkbox, staffName, position, orgName, pertype) {
    this.no = no;
    this.checkbox = checkbox;
    this.staffName = staffName;
    this.position = position;
    this.orgName = orgName;
    this.pertype = pertype;
};

function onkeypressSearchFormProveStaff(e) {
    var x = event.which || event.keyCode;
    if (x === 13) {
        searchFormProveStaff(e);
    }
}

function onSearchFormProveStaff(e) {
    searchFormProveStaff(e);
}

function searchFormProveStaff(e) {

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
                tr += '<td><input type="checkbox" id="proveStaffCheckboxTd' + i + '" name="proveStaffCheckboxTd' + i + '" class="filled-in";">';
                tr += '<label for="proveStaffCheckboxTd' + i + '"></label></td>'
                tr += '<td>' + i + '</td>'
                tr += '<td class="prove-staff-code">' + $(e).find('staffCode').text() + '</td>'
                tr += '<td class="prove-staff-name">' + staffName + '</td>'
                tr += '<td class="prove-staff-position">' + position + '</td>'
                tr += '<td class="prove-staff-department">' + orgName + '</td>'
                tr += '<td class="prove-staff-pertype">' + pertype + '</td>'
                tr += '</tr>'
            })

        $('#tableProveStaffList tbody').html(tr)

        $('#tableProveStaffList tbody').pageMe({
            pagerSelector: '#proveStaffList_pagination',
            pageInfo: '#proveStaffList_pageinfo',
            showPrevNext: true,
            hidePageNumbers: false,
            perPage: 5
        });
    })
}

