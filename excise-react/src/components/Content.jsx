import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home } from './'
import { Sidebar } from '../containers'
import '../theme/content.css'

const Content = () => {
    return (
        <div>
            <section>
                <Sidebar />
            </section>
            <section className="content">
                <Switch>
                    <Route exact path='/' component={Home} />
                </Switch>
            </section>
        </div>
    );
}

export default Content;