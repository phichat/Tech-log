

function getRaceByKeyword(key, callback){
    var url = 'http://103.233.193.62/GetRace/getRaceByKeyword'
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