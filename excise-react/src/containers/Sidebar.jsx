// import React, { Component } from 'react';
// import { NavLink, Link } from 'react-router-dom';
// import Avatar from 'material-ui/Avatar';
// import './sidebar.css';
// import '../theme/bg-color.css';

// class SidebarContainer extends Component {
//     constructor() {
//         super()
//         this.state = {
//             categories:
//                 [
//                     {
//                         key: 1,
//                         item: "งานสืบสวน",
//                         icon: "announcement",
//                         subItem: [
//                             {
//                                 key: 1,
//                                 item: "ใบแจ้งความนำจับ",
//                                 url: "/notice/list"
//                             }
//                         ]
//                     },
//                     {
//                         key: 2,
//                         item: "งานจับกุม",
//                         icon: "build",
//                         subItem: [
//                             {
//                                 key: 1,
//                                 item: "บันทึกการจับกุม(ส.ส. 2/39)",
//                                 url: "/arrest/list"
//                             }
//                         ]
//                     },
//                     {
//                         key: 3,
//                         item: "งานเปรียบเทียบคดี",
//                         icon: "assignment",
//                         subItem: [
//                             {
//                                 key: 1,
//                                 item: "บันทึกรับคำกล่าวโทษ 1/55",
//                                 url: "/lawsuit/list"
//                             },
//                             {
//                                 key: 2,
//                                 item: "เปรียบเทียบปรับและออกใบเสร็จ",
//                                 url: "#"
//                             }
//                         ]
//                     },
//                     {
//                         key: 4,
//                         item: "งานตรวจพิสูจน์ของกลาง",
//                         icon: "desktop_mac",
//                         subItem: [
//                             {
//                                 key: 1,
//                                 item: "พิสูจน์ของกลาง",
//                                 url: "/exhibit/list"
//                             }
//                         ]
//                     }
//                 ],
//             mlMenu: false

//         }
//         // this.menuToggle = this.menuToggle.bind(this)

//     }

//     // activate() {
//     //     // const _this = this;
//     //     // const _body = document.getElementsByTagName("BODY");
//     //     // const _overlay = document.getElementsByClassName('.overlay');

//     //     // //Close sidebar
//     //     // $(window).click(function (e) {
//     //     //     var $target = $(e.target);
//     //     //     if (e.target.nodeName.toLowerCase() === 'i') { $target = $(e.target).parent(); }

//     //     //     if (!$target.hasClass('bars') && _this.isOpen() && $target.parents('#leftsidebar').length === 0) {
//     //     //         if (!$target.hasClass('js-right-sidebar')) $overlay.fadeOut();
//     //     //         $body.removeClass('overlay-open');
//     //     //     }
//     //     // });

//     //     // $.each($('.menu-toggle.toggled'), function (i, val) {
//     //     //     $(val).next().slideToggle(0);
//     //     // });

//     //     // const _menuToggle = document.querySelectorAll("li.active");
//     //     // for (let i = 0; i < _menuToggle.length; i++) {
//     //     //     if (i === 0) {
//     //     //         let activeAnchors = _menuToggle[i].getElementsByTagName("a")
//     //     //         activeAnchors.className = "toggled"
//     //     //     }
//     //     // }


//     //     // //When page load
//     //     // $.each($('.menu .list li.active'), function (i, val) {
//     //     //     var $activeAnchors = $(val).find('a:eq(0)');

//     //     //     $activeAnchors.addClass('toggled');
//     //     //     $activeAnchors.next().show();
//     //     // });

//     //     //Collapse or Expand Menu
//     //     // $('.menu-toggle').on('click', function (e) {
//     //     //     var $this = $(this);
//     //     //     var $content = $this.next();

//     //     //     if ($($this.parents('ul')[0]).hasClass('list')) {
//     //     //         var $not = $(e.target).hasClass('menu-toggle') ? e.target : $(e.target).parents('.menu-toggle');

//     //     //         $.each($('.menu-toggle.toggled').not($not).next(), function (i, val) {
//     //     //             if ($(val).is(':visible')) {
//     //     //                 $(val).prev().toggleClass('toggled');
//     //     //                 $(val).slideUp();
//     //     //             }
//     //     //         });
//     //     //     }

//     //     //     _this.toggleClass('toggled');
//     //     //     $content.slideToggle(320);
//     //     // });

//     //     // //Set menu height
//     //     // _this.setMenuHeight();
//     //     // _this.checkStatuForResize(true);
//     //     // $(window).resize(function () {
//     //     //     _this.setMenuHeight();
//     //     //     _this.checkStatuForResize(false);
//     //     // });

//     //     // //Set Waves
//     //     // Waves.attach('.menu .list a', ['waves-block']);
//     //     // Waves.init();
//     // }

//     // menuToggle(e) {
//     //     e.preventDefault();

//     //     const _this = e.target.closest(".menu-toggle"),
//     //         _content = _this.nextSibling
//     //     if (_this.closest('ul').classList.contains('list')) {
//     //         // document.getElementsByClassName("menu-toggle toggled")
//     //     }
//     //     //     if ($($this.parents('ul')[0]).hasClass('list')) {
//     //     //         var $not = $(e.target).hasClass('menu-toggle') ? e.target : $(e.target).parents('.menu-toggle');

