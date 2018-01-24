function insArrestAarrestteamAll(arg, callback) {
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "http://103.233.193.62/InsertArrest/insArrestAarrestteamAll",
        "method": "POST",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cache-Control": "no-cache",
        },
        "data": {
            "StaffFirstName": arg.StaffFirstName,
            "StaffLastName": arg.StaffLastName,
            "PostionName": arg.PostionName,
            "DepartmentName": arg.DepartmentName,
            "ContributorCode": arg.ContributorCode,
            "CreatedBy": arg.CreatedBy,
            "ArrestTeamID": arg.ArrestTeamID,
            "LawsuitCode": arg.LawsuitCode,
            "StaffCode": arg.StaffCode,
            "CreationDate": arg.CreationDate,
            "InputFromTable": arg.InputFromTable,
            "StatusCode": arg.StatusCode
        }
    }

    $.ajax(settings).done(function (response) {
        callback(response);
    });
}