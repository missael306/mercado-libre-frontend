import React from 'react';

const ProductContext = React.createContext();

function ProductProvider(props) {

    const [products, setProducts] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [category, setCategory] = React.useState([]);
    
    return (
        <ProductContext.Provider value={{
            searchValue,
            setSearchValue,                        
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