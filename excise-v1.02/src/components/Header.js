import React from 'react'
import PropTypes from 'prop-types'
import { Link, withRouter } from 'react-router-dom'


const Header = ({ history: { push } }) => {

  const navheader = {
    height: '90px !important'
  }
  return (
    
    <nav class="navbar">
        <div class="container-fluid">
            <div id="navheader" class="navbar-header">
                <a href="javascript:void(0);" class="bars"></a>
                <Link to={"Home"} class="navbar-brand index">
                    {/* <img src="img/logo-excise.png" alt="excise" class="logo" /> */}
                    <span class="main">
                        กรมสรรพสามิต
                    </span>
                    <br />
                    <span class="detail">
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
