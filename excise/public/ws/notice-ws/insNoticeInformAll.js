
function insNoticeInformAll(arr, callback) {
    var xmlData = ''
    // xmlData += '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:inf="http://inf.soap.tlexc.custom.go.th/">'
    // xmlData += '<soapenv:Header/>'
    // xmlData += '<soapenv:Body>'
    // xmlData += '<inf:insNoticeInformAll'
    // xmlData += '<arg0>'
    // xmlData += '<inform>'
    // xmlData += '<address>PK House</address>'
    // xmlData += '<age></age>'
    // xmlData += '<alley></alley>'
    // xmlData += '<building></building>'
    // xmlData += '<createdBy>Admin</createdBy>'
    // xmlData += '<firstName>บุญมาก</firstName>'
    // xmlData += '<floor></floor>'
    // xmlData += '<genderType>1</genderType>'
    // xmlData += '<inFormID></inFormID>'
    // xmlData += '<lastName>เจริญชัย</lastName>'
    // xmlData += '<noticeCode>LS0501016000006</noticeCode>'
    // xmlData += '<postCode></postCode>'
    // xmlData += '<road></road>'
    // xmlData += '<room></room>'
    // xmlData += '<subdistrictCode>940601</subdistrictCode>'
    // xmlData += '<titleCode>105 </titleCode>'
    // xmlData += '<titleName>ว่าที่ ร.ต.</titleName>'
    // xmlData += '<village></village>'
    // xmlData += '<iDCard></iDCard>'
    // xmlData += '</inform>'
    // xmlData += '</arg0>'
    // xmlData += '</inf:insNoticeInformAll>'
    // xmlData += '</soapenv:Body>'
    // xmlData += '</soapenv:Envelope>'



    xmlData += '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:inf="http://inf.soap.tlexc.custom.go.th/">'
    xmlData += '<soapenv:Header/>'
    xmlData += '<soapenv:Body>'
    xmlData += '<inf:insNoticeInformAll>'

    xmlData += '<arg0>'
    xmlData += '<inform>'
    xmlData += '<address>' + arr.address + '</address>'
    xmlData += '<age>' + arr.age + '</age>'
    xmlData += '<alley>' + arr.alley + '</alley>'
    xmlData += '<building>' + arr.building + '</building>'
    xmlData += '<createdBy>' + arr.createdBy + '</createdBy>'
    xmlData += '<firstName>' + arr.firstName + '</firstName>'
    xmlData += '<floor>' + arr.floor + '</floor>'
    xmlData += '<genderType>' + arr.genderType + '</genderType>'
    xmlData += '<inFormID>' + arr.inFormID + '</inFormID>'
    xmlData += '<lastName>' + arr.lastName + '</lastName>'
    xmlData += '<noticeCode>' + arr.noticeCode + '</noticeCode>'
    xmlData += '<postCode>' + arr.postCode + '</postCode>'
    xmlData += '<road>' + arr.road + '</road>'
    xmlData += '<room>' + arr.room + '</room>'
    xmlData += '<subdistrictCode>' + arr.subdistrictCode + '</subdistrictCode>'
    xmlData += '<titleCode>' + arr.titleCode + '</titleCode>'
    xmlData += '<titleName>' + arr.titleName + '</titleName>'
    xmlData += '<village>' + arr.village + '</village>'
    xmlData += '<iDCard>' + arr.iDCard + '</iDCard>'
    xmlData += '</inform>'
    xmlData += '</arg0>'
    xmlData += '</inf:insNoticeInformAll>'
    xmlData += '</soapenv:Body>'
    xmlData += '</soapenv:Envelope>'
debugger
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