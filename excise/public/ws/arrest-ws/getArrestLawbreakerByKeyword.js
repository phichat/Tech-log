function getArrestLawbreakerByKeyword(key, callback) {
    var url = 'http://103.233.193.62/ManageLawbreaker/getArrestLawbreakerByKeyword'
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": url + "?Keyword=" + key,
        "method": "GET",
        "headers": {
            "content-type": "application/json",
            "cache-control": "no-cache"
        }
    }

    $.ajax(settings).done(function (response) {
        callback(response);
    });
}
