import React, { useState } from 'react'
import { Button, Checkbox, Form, Input } from 'antd';
import InPutForm from '../input-form';
import {Link} from 'react-router-dom'

interface inputData {
    username: string
    password: string
    email: string
    remember: boolean
}
const initalDataInput: inputData = {
    username: '',
    password: '',
    email: '',
    remember: false 
}

const FormValidate = () => {

    const [state, setState] = useState<inputData>(initalDataInput)
    const onFinish = (values: any) => {
        setState(values);

    };

    const onFinishFailed = (errorInfo: any) => {
        setState(errorInfo);

    };
   
    if(state.remember === true){
        console.log('co gia tri', state);
    }
    else{
        console.log('ko co gia tri:',initalDataInput);
        
    }

    

    return (
        <>
        <Form
            name="basic"
            labelCol={{ span: 8 }} // width of form
            wrapperCol={{ span: 16 }}
            style={{ maxWidth: 600 }}
            initialValues={{ remember: false }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            labelAlign='left'
        >
             Form Validate
            <InPutForm
                label='Username'
                name='username'
                rules={[{

                    required: true,
                    message: 'Please input your username!'
                }]}

            >
                <Input />
            </InPutForm>

            <InPutForm
                label='Email'
                name='email'
                rules={[
                    {
                        required: true,
                        message: 'Please input your Email!'
                    },
                    { type: 'email' }
                ]}
            >
                <Input />
            </InPutForm>

            <InPutForm
                label='Password'
                name='password'
                rules={[{

                    required: true,
                    message: 'Please input your password!'

                },
                { min: 6 }
                ]}

            >
                <Input.Password />
            </InPutForm>

            <Form.Item
                label='Comfirm pass'
                name='ComfirmPassword'
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!'
                    },

                    ({ getFieldValue }) => ({
                        validator(_, value) {
                            if (!value || getFieldValue('password') === value) {
                                return Promise.resolve()
                            }
                            return Promise.reject('The two passwords that you stupid')
                        }
                    })


                ]}

            >
                <Input.Password />
            </Form.Item>



            <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 1, span: 50 }}>
                <Checkbox >Remember me</Checkbox>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 1, span: 50 }}>
                <Button
                    // onClick={handleOnClick}
                    type="primary"
                    htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
        <Link to='/useForm'>UseForm</Link>
        </>
    )
}

export default FormValidate