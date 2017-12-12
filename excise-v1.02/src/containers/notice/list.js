import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import $ from "jquery"
window.jQuery = $;
window.$ = $;
global.jQuery = $;

class NoticeListContainer extends Component {

    constructor() {
        super();
        this.state = {
            isToggleAdvancedSearch: false,
        };
    }

    componentDidMount() {

        // $(this.refs.datepicker).datepicker({
        //     format: 'dd/mm/yyyy',
        //     todayHighlight: true,
        //     todayBtn: true,
        //     language: 'th',             //เปลี่ยน label ต่างของ ปฏิทิน ให้เป็น ภาษาไทย   (ต้องใช้ไฟล์ bootstrap-datepicker.th.min.js นี้ด้วย)
        //     thaiyear: true              //Set เป็นปี พ.ศ.
        // }).on('changeDate', dateChanged);
    }

    onToggleAdvancedSearch = (e) => {
        e.preventDefault();
        this.setState(prevState => ({
            isToggleAdvancedSearch: !prevState.isToggleAdvancedSearch
        }));
    }



    render() {
        const minWidth_70 = { 'minWidth': '70px' };
        const minWidth_170 = { 'minWidth': '170px' };
        const width_20 = { 'width': '20px' };
        return (
            <div className="container-fulid">
                <div className="form-group row">
                    <div className="col-lg-10 col-md-10 col-sm-6 col-xs-12">
                        <ol className="breadcrumb breadcrumb-col-teal">
                            <li>1. งานสืบสวน</li>
                            <li className="font-bold col-teal">ใบแจ้งความนำจับ</li>
                        </ol>
                    </div>
                    <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                        <Link to="/notice/manage" className="btn btn-danger waves-effect form-control" type="button" id="btn_nlAddNotice">
                            <span>
                                <i className="material-icons">add_circle</i>
                                เพิ่มข้อมูล
                        </span>
                        </Link>
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
                                        <label className="control-label col-lg-1 col-md-1 col-sm-1 col-xs-12" htmlFor="txt_nlSearch">ค้นหา:</label>
                                        <div className="col-lg-5 col-md-5 col-sm-11 col-xs-12">
                                            <div className="form-line">
                                                <input type="text" className="form-control" id="txt_nlSearch" placeholder="สินค้า/เลขที่บันทึกแจ้งความ/ชื่อผู้แจ้ง/ชื่อผู้รับแจ้ง/หน่วยงาน/สถานที่เกิดเหตุ" />
                                            </div>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-sm-11 col-xs-12">
                                            <a href="#" onClick={this.onToggleAdvancedSearch}>ค้นหาขั้นสูง</a>
                                            {/* onclick={onToggleAdvancedSearch} */}
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                                            <button type="button" id="btn_nlSearch" className="btn bg-dark-blue-custom waves-effect form-control">
                                                {/* onclick={onSearchNoticeList('#txt_nlSearch', '.advanced-search')} */}
                                                <span>
                                                    <i className="material-icons">search</i>
                                                    ค้นหา
                                            </span>
                                            </button>
                                        </div>
                                        <div className="col-lg-2 col-md-2 col-sm-6 col-xs-12">
                                            <button type="button" id="btn_nlClear" className="btn bg-grey waves-effect form-control">
                                                {/* onclick={onClearFormSearch} */}
                                                <span>
                                                    <i className="material-icons">clear</i>
                                                    เคลียร์
                                            </span>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="form-horizontal">
                                        <div className="row">
                                            <label className="control-label col-lg-2 col-md-3 col-sm-3 col-xs-12">อ้างอิงใบแจ้งความ:</label>
                                            <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                                                <div className="demo-checkbox">
                                                    <input type="checkbox" name="isArrest" id="isArrest" className="filled-in" value="1" />
                                                    <label htmlFor="isArrest" className="t-6px">อ้างอิงแล้ว</label>
                                                    <input type="checkbox" name="isArrest" id="isNotArrest" className="filled-in" value="0" defaultChecked />
                                                    <label htmlFor="isNotArrest" className="t-6px">ยังไม่อ้างอิง</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-horizontal">
                                        <div className="row">
                                            <label className="control-label col-lg-2 col-md-3 col-sm-3 col-xs-12">วันหมดอายุ:</label>
                                            <div className="col-lg-9 col-md-9 col-sm-9 col-xs-12">
                                                <div className="demo-checkbox">
                                                    <input type="checkbox" name="expireDate" id="expireDate" className="filled-in" value="0" />
                                                    <label htmlFor="expireDate" className="t-6px" >หมดอายุ</label>
                                                    <input type="checkbox" name="expireDate" id="notexpireDate" className="filled-in" value="1" defaultChecked />
                                                    <label htmlFor="notexpireDate" className="t-6px">ยังไม่หมดอายุ</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {
                                this.state.isToggleAdvancedSearch ?
                                    (
                                        <div className="form-group advanced-search">
                                            <div className="form-horizontal">
                                                <div className="row form-group">
                                                    <label className="control-label col-lg-2 col-md-3 col-sm-3 col-xs-12">วันที่รับแจ้งความ:</label>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12">
                                                        <div className="input-group">
                                                            <div className="form-line">
                                                                <input
                                                                    type="text"
                                                                    className="form-control datepicker"
                                                                    id="txt_nlNoticeDateFrom"
                                                                    data-date-format="mm/dd/yyyy"
                                                                    ref="datepicker" />
                                                                {/* onchange="checkBetweenDate('#txt_nlNoticeDateFrom', '#txt_nlNoticeDateTo')" */}
                                                            </div>
                                                            <label htmlFor="txt_nlNoticeDateFrom" className="input-group-addon">
                                                                <i className="material-icons">event</i>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-12  between-item">
                                                        <div className="input-group">
                                                            <label className="input-group-addon">ถึง:</label>
                                                            <div className="form-line">
                                                                <input
                                                                    type="text"
                                                                    className="form-control datepicker"
                                                                    id="txt_nlNoticeDateTo"
                                                                    data-date-format="mm/dd/yyyy"
                                                                    ref="datepicker" />
                                                                {/* onchange="checkBetweenDate('#txt_nlNoticeDateFrom', '#txt_nlNoticeDateTo')" */}
                                                            </div>
                                                            <label htmlFor="txt_nlNoticeDateTo" className="input-group-addon" id="spn_nmNoticeDateTo">
                                                                <i className="material-icons">event</i>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 clear-m clear-p">
                                                        <label className="control-label col-lg-4 col-md-3 col-sm-3 col-xs-12" htmlFor="txt_nlGroupName">สินค้า:</label>
                                                        <div className="col-lg-8 col-md-3 col-sm-9 col-xs-12">
                                                            <div className="form-line">
                                                                <input type="text" className="form-control" id="txt_nlGroupName" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="row form-group">
                                                    <label className="control-label col-lg-2 col-md-3 col-sm-3 col-xs-12" htmlFor="txt_nlNoticeCode">เลขที่บันทึกแจ้งความ:</label>
                                                    <div className="col-lg-4 col-md-3 col-sm-9 col-xs-12">
                                                        <div className="form-line">
                                                            <input type="text" className="form-control" id="txt_nlNoticeCode" />
                                                        </div>
                                                    </div>
                                                    <label className="control-label col-lg-2 col-md-3 col-sm-3 col-xs-12" htmlFor="txt_nlNoticeInform">ชื่อ(นามแฝง) ผู้แจ้ง:</label>
                                                    <div className="col-lg-4 col-md-3 col-sm-9 col-xs-12">
                                                        <div className="form-line">
                                                            <input type="text" className="form-control" id="txt_nlNoticeInform" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row form-group">
                                                    <label className="control-label col-lg-2 col-md-3 col-sm-3 col-xs-12" htmlFor="txt_nlNoticeDepartmentNameRecieve">หน่วยงาน:</label>
                                                    <div className="col-lg-4 col-md-3 col-sm-9 col-xs-12">
                                                        <div className="form-line">
                                                            <input type="text" className="form-control" id="txt_nlNoticeDepartmentNameRecieve" defaultValue="Admin login" />
                                                        </div>
                                                    </div>
                                                    <label className="control-label col-lg-2 col-md-3 col-sm-3 col-xs-12" htmlFor="txt_nlStaffNameReceive">ชื่อผู้รับแจ้ง:</label>
                                                    <div className="col-lg-4 col-md-3 col-sm-9 col-xs-12">
                                                        <div className="form-line">
                                                            <input type="text" className="form-control" id="txt_nlStaffNameReceive" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ) : ('')
                            }
                        </div>
                    </div>
                </div>

                <div className="form-group">
                    <div className="card">
                        <div className="body">
                            <div className="table-responsive form-group">
                                <table id="table_nlNoticeList" className="table table-striped table-hover">
                                    <thead>
                                        <tr>
                                            <th style={minWidth_70} className="sort">ลำดับ</th>
                                            <th style={minWidth_170} className="sort">เลขที่</th>
                                            <th style={minWidth_170} className="sort">หน่วยงาน</th>
                                            <th style={minWidth_170} className="sort">วันที่รับแจ้งความ</th>
                                            <th style={minWidth_170} className="sort">สินค้า</th>
                                            <th style={minWidth_170} className="sort">ชื่อผู้รับแจ้ง</th>
                                            <th style={minWidth_170} className="sort">สถานที่เกิดเหตุ</th>
                                            <th style={minWidth_170} className="sort">วันที่สิ้นสุด</th>
                                            <th style={width_20}></th>
                                            <th style={width_20}></th>
                                            <th style={width_20}></th>
                                        </tr>
                                    </thead>
                                    <tbody></tbody>
                                </table>
                            </div>
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
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default NoticeListContainer;