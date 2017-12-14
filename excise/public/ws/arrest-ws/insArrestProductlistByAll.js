function insArrestProductlistByAll(obj, callback) {
    var url = 'http://103.233.193.62/ManageProductlist/insArrestProductlistByAll'

    // ProductListId		    M	Y		Runing Number		
    // GroupCode		        M		Y	กลุ่มสินค้า		
    // GroupName			        		สินค้า		
    // NoticeCode		        M		Y	อ้างอิงเอกสารใบแจ้งความนำจับ FK Table : ops_notice		
    // LawsuitCode		        M		Y	"อ้างอิงเลขที่คดี"		
    // CreationDate		        M			วันที่สร้างรายการ		
    // CreateUser		        M			User ที่สร้างรายการ		

    var objData = {
        ProductListId: "",
        GroupCode: "1000",
        GroupName: "กิจการเสี่ยงโชค",
        NoticeCode: "LS411016000003",
        LawsuitCode: "",
        CreationDate: "",
        CreateUser: "",
    }

    var settings = {
        "async": false,
        "crossDomain": true,
        "url": url,
        "method": "POST",
        "data": JSON.stringify(objData),
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