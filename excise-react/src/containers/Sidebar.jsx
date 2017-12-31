import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Avatar from 'material-ui/Avatar';
import './sidebar.css';
import '../theme/bg-color.css';

class SidebarContainer extends Component {
    constructor() {
        super()
        this.state = {
            categories:
                [
                    {
                        key: 1,
                        item: "งานสืบสวน",
                        icon: "announcement",
                        subItem: [
                            {
                                key: 1,
                                item: "ใบแจ้งความนำจับ",
                                url: "/notice/list"
                            }
                        ]
                    },
                    {
                        key: 2,
                        item: "งานจับกุม",
                        icon: "build",
                        subItem: [
                            {
                                key: 1,
                                item: "บันทึกการจับกุม(ส.ส. 2/39)",
                                url: "/arrest/list"
                            }
                        ]
                    },
                    {
                        key: 3,
                        item: "งานเปรียบเทียบคดี",
                        icon: "assignment",
                        subItem: [
                            {
                                key: 1,
                                item: "บันทึกรับคำกล่าวโทษ 1/55",
                                url: "/lawsuit/list"
                            },
                            {
                                key: 2,
                                item: "เปรียบเทียบปรับและออกใบเสร็จ",
                                url: "#"
                            }
                        ]
                    },
                    {
                        key: 4,
                        item: "งานตรวจพิสูจน์ของกลาง",
                        icon: "desktop_mac",
                        subItem: [
                            {
                                key: 1,
                                item: "พิสูจน์ของกลาง",
                                url: "/exhibit/list"
                            }
                        ]
                    }
                ],
            menuToggled: false

        }
        this.menuToggle = this.menuToggle.bind(this)

    }

    activate() {
        // const _this = this;
        // const _body = document.getElementsByTagName("BODY");
        // const _overlay = document.getElementsByClassName('.overlay');

        // //Close sidebar
        // $(window).click(function (e) {
        //     var $target = $(e.target);
        //     if (e.target.nodeName.toLowerCase() === 'i') { $target = $(e.target).parent(); }

        //     if (!$target.hasClass('bars') && _this.isOpen() && $target.parents('#leftsidebar').length === 0) {
        //         if (!$target.hasClass('js-right-sidebar')) $overlay.fadeOut();
        //         $body.removeClass('overlay-open');
        //     }
        // });

        // $.each($('.menu-toggle.toggled'), function (i, val) {
        //     $(val).next().slideToggle(0);
        // });

        // const _menuToggle = document.querySelectorAll("li.active");
        // for (let i = 0; i < _menuToggle.length; i++) {
        //     if (i === 0) {
        //         let activeAnchors = _menuToggle[i].getElementsByTagName("a")
        //         activeAnchors.className = "toggled"
        //     }
        // }


        // //When page load
        // $.each($('.menu .list li.active'), function (i, val) {
        //     var $activeAnchors = $(val).find('a:eq(0)');

        //     $activeAnchors.addClass('toggled');
        //     $activeAnchors.next().show();
        // });

        //Collapse or Expand Menu
        // $('.menu-toggle').on('click', function (e) {
        //     var $this = $(this);
        //     var $content = $this.next();

        //     if ($($this.parents('ul')[0]).hasClass('list')) {
        //         var $not = $(e.target).hasClass('menu-toggle') ? e.target : $(e.target).parents('.menu-toggle');

        //         $.each($('.menu-toggle.toggled').not($not).next(), function (i, val) {
        //             if ($(val).is(':visible')) {
        //                 $(val).prev().toggleClass('toggled');
        //                 $(val).slideUp();
        //             }
        //         });
        //     }

        //     _this.toggleClass('toggled');
        //     $content.slideToggle(320);
        // });

        // //Set menu height
        // _this.setMenuHeight();
        // _this.checkStatuForResize(true);
        // $(window).resize(function () {
        //     _this.setMenuHeight();
        //     _this.checkStatuForResize(false);
        // });

        // //Set Waves
        // Waves.attach('.menu .list a', ['waves-block']);
        // Waves.init();
    }

    menuToggle(e) {
        e.preventDefault();

        const _this = e.target.closest("a"),
            _content = _this.nextSibling
        if (_this.closest('ul').classList.contains('list')) {
            // document.getElementsByClassName("menu-toggle toggled")
        }
        //     if ($($this.parents('ul')[0]).hasClass('list')) {
        //         var $not = $(e.target).hasClass('menu-toggle') ? e.target : $(e.target).parents('.menu-toggle');

        //         $.each($('.menu-toggle.toggled').not($not).next(), function (i, val) {
        //             if ($(val).is(':visible')) {
        //                 $(val).prev().toggleClass('toggled');
        //                 $(val).slideUp();
        //             }
        //         });
        //     }

            _this.classList.toggle('toggled');
            // this.setState(prevState => ({
            //     menuToggled: !prevState.menuToggled
            // }));
    }

    componentDidMount() {
        this.activate()
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
                            <Avatar>A</Avatar>
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
                                    <li key={key} className={key === 1 ? "active" : ""}>
                                        <Link to="" className="menu-toggle" onClick={this.menuToggle}>
                                            <i className="material-icons">{icon}</i>
                                            <span>{key + '. ' + item}</span>
                                        </Link>
                                        <ul className="ml-menu">
                                            {
                                                subItem.map(({ key, item, url }) =>
                                                    <li key={key}>
                                                        <NavLink to={url}>
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
        );
    }
}

export default SidebarContainer;