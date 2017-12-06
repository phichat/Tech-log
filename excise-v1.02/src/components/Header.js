import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'


const Header = ({ history: { push } }) => {

  const navheader = {
    height: '90px !important'
  }
  return (
    
    <nav className="navbar">
        <div className="container-fluid">
            <div id="navheader" className="navbar-header">
                <a href="javascript:void(0);" className="bars"></a>
                <Link to={"Home"} className="navbar-brand index">
                    {/* <img src="img/logo-excise.png" alt="excise" class="logo" /> */}
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
//   history: PropTypes.shape({
//     push: PropTypes.func.isRequired
//   }).isRequired
// }

export default withRouter(Header)
