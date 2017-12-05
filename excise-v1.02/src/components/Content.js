import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Home } from './'
import { Sidebar } from '../containers'

const Content = () => (
  <div className='row'>
    <Sidebar />
    <div className="col-7">
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/notice' component={() => <div>Notice</div>} />
        <Route path='/arrest' component={() => <div>Arrest</div>} />
        <Route path='/lawsuit' component={() => <div>Lawsuit</div>} />
        <Route path='/exhibit' component={() => <div>Exhibit</div>} />
         {/* <Route component={NotFound} /> */}
      </Switch>
    </div>
  </div>
)

export default Content
