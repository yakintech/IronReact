import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Input, Button, Alert } from 'antd';
import { login } from '../../services/loginservice'

function Login() {

    const [loginerror, setloginerror] = useState(false);

    const history = useHistory();


    const onFinish = async (values) => {
        let data = await login(values);
        if (data == undefined) {
            setloginerror(true)
        }
        else {
            history.push(`/Admin`);
        }
    }

    return (
        <div>
            {
                loginerror ? (<Alert message="Kullanıcı adı veya şifre hatalı" type="error" />) : (<span></span>)
            }

            <Form
                name="basic"
                onFinish={onFinish}
            >
                <Form.Item
                    label="EMail"
                    name="email"
                    rules={[{ required: true, message: 'Please input your email!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' }]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" htmlType="submit">
                        Submit
        </Button>
                </Form.Item>
            </Form>
        </div>
    )



}

export default Login
