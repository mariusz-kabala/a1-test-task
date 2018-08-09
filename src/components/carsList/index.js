import React, { Component } from 'react'
import CarCard from '../carCard'
import { connect } from 'redux-react'

class CarsList extends Component {
  render() {
    const { cars } = this.props

    return cars.map(car => <CarCard {..car} />)
  }
}

export default connect(
  
)(CarsList)
