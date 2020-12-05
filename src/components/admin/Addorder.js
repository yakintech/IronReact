import React, {useContext} from 'react'
import Ordercontext from '../../context/Ordercontext'

function AddOrder() {

    const {sayac, setSayac} = useContext(Ordercontext);

    return (
        <div>
            <p>Add Order Componenti</p>
            <h1>{sayac}</h1>
            <button onClick={()=> setSayac(sayac + 1)}>Change Sayac</button>
        </div>
    )
}

export default AddOrder
