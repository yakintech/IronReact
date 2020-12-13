import React, { useState } from 'react'
import { Alert, Input, Form } from 'antd';
import { add } from '../../../services/baseservice'

import 'antd/dist/antd.css';
import TextArea from 'antd/lib/input/TextArea';

function ContactForm() {

    const [success, setSuccess] = useState(false)

    const onFinish = async (values) => {
        add("/api/contact/add", values);
        setSuccess(true);
    }

    return (
        <>

            <div className="col-lg-8 col-12">

                <div className="form-main">
                    {
                        success ? (<Alert message="Mesajınız başarıyla iletilmiştir" type="success" />) : <></>
                    }
                    <div className="title">

                        <h3>Write us a message</h3>
                    </div>


                    <Form
                        className="form"
                        onFinish={onFinish}
                    >

                        <div className="row">
                            <div className="col-lg-6 col-12">
                                <div className="form-group">
                                    <label>Title<span>*</span></label>
                                    <Form.Item
                                        name="title"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Title alanı boş bırakılmaz"
                                            }
                                        ]}
                                    >
                                        <Input></Input>
                                    </Form.Item>
                                </div>
                            </div>

                            <div className="col-lg-6 col-12">
                                <div className="form-group">
                                    <label>EMail<span>*</span></label>
                                    <Form.Item
                                        name="email"
                                        rules={[
                                            {
                                                required: true,
                                                message: "EMail alanı boş bırakılmaz"
                                            }
                                        ]}
                                    >
                                        <Input></Input>
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group message">
                                    <label>your message<span>*</span></label>
                                    <Form.Item
                                        name="content"
                                        rules={[
                                            {
                                                required: true,
                                                message: "Mesaj alanı boş bırakılmaz"
                                            }
                                        ]}
                                    >
                                        <TextArea></TextArea>

                                    </Form.Item>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-group button">
                                    <button type="submit" className="btn ">Send Message</button>
                                </div>
                            </div>

                        </div>

                    </Form>

                </div>
            </div>
        </>
    )
}

export default ContactForm
