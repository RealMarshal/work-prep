import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Typography from '@material-ui/core/Typography'
import CounterRecompose from './CounterRecompose'
import 'typeface-roboto'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Typography variant='display2' color='primary'>React App</Typography>
        </header>
        <Typography variant='headline' paragraph>
          To get started, edit <code>src/App.js</code> and save to hot-reload the page.
        </Typography>
        <Typography variant='subheading'>Counter implementation with recompose</Typography>
        <CounterRecompose />
      </div>
    );
  }
}

export default App;