//     //     //         $.each($('.menu-toggle.toggled').not($not).next(), function (i, val) {
//     //     //             if ($(val).is(':visible')) {
//     //     //                 $(val).prev().toggleClass('toggled');
//     //     //                 $(val).slideUp();
//     //     //             }
//     //     //         });
//     //     //     }

//     //         _this.classList.toggle('toggled');
//     //         _content.classList.toggle('slideToggle')
//     //         // this.setState(prevState => ({
//     //         //     menuToggled: !prevState.menuToggled
//     //         // }));
//     // }


//     componentDidMount() {
//         this.activate()
//     }

//     render() {
//         return (
//             <div>
//                 {/* <!-- Overlay For Sidebars --> */}
//                 <div className="overlay"></div>
//                 {/* <!-- #END# Overlay For Sidebars --> */}

//                 <aside id="leftsidebar" className="sidebar">
//                     {/* <!-- User Info --> */}
//                     <div className="user-info bg-grey">
//                         <div className="image">
//                             <Avatar>A</Avatar>
//                         </div>
//                         <div className="info-container">
//                             <div className="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ผู้ดูแลระบบ</div>
//                             <div className="email">admin.doe@example.com</div>
//                         </div>
//                     </div>
//                     {/* <!-- #User Info --> */}
//                     {/* <!-- Menu --> */}
//                     <div className="menu bg-teal">
//                         <ul className="list">
//                             <li className="header">เมนู</li>
//                             {
//                                 this.state.categories.map(({ key, item, icon, subItem }) =>
//                                     <li key={key} className={key === 1 ? "active" : ""}>
//                                         <Link to="" className="menu-toggle" onClick={this.menuToggle}>
//                                             <i className="material-icons">{icon}</i>
//                                             <span>{key + '. ' + item}</span>
//                                         </Link>
//                                         <ul className="ml-menu">
//                                             {
//                                                 subItem.map(({ key, item, url }) =>
//                                                     <li key={key}>
//                                                         <Link to={url} activeClassName="active">
//                                                             <span>{item}</span>
//                                                         </Link>
//                                                     </li>
//                                                 )
//                                             }
//                                         </ul>
//                                     </li>
//                                 )
//                             }
//                         </ul>

//                     </div>
//                     {/* <!-- #Menu --> */}
//                     {/* <!-- Footer --> */}
//     <div className="legal bg-grey">
//         <div className="copyright">
//             &copy; 2016 - 2017
//     <Link to=""> ผู้ดูแลระบบ</Link>
//         </div>
//         <div className="version">
//             <b>เวอร์ชั่น: </b> 1.0.5
// </div>
//     </div>
//                     {/* <!-- #Footer --> */}
//                 </aside>
//             </div>
//         );
//     }
// }

// export default SidebarContainer;

import React from 'react';
import PropTypes from 'prop-types';
import {Avatar, Drawer, Typography, Hidden, Divider} from 'material-ui';
import { grey, teal } from 'material-ui/colors';
import { withStyles } from 'material-ui/styles';
import List, { ListItem, ListItemIcon, ListItemText } from 'material-ui/List';
import ListSubheader from 'material-ui/List/ListSubheader';
import Collapse from 'material-ui/transitions/Collapse';
import {Announcement,  Build, Assignment, DesktopMac, Add, Remove}from 'material-ui-icons';
import { NavLink, Link } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';

const drawerWidth = 300;

const styles = theme => ({
    root: {
        // width: '100%',
        // height: 430,
        // marginTop: theme.spacing.unit * 3,
        // zIndex: 1,
        // overflow: 'hidden',
        width: "300px",
        display: "inline-block",
        height: "calc(100vh - 64px)",
        position: "fixed",
        top: "64px",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.1)",
        color: grey[200],
        fontSize: "0.85rem",
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    divider: {
        backgroundColor: grey[200],
    },
    drawerHeader: {
        padding: "13px 15px 12px 15px",
        position: "relative",
        borderBottom: "1px solid #eee",
        backgroundColor: grey[500],
        height: "135px"
    },
    drawerSubheader: {
        backgroundColor: teal[800], 
        color: grey[200],
        lineHeight: "initial",
        padding: "8px 16px",
    },
    drawerList: {
        position: "relative",
        height: "71vh",
        backgroundColor: teal[500],
        color: grey[200],
    },
    drawerLegal: {
        position: "absolute",
        bottom: "0",
        width: "calc(100% - 30px)",
        borderTop: "1px solid #eee",
        padding: "15px",
        overflow: "hidden",
        backgroundColor: grey[500],
    },
    drawerPaper: {
        width: 300,
        [theme.breakpoints.up('md')]: {
            width: drawerWidth,
            position: 'relative',
            height: '100%',
        },
    },
    // content: {
    //     backgroundColor: theme.palette.background.default,
    //     width: '100%',
    //     padding: theme.spacing.unit * 3,
    //     height: 'calc(100% - 56px)',
    //     marginTop: 56,
    //     [theme.breakpoints.up('sm')]: {
    //         height: 'calc(100% - 64px)',
    //         marginTop: 64,
    //     },
    // },
});

