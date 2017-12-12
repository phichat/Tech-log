function getNationalityByKeyword(key, callback){
    var url = 'http://103.233.193.62/GetNationality/getNationalityByKeyword'
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": url + "?Keyword=" + key,
        "method": "POST",
        "headers": {
            "content-type": "application/json",
            "cache-control": "no-cache",
            'X-HTTP-Method-Override': "GET"
        }
    }

    $.ajax(settings).done(function (response) {
        callback(response);
    });
}