import jquery from 'jquery';

import 'bootstrap';
import React from 'react';
import { Router, Route, Link } from '../utils'
import { Home, About, NoticeList, NoticeManage, StaffList } from '../components'

const AppContainer = () => (
  <Router>
    <div>
      <nav className="navbar navbar-light bg-faded">
        <Link to='/' className='nav-brand'>Home</Link>
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <Link to='/about' className='nav-link'>About</Link>
          </li>
        </ul>
      </nav>
      <Route path='/' component={ Home } />
      <Route path='/about' component={ About } />
      <Route path='/notice-list' component={ NoticeList } />
      <Route path='/notice-manage' component={ NoticeManage } />
    </div>
  </Router>
)

export default AppContainer