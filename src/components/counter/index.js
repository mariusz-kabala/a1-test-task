import React, { Component } from 'react';

class Counter extends Component {


  render() {
    const { seconds } = this.props

    return (
      <span>Time left: { seconds } s.</span>
    )
  }
}

export default Counter
