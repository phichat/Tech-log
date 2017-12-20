
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { Header, Content } from './'

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
