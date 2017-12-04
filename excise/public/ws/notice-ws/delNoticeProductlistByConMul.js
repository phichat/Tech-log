function delNoticeProductlistByConMul(array, callback) {
    var xmlData = ''
    xmlData += '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:inf="http://inf.soap.tlexc.custom.go.th/">'
    xmlData += '<soapenv:Header/>'
    xmlData += '<soapenv:Body>'
    xmlData += '<inf:delNoticeProductlistByConMul>'
    xmlData += '<arg0>'

    var updateUser = ''
    $(array).each(function (i, e) {
        xmlData += '<code>' + e.code + '</code>'
        updateUser = e.updateUser
    })
    
    xmlData += '<updateUser>' + updateUser + '</updateUser>'
    xmlData += '</arg0>'
    xmlData += '</inf:delNoticeProductlistByConMul>'
    xmlData += '</soapenv:Body>'
    xmlData += '</soapenv:Envelope>'

    var url = 'http://103.233.193.62:8888/TLEXCWeb/NoticeWS?wsdl'
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": url,
        "method": "POST",
        "dataType": "xml",
        "data": xmlData,
        "headers": {
            "content-type": "text/xml; charset=utf-8",
            'X-HTTP-Method-Override': "DELETE"
        }
    };

    $.ajax(settings).success(function (xmlDoc) {
        callback(xmlDoc);
    });
}