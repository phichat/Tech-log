import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ArrestList, ArrestManage } from '../containers'
const Arrest = () => (
    <Switch>
        <Route exact path='/arrest/list' component={ArrestList} />
        <Route path='/arrest/manage' component={ArrestManage} />
    </Switch>
)

export default Arrest