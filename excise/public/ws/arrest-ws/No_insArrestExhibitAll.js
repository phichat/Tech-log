function insArrestExhibitAll(arg, callback) {
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": "http://103.233.193.62/ManageExhibit/insArrestExhibitAll",
        "method": "POST",
        "headers": {
            "Content-Type": "application/x-www-form-urlencoded",
            "Cache-Control": "no-cache",
        },
        "data": {
            "IsExhibitco": arg.IsExhibitco,
            "ProductCode": arg.ProductCode,
            "ProductName": arg.ProductName,
            "IsDomestic": arg.IsDomestic,
            "Sizes": arg.Sizes,
            "UnitCode": arg.UnitCode,
            "Qty": arg.Qty,
            "QtyUnit": arg.QtyUnit,
            "NetWeight": arg.NetWeight,
            "NetWeightProve": arg.NetWeightProve,
            "IsStatusExhibit": arg.IsStatusExhibit,
            "ExhibitDesc": arg.ExhibitDesc,
            "CarNO": arg.CarNO,
            "ProductGroup": arg.ProductGroup,
            "LawsuiteCode": arg.LawsuiteCode,
            "BrandName": arg.BrandName,
            "Degrees": arg.Degrees,
            "SizesUnitCode": arg.SizesUnitCode,
            "CreatedBy": arg.CreatedBy
        }
    }

    $.ajax(settings).done(function (response) {
        callback(response);
    });
}