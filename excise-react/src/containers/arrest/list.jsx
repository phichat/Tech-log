import React, { Component } from 'react'
// import { SimpleSelect } from 'react-selectize';

class ArrestListContainer extends Component {

    constructor() {
        super();
        this.state = {
            isToggle: false,
        };
        this.onToggleAdvancedSearch = this.onToggleAdvancedSearch.bind(this);
    }

    onToggleAdvancedSearch(e) {
        e.preventDefault();
        this.setState(prevState => ({
            isToggle: !prevState.isToggle
        }));
    }

    render() {
        const minWidth70 = { 'minWidth': '70px' };
        const minWidth170 = { 'minWidth': '170px' };
        const width20 = { 'width': '20px' };
        return (
            <div className="arrest-list container-fluid">
                <div className="form-group row">
                    <div className="col-lg-10 col-md-10 col-sm-6 col-xs-12">
                        <ol className="breadcrumb breadcrumb-col-teal">
                            <li>2. งานจับกุม</li>
                            <li className="font-bold col-teal">บันทึกการจับกุม(ส.ส. 2/39)</li>
                        </ol>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                        <button className="btn btn-danger waves-effect form-control" type="button" id="btn_nlAddArrest">
                            <span>
                                <i className="material-icons">add_circle</i>
                                เพิ่มข้อมูล
                        </span>
                        </button>
                    </div>
                </div>
                <div className="form-group">
                    <div className="card">
                        <div className="header bg-teal">
                            <h2>
                                ค้นหา
                        </h2>
                        </div>
                        <div className="body">
                            <div className="form-group">
                                <div className="form-horizontal">
                                    <div className="row form-group">
                                        <label className="control-label col-lg-1 col-md-1 col-sm-1 col-xs-12" htmlFor="txt_search">ค้นหา:</label>
                                        <div className="col-lg-5 col-md-5 col-sm-11 col-xs-12">
                                            <div className="form-line">
                                                <input type="text" className="form-control" id="txt_search" placeholder="" />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-sm-11 col-xs-12">
                                            <a href="javascript:void(0);">ค้นหาขั้นสูง</a>
                                            {/* onclick={onToggleAdvancedSearch()} */}
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                                            <button type="button" id="btn_search" className="btn bg-dark-blue-custom waves-effect form-control">
                                                <span>
                                                    <i className="material-icons">search</i>
                                                    ค้นหา
                                            </span>
                                            </button>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                                            <button type="button" id="btn_Clear" className="btn bg-grey waves-effect form-control">
                                                {/* onclick={onClearFormSearch} */}
                                                <span>
                                                    <i className="material-icons">clear</i>
                                                    เคลียร์
                                            </span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {
                                this.state.isToggle &&
                                (
                                    <div className="form-group advanced-search" >
                                        {/* style="display:none;" */}
                                        <div className="form-horizontal">
                                            <div className="row">
                                                <label className="control-label col-lg-2 col-md-2 col-sm-3 col-xs-12" htmlFor="txt_GuiltBaseName">ข้อกล่าวหา:</label>
                                                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                    <div className="form-line">
                                                        <input type="text" className="form-control" name="guiltBaseName" id="txt_GuiltBaseName" />
                                                    </div>
                                                </div>
                                                <label className="control-label col-lg-2 col-md-2 col-sm-1 col-xs-12" htmlFor="txt_CaseLawID">มาตรา:</label>
                                                <div className="col-lg-3 col-md-3 col-sm-4 col-xs-12">
                                                    <div className="form-line">
                                                        <input type="text" className="form-control" name="caseLawID" id="txt_CaseLawID" />
                                                    </div>
                                                </div>
                                                <label className="control-label col-lg-2 col-md-2 col-sm-3 col-xs-12" htmlFor="txt_GroupName">สินค้า:</label>
                                                <div className="col-lg-4 col-md-4 col-sm-9 col-xs-12">
                                                    <div className="form-line">
                                                        <input type="text" className="form-control" name="groupName" id="txt_GroupName" />
                                                    </div>
                                                </div>
                                                <label className="control-label col-lg-2 col-md-2 col-sm-3 col-xs-12" htmlFor="txt_ProductName">ชื่อสินค้าของกลาง:</label>
                                                <div className="col-lg-3 col-md-3 col-sm-9 col-xs-12">
                                                    <div className="form-line">
                                                        <input type="text" className="form-control" name="productName" id="txt_ProductName" />
                                                    </div>
                                                </div>
                                                <label className="control-label col-lg-2 col-md-2 col-sm-3 col-xs-12" htmlFor="chb_ExhibitWild"></label>
                                                <div className="col-lg-4 col-md-3 col-sm-9 col-xs-12">
                                                    <div className="demo-checkbox">
                                                        <input type="checkbox" id="chb_ExhibitWild" name="exhibitWild" className="filled-in" />
                                                        <label htmlFor="chb_ExhibitWild">ของกลางมิชอบด้วยกฏหมาย</label>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <label className="control-label col-lg-2 col-md-2 col-sm-3 col-xs-12" htmlFor="txt_LawbreakerName">ชื่อผู้กระทำผิด:</label>
                                                <div className="col-lg-4 col-md-4 col-sm-9 col-xs-12">
                                                    <div className="form-line">
                                                        <input type="text" className="form-control" name="lawBreakerName" id="txt_LawbreakerName" />
                                                    </div>
                                                </div>
                                                <label className="control-label col-lg-2 col-md-2 col-sm-3 col-xs-12" htmlFor="txt_LawBreakerIDCard">เลขที่บัตรประชาชนผู้กระทำผิด:</label>
                                                <div className="col-lg-3 col-md-3 col-sm-9 col-xs-12">
                                                    <div className="form-line">
                                                        <input type="text" className="form-control" name="lawBreakerIDCard" id="txt_LawBreakerIDCard" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <label className="control-label col-lg-2 col-md-2 col-sm-3 col-xs-12" htmlFor="">วันที่เกิดเหตุ:</label>
                                                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12">
                                                    <div className="input-group">
                                                        <div className="form-line">
                                                            <input type="text" className="form-control datepicker" id="txt_OccurrenceDate" />
                                                            {/* onchange={checkBetweenDate('#txt_OccurrenceDate', '#txt_OccurrenceDateTo')} */}
                                                        </div>
                                                        <label htmlFor="txt_OccurrenceDate" className="input-group-addon">
                                                            <i className="material-icons">event</i>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-12 between-item">
                                                    <div className="input-group">
                                                        <label className="input-group-addon" id="">
                                                            ถึง
                                            </label>
                                                        <div className="form-line">
                                                            <input type="text" className="form-control datepicker" id="txt_OccurrenceDateTo" />
                                                            {/* onchange={checkBetweenDate('#txt_OccurrenceDate', '#txt_OccurrenceDateTo')} */}
                                                        </div>
                                                        <label htmlFor="txt_OccurrenceDateTo" className="input-group-addon" id="">
                                                            <i className="material-icons">event</i>
                                                        </label>
                                                    </div>
                                                </div>
                                                <label className="control-label col-lg-2 col-md-2 col-sm-3 col-xs-12" htmlFor="txt_Region">จังหวัด/อำเภอ/ตำบล:</label>
                                                <div className="col-lg-3 col-md-3 col-sm-9 col-xs-12">
                                                    <div className="form-line">
                                                        <input type="text" className="form-control" name="region" id="txt_Region" />

                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 m-b-0 p-0">
                                                    <label className="control-label col-lg-4 col-md-4 col-sm-3 col-xs-12" htmlFor="">วันที่รับเรื่องส่วนคดี:</label>
                                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                        <div className="input-group">
                                                            <div className="form-line">
                                                                <input type="text" className="form-control datepicker" name="takeDate" id="txt_TakeDate" />
                                                                {/* onchange={checkBetweenDate('#txt_TakeDate', '#txt_TakeDateTo')} */}
                                                            </div>
                                                            <label htmlFor="txt_TakeDate" className="input-group-addon">
                                                                <i className="material-icons">event</i>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 between-item">
                                                        <div className="input-group">
                                                            <label className="input-group-addon">
                                                                ถึง
                                                </label>
                                                            <div className="form-line">
                                                                <input type="text" className="form-control datepicker" name="takeDateTo" id="txt_TakeDateTo" />
                                                                {/* onchange={checkBetweenDate('#txt_TakeDate', '#txt_TakeDateTo')} */}
                                                            </div>
                                                            <label htmlFor="txt_TakeDateTo" className="input-group-addon">
                                                                <i className="material-icons">event</i>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 m-b-0 p-0">
                                                    <label className="control-label col-lg-4 col-md-4 col-sm-3 col-xs-12" htmlFor="">วันที่เขียนบันทึกจับกุม:</label>
                                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                                                        <div className="input-group">
                                                            <div className="form-line">
                                                                <input type="text" className="form-control datepicker" name="lawSuitDate" id="txt_LawSuitDate" />
                                                                {/* onchange={checkBetweenDate('#txt_LawSuitDate', '#txt_LawSuitDateTo')} */}
                                                            </div>
                                                            <label htmlFor="txt_LawSuitDate" className="input-group-addon">
                                                                <i className="material-icons">event</i>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 between-item">
                                                        <div className="input-group">
                                                            <label className="input-group-addon">
                                                                ถึง
                                                </label>
                                                            <div className="form-line">
                                                                <input type="text" className="form-control datepicker" name="lawSuitDateTo" id="txt_LawSuitDateTo" />
                                                                {/* onchange={checkBetweenDate('#txt_LawSuitDate', '#txt_LawSuitDateTo')} */}
                                                            </div>
                                                            <label htmlFor="txt_LawSuitDateTo" className="input-group-addon">
                                                                <i className="material-icons">event</i>
                                                            </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 clear-m clear-p">
                                                    <label className="control-label col-lg-4 col-md-4 col-sm-3 col-xs-12" htmlFor="txt_LawSuitCode">เลขที่งาน:</label>
                                                    <div className="col-lg-6 col-md-6 col-sm-7 col-xs-12">
                                                        <div className="form-line">
                                                            <input type="text" className=" form-control" name="lawSuitCode" id="txt_LawSuitCode" />
                                                        </div>
                                                    </div>
                                                    <label className="control-label col-lg-4 col-md-4 col-sm-3 col-xs-12" htmlFor="txt_ExhibitReportNo">รายงานพิสูจน์ที่:</label>
                                                    <div className="col-lg-6 col-md-6 col-sm-7 col-xs-12">
                                                        <div className="form-line">
                                                            <input type="text" className=" form-control" name="exhibitReportNo" id="txt_ExhibitReportNo" />
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 clear-m clear-p">
                                                    <label className="control-label col-lg-4 col-md-4 col-sm-3 col-xs-12" htmlFor="txt_CaseNo">เลขที่คดี:</label>
                                                    <div className="col-lg-6 col-md-6 col-sm-7 col-xs-12">
                                                        <div className="form-line">
                                                            <input type="text" className=" form-control" name="caseNo" id="txt_CaseNo" />
                                                        </div>
                                                    </div>
                                                    <label className="control-label col-lg-4 col-md-4 col-sm-3 col-xs-12" htmlFor="txt_CompareCaseNo">คดีเปรียบเทียบ:</label>
                                                    <div className="col-lg-6 col-md-6 col-sm-7 col-xs-12">
                                                        <div className="form-line">
                                                            <input type="text" className="form-control" name="compareCaseNo" id="txt_CompareCaseNo" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <label className="control-label col-lg-2 col-md-2 col-sm-3 col-xs-12" htmlFor="txt_Area">สรรพสามิต:</label>
                                                <div className="col-lg-3 col-md-3 col-sm-7 col-xs-12">
                                                    <div className="form-line">
                                                        <input type="text" className=" form-control" name="area" id="txt_Area" />
                                                    </div>
                                                </div>
                                                <label className="control-label col-lg-3 col-md-3 col-sm-3 col-xs-12" htmlFor="txt_LawSuitFine">จำนวนเงินค่าปรับ:</label>
                                                <div className="col-lg-2 col-md-2 col-sm-3 col-xs-5">
                                                    <div className="form-line">
                                                        <input type="text" className="number form-control" name="lawSuitFine" id="txt_LawSuitFine" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-2 col-md-2 col-sm-4 col-xs-7 between-item">
                                                    <div className="input-group">
                                                        <span className="input-group-addon">
                                                            ถึง
                                            </span>
                                                        <div className="form-line">
                                                            <input type="text" className="number form-control" id="txt_LawSuitFineTo" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <label className="control-label col-lg-2 col-md-2 col-sm-3 col-xs-12" htmlFor="txt_AccuserName">ชื่อผู้กล่าวหา:</label>
                                                <div className="col-lg-3 col-md-3 col-sm-7 col-xs-12">
                                                    <div className="form-line">
                                                        <input type="text" className=" form-control" name="accuserName" id="txt_AccuserName" />
                                                    </div>
                                                </div>
                                                <label className="control-label col-lg-3 col-md-3 col-sm-3 col-xs-12" htmlFor="sle_AccuserType">ผู้กล่าวหา:</label>
                                                <div className="col-lg-3 col-md-3 col-sm-7 col-xs-12">
                                                    <select name="accuserType" className="form-control" id="sle_AccuserType">
                                                        <option value="" selected disabled></option>
                                                        <option value="1">เจ้าหน้าที่สรรพสามิต</option>
                                                        <option value="2">เจ้าหน้าที่กรมสรรพสามิต</option>
                                                        <option value="3">เจ้าหน้าที่สรรพสามิตภาค</option>
                                                        <option value="4">เจ้าหน้าที่สรรพสามิตพื้นที่สาขา</option>
                                                        <option value="5">เจ้าหน้าที่อื่นๆ</option>
                                                    </select>
                                                </div>

                                            </div>
                                            <div className="row">
                                                <label className="control-label col-lg-3 col-md-3 col-sm-3 col-xs-12" htmlFor="txt_NoticeCode">ค้นหาข้อมูลสีบสวน: เลขที่แจ้งความ</label>
                                                <div className="col-lg-2 col-md-2 col-sm-7 col-xs-12">
                                                    <div className="form-line">
                                                        <input type="text" className=" form-control" name="noticeCode" id="txt_NoticeCode" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-7 col-sm-12 col-xs-12 clear-m clear-p">
                                                    <label className="control-label col-lg-5 col-md-4 col-sm-3 col-xs-12" htmlFor="chb_IsSentCourt">ลักษณะคดี:</label>
                                                    <div className="col-lg-7 col-md-8 col-sm-9 col-xs-12">
                                                        <div className="demo-checkbox">
                                                            <input type="checkbox" id="chb_IsSentCourt" name="isSentCourt" className="filled-in" />
                                                            <label htmlFor="chb_IsSentCourt">ฟ้องศาล</label>
                                                            <input type="checkbox" id="chb_CaseQuality" name="caseQuality" className="filled-in" />
                                                            <label htmlFor="chb_CaseQuality">เปรียบเทียบปรับ</label>
                                                            <input type="checkbox" id="chb_HaveCulprit" name="HaveCulprit" className="filled-in" />
                                                            <label htmlFor="chb_HaveCulprit">ไม่มีตัว</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <label className="control-label col-lg-3 col-md-3 col-sm-3 col-xs-12" htmlFor="txt_SearchWarrantNo">เลขที่หมายค้น:</label>
                                                <div className="col-lg-2 col-md-2 col-sm-7 col-xs-12">
                                                    <div className="form-line">
                                                        <input type="text" className=" form-control" name="searchWarrantNo" id="txt_SearchWarrantNo" />
                                                    </div>
                                                </div>
                                                <div className="col-lg-6 col-md-7 col-sm-12 col-xs-12 clear-m clear-p">
                                                    <label className="control-label col-lg-5 col-md-4 col-sm-3 col-xs-12" htmlFor="chb_CaseLast1">คดีสิ้นสุด:</label>
                                                    <div className="col-lg-7 col-md-8 col-sm-9 col-xs-12">
                                                        <div className="demo-checkbox">
                                                            <input type="checkbox" id="chb_CaseLast1" name="caseLast1" className="filled-in" value="1" />
                                                            <label htmlFor="chb_CaseLast1">กรมสรรพสามิต</label>
                                                            <input type="checkbox" id="chb_CaseLast2" name="caseLast2" className="filled-in" value="2" />
                                                            <label htmlFor="chb_CaseLast2">ศาล</label>
                                                            <input type="checkbox" id="chb_CaseLast3" name="caseLast3" className="filled-in" value="3" />
                                                            <label htmlFor="chb_CaseLast3">พนักงานสอบสวน/พนักงานอัยการ</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <label className="control-label col-lg-3 col-md-3 col-sm-3 col-xs-12" htmlFor="txt_ss2_27">เลขที่ ส.ส.2/27:</label>
                                                <div className="col-lg-2 col-md-2 col-sm-7 col-xs-12">
                                                    <div className="form-line">
                                                        <input type="text" className=" form-control" name="ss2_27" id="txt_ss2_27" />
                                                    </div>
                                                </div>
                                                <label className="control-label col-lg-3 col-md-3 col-sm-3 col-xs-12" htmlFor="sle_Revoke">เพิกถอน:</label>
                                                <div className="col-lg-3 col-md-3 col-sm-7 col-xs-12">
                                                    <select name="revoke" id="sle_Revoke" className="form-control">
                                                        <option value="" disabled selected></option>
                                                        <option value="1">เพิกถอน</option>
                                                        <option value="2">อยู่ระหว่างเพิกถอน</option>
                                                        <option value="3">ไม่ระบุ</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <div className="card">
                        <div className="body">
                            <div className="table-responsive form-group">
                                <table id="table_ArrestList" className="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th style={minWidth70} className="sort">ลำดับ</th>
                                            <th style={minWidth170} className="sort">เลขที่งาน</th>
                                            <th style={minWidth170} className="sort">หน่วยงาน</th>
                                            <th style={minWidth170} className="sort">ผู้กล่าวหา</th>
                                            <th style={minWidth170} className="sort">ผู้กระทำผิด</th>
                                            <th style={minWidth170} className="sort">วันที่รับเรื่อง</th>
                                            <th style={minWidth170} className="sort">วันที่เกิดเหตุ</th>
                                            <th style={minWidth170} className="sort">สถานที่เกิดเหตุ</th>
                                            <th style={minWidth170} className="sort"> ข้อกล่าวหา</th>
                                            <th style={width20}></th >
                                            <th style={width20}></th >
                                            <th style={width20}></th >
                                        </tr >
                                    </thead >
                                    <tbody></tbody>
                                </table >
                            </div >
                            <div className="row">
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div className="pagination-select">
                                        <span>หน้าที่ </span>
                                        <select id="notice_pagination" className="paging_listbox_select"></select>
                                        <span className="page-total"></span>
                                    </div>
                                    {/* <!-- หน้าที่ - จาก - หน้า --> */}
                                </div>
                                <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                                    <div id="notice_pageinfo" className="pagination-info text-right">
                                        {/* <!-- รายการที่ 1 - 5 จาก 86 รายการ --> */}
                                    </div>
                                </div>
                            </div>
                        </div >
                    </div >
                </div >
            </div >
        )
    }
}

export default ArrestListContainer;