import React from 'react'
import { Link } from 'react-router-dom'
// import PropTypes from 'prop-types'

import logo from '../theme/img/logo-excise.png'

const Header = () => {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <div id="navheader" className="navbar-header">
                    {/* <a href="javaScript:void(0);" className="bars"></a> */}
                    <Link to={"/Home"} className="navbar-brand index">
                        <img src={logo} alt="excise" className="logo" />
                        <span className="main">
                            กรมสรรพสามิต
                    </span>
                        <br />
                        <span className="detail">
                            ระบบผู้กระทำผิดกฏหมายพระราชบัญญัติ พ.ศ.2560
                    </span>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

// Header.propTypes = {
//     history: PropTypes.shape({
//         push: PropTypes.func.isRequired
//     }).isRequired
// }

export default Header

// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import logo from '../theme/img/logo-excise.png'

// export default class HeaderContainer extends Component {
//     render() {
//         return (
//             <nav className="navbar">
//                 <div className="container-fluid">
//                     <div id="navheader" className="navbar-header">
//                         <a href="javaScript:void(0);" className="bars"></a>
//                         <Link to={"Home"} className="navbar-brand index">
//                             <img src={logo} alt="excise" className="logo" />
//                             <span className="main">กรมสรรพสามิต</span>
//                             <br />
//                             <span className="detail">ระบบผู้กระทำผิดกฏหมายพระราชบัญญัติ พ.ศ.2560</span>
//                         </Link>
//                     </div>
//                 </div>
//             </nav>
//         )
//     }
// }

