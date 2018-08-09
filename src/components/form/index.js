import React from 'react'
import { connect } from 'react-redux'
import { Form, Input, Button, DatePicker, Modal } from 'antd'
import { changeFields } from '../../actions/form'
import { createCar } from '../../actions/cars'
const FormItem = Form.Item

class CarForm extends React.Component {
  state = {
    isVisible: false
  }

  render() {
    const { getFieldDecorator, validateFields } = this.props.form

    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 }
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 }
      }
    }

    return (
      <div>
        <Button
          type="primary"
          onClick={() => this.setState({ isVisible: true })}
        >
          Create new car
        </Button>
        <Modal
          title="Create new car"
          visible={this.state.isVisible}
          onOk={() => {
            validateFields((err, values) => {
              if (!err) {
                console.log('Received values of form: ', values)
                this.props.createCar(values)
                this.props.form.resetFields()
                this.setState({ isVisible: false })
              }
            })
          }}
          onCancel={() => {
            this.props.form.resetFields()
            this.setState({ isVisible: false })
          }}
        >
          <Form>
            <FormItem {...formItemLayout} label="Name">
              {getFieldDecorator('name', {
                rules: [
                  {
                    required: true,
                    message: 'Please specify car name'
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Description">
              {getFieldDecorator('description', {
                rules: [
                  {
                    required: true,
                    message: 'Please specify description!'
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Stock Number">
              {getFieldDecorator('stockNumber', {
                rules: [
                  {
                    required: true,
                    message: 'Please specify stockNumber!'
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Horsepower">
              {getFieldDecorator('horsepower', {
                rules: [
                  {
                    required: true,
                    message: 'Please specify horsepower!'
                  }
                ]
              })(<Input />)}
            </FormItem>
            <FormItem {...formItemLayout} label="First registration date">
              {getFieldDecorator('firstRegistration', {
                rules: [
                  {
                    type: 'object',
                    required: true,
                    message: 'Please select first registration date!'
                  }
                ]
              })(<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />)}
            </FormItem>
            <FormItem {...formItemLayout} label="Auction end time">
              {getFieldDecorator('auctionEndTime', {
                rules: [
                  {
                    type: 'object',
                    required: true,
                    message: 'Please select acution end time!'
                  }
                ]
              })(<DatePicker showTime format="YYYY-MM-DD HH:mm:ss" />)}
            </FormItem>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default connect(
  state => ({ initialValues: state.form }),
  { changeFields, createCar }
)(
  Form.create({
    mapPropsToFields: ({ initialValues, ...rest }) =>
      Object.entries(initialValues).reduce((props, [key, value]) => {
        props[key] = Form.createFormField({ ...rest[key], ...value })

        return props
      }, {}),
    onFieldsChange: ({ changeFields }, fields) => {
      changeFields(fields)
    }
  })(CarForm)
)
