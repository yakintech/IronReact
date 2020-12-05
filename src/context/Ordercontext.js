import React, { createContext, useState } from 'react'

const orderContext = createContext(null);


export const OrderProvider = ({children}) => {

    const [sayac, setSayac] = useState(22);

    const values = {
        sayac,
        setSayac
    }

    return <orderContext.Provider value={values}>{children}</orderContext.Provider>

}

export default orderContext