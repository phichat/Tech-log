// <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:inf="http://inf.soap.tlexc.custom.go.th/">
// <soapenv:Header/>
// <soapenv:Body>
//    <inf:getSubdistrictByKeyword>
//       <!--Optional:-->
//       <arg0>
//          <!--Optional:-->
//          <keyword>?</keyword>
//       </arg0>
//    </inf:getSubdistrictByKeyword>
// </soapenv:Body>
// </soapenv:Envelope>

// $(document).ready(function () {
//     var commonWsUrl = 'http://103.233.193.62:8888/TLEXCWeb/CommonWS?wsdl'
//     getSubdistrictByKeyword(commonWsUrl, '', function callback(xml) {
//         var sleRegion = '<option value="" selected></option>'
//         $(xml).find('subDistrictDTOList')
//             .each(function (i, e) {
//                 sleRegion += '<option value="';
//                 sleRegion += $(e).find('subDistrictNameTh').text();
//                 sleRegion += $(e).find('districtNameTh').text();
//                 sleRegion += $(e).find('provinceNameTh').text();
//                 sleRegion += '">'
//                 sleRegion += $(e).find('subDistrictNameTh').text() + '/';
//                 sleRegion += $(e).find('districtNameTh').text() + '/';
//                 sleRegion += $(e).find('provinceNameTh').text() + '</option>';
//             })

//         $('select.region').html(sleRegion);
//     })
// })


function getSubdistrictByKeyword(url, keyword, callback) {
    var xmlData = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:inf="http://inf.soap.tlexc.custom.go.th/">'
    xmlData += '<soapenv:Header/>'
    xmlData += '<soapenv:Body>'
    xmlData += '<inf:getSubdistrictByKeyword>'
    xmlData += '<arg0>'

    xmlData += '<keyword>' + keyword + '</keyword>'

    xmlData += '</arg0>'
    xmlData += '</inf:getSubdistrictByKeyword>'
    xmlData += '</soapenv:Body>'
    xmlData += '</soapenv:Envelope>';

    var settings = {
        "async": false,
        "crossDomain": true,
        "url": url,
        "method": "POST",
        "dataType": "xml",
        "data": xmlData,
        "headers": {
            "content-type": "text/xml; charset=utf-8",
            'X-HTTP-Method-Override': "GET"
        }
    };

    $.ajax(settings).success(function (xmlDoc) {
        callback(xmlDoc);
    });
}