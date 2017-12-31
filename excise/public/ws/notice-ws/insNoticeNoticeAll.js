function insNoticeNoticeAll(arr, callback) {
    var xmlData = ''
    xmlData += '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:inf="http://inf.soap.tlexc.custom.go.th/">'
    xmlData += '<soapenv:Header/>'
    xmlData += '<soapenv:Body>'
    xmlData += '<inf:insNoticeNoticeAll>'
    xmlData += '<arg0>'
    xmlData += '<notice>'
    xmlData += '<arrestDesc>' + arr.arrestDesc + '</arrestDesc>'
    xmlData += '<createBy>' + arr.createBy + '</createBy>'
    xmlData += '<departmentCode>' + arr.departmentCode + '</departmentCode>'
    xmlData += '<departmentCodeReceive>' + arr.departmentCodeReceive + '</departmentCodeReceive>'
    xmlData += '<departmentName>' + arr.departmentName + '</departmentName>'
    xmlData += '<departmentNameCommander>' + arr.departmentNameCommander + '</departmentNameCommander>'
    xmlData += '<departmentNameReceive>' + arr.departmentNameReceive + '</departmentNameReceive>'
    xmlData += '<groupName>' + arr.groupName + '</groupName>'
    xmlData += '<informType>' + arr.informType + '</informType>'
    xmlData += '<noticeCode>' + arr.noticeCode + '</noticeCode>'
    xmlData += '<noticeDate>' + arr.noticeDate + '</noticeDate>'
    xmlData += '<noticeDueDate>' + arr.noticeDueDate + '</noticeDueDate>'
    xmlData += '<noticeStation>' + arr.noticeStation + '</noticeStation>'
    xmlData += '<noticeStationCode>' + arr.noticeStationCode + '</noticeStationCode>'
    xmlData += '<noticeTime>' + arr.noticeTime + '</noticeTime>'
    xmlData += '<positionNameReceive>' + arr.positionNameReceive + '</positionNameReceive>'
    xmlData += '<remarks>' + arr.remarks + '</remarks>'
    xmlData += '<secretLevel>' + arr.secretLevel + '</secretLevel>'
    xmlData += '<staffNameAccept>' + arr.staffNameAccept + '</staffNameAccept>'
    xmlData += '<staffNameReceive>' + arr.staffNameReceive + '</staffNameReceive>'
    xmlData += '</notice>'
    xmlData += '</arg0>'
    xmlData += '</inf:insNoticeNoticeAll>'
    xmlData += '</soapenv:Body>'
    xmlData += '</soapenv:Envelope>'
    console.log(arr.groupName)

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

    $.ajax(settings)
        .success(function (xmlDoc) {
            callback(xmlDoc);
        })
        .error(function (request, statusText, xhr) {
            callback(xhr);
        });

}
