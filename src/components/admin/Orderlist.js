import React, {useContext} from 'react'
import Ordercontext from '../../context/Ordercontext'


function Orderlist() {

    const {sayac, setSayac} = useContext(Ordercontext);

    return (
        <div>
            <h2>Orderlist componenti</h2>
            <h1>{sayac}</h1>
            
        </div>
    )
}

export default Orderlist
