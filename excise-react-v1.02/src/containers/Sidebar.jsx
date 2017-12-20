import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'
import imgUser from '../theme/img/user.png'
import 'adminbsb-materialdesign/css/style.css'
import 'adminbsb-materialdesign/js/admin.js'

class SidebarContainer extends Component {
  constructor() {
    super()
    this.state = {
      categories:
        [{
          key: 1,
          item: "1. งานสืบสวน",
          icon: "announcement",
          subItem: [{
            key: 1,
            item: "ใบแจ้งความนำจับ",
            url: "/notice/list"
          }]
        },
        {
          key: 2,
          item: "2. งานจับกุม",
          icon: "build",
          subItem: [{
            key: 1,
            item: "บันทึกการจับกุม(ส.ส. 2/39)",
            url: "/arrest/list"
          }]
        },
        {
          key: 3,
          item: "3. งานเปรียบเทียบคดี",
          icon: "assignment",
          subItem: [{
            key: 1,
            item: "บันทึกรับคำกล่าวโทษ 1/55",
            url: "/lawsuit/list"
          },
          {
            key: 2,
            item: "เปรียบเทียบปรับและออกใบเสร็จ",
            url: "#"
          }]
        },
        {
          key: 4,
          item: "4. งานตรวจพิสูจน์ของกลาง",
          icon: "desktop_mac",
          subItem: [{
            key: 1,
            item: "พิสูจน์ของกลาง",
            url: "/exhibit/list"
          }]
        }]
    }
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
              <img className="userImg" src={imgUser} width="48" height="48" alt="User" />
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
              {
                this.state.categories.map(({ key, item, icon, subItem }) =>
                  <li key={key}>
                    <a href="javaScript:void(0);" className="menu-toggle">
                      <i className="material-icons">{icon}</i>
                      <span>{item}</span>
                    </a>
                    <ul className="ml-menu">
                      {
                        subItem.map(({ key, item, url }) =>
                          <li key={key}>
                            <NavLink to={url} activeClassName="active">
                              <span>{item}</span>
                            </NavLink>
                          </li>
                        )
                      }
                    </ul>
                  </li>
                )
              }
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
