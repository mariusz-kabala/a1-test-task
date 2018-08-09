import React, { Component } from 'react'
import { Button } from 'antd'
import { connect } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import { START_ALL_COUNTERS, STOP_ALL_COUNTERS } from './actions/counters'
import Form from './components/form'
import { Row, Col } from 'antd'
import CarsList from './components/carsList'
import CarDetails from './components/details'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to AUTO1!</h1>
        </header>
        <div className="App-intro">
          <Row type="flex" justify="center">
            <Col span={6}>
              <CarsList />
            </Col>
            <Col span={6}>
              <CarDetails />
            </Col>
          </Row>
          <p style={{marginTop: 20}}>
            <Button
              type="danger"
              onClick={e => this.props.dispatch({ type: STOP_ALL_COUNTERS })}
            >
              Stop all counters
            </Button>
            <Button
              type="primary"
              onClick={e => this.props.dispatch({ type: START_ALL_COUNTERS })}
            >
              Start all counters
            </Button>
          </p>
        </div>

        <Form />
      </div>
    )
  }
}

export default connect()(App)
