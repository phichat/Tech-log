import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { Header } from './'
import teal from 'material-ui/colors/teal';
import green from 'material-ui/colors/green';
// import { withStyles } from 'material-ui/styles';
// import AppBar from 'material-ui/AppBar';
// import Toolbar from 'material-ui/Toolbar';
// import Typography from 'material-ui/Typography';
// import logo from './logo.svg'
import { Content } from './';
import './App.css';

class App extends Component {
  render() {
    const theme = createMuiTheme({
      palette: {
        primary: teal,
        secondary: green,
      },
      status: {
        danger: 'orange',
      },
    });
    return (
      <MuiThemeProvider theme={theme}>
        <section>
          <Header />
        </section>
        <Switch>
          <Route component={Content} />
        </Switch>
      </MuiThemeProvider>
    );
  }
}

export default App;