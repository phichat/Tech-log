// ยังไม่ผ่าน

function updArrestLawsuilttByCon(arg, callback) {
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "http://103.233.193.62/UpdateArrest/updArrestLawsuilttByCon",
        "method": "POST",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cache-Control": "no-cache",
            'X-HTTP-Method-Override': "PUT"
        },
        "data": {
            "LawsuitCode": arg.LawsuitCode,
            "LawsuitDate": arg.LawsuitDate,
            "DepartmentCode": arg.DepartmentCode,
            "DepartmentName": arg.DepartmentName,
            "AreaCode": arg.AreaCode,
            "HaveCulprit": arg.HaveCulprit,
            "OccurrenceTime": arg.OccurrenceTime,
            "OccurrenceDate": arg.OccurrenceDate,
            "Behaviour": arg.Behaviour,
            "Testimony": arg.Testimony,
            "Prompt": arg.Prompt,
            "AccuserName": arg.AccuserName,
            "AccuserType": arg.AccuserType,
            "AccuserDeptName": arg.AccuserDeptName,
            "AccuserPositionName": arg.AccuserPositionName,
            "NoticeCode": arg.NoticeCode,
            "IsNotice": arg.IsNotice
        }
    }

    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}