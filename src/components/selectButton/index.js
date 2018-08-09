import { Button } from 'antd';
import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { showCar } from '../../actions/cars'

class SelectButton extends PureComponent {
  render() {
    return (
      <Button type="primary" onClick={() => {
        const { carIndex, onClick } = this.props

        onClick(carIndex)
      }}>
        Show details
      </Button>
    )
  }
}

export default connect(
  null,
  dispatch => ({
    onClick: carIndex => dispatch(showCar(carIndex))
  })
)(SelectButton)
