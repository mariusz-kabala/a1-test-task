import React, { Component } from 'react';

class Counter extends Component {
  constructor(props) {
    super(props)

    const { end } = this.props

    const now = new Date()

    const diff = parseInt((end.getTime() - now.getTime()) / 1000)
console.log('diff', diff)
    this.state = {
      counter: diff
    }
  }

  componentDidMount() {
    const now = new Date();

    setInterval(() => {
      if (this.state.counter > 0) {
        this.setState({
          counter: this.state.counter -= 1
        })
      }
    }, 1000)
  }

  render() {
    const { counter } = this.state

    return (
      <div>{ counter }</div>
    )
  }
}

export default Counter
