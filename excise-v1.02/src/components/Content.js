import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home, Notice } from './'
import { Sidebar } from '../containers'

import "../../node_modules/adminbsb-materialdesign/plugins/node-waves/waves.css";
import "../../node_modules/adminbsb-materialdesign/plugins/animate-css/animate.css";
import '../../node_modules/adminbsb-materialdesign/css/style.css'
import "../../node_modules/adminbsb-materialdesign/css/themes/all-themes.css";

import "../../node_modules/adminbsb-materialdesign/plugins/node-waves/waves.js";
import "../../node_modules/adminbsb-materialdesign/plugins/jquery-slimscroll/jquery.slimscroll.js";
import '../../node_modules/adminbsb-materialdesign/js/admin.js'

const Content = () => (
  <div>
    <section className="sidebar">
      <Sidebar />
    </section>
    <section className="content">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/notice' component={Notice} />
          <Route path='/arrest' component={() => <div>Arrest</div>} />
          <Route path='/lawsuit' component={() => <div>Lawsuit</div>} />
          <Route path='/exhibit' component={() => <div>Exhibit</div>} />
          {/* <Route component={NotFound} /> */}
        </Switch>
    </section>
  </div>
)

export default Content
