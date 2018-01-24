function insArrestLawbrakerAll(arg, callback) {
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "http://103.233.193.62/ManageLawbreaker/insArrestLawbrakerAll",
        "method": "POST",
        "headers": {
          "Content-Type": "application/x-www-form-urlencoded",
          "Cache-Control": "no-cache",
        },
        "data": {
          "EntityType": arg.EntityType,
          "CompanyName": arg.CompanyName,
          "CoperationCode": arg.CoperationCode,
          "TitleCode": arg.TitleCode,
          "TitleName": arg.TitleName,
          "FirstName": arg.FirstName,
          "MiddleName": arg.MiddleName,
          "LastName": arg.LastName,
          "OtherName": arg.OtherName,
          "MaritalStatus": arg.MaritalStatus,
          "NationalityCode": argNationalityCode,
          "NationalityNameTh": arg.NationalityNameTh,
          "Career": arg.Career,
          "ExciseRegNO": arg.ExciseRegNO,
          "RaceCode": arg.RaceCode,
          "RaceName": arg.RaceName,
          "LawbreakerType": arg.LawbreakerType,
          "BirthDate": arg.BirthDate,
          "LawbreakerIDCard": arg.LawbreakerIDCard,
          "GenderType": arg.GenderType,
          "LawsuitCode": arg.LawsuitCode,
          "LawbreakerPassport": arg.LawbreakerPassport,
          "FatherName": arg.FatherName,
          "MotherName": arg.MotherName,
          "Address": arg.Address,
          "Village": arg.Village,
          "Alley": arg.Alley,
          "Road": arg.Road,
          "SubdistrictCode": arg.SubdistrictCode,
          "CreatedBy": arg.CreatedBy,
          "CreationDate": arg.CreationDate
        }
      }
      
      $.ajax(settings).done(function (response) {
        callback(response);
      });
}