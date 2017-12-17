
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Header, Content } from './'

import $ from 'jquery'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min.js'

import 'bootstrap-datepicker/dist/css/bootstrap-datepicker3.css'
import 'bootstrap-datepicker/dist/js/bootstrap-datepicker.js'
import 'bootstrap-datepicker/dist/locales/bootstrap-datepicker.th.min.js'

import 'adminbsb-materialdesign/plugins/animate-css/animate.css'
import 'adminbsb-materialdesign/plugins/node-waves/waves.css'
import 'adminbsb-materialdesign/plugins/jquery-slimscroll/jquery.slimscroll.js'
import 'adminbsb-materialdesign/plugins/jquery-inputmask/jquery.inputmask.bundle.js'

import 'adminbsb-materialdesign/css/themes/all-themes.css'
import 'adminbsb-materialdesign/css/style.css'
import 'adminbsb-materialdesign/js/admin.js'

const Waves = require('adminbsb-materialdesign/plugins/node-waves/waves.js')
window.Waves = Waves;

const App = () => (
    <div>
        <section className="header">
            <Header />
        </section>
        <Switch>
            <Route component={Content} />
        </Switch>
    </div>
)

export default App
