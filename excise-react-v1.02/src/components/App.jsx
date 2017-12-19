import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { Header, Content } from './'

class App extends Component {
  render() {
    return (
      <div>
        <section className="header">
          <Header />
        </section>
        <Switch>
          <Route component={Content} />
        </Switch>
      </div>
    );
  }
}

export default App;
