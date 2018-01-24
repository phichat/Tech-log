
function updArrestExhibitByCon(arg, callback) {
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "http://103.233.193.62/ManageExhibit/updArrestExhibitByCon",
        "method": "POST",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cache-Control": "no-cache",
            'X-HTTP-Method-Override': "PUT"
        },
        "data": {
            "ExhibitID": arg.ExhibitID,
            "ProductName": arg.ProductName,
            "IsDomestic": arg.IsDomestic,
            "Qty": arg.Qty,
            "QtyUnit": arg.QtyUnit,
            "NetWeight": arg.NetWeight,
            "NetWeightProve": arg.NetWeightProve,
            "IsStatusExhibit": arg.IsStatusExhibit,
            "ExhibitDesc": arg.ExhibitDesc,
            "CarNO": arg.CarNO,
            "LawsuiteCode": arg.LawsuiteCode,
            "Degrees": arg.Degrees,
            "IsArrest": arg.IsArrest
        }
    }

    $.ajax(settings).done(function (response) {
        callback(response);
    });
}
