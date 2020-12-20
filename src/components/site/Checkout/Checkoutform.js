import React, {useContext} from 'react';
import 'antd/dist/antd.css';
import { Button, Input, Form } from 'antd';
import {add} from '../../../services/baseservice';
import cartContext from '../../../context/Cartcontext'

function Checkoutform() {

    const { cart, setCart } = useContext(cartContext);

    const onFinish = (values) => {
        
        let orderdata = {};

        orderdata = values;
        orderdata.orderdetail = cart;

        add('/api/order/add',orderdata);

        alert("Siparişiniz başarıyla iletilmiştir!! hadi bakalım")

    }

    return (
        <>

            <div className="col-lg-8 col-12">
                <div className="checkout-form">
                    <h2>Make Your Checkout Here</h2>
                    <p>Please register in order to checkout more quickly</p>

                    <Form
                        name="basic"
                        onFinish={onFinish}
                    >

                        <div className="row">
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="form-group">

                                    <Form.Item
                                        label="Name"
                                        name="name"
                                        rules={
                                            [
                                                {
                                                    required: true,
                                                    message: "Ad alanı boş bırakılamaz"
                                                }
                                            ]
                                        }
                                    >
                                        <Input></Input>
                                    </Form.Item>

                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="form-group">
                                    <Form.Item
                                        label="Surname"
                                        name="surname"
                                        rules={
                                            [
                                                {
                                                    required: true,
                                                    message: "Soyad alanı boş bırakılamaz"
                                                }
                                            ]
                                        }
                                    >
                                        <Input></Input>
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="form-group">
                                    <Form.Item
                                        label="EMail"
                                        name="email"
                                        rules={
                                            [
                                                {
                                                    type: 'email',
                                                    required: true,
                                                    message: "EMail alanı boş bırakılamaz"
                                                }
                                            ]
                                        }
                                    >
                                        <Input></Input>
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="form-group">
                                    <Form.Item
                                        label="Phone"
                                        name="phone"
                                        rules={
                                            [
                                                {

                                                    required: true,
                                                    message: "Phone alanı boş bırakılamaz"
                                                }
                                            ]
                                        }
                                    >
                                        <Input></Input>
                                    </Form.Item>
                                </div>
                            </div>


                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="form-group">
                                    <Form.Item
                                        label="Address"
                                        name="address"
                                        rules={
                                            [
                                                {

                                                    required: true,
                                                    message: "Address alanı boş bırakılamaz"
                                                }
                                            ]
                                        }
                                    >
                                        <Input></Input>
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="form-group">
                                    <Form.Item
                                        label="Postal Code"
                                        name="postalcode"
                                        rules={
                                            [
                                                {

                                                    required: true,
                                                    message: "Postal Code alanı boş bırakılamaz"
                                                }
                                            ]
                                        }
                                    >
                                        <Input></Input>
                                    </Form.Item>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-6 col-12">

                            </div>
                            <div className="col-lg-6 col-md-6 col-12">
                                <div className="single-widget get-button">
                                    <div className="content">
                                        <div className="button">
                                            <Button type="primary" className="btn" htmlType="submit">
                                                Checokut
                                         </Button>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>



                    </Form>


                </div>
            </div>

        </>
    )
}

export default Checkoutform
