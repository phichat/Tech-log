

function insNoticeLocationAll(arr, callback) {
    var xmlData = ''
    xmlData += '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:inf="http://inf.soap.tlexc.custom.go.th/">'
    xmlData += '<soapenv:Header/>'
    xmlData += '<soapenv:Body>'
    xmlData += '<inf:insNoticeLocationAll>'
    xmlData += '<!--Optional:-->'
    xmlData += '<arg0>'
    xmlData += '<!--Optional:-->'
    xmlData += '<location>'
    xmlData += '<!--Optional:-->'
    xmlData += '<address>' + arr.address + '</address>'
    xmlData += '<!--Optional:-->'
    xmlData += '<alley>' + arr.alley + '</alley>'
    xmlData += '<!--Optional:-->'
    xmlData += '<building>' + arr.building + '</building>'
    xmlData += '<!--Optional:-->'
    xmlData += '<coodinateX>' + arr.coodinateX + '</coodinateX>'
    xmlData += '<!--Optional:-->'
    xmlData += '<coodinateY>' + arr.coodinateY + '</coodinateY>'
    xmlData += '<!--Optional:-->'
    xmlData += '<createdBy>' + arr.createdBy + '</createdBy>'
    xmlData += '<!--Optional:-->'
    xmlData += '<floor>' + arr.floor + '</floor>'
    xmlData += '<!--Optional:-->'
    xmlData += '<lawsuitCode>' + arr.lawsuitCode + '</lawsuitCode>'
    xmlData += '<!--Optional:-->'
    xmlData += '<locationId>' + arr.locationId + '</locationId>'
    xmlData += '<!--Optional:-->'
    xmlData += '<locationName>' + arr.locationName + '</locationName>'
    xmlData += '<!--Optional:-->'
    xmlData += '<noticeCode>' + arr.noticeCode + '</noticeCode>'
    xmlData += '<!--Optional:-->'
    xmlData += '<policeStation>' + arr.policeStation + '</policeStation>'
    xmlData += '<!--Optional:-->'
    xmlData += '<road>' + arr.road + '</road>'
    xmlData += '<!--Optional:-->'
    xmlData += '<room>' + arr.room + '</room>'
    xmlData += '<!--Optional:-->'
    xmlData += '<subdistrictCode>' + arr.subdistrictCode + '</subdistrictCode>'
    xmlData += '<!--Optional:-->'
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
