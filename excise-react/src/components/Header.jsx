import React from 'react'
import { Link } from 'react-router-dom'
import { Home } from './'
import '../theme/navbar.css'
// import PropTypes from 'prop-types'

import logo from './logo.svg'

const Header = () => {
    return (
        <nav className="navbar">
            <div className="container-fluid">
                <div id="navheader" className="navbar-header">
                    <Link to={Home} className="navbar-brand index">
                        <img src={logo} alt="excise" className="logo" />
                    </Link>
                    <Link to={Home} className="title">
                        <h4 className="main">กรมสรรพสามิต</h4>
                        <p className="detail">ระบบผู้กระทำผิดกฏหมายพระราชบัญญัติ พ.ศ.2560</p>
                    </Link>

                </div>
            </div>
        </nav>
    )
}

export default Header
