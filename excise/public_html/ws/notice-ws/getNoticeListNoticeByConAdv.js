
function getNoticeListNoticeByConAdv(arr, callback) {
    var xmlData = ''
    xmlData += '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:inf="http://inf.soap.tlexc.custom.go.th/">'
    xmlData += '<soapenv:Header/>'
    xmlData += '<soapenv:Body>'
    xmlData += '<inf:getNoticeListNoticeByConAdv>'
    xmlData += '<!--Optional:-->'
    xmlData += '<arg0>'
    xmlData += '<!--Optional:-->'
    xmlData += '<noticeCode>' + arr.noticeCode + '</noticeCode>'
    xmlData += '<!--Optional:-->'
    xmlData += '<noticeDate>' + arr.noticeDate + '</noticeDate>'
    xmlData += '<!--Optional:-->'
    xmlData += '<staffNameReceiv>' + arr.staffNameReceiv + '</staffNameReceiv>'
    xmlData += '<!--Optional:-->'
    xmlData += '<departmentNameReceive>' + arr.departmentNameReceive + '</departmentNameReceive>'
    xmlData += '<!--Optional:-->'
    xmlData += '<noticeDueDate>' + arr.noticeDueDate + '</noticeDueDate>'
    xmlData += '<!--Optional:-->'
    xmlData += '<groupName>' + arr.groupName + '</groupName>'
    xmlData += '<!--Optional:-->'
    xmlData += '<firstName>' + arr.firstName + '</firstName>'
    xmlData += '<!--Optional:-->'
    xmlData += '<titleName>' + arr.titleName + '</titleName>'
    xmlData += '<!--Optional:-->'
    xmlData += '<lastName>' + arr.lastName + '</lastName>'
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

    $.ajax(settings).success(function (xmlDoc) {
        callback(xmlDoc);
    });
}
