import React from 'react';
import axios from 'axios';
import ShareFunction from '../assets/util/shareFunctions';
const shareFunction = new ShareFunction();
const Config = require('../assets/util/config');

const ProductContext = React.createContext();

function ProductProvider(props) {

    const [products, setProducts] = React.useState([]);
    React.useEffect(() => {
        const productsFetch = async () => {
            const productResponse = await axios.get(`${Config.URL_API}/products`)
                .catch((err) => {
                    console.log(err);
                    shareFunction.generalErrorMessage();
                });
            setProducts(productResponse.data.items);
        };
        productsFetch();
    }, []);

    const [searchValue, setSearchValue] = React.useState('');
    const searchedProducts = products.filter((item) => {
        const value = searchValue ? searchValue.toLowerCase() : '';
        const title = item.title ? item.title.toLowerCase() : '';
        return title.includes(value);
    });

    return (
        <ProductContext.Provider value={{            
            searchValue,
            setSearchValue,
            searchedProducts
        }}>
            {props.children}
        </ProductContext.Provider>
    );
};

export { ProductContext, ProductProvider };