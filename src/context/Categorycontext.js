import React, { createContext, useState } from 'react'

const categoryContext = createContext(null);


export const CategoryProvider = ({children}) => {

    const [categories, setcategories] = useState([]);

    const values = {
        categories,
        setcategories
    }

    return <categoryContext.Provider value={values}>{children}</categoryContext.Provider>

}

export default categoryContext