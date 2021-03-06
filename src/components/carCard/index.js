import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Card } from 'antd'
import CarTable from '../carTable'
import Counter from '../counter'
import SelectButton from '../selectButton'

class CarCard extends Component {
  constructor(props) {
    super(props)

    const { auctionEndTime } = this.props

    const now = new Date()

    const diff = parseInt((auctionEndTime.toDate().getTime() - now.getTime()) / 1000)

    this.state = {
      counter: diff
    }
  }

  componentDidMount() {
    setInterval(() => {
      if (this.state.counter > 0) {
        this.setState({
          counter: (this.state.counter -= 1)
        })
      }
    }, 1000)
  }

  componentWillReceiveProps({ counters }) {
    if (counters.isRunning) {
      const { auctionEndTime } = this.props

      const now = new Date()

      const diff = parseInt((auctionEndTime.toDate().getTime() - now.getTime()) / 1000)

      this.setState({ counter: diff })
    } else {
      this.setState({ counter: 0 })
    }
  }

  renderTitle(title) {
    return <h3>{title}</h3>
  }

  render() {
    const { name } = this.props
    const columns = [
      {
        dataIndex: 'stockNumber',
        label: 'Stock number'
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
      <Card title={<Counter seconds={this.state.counter} />}>
        {this.renderTitle(name)}
        <CarTable columns={columns} {...this.props} />
        <SelectButton carIndex={this.props.index}/>
      </Card>
    )
  }
}

export default connect(({ counters }) => ({ counters }))(CarCard)
