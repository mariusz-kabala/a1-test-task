import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import Counter from './components/counter'
import Form from './components/form'
import { Row, Col } from 'antd'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="App-intro">
          <Row type="flex" justify="center">
            <Col span={6}>col-6</Col>
            <Col span={6}>col-6</Col>
          </Row>
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
