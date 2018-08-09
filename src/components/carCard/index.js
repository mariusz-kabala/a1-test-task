import React, { Component } from 'react'
import { Card } from 'antd'
import CarTable from '../carTable'
import Counter from '../counter'

class CarCard extends Component {

  constructor(props) {
    super(props)

    const { auctionEndTime } = this.props

    const now = new Date()

    const diff = parseInt((auctionEndTime.getTime() - now.getTime()) / 1000)

    this.state = {
      counter: diff
    }
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.counter > 0) {
        this.setState({
          counter: this.state.counter -= 1
        })
      }
    }, 1000)
  }

  renderTitle(title) {
    return (<h3>{title}</h3>)
  }

  render() {
    const { name } = this.props
    const columns = [
      {
        dataIndex: 'stockNumber',
        label: 'stockNumber'
      },
      {
        dataIndex: 'firstRegistration',
        label: 'First registration'
      },
      {
        dataIndex: 'horsepower',
        label: 'Horsepower'
      }
    ]

    return (
      <Card title={ <Counter seconds={this.state.counter} />}>
        {this.renderTitle(name)}
        <CarTable columns={columns} {...this.props} />
      </Card>
    )
  }
}

export default CarCard
