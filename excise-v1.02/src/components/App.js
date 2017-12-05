import React, { Component } from 'react';
import logo from '../logo.svg';
import { Switch, Route } from 'react-router-dom'
import { Content, Header } from './'

import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import "../../node_modules/adminbsb-materialdesign/plugins/node-waves/waves.css";
import "../../node_modules/adminbsb-materialdesign/plugins/animate-css/animate.css";
import '../../node_modules/adminbsb-materialdesign/css/style.css'
import "../../node_modules/adminbsb-materialdesign/css/themes/all-themes.css";

import 'bootstrap/dist/js/bootstrap.js'
import "../../node_modules/adminbsb-materialdesign/plugins/node-waves/waves.js";
import "../../node_modules/adminbsb-materialdesign/plugins/jquery-slimscroll/jquery.slimscroll.js";
import '../../node_modules/adminbsb-materialdesign/js/admin.js'

import '../App.css'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <div className="container">
          <Switch>
            <Route component={Content} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
