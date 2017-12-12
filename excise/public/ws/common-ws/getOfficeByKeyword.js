function getOfficeByKeyword(keyword, callback){

    var xmlData = '';
    xmlData += '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:inf="http://inf.soap.tlexc.custom.go.th/">'
    xmlData += '<soapenv:Header/>'
    xmlData += '<soapenv:Body>'
    xmlData += '<inf:getOfficeByKeyword>'
    xmlData += '<arg0>'
    xmlData += '<codeOrName>'+ keyword +'</codeOrName>'
    xmlData += '</arg0>'
    xmlData += '</inf:getOfficeByKeyword>'
    xmlData += '</soapenv:Body>'
    xmlData += '</soapenv:Envelope>'

    var url = 'http://103.233.193.62:8080/TLEXCWeb/CommonWS?wsdl'
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

    $.ajax(settings)
        .success(function (xmlDoc) {
            callback(xmlDoc);
        })
        .error(function (request, statusText, xhr) {
            callback(xhr);
        });
}

