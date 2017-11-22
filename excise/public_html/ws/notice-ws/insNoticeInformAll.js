
function insNoticeInformAll(arr, callback) {
    var xmlData = ''
    xmlData += '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:inf="http://inf.soap.tlexc.custom.go.th/">'
    xmlData += '<soapenv:Header/>'
    xmlData += '<soapenv:Body>'
    xmlData += '<inf:insNoticeInformAll>'
    xmlData += '<!--Optional:-->'
    xmlData += '<arg0>'
    xmlData += '<!--Optional:-->'
    xmlData += '<inform>'
    xmlData += '<!--Optional:-->'
    xmlData += '<address>' + arr.address + '</address>'
    xmlData += '<!--Optional:-->'
    xmlData += '<age>' + arr.age + '</age>'
    xmlData += '<!--Optional:-->'
    xmlData += '<alley>' + arr.alley + '</alley>'
    xmlData += '<!--Optional:-->'
    xmlData += '<building>' + arr.building + '</building>'
    xmlData += '<!--Optional:-->'
    xmlData += '<createdBy>' + arr.createdBy + '</createdBy>'
    xmlData += '<!--Optional:-->'
    xmlData += '<firstName>' + arr.firstName + '</firstName>'
    xmlData += '<!--Optional:-->'
    xmlData += '<floor>' + arr.floor + '</floor>'
    xmlData += '<!--Optional:-->'
    xmlData += '<genderType>' + arr.genderType + '</genderType>'
    xmlData += '<!--Optional:-->'
    xmlData += '<inFormID>' + arr.inFormID + '</inFormID>'
    xmlData += '<!--Optional:-->'
    xmlData += '<lastName>' + arr.lastName + '</lastName>'
    xmlData += '<!--Optional:-->'
    xmlData += '<noticeCode>' + arr.noticeCode + '</noticeCode>'
    xmlData += '<!--Optional:-->'
    xmlData += '<postCode>' + arr.postCode + '</postCode>'
    xmlData += '<!--Optional:-->'
    xmlData += '<road>' + arr.road + '</road>'
    xmlData += '<!--Optional:-->'
    xmlData += '<room>' + arr.room + '</room>'
    xmlData += '<!--Optional:-->'
    xmlData += '<subdistrictCode>' + arr.subdistrictCode + '</subdistrictCode>'
    xmlData += '<!--Optional:-->'
    xmlData += '<titleCode>' + arr.titleCode + '</titleCode>'
    xmlData += '<!--Optional:-->'
    xmlData += '<titleName>' + arr.titleName + '</titleName>'
    xmlData += '<!--Optional:-->'
    xmlData += '<village>' + arr.village + '</village>'
    xmlData += '<!--Optional:-->'
    xmlData += '<iDCard>' + arr.iDCard + '</iDCard>'
    xmlData += '</inform>'
    xmlData += '</arg0>'
    xmlData += '</inf:insNoticeInformAll>'
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
    .error(function (request, statusText, xhr){
        callback(xhr);
    });
}
