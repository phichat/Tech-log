function getTitleByKeyword(key, callback) {
    var url = 'http://103.233.193.62/gettitle/getTitleByKeyword'
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": url + "?Keyword=" + key,
        "method": "POST",
        "data":{
            "Keyword": key
        },
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache",
            'X-HTTP-Method-Override': "GET"
        }
    }

    $.ajax(settings).done(function (response) {
        callback(response);
    });
}