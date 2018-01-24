function getArrestListLawsuiltByConAdv(arg, callback) {
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "http://103.233.193.62/GetArrestList/getArrestListLawsuiltByConAdv",
        "method": "POST",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cache-Control": "no-cache",
            'X-HTTP-Method-Override': "GET"
        },
        "data": {
            "LawsuitCode": arg.LawsuitCode,
            "LawsuitDate": arg.LawsuitDate,
            "DepartmentName": arg.DepartmentName,
            "Area": arg.Area,
            "HaveCulprit": arg.HaveCulprit,
            "OccurrenceDate": arg.OccurrenceDate,
            "AccuserName": arg.AccuserName,
            "AccuserType": arg.AccuserType,
            "NoticeCode": arg.NoticeCode,
            "LawbreakerName": arg.LawbreakerName,
            "LawbreakerIDCard": arg.LawbreakerIDCard,
            "GuiltBaseName": arg.GuiltBaseName,
            "CaseLawID": arg.CaseLawID,
            "GroupName": arg.GroupName,
            "ProductName": arg.ProductName,
            "ExhibitWild": arg.ExhibitWild
        }
    }

    $.ajax(settings).done(function (response) {
        callback(response);
    });
}
