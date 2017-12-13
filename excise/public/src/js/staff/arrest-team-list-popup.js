$(document).ready(function () {
    $('#tableArrestTeamList tbody').pageMe({
        pagerSelector: '#arrestTeamList_pagination',
        pageInfo: '#arrestTeamList_pageinfo',
        showPrevNext: true,
        hidePageNumbers: false,
        perPage: 5
    });
});


function onClearFormSearch() {
    $('.arrest-team-list-popup input[type=text]').val('');
}

function onCancelSelectArrestTeam() {
    $('#tableArrestTeamList').find('input[type=checkbox]').prop('checked', false);
}

function onkeypressSearchFormArrestTeam(e) {
    var x = event.which || event.keyCode;
    if (x === 13) {
        onSearchFormArresTeam(e);
    }
}


function onSearchFormArresTeam(e) {
    var keyWord = $(e).val();
    if (keyWord == '') {
        return false;
    }
    getStaffByKeyword(keyWord, function callback(xml) {
        var tr = ''
        $(xml).find('staffDTOList')
            .each(function (i, e) {
                var no = (++i),
                    staffName = $(e).find('firstName').text() + ' ' + $(e).find('lastName').text(),
                    position = $(e).find('positionName').text(),
                    orgName = $(e).find('orgName').text(),
                    pertype = $(e).find('perType').text()

                tr += '<tr>'
                tr += '<td><input type="checkbox" id="arrestTeamCheckboxTd' + i + '" name="arrestTeamCheckboxTd' + i + '" class="filled-in";">';
                tr += '<label for="arrestTeamCheckboxTd' + i + '"></label></td>'
                tr += '<td>' + i + '</td>'
                tr += '<td class="arrestTeam-code">' + $(e).find('staffCode').text() + '</td>'
                tr += '<td class="arrestTeam-name">' + $(e).find('firstName').text() + ' ' + $(e).find('lastName').text() + '</td>'
                tr += '<td class="arrestTeam-position">' + position + '</td>'
                tr += '<td class="arrestTeam-department">' + orgName + '</td>'
                tr += '<td class="arrestTeam-pertype">' + pertype + '</td>'
                tr += '</tr>'
            })

        $('#tableArrestTeamList tbody').html(tr).pageMe({
            pagerSelector: '#arrestTeamList_pagination',
            pageInfo: '#arrestTeamList_pageinfo',
            showPrevNext: true,
            hidePageNumbers: false,
            perPage: 5
        });

    })
}