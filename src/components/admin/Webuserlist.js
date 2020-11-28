import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css';
import { Table, Button, Input, Form } from 'antd';
import moment from 'moment';
import 'moment/locale/tr';
import TextArea from 'antd/lib/input/TextArea';

moment.locale("tr")



function Webuserlist() {


    const [webusers, setWebusers] = useState([]);

    // const [email, setEMail] = useState('');
    // const [phone, setPhone] = useState('');
    // const [address1, setAddress1] = useState('');
    // const [address2, setAddress2] = useState('');




    function deleteuser(id) {
        
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ id: id })
        };

        let token = localStorage.getItem("tokenkey");


        fetch("http://localhost:3001/api/webuser/delete?token=" + token, requestOptions)
            .then((res) => res.json())
            .then((r) => {

                fillData();

            })
    }

    const columns = [
        {
            title: "EMail",
            dataIndex: "email",
            key: "email"
        },
        {
            title: "Phone",
            dataIndex: "phone",
            key: "phone"
        }, {
            title: "Address",
            dataIndex: "address1",
            key: "address1"
        },
        {
            title: "Add Date",
            dataIndex: "adddate",
            key: "adddate"
        },
        {
            title: "Delete",
            dataIndex: "_id",
            key: "_id",
            render: id => <Button danger onClick={() => deleteuser(id)}>Delete</Button>
        }

    ]


    useEffect(() => {
        fillData();
    }, [])




    // const save = () => {

    //     let webuser = {
    //         email: email,
    //         phone: phone,
    //         address1: address1,
    //         address2: address2
    //     };

    //     const requestOptions = {
    //         method: 'POST',
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify(webuser)
    //     };


    //     fetch("http://localhost:3001/api/webuser/add", requestOptions)
    //         .then((res) => res.json())
    //         .then((result) => {

    //             fillData();
    //         })

    // }


    const onFinish = (values) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(values)
        };

        let token = localStorage.getItem("tokenkey");


        fetch("http://localhost:3001/api/webuser/add?token=" + token, requestOptions)
            .then((res) => res.json())
            .then((result) => {

                fillData();
            })
    }


    const fillData = () => {

        let token = localStorage.getItem("tokenkey");


        fetch("http://localhost:3001/api/webuser?token=" + token)
            .then((res) => res.status === 200 ? res.json() : [])
            .then((result) => {
                let usersvm = [];

                result.forEach(element => {
                    element.adddate = moment(element.adddate).format('DD MMMM YYYY');
                    element.phone = "+90" + element.phone;
                    element.address1 = element.address[0];
                    usersvm.push(element);
                });

                setWebusers(usersvm);
            })


    }

    return (
        <div>

            <Form
                name="basic"
                onFinish={onFinish}
            >

                <Form.Item
                    label="EMail"
                    name="email"
                    rules={
                        [
                            {
                                required: true,
                                message: "EMail alanı boş bırakılamaz"
                            },
                            {
                                type: "email",
                                message: "Lütfen bir email formatı giriniz"
                            }
                        ]
                    }
                >
                    <Input></Input>
                </Form.Item>

                <Form.Item
                    label="Phone"
                    name="phone"
                    rules={[
                        {
                            required: true,
                            message: "Phone alanı boş bırakılmaz"
                        }
                    ]}
                >
                    <Input></Input>
                </Form.Item>

                <Form.Item
                    label="Adres - 1"
                    name="address1"
                >
                    <TextArea></TextArea>
                </Form.Item>

                <Form.Item
                    label="Adres -2"
                    name="address2"
                >
                    <TextArea></TextArea>
                </Form.Item>

                <Form.Item>
                    <Button type="primary" htmlType="submit">
                        Save
                    </Button>
                </Form.Item>

            </Form>


            {/* 

            <div>
                <div>
                    <label>EMail</label>
                    <Input onChange={(e) => setEMail(e.target.value)}></Input>
                </div>
                <div>
                    <label>Phone</label>
                    <Input onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div>
                    <label>Address - 1</label>
                    <Input onChange={(e) => setAddress1(e.target.value)} />
                </div>
                <div>
                    <label>Address - 2</label>
                    <Input onChange={(e) => setAddress2(e.target.value)} />
                </div>
                <div>
                    <Button onClick={save}>Add</Button>
                </div>
            </div>
            
             */}

            <Table dataSource={webusers} columns={columns} />
        </div>
    )
}

export default Webuserlist
