import React, { PureComponent } from 'react'
import { Card } from 'antd'

class CarCard extends PureComponent {

  renderTitle(title) {
    return (<h3>{title}</h3>)
  }

  render() {
    const { name } = this.props
console.log(this.props)
    return (
      <Card>
        {this.renderTitle(name)}
      </Card>
    )
  }
}

export default CarCard
