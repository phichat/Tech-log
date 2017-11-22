

function insNoticeLocationAll(arr, callback) {
    var xmlData = ''
    xmlData += '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:inf="http://inf.soap.tlexc.custom.go.th/">'
    xmlData += '<soapenv:Header/>'
    xmlData += '<soapenv:Body>'
    xmlData += '<inf:insNoticeLocationAll>'
    xmlData += '<arg0>'
    xmlData += '<location>'
    xmlData += '<address>' + arr.address + '</address>'
    xmlData += '<alley>' + arr.alley + '</alley>'
    xmlData += '<building>' + arr.building + '</building>'
    xmlData += '<coodinateX>' + arr.coodinateX + '</coodinateX>'
    xmlData += '<coodinateY>' + arr.coodinateY + '</coodinateY>'
    xmlData += '<createdBy>' + arr.createdBy + '</createdBy>'
    xmlData += '<floor>' + arr.floor + '</floor>'
    xmlData += '<lawsuitCode>' + arr.lawsuitCode + '</lawsuitCode>'
    xmlData += '<locationId>' + arr.locationId + '</locationId>'
    xmlData += '<locationName>' + arr.locationName + '</locationName>'
    xmlData += '<noticeCode>' + arr.noticeCode + '</noticeCode>'
    xmlData += '<policeStation>' + arr.policeStation + '</policeStation>'
    xmlData += '<road>' + arr.road + '</road>'
    xmlData += '<room>' + arr.room + '</room>'
    xmlData += '<subdistrictCode>' + arr.subdistrictCode + '</subdistrictCode>'
    xmlData += '<village>' + arr.village + '</village>'
    xmlData += '</location>'
    xmlData += '</arg0>'
    xmlData += '</inf:insNoticeLocationAll>'
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
debugger
    $.ajax(settings)
        .success(function (xmlDoc) {
            callback(xmlDoc);
        })
        .error(function (request, statusText, xhr) {
            callback(xhr);
        });

}
