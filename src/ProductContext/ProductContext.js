import React from 'react';

const ProductContext = React.createContext();

function ProductProvider(props) {

    const [products, setProducts] = React.useState([]);
    const [search, setSearch] = React.useState('');
    const [category, setCategory] = React.useState([]);
    
    return (
        <ProductContext.Provider value={{
            search,
            setSearch,                        
            category,
            setCategory,
            products,
            setProducts,                  
        }}>
            {props.children}
        </ProductContext.Provider>
    );
};

export { ProductContext, ProductProvider };