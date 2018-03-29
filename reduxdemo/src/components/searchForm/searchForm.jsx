import React, { Component } from 'react';
import { Form, Icon, Input, Button } from 'antd';

const FormItem = Form.Item;

class searchForm extends Component{
    constructor(props){
        super(props)
        this.state = {
            index:0
        }

    }
    componentDidMount() {
        this.props.form.validateFields();
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                this.state.index+=1
                this.setState({
                    index:this.state.index
                })
                values.key = this.state.index;
                this.props.pushValue(values)
            }
        });
    }

    render(){
        const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;

        // Only show error after a field is touched.
        const userNameError = isFieldTouched('userName') && getFieldError('userName');
        const ageError = isFieldTouched('age') && getFieldError('age');   
        const addressError = isFieldTouched('age') && getFieldError('age');   
        
        return(
            <div className="searchBox">
                <Form layout="inline" onSubmit={this.handleSubmit}>
                    <FormItem  validateStatus={userNameError ? 'error' : ''}  help={userNameError || ''}>
                        {getFieldDecorator('userName', {
                            rules: [{ required: true, message: '请输入姓名!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
                        )}
                    </FormItem>

                    <FormItem   validateStatus={ageError ? 'error' : ''}   help={ageError || ''}>
                        {getFieldDecorator('age', {
                            rules: [{ required: true, message: '请输入年龄!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="age" />
                        )}
                    </FormItem>

                    <FormItem   validateStatus={addressError ? 'error' : ''}   help={addressError || ''}>
                        {getFieldDecorator('address', {
                            rules: [{ required: true, message: '请输入地址!' }],
                        })(
                            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="address" />
                        )}
                    </FormItem>

                    <FormItem>
                        <Button type="primary"  htmlType="submit" > 确 定 </Button>
                    </FormItem>
                </Form>
            </div>            
        )
    }
}

const form = Form.create()(searchForm)
export default form;