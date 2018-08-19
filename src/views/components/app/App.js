import React, { Fragment } from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

import CounterFromHOC from '../counter/CounterFromHOC'
import Counter from '../counter/CounterRP'
import Posts from '../post/PostsWrapper'

import logo from './logo.svg'
import './App.css'
import 'typeface-roboto'

const App = () => (
  <div className="App">
    <Grid container>
      <Grid item xs={12}>
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
        <Posts />
      </Grid>
    </Grid>
  </div>
)

export default App;
