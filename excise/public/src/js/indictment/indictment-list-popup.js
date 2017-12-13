function onClearFormSearch() {
    $('.indictment-list-popup input[type=text]').val('');
}

function onKeyPressSearch(key) {
    var x = event.which || event.keyCode;
    if (x === 13) {
        onSearch(key);
    }
}

function onSearch(key) {
    var keyWord = $(key).val();
    if (keyWord !== '') {
        getLawByKeyword(keyWord, function (jsonData) {
            var tr = '',
                j = 0
            for (i = 0; i < jsonData.detail.length; i++) {
                tr += '<tr>'
                tr += '<td><input type="checkbox" id="caseLawCheckboxTd' + i + '"'
                tr += ' name="caseLawCheckboxTd' + i + '" class="filled-in";">'
                tr += '<label for="caseLawCheckboxTd' + i + '"></label></td>'
                tr += '<td>' + (++j) + '</td>'
                tr += '<td class="caselawid">' + jsonData.detail[i].CaseLawID + '</td>'
                tr += '<td class="penalty-caselawid">' + jsonData.detail[i].PenaltyCaseLawID + '</td>'
                tr += '<td class="penalty-desc">' + jsonData.detail[i].PenaltyDesc + '</td>'
                tr += '<td class="exhibit-wild"><input type="checkbox" id="exhibitWildCheckboxTd' + i + '"'
                tr += ' name="exhibitWildCheckboxTd' + i + '" class="filled-in">'
                tr += '<label for="exhibitWildCheckboxTd' + i + '"></label></td>'
                tr += '</tr>'
            }

            $('#tableIndictmentAll tbody').html(tr)
            $('#tableIndictmentAll tbody').pageMe({
                pagerSelector: '#indict_pagination',
                pageInfo: '#indict_pageinfo',
                showPrevNext: true,
                hidePageNumbers: false,
                perPage: 5
            });
        })
    }


    // LawID": "48",
    // "CaseLawID": "48",
    // "GuiltBase": "6 (3)",
    // "PenaltyCaseLawID": "184",
    // "PenaltyDesc": "ฝ่าฝืนระเบียบที่อธิบดีกำหนดเกี่ยวกับการเก็บและขนย้ายสินค้า",
    // "FineRate": "ปรับไม่เกิน 20000 บาท",
    // "PrisonRate": null,
    // "Remark": null
}