
function getStaffByKeyword(keyword, callback) {

    var url = 'http://103.233.193.62:8080/TLEXCWeb/CommonWS?wsdl'
    var xmlData = ''
    xmlData += '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:inf="http://inf.soap.tlexc.custom.go.th/">'
    xmlData += '<soapenv:Header/>'
    xmlData += '<soapenv:Body>'
    xmlData += '<inf:getStaffByKeyword>'
    xmlData += '<arg0>'
    xmlData += '<keyword>' + keyword + '</keyword>'
    xmlData += '</arg0>'
    xmlData += '</inf:getStaffByKeyword>'
    xmlData += '</soapenv:Body>'
    xmlData += '</soapenv:Envelope>'

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