import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css';
import { Table } from 'antd';

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

    useEffect(() => {

        let token = localStorage.getItem("tokenkey");

        fetch("http://localhost:3001/api/contact/?token=" + token)
            .then((res) => res.status === 200 ? res.json() : [])
            .then((result) => {
                setContacts(result);
            })
            .catch((err)=>{
                console.log(err);
            })
    }, []);



    return (
        <div>
            <Table dataSource={contacts} columns={columns}></Table>
        </div>
    )
}

export default Contactlist
