import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home, Notice, Arrest } from './'
import { Sidebar } from '../containers'
// import PropTypes from 'prop-types'

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
                <Route path='/lawsuit' component={() => ('Lawsuit')} />
                <Route path='/exhibit' component={() => ('Exhibit')} />
                {/* <Route component={NotFound} /> */}
            </Switch>
        </section>
    </div>
)

export default Content
