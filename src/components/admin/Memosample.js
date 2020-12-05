import React, { useState, useEffect } from 'react'
import Altcomponent from './Altcomponent'

function Memosample() {

    const [data, setdata] = useState(0);

    console.log("Memo component render edildi!!");


    return (
        <div>
            <h2>Data: {data}</h2>
            <button onClick={() => setdata(data + 1)}>Change Data</button>
            <h1>Memo Component</h1>
            <Altcomponent name="Çağatay"></Altcomponent>
        </div>
    )
}

export default Memosample
