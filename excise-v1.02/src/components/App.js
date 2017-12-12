import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Content, Header } from './'

import 'bootstrap/dist/css/bootstrap.css';
import "../../node_modules/adminbsb-materialdesign/plugins/node-waves/waves.css"
import "../../node_modules/adminbsb-materialdesign/plugins/animate-css/animate.css";
import '../../node_modules/adminbsb-materialdesign/css/style.css';
import "../../node_modules/adminbsb-materialdesign/css/themes/all-themes.css";
import '../excise-custom-theme/css/App.css';

import $ from "jquery"
window.jQuery = $;
window.$ = $;
global.jQuery = $;
global.$ = $;
require('bootstrap/dist/js/bootstrap.js');
const Waves = require("../../node_modules/adminbsb-materialdesign/plugins/node-waves/waves.js");
window.Waves = Waves;
require("../../node_modules/adminbsb-materialdesign/plugins/jquery-slimscroll/jquery.slimscroll.js");
require("../../node_modules/adminbsb-materialdesign/js/admin.js");
require("../../node_modules/adminbsb-materialdesign/plugins/jquery-inputmask/jquery.inputmask.bundle.js");
// require("../excise-custom-theme/bootstrap-datepicker-custom/dist/js/bootstrap-datepicker-custom.js");
// require("../excise-custom-theme/bootstrap-datepicker-custom/dist/locales/bootstrap-datepicker.th.min.js");
// require("node-waves");

class App extends Component {
  componentDidMount() {
    
  }

  render() {
    return (
      <div>
        <section className="header">
          <Header />
        </section>

        <div>
          <Switch>
            <Route component={Content} />
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
