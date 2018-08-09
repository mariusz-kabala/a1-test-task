import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Counter from './components/counter'
import Form from './components/form'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Counter end={new Date('2018-08-09T10:41:17.955Z')} />
          <Counter end={new Date('2018-08-09T10:45:17.955Z')} />
          <Counter end={new Date('2018-08-09T11:41:17.955Z')} />
          <p>
            <a>Add Counter</a>
            <a>Stop all counters</a>
            <a>Starg all counters</a>
          </p>
        </div>

        <Form />
      </div>
    )
  }
}

export default App
