function insArrestProductlistByAll(obj, callback) {
    var url = 'http://103.233.193.62/ManageProductlist/insArrestProductlistByAll'

    // ProductListId		    M	Y		Runing Number		
    // GroupCode		        M		Y	กลุ่มสินค้า		
    // GroupName			        		สินค้า		
    // NoticeCode		        M		Y	อ้างอิงเอกสารใบแจ้งความนำจับ FK Table : ops_notice		
    // LawsuitCode		        M		Y	"อ้างอิงเลขที่คดี"		
    // CreationDate		        M			วันที่สร้างรายการ		
    // CreateUser		        M			User ที่สร้างรายการ		

    var arrayData = {
        "ProductListId": "01",
        "GroupCode": "1000",
        "GroupName": "กิจการเสี่ยงโชค",
        "NoticeCode": "LS411016000003",
        "LawsuitCode": "01",
        "CreationDate": "20/12/2560",
        "CreateUser": "Admin",
    }
    var settings = {
        "async": false,
        "crossDomain": true,
        "url": url,
        "method": "POST",
        "data": arrayData,
        "headers": {
            "content-type": "application/x-www-form-urlencoded",
            "cache-control": "no-cache"
        }
    }

    $.ajax(settings).done(function (response) {
        callback(response);
    });
}