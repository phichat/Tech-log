import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { NoticeList, NoticeManage } from '../containers'
const Notice = () => (
  <Switch>
    <Route exact path='/notice/notice-list' component={NoticeList} />
    <Route path='/notice/notice-manage' component={NoticeManage} />
  </Switch>
)

export default Notice
