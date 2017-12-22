function getArrestLawbreakerByKeyword(key, callback) {
    var url = 'http://103.233.193.62/ManageLawbreaker/getArrestLawbreakerByKeyword'
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": url,
        "method": "POST",
        "headers": {
          "content-type": "application/x-www-form-urlencoded",
          "cache-control": "no-cache",
          'X-HTTP-Method-Override': "GET"
        },
        "data": {
          "Keyword": key
        }
      }
      
      $.ajax(settings).done(function (response) {
        callback(response);
      });
}
