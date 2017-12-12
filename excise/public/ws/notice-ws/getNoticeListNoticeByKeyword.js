
function getNoticeListNoticeByKeyword(arg, callback) {

    var xmlData = ''
    xmlData += '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:inf="http://inf.soap.tlexc.custom.go.th/">'
    xmlData += '<soapenv:Header/>'
    xmlData += '<soapenv:Body>'
    xmlData += '<inf:getNoticeListNoticeByKeyword>'
    xmlData += '<arg0>'
    xmlData += '<keyWord>'+ arg.keyWord +'</keyWord>'
    xmlData += '<isArrest>'+ arg.isArrest +'</isArrest>'        // 0 = ยังไม่อ้างอิง
    xmlData += '<expireDate>'+ arg.expireDate +'</expireDate>'  // 1 = ยังไม่หมดอายุ
    xmlData += '<sortBy>'+ arg.sortBy +'</sortBy>'              // 2 = เรียงตามวันที่รับแจ้ง 
    xmlData += '</arg0>'
    xmlData += '</inf:getNoticeListNoticeByKeyword>'
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
            "content-type": "text/xml; charset=utf-8",
            'X-HTTP-Method-Override': "GET"
        }
    };

    $.ajax(settings).success(function (xmlDoc) {
        callback(xmlDoc);
    });
}
