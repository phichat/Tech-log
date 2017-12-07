import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

class SidebarContainer extends Component {
  state = {
    categories: []
  }

  componentDidMount() {
  }

  render() {
    return (
      <div>
        {/* <!-- Overlay For Sidebars --> */}
        <div className="overlay"></div>
        {/* <!-- #END# Overlay For Sidebars --> */}

        <aside id="leftsidebar" className="sidebar">
          {/* <!-- User Info --> */}
          <div className="user-info bg-grey">
            <div className="image">
              <img className="userImg" src="../excise-custom-theme/user.png" width="48" height="48" alt="User" />
            </div>
            <div className="info-container">
              <div className="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ผู้ดูแลระบบ</div>
              <div className="email">admin.doe@example.com</div>
            </div>
          </div>
          {/* <!-- #User Info --> */}
          {/* <!-- Menu --> */}
          <div className="menu bg-teal">
            <ul className="list">
              <li className="header">เมนู</li>
              <li data-page="notice">
                <a href="javascript:void(0);" className="menu-toggle">
                  <i className="material-icons">announcement</i>
                  <span>1. งานสืบสวน</span>
                </a>
                <ul className="ml-menu">
                  <li>
                    <NavLink
                      to="/notice/list"
                      activeClassName='active'>
                      <span>ใบแจ้งความนำจับ</span>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li data-page="arrest">
                <a href="javascript:void(0);" className="menu-toggle">
                  <i className="material-icons">build</i>
                  <span>2. งานจับกุม</span>
                </a>
                <ul className="ml-menu">
                  <li>
                    <NavLink to="/arrest/list"
                      activeClassName='active'>
                      <span>บันทึกการจับกุม(ส.ส. 2/39)</span>
                    </NavLink>
                  </li>
                </ul>
              </li>
              <li data-page="lawsuit">
                <a href="javascript:void(0);" className="menu-toggle">
                  <i className="material-icons">assignment</i>
                  <span>3. งานเปรียบเทียบคดี</span>
                </a>
                <ul className="ml-menu">
                  <li>
                    <NavLink
                      to="/lawsuit/list"
                      activeClassName='active'>บันทึกรับคำกล่าวโทษ 1/55</NavLink>
                  </li>
                  <li>
                    <a href="javascript:void(0);">เปรียบเทียบปรับและออกใบเสร็จ</a>
                  </li>
                </ul>
              </li>
              <li data-page="prove-exhibit">
                <a href="javascript:void(0);" className="menu-toggle">
                  <i className="material-icons">desktop_mac</i>
                  <span>4. งานตรวจพิสูจน์ของกลาง</span>
                </a>
                <ul className="ml-menu">
                  <li>
                    <NavLink
                      to="/exhibit/list"
                      activeClassName='active'>
                      พิสูจน์ของกลาง
                            </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          {/* <!-- #Menu --> */}
          {/* <!-- Footer --> */}
          <div className="legal bg-grey">
            <div className="copyright">
              &copy; 2016 - 2017
                <Link to=""> ผู้ดูแลระบบ</Link>
            </div>
            <div className="version">
              <b>เวอร์ชั่น: </b> 1.0.5
            </div>
          </div>
          {/* <!-- #Footer --> */}
        </aside>
      </div>

    )
  }
}

export default SidebarContainer
