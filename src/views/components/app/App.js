import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CounterFromHOC from '../counter/CounterFromHOC'
import Counter from '../counter/CounterRP'
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
        <CounterFromHOC />
        <Typography variant='subheading'>Counter implementation with render props</Typography>
        <Counter
          render={(value, inc, dec) => (
            <Fragment>
              <Typography>{value}</Typography>
              <Button color='primary' onClick={dec}>Dec</Button>
              <Button color='primary' onClick={inc}>Inc</Button>        
            </Fragment>
          )} 
        />
      </div>
    );
  }
}

export default App;
