import React from 'react';
import axios from 'axios';
import ShareFunction from '../assets/util/shareFunctions';
const shareFunction = new ShareFunction();
const Config = require('../assets/util/config');

const ProductContext = React.createContext();

function ProductProvider(props) {

    const [products, setProducts] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [category, setCategory] = React.useState([]);
    const [loadingSearch, setLoadingSearch] = React.useState(false);
    const [errorgSearch, setErrorgSearch] = React.useState(false);

    React.useEffect(() => {
        const productsFetch = async () => {
            const productResponse = await axios.get(`${Config.URL_API}/items`, { params: { q: searchValue } })
                .catch((err) => {                    
                    setErrorgSearch(true);
                    shareFunction.generalErrorMessage();
                });   
            setLoadingSearch(false);                         
            setCategory(productResponse.data.categories);
            setProducts(productResponse.data.items);
        };
        if (loadingSearch) {
            productsFetch();
        }
    }, [searchValue, loadingSearch,errorgSearch]);    

    return (
        <ProductContext.Provider value={{
            searchValue,
            setSearchValue,            
            setLoadingSearch,
            category,
            setCategory,
            products,
            setErrorgSearch            
        }}>
            {props.children}
        </ProductContext.Provider>
    );
};

export { ProductContext, ProductProvider };