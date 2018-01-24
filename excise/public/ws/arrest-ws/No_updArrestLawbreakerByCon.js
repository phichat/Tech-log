// ยังไม่ผ่าน

function updArrestLawbreakerByCon(arg, callback) {
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "http://103.233.193.62/ManageLawbreaker/updArrestLawbreakerByCon",
        "method": "POST",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cache-Control": "no-cache",
            'X-HTTP-Method-Override': "PUT"
        },
        "data": {
            "LawbreakerID": arg.LawbreakerID,
            "EntityType": arg.EntityType,
            "CompanyName": arg.CompanyName,
            "CoperationCode": arg.CoperationCode,
            "TitleCode": arg.TitleCode,
            "TitleName": arg.TitleName,
            "FirstName": arg.FirstName,
            "MiddleName": arg.MiddleName,
            "LastName": arg.LastName,
            "OtherName": arg.OtherName,
            "NationalityCode": arg.NationalityCode,
            "NationalityNameTh": arg.NationalityNameTh,
            "Career": arg.Career,
            "ExciseRegNO": arg.ExciseRegNO,
            "IsActive": arg.IsActive,
            "RaceCode": arg.RaceCode,
            "RaceName": arg.RaceName,
            "BirthDate": arg.BirthDate,
            "LawbreakerIDCard": arg.LawbreakerIDCard,
            "LawbreakerPassport": arg.LawbreakerPassport,
            "LawsuitCode": arg.LawsuitCode,
            "FatherName": arg.FatherName,
            "MotherName": arg.MotherName,
            "Address": arg.Address,
            "Village": arg.Village,
            "Alley": arg.Alley,
            "Road": arg.Road,
            "SubdistrictCode": arg.SubdistrictCode
        }
    }

    $.ajax(settings).done(function (response) {
        callback(response);
    });
}
