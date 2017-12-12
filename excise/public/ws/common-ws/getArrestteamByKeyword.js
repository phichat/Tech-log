
function getArrestteamByKeyword(arr, callback) {
    var url = 'http://103.233.193.62:8080/TLEXCWeb/CommonWS?wsdl'
    xmlData = ''
    xmlData += '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:inf="http://inf.soap.tlexc.custom.go.th/">'
    xmlData += '<soapenv:Header/>'
    xmlData += '<soapenv:Body>'
    xmlData += '<inf:getArrestteamByKeyword>'
    xmlData += '<arg0>'
    xmlData += '<staffCode>' + arr.staffCode + '</staffCode>'
    xmlData += '<arrestTeamName>' + arr.staffName + '</arrestTeamName>'
    xmlData += '</arg0>'
    xmlData += '</inf:getArrestteamByKeyword>'
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
