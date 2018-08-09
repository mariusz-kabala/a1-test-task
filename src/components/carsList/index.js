import React, { Component } from 'react'
import CarCard from '../carCard'
import { connect } from 'react-redux'
import { Icon } from 'antd'

class CarsList extends Component {
  render() {
    const { cars } = this.props

    return cars.map((car, index) =>
      <div style={{ marginTop: 20, position: 'relative' }}>
        <CarCard key={index} index={index} {...car} />
        <Icon className="close-button" type="close-circle" />
      </div>
    )
  }
}

export default connect(
  state => ({
    cars: state.cars.cars
  })
)(CarsList)
