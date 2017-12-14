function insArrestLawsuitAll(obj, callback) {
    var url = 'http://103.233.193.62/InsertArrest/insArrestLawsuitAll'

    // LawsuitCode		        M	Y		หมายเลขที่คดี		
    // LawsuitDate		        M			วันที่บันทึก		
    // DepartmentCode							
    // DepartmentName		    M			ชื่อหน่วยงาน		
    // AreaCode					
    // HaveCulprit		        M			"มีตัวผู้ต้องหาหรือไม่ 1 = มี ,  0 = ไม่มี"			
    // OccurrenceTime		    O			เวลาที่เกิดเหตุ		
    // OccurrenceDate		    M			วันที่เกิดเหตุ		
    // Behaviour		        O			พฤติการณ์ในการจับกุม		
    // Testimony		        O			คำให้การของผู้ต้องหา		
    // Prompt		            O			การแจ้งสิทธิ์	
    // AccuserTitleName							
    // AccuserName 					        ชื่อ-สกุลผู้กล่าวหา				
    // AccuserType		        M			ประเภทผู้กล่าวหา
    // AccuserDeptName		    M			ชื่อหน่วยงานผู้กล่าวหา		
    // AccuserPositionName		M			สังกัดผู้กล่าวหา		
    // ArrestReportDate		    O			รายงานวันที่จับกุม
    // NoticeCode	    
    // IsNotice					            มีใบแจ้งความ 0=ไม่มี , 1 = มี	
    var objData = {
        LawsuitCode: "NEW",
        LawsuitDate: "14/12/2560",
        DepartmentCode: "602",
        DepartmentName: "กม. ส่วนกฏหมายและระเบียบ",
        AreaCode: '',
        HaveCulprit: 1,
        OccurrenceTime: "13:24",
        OccurrenceDate: "14/12/2560",
        Behaviour: "พฤติการณ์ในการจับกุม",
        Testimony: "คำให้การของผู้ต้องหา",
        Prompt: "การแจ้งสิทธิ์",
        AccuserTitleName: "",
        AccuserName: "สมชาย ปรารมภ์",
        AccuserType: "",
        AccuserDeptName: "สำนักงานสรรพสามิตพื้นที่น่าน",
        AccuserPositionName: "เจ้าพนักงานสรรพสามิต",
        ArrestReportDate: "",
        NoticeCode: "LS411016000003",
        IsNotice: 1,
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
// {
// "LawsuitCode": "NEW",
// "LawsuitDate": "14/12/2560",
// "DepartmentCode": "602",
// "DepartmentName": "กม. ส่วนกฏหมายและระเบียบ",
// "AreaCode": '',
// "HaveCulprit": 1,
// "OccurrenceTime": "13:24",
// "OccurrenceDate": "14/12/2560",
// "Behaviour": "พฤติการณ์ในการจับกุม",
// "Testimony": "คำให้การของผู้ต้องหา",
// "Prompt": "การแจ้งสิทธิ์",
// "AccuserTitleName": "",
// "AccuserName": "สมชาย ปรารมภ์",
// "AccuserType": "",
// "AccuserDeptName": "สำนักงานสรรพสามิตพื้นที่น่าน",
// "AccuserPositionName": "เจ้าพนักงานสรรพสามิต",
// "ArrestReportDate": "",
// "NoticeCode": "LS411016000003",
// "IsNotice": 1,
// }