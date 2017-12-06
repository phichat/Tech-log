import React, { Component } from 'react';

class NoticeManageContainer extends Component {
    state = {}

    render() {
        const z0 = { zIndex: 0 }
        const z1 = { zIndex: 1 }
        return (
            <div id="noticeManage" className="notice-manage container-fluid">
                <div className="row clearfix">
                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                        <ol className="breadcrumb breadcrumb-col-teal">
                            <li>1. งานสืบสวน</li>
                            <li className="font-bold col-teal">ใบแจ้งความนำจับ</li>
                        </ol>
                    </div>
                </div>

                {/* <!-- ผู้รับแจ้งความ --> */}
                {/* <!-- <div className="form-group"> --> */}
                <div className="card">
                    <div className="header bg-teal">
                        <h2>
                            ผู้รับแจ้งความ
                    </h2>
                        <ul className="header-dropdown m-r--5">
                            <li>
                                <a href="javascript:void(0);" role="button" onclick="onToggleCardBody(this);">
                                    <i className="material-icons">arrow_drop_down</i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="body">
                        {/* <!-- <div className="form-group"> --> */}
                        <div className="form-horizontal">
                            <div className="row">
                                <label className="control-label col-lg-2 col-md-3 col-sm-4 col-xs-12" for="txt_nmNoticeCode">เลขที่บันทึกแจ้งความ:</label>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group form-float">
                                        <div className="form-line">
                                            <input type="text" name="NoticeCode" className="form-control" id="txt_nmNoticeCode" disabled value="NEW" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <label className="control-label col-lg-2 col-md-3 col-sm-4 col-xs-12" for="sle_nmNoticeStation">เขียนที่:</label>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group form-float">
                                        <select name="stationCode" id="sle_nmNoticeStation" className="form-control required" required></select>
                                    </div>
                                </div>
                                <label className="control-label col-lg-2 col-md-2 col-sm-4 col-xs-12" for="">หน่วยงาน:</label>
                                <div className="col-lg-4 col-md-3 col-sm-6 col-xs-12">
                                    <div className="form-group form-float">
                                        <select name="departmentName" id="sle_nmDepartmentName" className="form-control required" required></select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <label className="control-label col-lg-2 col-md-3 col-sm-4 col-xs-12">วันที่รับแจ้งความ:</label>
                                <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12">
                                    <div className="input-group">
                                        <div className="form-group form-float">
                                            <div className="form-line">
                                                <input type="text" className="form-control datepicker required" id="txt_nmNoticeDate" name="noticeDate" onchange="onChangDueDate('#txt_nmNoticeDate', '#txt_nmDueDate', '#txt_nmEndDate');"
                                                    required />
                                            </div>
                                        </div>
                                        <label for="txt_nmNoticeDate" className="input-group-addon" id="spn_nmNoticeDate">
                                            <i className="material-icons">event</i>
                                        </label>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12 between-item">
                                    <div className="form-group form-float">
                                        <div className="input-group">
                                            <label className="input-group-addon">
                                                เวลา:
                                        </label>
                                            <div className="form-line">
                                                <input type="text" className="time24 form-control required" name="noticeTime" id="txt_nmNoticeTime" required />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <label className="control-label col-lg-4 col-md-5 col-sm-4 col-xs-12" for="txt_nmDueDate">ใบแจ้งความนำจับฉบับนี้ใช้ได้ภายในกำหนด:</label>
                                <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12">
                                    <div className="form-group form-float">
                                        <div className="input-group">
                                            <div className="form-line">
                                                <input type="text" className="form-control required" name="getDate" id="txt_nmDueDate" maxlength="2" style={{z0}}
                                                    onkeyup="onChangDueDate('#txt_nmNoticeDate', '#txt_nmDueDate', '#txt_nmEndDate');"
                                                    required />
                                            </div>
                                            <span className="input-group-addon" id="spn_nmGetDate">วัน</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6 col-md-5 col-sm-12 col-xs-12 clear-m clear-p">
                                    <label className="control-label col-lg-4 col-md-5 col-sm-4 col-xs-12" for="txt_nmEndDate">สิ้นสุดวันที่:</label>
                                    <div className="col-lg-6 col-md-7 col-sm-6 col-xs-12">
                                        <div className="form-group form-float">
                                            <div className="form-line">
                                                <input type="text" name="endDate" id="txt_nmEndDate" className="form-control required" disabled />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <label className="control-label col-lg-2 col-md-3 col-sm-4 col-xs-12" for="">ผู้รับแจ้งความนำจับ:</label>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group form-float">
                                        <div className="input-group" style={{z1}}>
                                            <select name="" id="sle_nmStaff" className="form-control required" style={{z0}} onchange="onChangeStaff(this);" required></select>
                                            <span className="input-group-addon" id="spn_nmStaff">
                                                <div className="box-group-addon">
                                                    <a href="javascript:void(0);" data-toggle="modal" data-target="#listStaffModal" className="toggle-popup-list">....</a>
                                                </div>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <label className="control-label col-lg-2 col-md-3 col-sm-4 col-xs-12" for="txt_nmPosition">ตำแหน่ง:</label>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group form-float">
                                        <div className="form-line">
                                            <input type="text" className="form-control required" name="position" id="txt_nmPosition" required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <label className="control-label col-lg-2 col-md-3 col-sm-4 col-xs-12" for="txt_nmDepartment">สังกัด:</label>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group form-float">
                                        <div className="form-line">
                                            <input type="text" className="form-control required" name="department" id="txt_nmDepartment" required />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- </div> --> */}
                    </div>
                </div>
                {/* <!-- </div> --> */}

                {/* <!-- รายละเอียดผู้แจ้งความ --> */}
                {/* <!-- <div className="form-group"> --> */}
                <div className="card">
                    <div className="header bg-teal">
                        <h2>
                            รายละเอียดผู้แจ้งความ
                    </h2>
                        <ul className="header-dropdown m-r--5">
                            <li>
                                <a href="javascript:void(0);" role="button" onclick="onToggleCardBody(this);">
                                    <i className="material-icons">arrow_drop_down</i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="body">
                        {/* <!-- <div className="form-group"> --> */}
                        <div className="form-horizontal">
                            <div className="row">
                                <label className="control-label col-lg-2 col-md-2 col-sm-4 col-xs-12" for="">ผู้แจ้งความ:</label>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group form-float">
                                        <select name="infromType" id="sle_nmInformType" className="form-control required" style={{z0}} onchange="onChangeTypeInfrom(this, '#txt_nmInfromAlies');"
                                            required>
                                            <option value="0" selected>สายลับ(ขอปิดนาม)</option>
                                            <option value="1">ระบุชื่อ</option>
                                        </select>
                                    </div>
                                </div>
                                <label className="control-label col-lg-2 col-md-2 col-sm-4 col-xs-12" for="txt_nmInfromAlies">ชื่อ(นามแฝง)ผู้แจ้ง:</label>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group form-float">
                                        <div className="form-line">
                                            <input type="text" name="infromAlies" id="txt_nmInfromAlies" className="form-control required" style={{z0}} value="สายลับ(ขอปิดนาม)"
                                                disabled required />
                                        </div>
                                    </div>
                                </div>
                                <label className="control-label col-lg-2 col-md-2 col-sm-4 col-xs-12" for="txt_nmInfromAge">อายุผู้แจ้ง:</label>
                                <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12">
                                    <div className="input-group">
                                        <div className="form-line">
                                            <input type="text" maxlength="2" name="informAge" id="txt_nmInfromAge" className="form-control" style={{z0}} onkeyup="onCheckInt(this);" />
                                        </div>
                                        <span className="input-group-addon" id="spn_nmInfromAge">
                                            <span>ปี</span>
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <label className="control-label col-lg-2 col-md-2 col-sm-4 col-xs-12" for="txt_nmInfromAddress">บ้านเลขที่:</label>
                                <div className="col-lg-2 col-md-2 col-sm-3 col-xs-5">
                                    <div className="form-group form-float">
                                        <div className="form-line">
                                            <input type="text" name="infromAddress" id="txt_nmInfromAddress" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-3 col-xs-7 between-item">
                                    <div className="input-group">
                                        <label className="input-group-addon">หมู่ที่:</label>
                                        <div className="form-line">
                                            <input type="text" name="inforVillage" id="txt_nmInfromVillage" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <label className="control-label col-lg-2 col-md-2 col-sm-4 col-xs-12" for="txt_nmInfromBuilding">อาคาร/สถานที่:</label>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group form-float">
                                        <div className="form-line">
                                            <input type="text" name="infromBuliding" id="txt_nmInfromBuilding" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <label className="control-label col-lg-2 col-md-2 col-sm-4 col-xs-12" for="txt_nmInfromRoom">ห้อง:</label>
                                <div className="col-lg-2 col-md-2 col-sm-3 col-xs-5">
                                    <div className="form-group form-float">
                                        <div className="form-line">
                                            <input type="text" name="infromRoom" id="txt_nmInfromRoom" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-3 col-xs-7">
                                    <div className="form-group form-float">
                                        <div className="input-group">
                                            <label className="input-group-addon">ชั้น:</label>
                                            <div className="form-line">
                                                <input type="text" name="infromClass" id="txt_nmInfromFloor" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <label className="control-label col-lg-2 col-md-2 col-sm-4 col-xs-12" for="txt_nmInfromAlley">ตรอก/ซอย:</label>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group form-float">
                                        <div className="form-line">
                                            <input type="text" name="infromAlley" id="txt_nmInfromAlley" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <label className="control-label col-lg-2 col-md-2 col-sm-4 col-xs-12" for="txt_nmInfromRoad">ถนน:</label>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group form-float">
                                        <div className="form-line">
                                            <input type="text" name="infromRoad" id="txt_nmInfromRoad" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <label className="control-label col-lg-2 col-md-2 col-sm-4 col-xs-12" for="">ตำบล/อำเภอ/จังหวัด:</label>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group form-float">
                                        <select name="infromRegion" id="sle_nmInfromRegion" className="region form-control"></select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <!-- </div> --> */}
                    </div>
                </div>
                {/* <!-- </div> --> */}

