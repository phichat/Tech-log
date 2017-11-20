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


function getSubdistrictByKeyword(url, keyword, callback) {

    var xmlData = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:inf="http://inf.soap.tlexc.custom.go.th/">'
    xmlData += '<soapenv:Header/>'
    xmlData += '<soapenv:Body>'
    xmlData += '<inf:getSubdistrictByKeyword>'
    xmlData += '<arg0>'

    xmlData += '<keyword>'+ keyword +'</keyword>'

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