import React, { Component } from 'react';

class ArrestManageContainer extends Component {
    render() { 
        return ( 
            <div className="arrest-manage container-fluid">
            <div className="row clearfix">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <ol className="breadcrumb breadcrumb-col-teal">
                        <li>2. งานจับกุม</li>
                        <li className="font-bold col-teal">บันทึกการจับกุม(ส.ส. 2/39)</li>
                    </ol>
                </div>
            </div>

            {/* <!-- รายละเอียดบันทึการจับกุม --> */}
            <div className="form-group">
                <div className="card">
                    <div className="header bg-teal">
                        <h2>รายละเอียดบันทึการจับกุม</h2>
                        <ul className="header-dropdown m-r--5">
                            <li>
                                <a href="javascript:void(0)" role="button" >
                                {/* onclick={onToggleCardBody(this)} */}
                                    <i className="material-icons">arrow_drop_down</i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="body">
                        <div className="form-horizontal form-group">
                            <div className="row">
                                <label htmlFor="sle_isNotice" className="control-label col-lg-2 col-md-2 col-sm-2 col-xs-12">ใบแจ้งความนำจับ:</label>
                                <div className="col-lg-1 col-md-1 col-sm-2 col-xs-12">
                                    <select name="isNotice" id="sle_isNotice" className="form-control">
                                        <option value="" selected disabled></option>
                                        <option value="1">มี</option>
                                        <option value="2">ไม่มี</option>
                                    </select>
                                </div>
                                <div className="col-lg-2 col-md-2 col-sm-3 col-xs-12">
                                    <button className="form-control btn btn-default waves-effect">สร้างใบแจ้งความนำจับ</button>
                                </div>
                            </div>

                            <div className="row">
                                <label htmlFor="txt_noticeCode" className="control-label col-lg-2 col-md-2 col-sm-2 col-xs-12">เลขที่:</label>
                                <div className="col-lg-3 col-md-3 col-sm-5 col-xs-12">
                                    <div className="input-group">
                                        <div className="form-line">
                                            <input type="text" name="noticeCode" id="txt_noticeCode" className="form-control"/>
                                        </div>
                                        <span className="input-group-addon" id="spn_nmStaff">
                                            <div className="box-group-addon">
                                                <a href="javascript:void(0);" data-toggle="modal" data-target="#noticeByConModal" className="toggle-popup-list">....</a>
                                            </div>
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <label htmlFor="txt_noticeName" className="control-label col-lg-2 col-md-2 col-sm-2 col-xs-12">ชื่อผู้แจ้ง:</label>
                                <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                                    <div className="form-line">
                                        <input type="text" name="noticeName" id="txt_noticeName" className="form-control"/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <label htmlFor="txt_lawsuitCode" className="control-label col-lg-2 col-md-2 col-sm-2 col-xs-12">เลขที่งาน:</label>
                                <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                                    <div className="form-line">
                                        <input type="text" name="lawsuitCode" id="txt_lawsuitCode" className="form-control"/>
                                    </div>
                                </div>

                                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 clear-m clear-p">
                                    <label htmlFor="" className="control-label col-lg-4 col-md-4 col-sm-2 col-xs-12">วันที่เขียนบันทึกจับกุม:</label>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="input-group">
                                            <div className="form-line">
                                                <input type="text" name="lawsuitDate" id="txt_lawsuitDate" className="form-control datepicker"/>
                                            </div>
                                            <label htmlFor="txt_lawsuitDate" className="input-group-addon">
                                                <i className="material-icons">event</i>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <label htmlFor="txt_lawsuitLocation" className="control-label col-lg-2 col-md-2 col-sm-2 col-xs-12">เขียนที่:</label>
                                <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                                    <div className="form-line">
                                        <input type="text" name="lawsuitLocation" id="txt_lawsuitLocation" className="form-control"/>
                                    </div>
                                </div>

                                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 clear-m clear-p">
                                    <label htmlFor="" className="control-label col-lg-4 col-md-4 col-sm-2 col-xs-12">วันที่เกิดเหตุ:</label>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <div className="input-group">
                                            <div className="form-line">
                                                <input type="text" name="occurenceDate" id="txt_occurenceDate" className="form-control datepicker"/>
                                            </div>
                                            <label htmlFor="txt_occurenceDate" className="input-group-addon">
                                                <i className="material-icons">event</i>
                                            </label>
                                        </div>
                                    </div>

                                    <label htmlFor="txt_occurenceTime" className="control-label col-lg-1 col-md-1 col-sm-3 col-xs-12">เวลา:</label>
                                    <div className="col-lg-3 col-md-3 col-sm-2 col-xs-12">
                                        <div className="form-line">
                                            <input type="text" name="occurenceTime" id="txt_occurenceTime" className="time24 form-control"/>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="row">

                                <label htmlFor="sle_lawsuitArea" className="control-label col-lg-2 col-md-2 col-sm-2 col-xs-12">พื้นที่:</label>
                                <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                                    <select name="" id="sle_lawsuitArea" className="form-control"></select>
                                </div>


                                <div className="col-lg-7 col-md-7 col-sm-12 col-xs-12 clear-m clear-p">
                                    <label htmlFor="sle_isLawbreaker" className="control-label col-lg-4 col-md-4 col-sm-2 col-xs-12">ผู้กระทำผิด:</label>
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                        <select name="" id="sle_isLawbreaker" className="form-control">
                                            <option value="" selected></option>
                                            <option value="0">ไม่มีตัวตน</option>
                                            <option value="1">มีตัวตน</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                                        <div className="demo-checkbox">
                                            <input type="checkbox" id="chb_CaseLast1" name="caseLast1" className="filled-in" value="1"/>
                                            <label htmlFor="chb_CaseLast1">ส่งฟ้องศาล</label>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="row">
                                <div className="col-lg-5 col-md-5 col-sm-6 col-xs-12">
                                    <label htmlFor="sle_nmGoodName" className="control-label col-lg-5 col-md-5 col-sm-4 col-xs-12 r-8">สินค้า:</label>
                                    <div className="col-lg-7 col-md-7 col-sm-8 col-xs-12 p-l-0 p-r-0">
                                        <div className="form-line">
                                            <select name="" id="sle_nmGoodName" className="form-control z-i-0" ></select>
                                            {/* onchange={onChangGoodName(this)} */}
                                        </div>
                                    </div>
                                    <label htmlFor="ul_nmGoodName" className="control-label col-lg-5 col-md-5 col-sm-4 col-xs-12"></label>
                                    <div className="col-lg-7 col-md-7 col-sm-8 col-xs-12 p-l-0 p-r-0">
                                        <ul className="list-tags good-name" id="ul_nmGoodName">
                                            <li>
                                                <span className="good-name-tag">ยาสูบ</span>
                                                <a href="javascript:void(0);">X</a>
                                                {/* onclick={onDelGoodNameTag(this)} */}
                                            </li>
                                            <li>
                                                <span className="good-name-tag">สุรา</span>
                                                <a href="javascript:void(0);">X</a>
                                                {/* onclick={onDelGoodNameTag(this)} */}
                                            </li>
                                            <li>
                                                <span className="good-name-tag">รถยนต์</span>
                                                <a href="javascript:void(0);">X</a>
                                                {/* onclick={onDelGoodNameTag(this)} */}
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-lg-7 col-md-7 col-sm-6 col-xs-12 clear-m clear-p">
                                    <label htmlFor="txt_fine" className="control-label col-lg-4 col-md-4 col-sm-6 col-xs-12">ประมาณการค่าปรับ:</label>
                                    <div className="col-lg-ุ col-md-6 col-sm-5 col-xs-12">
                                        <div className="form-line">
                                            <input type="texttxt_fine" name="" id="" className="number form-control" placeholder="0.00"/>
                                        </div>
                                    </div>

                                    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 clear-m clear-p">
                                        <label htmlFor="txt_Staff" className="control-label col-lg-4 col-md-4 col-sm-4 col-xs-12">ชื่อผู้กล่าวหา:</label>
                                        <div className="col-lg-6 col-md-6 col-sm-8 col-xs-12">
                                            <div className="input-group">
                                                <div className="form-line">
                                                    <input type="text" name="staff" id="txt_Staff" className="form-control"/>
                                                </div>
                                                <span className="input-group-addon">
                                                    <div className="box-group-addon">
                                                        <a href="javascript:void(0);" data-toggle="modal" data-target="#listStaffModal" className="toggle-popup-list">....</a>
                                                    </div>
                                                </span>
                                            </div>
                                        </div>
                                        
                                        <label htmlFor="txt_Position" className="control-label col-lg-4 col-md-4 col-sm-4 col-xs-12">ตำแหน่ง:</label>
                                        <div className="col-lg-6 col-md-6 col-sm-8 col-xs-12">
                                            <div className="form-line">
                                                <input type="text" name="position" id="txt_Position" className="form-control"/>
                                            </div>
                                        </div>

                                        
                                        <label htmlFor="txt_Department" className="control-label col-lg-4 col-md-4 col-sm-4 col-xs-12">สังกัด:</label>
                                        <div className="col-lg-6 col-md-6 col-sm-8 col-xs-12">
                                            <div className="form-line">
                                                <input type="text" name="department" id="txt_Department" className="form-control"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <label htmlFor="txt_locationName" className="control-label col-lg-2 col-md-2 col-sm-2 col-xs-12">สถานที่เกิดเหตุ:</label>
                                <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                                    <div className="form-line">
                                        <input type="text" name="" id="txt_locationName" className="form-control"/>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <label htmlFor="txt_address" className="control-label col-lg-2 col-md-2 col-sm-2 col-xs-12">บ้านเลขที่:</label>
                                <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                                    <div className="input-group">
                                        <div className="form-line">
                                            <input type="text" name="" id="txt_address" className="form-control"/>
                                        </div>
                                        <span className="input-group-addon p-t-0 p-r-8">หมู่ที่:</span>
                                        <div className="form-line">
                                            <input type="text" name="" id="txt_village" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-2 col-xs-12 clear-m clear-p">
                                    <label htmlFor="txt_building" className="control-label col-lg-4 col-md-4 col-sm-2 col-xs-12">อาคาร/สถานที่:</label>
                                    <div className="col-lg-6 col-md-6 col-sm-4 col-xs-12">
                                        <div className="form-line">
                                            <input type="text" name="" id="txt_building" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <label htmlFor="txt_room" className="control-label col-lg-2 col-md-2 col-sm-2 col-xs-12">ห้อง:</label>
                                <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                                    <div className="input-group">
                                        <div className="form-line">
                                            <input type="text" name="" id="txt_room" className="form-control"/>
                                        </div>
                                        <span className="input-group-addon p-t-0 p-r-8">ชั้น:</span>
                                        <div className="form-line">
                                            <input type="text" name="" id="txt_floor" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-2 col-xs-12  clear-m clear-p">
                                    <label htmlFor="txt_alley" className="control-label col-lg-4 col-md-4 col-sm-2 col-xs-12">ตรอก/ซอย:</label>
                                    <div className="col-lg-6 col-md-6 col-sm-4 col-xs-12">
                                        <div className="form-line">
                                            <input type="text" name="" id="txt_alley" className="form-control"/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <label htmlFor="txt_road" className="control-label col-lg-2 col-md-2 col-sm-2 col-xs-12">ถนน:</label>
                                <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                                    <div className="form-line">
                                        <input type="text" name="" id="txt_road" className="form-control"/>
                                    </div>
                                </div>
                                <div className="col-lg-7 col-md-7 col-sm-2 col-xs-12 clear-m clear-p">
                                    <label htmlFor="sle_region" className="control-label col-lg-4 col-md-4 col-sm-2 col-xs-12">ตำบล/อำเภอ/จังหวัด:</label>
                                    <div className="col-lg-6 col-md-6 col-sm-4 col-xs-12">
                                        <select name="" id="sle_region" className="region form-control"></select>
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <label htmlFor="txt_localPolishStation" className="control-label col-lg-2 col-md-2 col-sm-2 col-xs-12">สถานีตำรวจท้องที่เกิดเหตุ:</label>
                                <div className="col-lg-4 col-md-4 col-sm-5 col-xs-12">
                                    <div className="input-group">
                                        <div className="form-line">
                                            <input type="text" name="" id="txt_localPolishStation" className="form-control"/>
                                        </div>
                                        <span className="input-group-addon">(ส.ส. 2/54)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="row form-group">
                            <div className="row">
                                <label htmlFor="" className="control-label col-lg-12 col-md-12 col-sm-12 col-xs-12">ข้อกล่าวหา:</label>
                                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                    <a href="javasctipt:void();" data-toggle="modal" data-target="#indictmentModal">
                                        <i className="material-icons col-teal">add_circle</i>
                                    </a>
                                    <a href="javasctipt:void();" className="remove-item-from-table">
                                    {/* onclick={onRemoveItemInTable('#tableIndictmentByCon')} */}
                                        <i className="material-icons col-pink">delete</i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                {/* content */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- บัญชีสิ่งของ --> */}
            <div className="form-group">
                <div className="card">
                    <div className="header bg-teal">
                        <h2>บัญชีสิ่งของ</h2>
                        <ul className="header-dropdown m-r--5">
                            <li>
                                <a href="javascript:void(0)" role="button">
                                {/* onclick={onToggleCardBody(this)} */}
                                    <i className="material-icons">arrow_drop_down</i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="body">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <a href="javasctipt:void();" data-toggle="modal" data-target="#exhibitModal">
                                    <i className="material-icons col-teal">add_circle</i>
                                </a>
                                <a href="javasctipt:void();" className="remove-item-from-table">
                                {/* onclick={onRemoveItemInTable('#tableExhibitByCon')} */}
                                    <i className="material-icons col-pink">delete</i>
                                </a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                {/* <div className="table-responsive"></div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- รายชื่อผู้กระทำความผิด --> */}
            <div className="form-group">
                <div className="card">
                    <div className="header bg-teal">
                        <h2>รายชื่อผู้กระทำความผิด</h2>
                        <ul className="header-dropdown m-r--5">
                            <li>
                                <a href="javascript:void(0)" role="button">
                                {/* onclick={onToggleCardBody(this)} */}
                                    <i className="material-icons">arrow_drop_down</i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="body">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <a href="javasctipt:void();" data-toggle="modal" data-target="#lawbreakerModal">
                                    <i className="material-icons col-teal">add_circle</i>
                                </a>
                                <a href="javasctipt:void();" className="remove-item-from-table">
                                {/* onclick={onRemoveItemInTable('#tableLawbreakerByCon')} */}
                                    <i className="material-icons col-pink">delete</i>
                                </a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                {/* content */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- คณะผู้จับกุม --> */}
            <div className="form-group">
                <div className="card">
                    <div className="header bg-teal">
                        <h2>คณะผู้จับกุม</h2>
                        <ul className="header-dropdown m-r--5">
                            <li>
                                <a href="javascript:void(0)" role="button">
                                {/* onclick={onToggleCardBody(this)} */}
                                    <i className="material-icons">arrow_drop_down</i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="body">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                <a href="javasctipt:void();" data-toggle="modal" data-target="#arrestTeamModal" className="mr-5">
                                    <i className="material-icons col-teal">add_circle</i>
                                </a>
                                <a href="javasctipt:void();" className="mr-5">
                                {/* onclick={onRemoveItemInTable('#tableArrestTeam')} */}
                                    <i className="material-icons col-pink">delete</i>
                                </a>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                {/* content */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- บันทึกการจับกุม --> */}
            <div className="form-group">
                <div className="card">
                    <div className="header bg-teal">
                        <h2>บันทึกการจับกุม</h2>
                        <ul className="header-dropdown m-r--5">
                            <li>
                                <a href="javascript:void(0)" role="button">
                                {/* onclick={onToggleCardBody(this)} */}
                                    <i className="material-icons">arrow_drop_down</i>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="body">
                        <div className="row">
                            <label htmlFor="txta_behaviour" className="control-label col-lg-12 col-md-12 col-sm-3 col-xs-12">พฤติกรรมในการจับ</label>
                            <div className="col-lg-12 col-md-12 col-sm-9 col-xs-12">
                                <div className="form-line">
                                    <textarea name="" id="txta_behaviour" rows="5" className="form-control no-resize"></textarea>
                                </div>

                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="txta_testimony " className="control-label col-lg-12 col-md-12 col-sm-3 col-xs-12">คำให้การของผู้ต้องหา</label>
                            <div className="col-lg-12 col-md-12 col-sm-9 col-xs-12">
                                <div className="form-line">
                                    <textarea name="" id="txta_testimony " rows="5" className="form-control no-resize"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <label htmlFor="txta_prompt" className="control-label col-lg-12 col-md-12 col-sm-3 col-xs-12">การแจ้งสิทธิ</label>
                            <div className="col-lg-12 col-md-12 col-sm-9 col-xs-12">
                                <div className="form-line">
                                    <textarea name="" id="txta_prompt" rows="5" className="form-control no-resize"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- button --> */}
            <div className="row">
                <div className="col-lg-8 col-md-6 col-sm-4 col-xs-12"></div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                    <button type="button" className="btn bg-red form-control form-group" id="saveArrest">
                    {/* onclick={onSaveArrest} */}
                        <i className="material-icons">save</i>
                        บันทึก
                    </button>
                </div>
                <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                    <button type="button" className="btn bg-grey form-control form-group" id="cancelArrest">
                    {/* onclick={onCancelArrest} */}
                        <i className="material-icons">close</i>
                        ยกเลิก
                    </button>
                </div>
            </div>

            {/* <!-- NoticeteByCon Modal // รายการแจ้งความนำจับ --> */}
            <div id="noticeByConModal" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" data-toggle="modal"
                data-backdrop="static" data-keyboard="false">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="card">
                            <div className="header bg-teal">
                                <h2>
                                    เลขที่แจ้งความ
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
                            {/* content */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- List staff Modal // รายชื่อพนักงาน --> */}
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
                            <div className="body"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Indictment Modal // ข้อกล่าวหา --> */}
            <div id="indictmentModal" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" data-toggle="modal"
                data-backdrop="static" data-keyboard="false">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="card">
                            <div className="header bg-teal">
                                <h2>
                                    ข้อกล่าวหา
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
                            {/* content */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Exhibit Modal // บัญชีสิ่งของ --> */}
            <div id="exhibitModal" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" data-toggle="modal"
                data-backdrop="static" data-keyboard="false">
                <div className="modal-dialog modal-md" role="document">
                    <div className="modal-content">
                        <div className="card">
                            <div className="header bg-teal">
                                <h2>
                                    บัญชีสิ่งของ
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
                            {/* content */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Lawbreaker Modal // รายชื่อผู้กระทำความผิด --> */}
            <div id="lawbreakerModal" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" data-toggle="modal"
                data-backdrop="static" data-keyboard="false">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="card">
                            <div className="header bg-teal">
                                <h2>
                                    รายชื่อผู้กระทำความผิด
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
                            {/* content */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <!-- Arrest team Modal // คณะผู้จับกุม --> */}
            <div id="arrestTeamModal" className="modal fade" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" data-toggle="modal"
                data-backdrop="static" data-keyboard="false">
                <div className="modal-dialog modal-lg" role="document">
                    <div className="modal-content">
                        <div className="card">
                            <div className="header bg-teal">
                                <h2>
                                    คณะผู้จับกุม
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
                            {/* content */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
         )
    }
}
 
export default ArrestManageContainer;