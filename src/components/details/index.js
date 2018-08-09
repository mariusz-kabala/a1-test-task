import React, { Component } from 'react'
import { connect } from 'react-redux'

class CarDetails extends Component {
  render() {
    const { name } = this.props

    if (!name) {
      return (
        <p>
          Select a car from the list on the left to see details!
        </p>
      )
    }

    return (
      <h1>{name}</h1>
    )
  }
}

export default connect(
  state => ({
    ...state.cars.selected
  })
)(CarDetails)
