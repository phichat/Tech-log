function insArrestIndicmentAll(arg, callback) {
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "http://103.233.193.62/ManageIndictment/insArrestIndictmentAll",
        "method": "POST",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cache-Control": "no-cache",
        },
        "data": {
            "NoticeCode": arg.NoticeCode,
            "LawID": arg.LawID,
            "GroupCode": arg.GroupCode,
            "ExhibitWild": arg.ExhibitWild,
            "CreatedBy": arg.CreatedBy,
            "LawsuitCode": arg.LawsuitCode,
            "IsStatus": arg.IsStatus
        }
    }

    $.ajax(settings).done(function (response) {
        callback(response);
    });
}