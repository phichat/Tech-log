
function insNoticeProductlistAll(arr, callback) {

    var xmlData = ''
    xmlData += '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:inf="http://inf.soap.tlexc.custom.go.th/">'
    xmlData += '<soapenv:Header/>'
    xmlData += '<soapenv:Body>'
    xmlData += '<inf:insNoticeProductlistAll>'
    xmlData += '<!--Optional:-->'
    xmlData += '<arg0>'
    xmlData += '<!--Optional:-->'
    xmlData += '<groupCode>' + arr.groupCode + '</groupCode>'
    xmlData += '<!--Optional:-->'
    xmlData += '<noticeCode>' + arr.noticeCode + '</noticeCode>'
    xmlData += '<!--Optional:-->'
    xmlData += '<groupName>' + arr.groupName + '</groupName>'
    xmlData += '<!--Optional:-->'
    xmlData += '<lawsuitCode>' + arr.lawsuitCode + '</lawsuitCode>'
    xmlData += '<!--Optional:-->'
    xmlData += '<createUser>' + arr.createUser + '</createUser>'
    xmlData += '</arg0>'
    xmlData += '</inf:insNoticeProductlistAll>'
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