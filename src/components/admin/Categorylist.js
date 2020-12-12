import React, { useState, useEffect, useContext } from 'react'
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { getall } from '../../services/baseservice'
import { Spin } from 'antd';
import categoryContext from '../../context/Categorycontext';


function Categorylist() {
    const {categories, setcategories} = useContext(categoryContext);


    const columns = [
        {
            title: "ID",
            dataIndex: "_id",
            key: "_id"
        },
        {
            title: "Name",
            dataIndex: "name",
            key: "name"
        },
        {
            title: "Add Date",
            dataIndex: "adddate",
            key: "adddate"
        },

    ]

    useEffect(async () => {
        let data = await getall("/api/categories");
        setcategories(data);

    }, []);

    return (
        <div>
            <Table dataSource={categories} columns={columns}></Table>
        </div>
    )
}

export default Categorylist
