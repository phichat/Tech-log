
function getNoticeListNoticeByConAdv(arr, callback) {
    var xmlData = ''
    xmlData += '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:inf="http://inf.soap.tlexc.custom.go.th/">'
    xmlData += '<soapenv:Header/>'
    xmlData += '<soapenv:Body>'
    xmlData += '<inf:getNoticeListNoticeByConAdv>'
    xmlData += '<arg0>'
    xmlData += '<noticeCode>'+ arr.noticeCode +'</noticeCode>'
    xmlData += '<noticeDateTo>'+ arr.noticeDateTo +'</noticeDateTo>'
    xmlData += '<noticeDateForm>'+ arr.noticeDateForm +'</noticeDateForm>'
    xmlData += '<staffNameReceiv>'+ arr.staffNameReceiv +'</staffNameReceiv>'
    xmlData += '<departmentNameReceive>'+ arr.departmentNameReceive +'</departmentNameReceive>'
    xmlData += '<noticeDueDate>'+ arr.noticeDueDate +'</noticeDueDate>'
    xmlData += '<groupName>'+ arr.groupName +'</groupName>'
    xmlData += '<infoName>'+ arr.infoName +'</infoName>'
    xmlData += '</arg0>'
    xmlData += '</inf:getNoticeListNoticeByConAdv>'
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
        .error(function (xhr) {
            callback(xhr);
        });
}
