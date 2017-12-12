function insNoticeProductlistAllMul(array, callback) {
    var xmlData = ''

    xmlData += '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:inf="http://inf.soap.tlexc.custom.go.th/">'
    xmlData += '<soapenv:Header/>'
    xmlData += '<soapenv:Body>'
    xmlData += '<inf:insNoticeProductlistAllMul>'
    xmlData += '<arg0>'

    $(array).each(function (i, e) {
        xmlData += '<lsPro>'
        xmlData += '<createUser>' + e.createUser + '</createUser>'
        xmlData += '<groupCode>' + e.groupCode + '</groupCode>'
        xmlData += '<groupName>' + e.groupName + '</groupName>'
        xmlData += '<lwsuitCode>' + e.lwsuitCode + '</lwsuitCode>'
        xmlData += '<noticeCode>' + e.noticeCode + '</noticeCode>'
        xmlData += '</lsPro>'
    })

    xmlData += '</arg0>'
    xmlData += '</inf:insNoticeProductlistAllMul>'
    xmlData += '</soapenv:Body>'
    xmlData += '</soapenv:Envelope>'

    var url = 'http://103.233.193.62:8080/TLEXCWeb/NoticeWS?wsdl'
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": url,
        "method": "POST",
        "dataType": "xml",
        "data": xmlData,
        "headers": {
            "content-type": "text/xml; charset=utf-8"
        }
    };

    $.ajax(settings).success(function (xmlDoc) {
        callback(xmlDoc);
    });
}
