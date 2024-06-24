
import React, { useState } from 'react'
import AppContext from './AppContext'

const Provider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loadingSpin, setLoadSpin] = useState(true);

    const value = {
        products,
        setProducts,
        loadingSpin,
        setLoadSpin
    }

    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    )
}

export default Provider;