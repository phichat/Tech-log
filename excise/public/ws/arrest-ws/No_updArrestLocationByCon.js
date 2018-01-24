// ยังไม่ผ่าน

function updArrestLocationByCon(arg, callback) {
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "http://103.233.193.62/UpdateArrest/updArrestLocationByCon",
        "method": "POST",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cache-Control": "no-cache",
            'X-HTTP-Method-Override': "PUT"
        },
        "data": {
            "LawsuitCode": arg.LawsuitCode,
            "ArrestLocationName": arg.ArrestLocationName,
            "ArrestBuilding": arg.ArrestBuilding,
            "ArrestRoom": arg.ArrestRoom,
            "ArrestAddress": arg.ArrestAddress,
            "ArrestVillage": arg.ArrestVillage,
            "ArrestFloor": arg.ArrestFloor,
            "ArrestAlley": arg.ArrestAlley,
            "ArrestRoad": arg.ArrestRoad,
            "ArrestCoodinateX": arg.ArrestCoodinateX,
            "ArrestCoodinateY": arg.ArrestCoodinateY
        }
    }

    $.ajax(settings).done(function (response) {
        callback(response);
    });
}