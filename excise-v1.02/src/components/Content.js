import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home, Notice, Arrest } from './'
import { Sidebar } from '../containers'

// import "../../node_modules/adminbsb-materialdesign/plugins/node-waves/waves.css";
// import "../../node_modules/adminbsb-materialdesign/plugins/animate-css/animate.css";
// import '../../node_modules/adminbsb-materialdesign/css/style.css'
// import "../../node_modules/adminbsb-materialdesign/css/themes/all-themes.css";

// import "../../node_modules/adminbsb-materialdesign/plugins/node-waves/waves.js";
// import "../../node_modules/adminbsb-materialdesign/plugins/jquery-slimscroll/jquery.slimscroll.js";
// import '../../node_modules/adminbsb-materialdesign/js/admin.js'

const Content = () => (
  <div>
    {/* <!-- Page Loader --> */}
    <div className="page-loader-wrapper">
      <div className="loader">
        <div className="preloader">
          <div className="spinner-layer pl-red">
            <div className="circle-clipper left">
              <div className="circle"></div>
            </div>
            <div className="circle-clipper right">
              <div className="circle"></div>
            </div>
          </div>
        </div>
        <p>Please wait...</p>
      </div>
    </div>
    {/* <!-- #END# Page Loader --> */}
    {/* <!-- Overlay For Sidebars --> */}
    <div className="overlay"></div>
    {/* <!-- #END# Overlay For Sidebars --> */}
    <section className="sidebar">
      <Sidebar />
    </section>
    <section className="content">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/notice' component={Notice} />
        <Route path='/arrest' component={Arrest} />
        <Route path='/lawsuit' component={() => <div>Lawsuit</div>} />
        <Route path='/exhibit' component={() => <div>Exhibit</div>} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </section>
  </div>
)

export default Content