                {/* <!--  รายละเอียดการกระทำความผิด  --> */}
                {/* <!-- <div className="form-group"> --> */}
                <div className="card">
                    <div className="header bg-teal">
                        <h2>
                            รายละเอียดการกระทำความผิด
                    </h2>
                        <ul className="header-dropdown m-r--5">
                            <li>
                                <a href="javascript:void(0);" role="button" onclick="onToggleCardBody(this);">
                                    <i className="material-icons">arrow_drop_down</i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="body">
                        {/* <!-- <div className="form-group"> --> */}
                        <div className="form-horizontal">
                            <div className="row">
                                <label className="control-label col-lg-2 col-md-2 col-sm-4 col-xs-12" for="txt_nmLocation">สถานที่เกิดเหตุ:</label>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group form-float">
                                        <div className="form-line">
                                            <textarea name="location" id="txt_nmLocation" rows="4" className="form-control no-resize required" required></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <label className="control-label col-lg-2 col-md-2 col-sm-4 col-xs-12" for="txt_nmOpsAddress">บ้านเลขที่:</label>
                                <div className="col-lg-2 col-md-2 col-sm-3 col-xs-5">
                                    <div className="form-group form-float">
                                        <div className="form-line">
                                            <input type="text" name="opsAddress" id="txt_nmOpsAddress" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-3 col-xs-7">
                                    <div className="form-group form-float">
                                        <div className="input-group">
                                            <label className="input-group-addon">หมู่ที่:</label>
                                            <div className="form-line">
                                                <input type="text" name="opsVillage" id="txt_nmOpsVillage" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <label className="control-label col-lg-2 col-md-2 col-sm-4 col-xs-12" for="txt_nmOpsBuilding">อาคาร/สถานที่:</label>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group form-float">
                                        <div className="form-line">
                                            <input type="text" name="opsBuliding" id="txt_nmOpsBuilding" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <label className="control-label col-lg-2 col-md-2 col-sm-4 col-xs-12" for="txt_nmOpsRoom">ห้อง:</label>
                                <div className="col-lg-2 col-md-2 col-sm-3 col-xs-5">
                                    <div className="form-group form-float">
                                        <div className="form-line">
                                            <input type="text" name="opsRoom" id="txt_nmOpsRoom" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-3 col-xs-7">
                                    <div className="form-group form-float">
                                        <div className="input-group">
                                            <label className="input-group-addon">ชั้น:</label>
                                            <div className="form-line">
                                                <input type="text" name="opsFloor" id="txt_nmOpsFloor" className="form-control" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <label className="control-label col-lg-2 col-md-2 col-sm-4 col-xs-12" for="txt_nmOpsAlley">ตรอก/ซอย:</label>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group form-float">
                                        <div className="form-line">
                                            <input type="text" name="opsAlley" id="txt_nmOpsAlley" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <label className="control-label col-lg-2 col-md-2 col-sm-4 col-xs-12" for="txt_nmOpsRoad">ถนน:</label>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group form-float">
                                        <div className="form-line">
                                            <input type="text" name="opsRoad" id="txt_nmOpsRoad" className="form-control" />
                                        </div>
                                    </div>
                                </div>
                                <label className="control-label col-lg-2 col-md-2 col-sm-4 col-xs-12" for="">ตำบล/อำเภอ/จังหวัด:</label>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group form-float">
                                        <select name="opsRegion" id="sle_nmOpsRegion" className="region form-control required" required></select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <label className="control-label col-lg-2 col-md-2 col-sm-4 col-xs-12" for="">สินค้า:</label>
                                <div className="col-lg-4 col-md-4 col-sm-6 col-xs-12">
                                    <div className="form-group form-float">
                                        <select name="" id="sle_nmGoodName" className="form-control" style={{z0}} onchange="onChangGoodName(this);"></select>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12"></div>
                                <div className="col-lg-10 col-md-10 col-sm-8 col-xs-12">
                                    <div className="form-group form-float">
                                        <ul className="list-tags required" name="goodName" id="ul_nmGoodName" required></ul>
                                    </div>
                                    <ul className="hidden" id="ul_nmGoodNameCheck"></ul>
                                </div>
                            </div>
                        </div>
                        {/* <!-- </div> --> */}
                    </div>
                </div>
                {/* <!-- </div> --> */}

                {/* <!-- button --> */}
                <div className="row">
                    <div className="col-lg-8 col-md-6 col-sm-4 col-xs-12"></div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                        <button type="button" className="btn bg-red form-control form-group" id="saveNotice" onclick="onSaveNotice('.notice-manage');">
                            <i className="material-icons">save</i>
                            บันทึก
                    </button>
                        <button type="button" className="btn bg-red form-control form-group hidden" id="printNotice"
                            onclick="">
                            <i className="material-icons">print</i>
                            พิมพ์
                        </button>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                        <button type="button" className="btn bg-grey form-control form-group" id="cancelNotice" onclick="onCancelNotice();">
                            <i className="material-icons">close</i>
                            ยกเลิก
                    </button>
                    </div>
                </div>

                {/* <!-- List staff modal --> */}
                <div id="listStaffModal" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" data-toggle="modal"
                    data-backdrop="static" data-keyboard="false">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="card">
                                <div className="header bg-teal">
                                    <h2>
                                        รายชื่อเจ้าหน้าที่
                                </h2>
                                    <ul className="header-dropdown m-r--5">
                                        <li>
                                            <a href="javascript:void(0);" data-dismiss="modal">
                                                <i className="material-icons">close</i>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="body">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NoticeManageContainer;