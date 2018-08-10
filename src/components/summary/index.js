import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class Summary extends PureComponent {
  render() {
    const { total } = this.props

    return (
      <p className="summary">Total amount of cars: {total}</p>
    )
  }
}

export default connect(
  state => ({
    total: state.cars.counter
  })
)(Summary)