class SidebarContainer extends React.Component {
    state = {
        noticeOpen: false,
        arrestOpen: false,
        lawsuitOpen: false,
        exhibitOpen: false
    };

    handleClick = (e) => {
        let dataList = e.target.closest('li').dataset.list
        switch (dataList) {
            case "notice":
                this.setState({ noticeOpen: !this.state.noticeOpen });
                break;
            case "arrest":
                this.setState({ arrestOpen: !this.state.arrestOpen });
                break;
            case "lawsuit":
                this.setState({ lawsuitOpen: !this.state.lawsuitOpen });
                break;
            case "exhibit":
                this.setState({ exhibitOpen: !this.state.exhibitOpen });
                break;
            default:
                break;
        }

    };

    render() {
        const { classes } = this.props;

        const drawer = (
            <div>
                <div className={classes.drawerHeader}>
                    <div className="image">
                        <Avatar>A</Avatar>
                    </div>
                    <div className="info-container">
                        <div className="name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">ผู้ดูแลระบบ</div>
                        <div className="email">admin.doe@example.com</div>
                    </div>
                </div>
                <List className={classes.drawerList} subheader={<ListSubheader className={classes.drawerSubheader}>เมนู</ListSubheader>}>
                    <Scrollbars style={{ height: "58vh" }}>
                        <ListItem button onClick={this.handleClick} data-list="notice">
                            <Announcement />
                            <ListItemText inset secondary="1. งานสืบสวน" />
                            {this.state.noticeOpen ? <Remove /> : <Add />}
                        </ListItem>
                        <Collapse component="li" in={this.state.noticeOpen} timeout="auto" unmountOnExit>
                            <List disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemText inset secondary="ใบแจ้งความนำจับ" />
                                </ListItem>
                            </List>
                        </Collapse>

                        <ListItem button onClick={this.handleClick} data-list="arrest">
                            <Build />
                            <ListItemText inset secondary="2. งานจับกุม" />
                            {this.state.arrestOpen ? <Remove /> : <Add />}
                        </ListItem>
                        <Collapse component="li" in={this.state.arrestOpen} timeout="auto" unmountOnExit>
                            <List disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemText inset secondary="บันทึกการจับกุม" />
                                </ListItem>
                            </List>
                        </Collapse>

                        <ListItem button onClick={this.handleClick} data-list="lawsuit">
                            <Assignment />
                            <ListItemText inset secondary="3. งานเปรียบเทียบคดี" />
                            {this.state.lawsuitOpen ? <Remove /> : <Add />}
                        </ListItem>
                        <Collapse component="li" in={this.state.lawsuitOpen} timeout="auto" unmountOnExit>
                            <List disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemText inset secondary="บันทึกรับคำกล่าวโทษ 1/55" />
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <ListItemText inset secondary="เปรียบเทียบปรับและออกใบเสร็จ" />
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <ListItemText inset secondary="บันทึกรับคำกล่าวโทษ 1/55" />
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <ListItemText inset secondary="เปรียบเทียบปรับและออกใบเสร็จ" />
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <ListItemText inset secondary="บันทึกรับคำกล่าวโทษ 1/55" />
                                </ListItem>
                                <ListItem button className={classes.nested}>
                                    <ListItemText inset secondary="เปรียบเทียบปรับและออกใบเสร็จ" />
                                </ListItem>
                            </List>
                        </Collapse>

                        <ListItem button onClick={this.handleClick} data-list="exhibit">
                            <DesktopMac />
                            <ListItemText inset secondary="4. งานตรวจพิสูจน​์ของกลาง" />
                            {this.state.exhibitOpen ? <Remove /> : <Add />}
                        </ListItem>
                        <Collapse component="li" in={this.state.exhibitOpen} timeout="auto" unmountOnExit>
                            <List disablePadding>
                                <ListItem button className={classes.nested}>
                                    <ListItemText inset secondary="พิสูจน​์ของกลาง" />
                                </ListItem>
                            </List>
                        </Collapse>
                    </Scrollbars>
                </List>
                <div className={classes.drawerLegal}>
                    <div className="copyright">&copy; 2016 - 2017<Link to=""> ผู้ดูแลระบบ</Link></div>
                    <div className="version"><b>เวอร์ชั่น: </b> 1.0.5</div>
                </div>
            </div>
        );

        return (
            <div className={classes.root}>
                {/* <div className={classes.appFrame}> */}

                {/* <Hidden mdUp>
                    <Drawer
                        type="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={this.state.mobileOpen}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        onClose={this.handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden> */}
                <Hidden smDown implementation="css">
                    <Drawer
                        type="permanent"
                        open
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                {/* <main className={classes.content}>
                        <Typography noWrap>{'You think water moves fast? You should see ice.'}</Typography>
                    </main> */}
                {/* </div> */}
            </div>
        );
    }
}

SidebarContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(SidebarContainer);