function getArrestLawbreakerByKeyword(key, callback) {
  var settings = {
    "async": false,
    "crossDomain": true,
    "url": "http://103.233.193.62/ManageLawbreaker/getArrestLawbreakerByKeyword",
    "method": "POST",
    "headers": {
      "Content-Type": "application/x-www-form-urlencoded",
      "Cache-Control": "no-cache",
      'X-HTTP-Method-Override': "GET"
    },
    "data": {
      "KeyWord": key
    }
  }

  $.ajax(settings).done(function (response) {
    callback(response);
  });
}
