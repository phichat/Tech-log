function getArrestExhibitByCon(arg, callback) {
  var settings = {
    "async": false,
    "crossDomain": true,
    "url": "http://103.233.193.62/ManageExhibit/getArrestExhibitByCon",
    "method": "POST",
    "headers": {
      "Content-Type": "application/x-www-form-urlencoded",
      "Cache-Control": "no-cache",
      'X-HTTP-Method-Override': "GET"
    },
    "data": {
      "ExhibitID": arg.ExhibitID,
      "LawsuiteCode": arg.LawsuiteCode,
      "IsArrest": arg.IsArrest,
    }
  }

  $.ajax(settings).done(function (response) {
    callback(response);
  });
}
