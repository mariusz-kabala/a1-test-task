import React, { PureComponent } from 'react'
import { Card } from 'antd'

class CarTable extends PureComponent {
  render() {
    const { columns } = this.props

    return (
      <ul>
        {
          columns.map((column, index) => {
            return (
              <li key={index}>
                <strong>{column.label}:</strong> {this.props[column.dataIndex]}
              </li>
            )
          })
        }
      </ul>
    )
  }
}

export default CarTable
