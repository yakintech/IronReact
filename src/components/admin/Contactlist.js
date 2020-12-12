import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css';
import { Table } from 'antd';
import {getall} from '../../services/baseservice'


function Contactlist() {

    const [contacts, setContacts] = useState([]);


    const columns = [
        {
            title: "Title",
            dataIndex: "title",
            key: "title"
        },
        {
            title: "EMail",
            dataIndex: "email",
            key: "email"
        }, {
            title: "Content",
            dataIndex: "content",
            key: "content"
        },
        {
            title: "Add Date",
            dataIndex: "adddate",
            key: "adddate"
        },

    ]

    useEffect(async () => {
        let data = await getall("/api/contact");
        setContacts(data);

    }, []);



    return (
        <div>
            <Table dataSource={contacts} columns={columns}></Table>
        </div>
    )
}

export default Contactlist
