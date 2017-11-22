
function insNoticeProductlistAll(array, callback) {

    var xmlData = ''
    xmlData += '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:inf="http://inf.soap.tlexc.custom.go.th/">'
    xmlData += '<soapenv:Header/>'
    xmlData += '<soapenv:Body>'

    $(array).each(function (i, e) {
        xmlData += '<inf:insNoticeProductlistAll>'
        xmlData += '<arg0>'
        xmlData += '<groupCode>' + e.groupCode + '</groupCode>'
        xmlData += '<noticeCode>' + e.noticeCode + '</noticeCode>'
        xmlData += '<groupName>' + e.groupName + '</groupName>'
        xmlData += '<lawsuitCode>' + e.lawsuitCode + '</lawsuitCode>'
        xmlData += '<createUser>' + e.createUser + '</createUser>'
        xmlData += '</arg0>'
        xmlData += '</inf:insNoticeProductlistAll>'
    })

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
            "content-type": "text/xml; charset=utf-8"
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