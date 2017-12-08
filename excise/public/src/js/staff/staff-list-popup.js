$(document).ready(function () {

    $('#tableStaffList tbody').pageMe({
        pagerSelector: '#staffList_pagination',
        pageInfo: '#staffList_pageinfo',
        showPrevNext: true,
        hidePageNumbers: false,
        perPage: 5
    });
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

function onkeypressSearchFormStaff(e) {
    var x = event.which || event.keyCode;
    if (x === 13) {
        searchFormStaff(e);
    }
}

function onSearchFormStaff(e) {
    searchFormStaff(e);
}

function searchFormStaff(e) {

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
                tr += '<td class="staff-code">' + $(e).find('staffCode').text() + '</td>'
                tr += '<td class="staff-name">' + $(e).find('firstName').text() + ' ' + $(e).find('lastName').text() + '</td>'
                tr += '<td class="staff-position">' + position + '</td>'
                tr += '<td class="staff-department">' + orgName + '</td>'
                tr += '<td class="staff-pertype">' + pertype + '</td>'
                tr += '</tr>'
            })

        $('#tableStaffList tbody').html(tr)

        $('#tableStaffList tbody').pageMe({
            pagerSelector: '#staffList_pagination',
            pageInfo: '#staffList_pageinfo',
            showPrevNext: true,
            hidePageNumbers: false,
            perPage: 5
        });
    })
}

