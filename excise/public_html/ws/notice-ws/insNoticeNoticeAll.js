function insNoticeNoticeAll(arr, callback) {
    var xmlData = ''
    xmlData += '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:inf="http://inf.soap.tlexc.custom.go.th/">'
    xmlData += '<soapenv:Header/>'
    xmlData += '<soapenv:Body>'
    xmlData += '<inf:insNoticeNoticeAll>'
    xmlData += '<!--Optional:-->'
    xmlData += '<arg0>'
    xmlData += '<!--Optional:-->'
    xmlData += '<notice>'
    xmlData += '<!--Optional:-->'
    xmlData += '<arrestDesc>' + arr.arrestDesc + '</arrestDesc>'
    xmlData += '<!--Optional:-->'
    xmlData += '<createBy>' + arr.createBy + '</createBy>'
    xmlData += '<!--Optional:-->'
    xmlData += '<departmentNameCommander>' + arr.departmentNameCommander + '</departmentNameCommander>'
    xmlData += '<!--Optional:-->'
    xmlData += '<departmentNameReceive>' + arr.departmentNameReceive + '</departmentNameReceive>'
    xmlData += '<!--Optional:-->'
    xmlData += '<informType>' + arr.informType + '</informType>'
    xmlData += '<!--Optional:-->'
    xmlData += '<noticeCode>' + arr.noticeCode + '</noticeCode>'
    xmlData += '<!--Optional:-->'
    xmlData += '<noticeDate>' + arr.noticeDate + '</noticeDate>'
    xmlData += '<!--Optional:-->'
    xmlData += '<noticeDueDate>' + arr.noticeDueDate + '</noticeDueDate>'
    xmlData += '<!--Optional:-->'
    xmlData += '<noticeStation>' + arr.noticeStation + '</noticeStation>'
    xmlData += '<!--Optional:-->'
    xmlData += '<noticeTime>' + arr.noticeTime + '</noticeTime>'
    xmlData += '<!--Optional:-->'
    xmlData += '<positionNameReceive>' + arr.positionNameReceive + '</positionNameReceive>'
    xmlData += '<!--Optional:-->'
    xmlData += '<remarks>' + arr.remarks + '</remarks>'
    xmlData += '<!--Optional:-->'
    xmlData += '<secretLevel>' + arr.secretLevel + '</secretLevel>'
    xmlData += '<!--Optional:-->'
    xmlData += '<staffNameAccept>' + arr.staffNameAccept + '</staffNameAccept>'
    xmlData += '<!--Optional:-->'
    xmlData += '<staffNameReceive>' + arr.staffNameReceive + '</staffNameReceive>'
    xmlData += '</notice>'
    xmlData += '</arg0>'
    xmlData += '</inf:insNoticeNoticeAll>'
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
