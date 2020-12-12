import React, { useState, useEffect } from 'react'
import 'antd/dist/antd.css';
import Categoryadd from './Categoryadd';
import Categorylist from './Categorylist';

function Category() {

    return (
        <div>
                <Categoryadd></Categoryadd>
                <Categorylist></Categorylist>
        </div>
    )
}

export default Category
