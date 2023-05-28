import React from 'react';
import axios from 'axios';
import ShareFunction from '../assets/util/shareFunctions';
import { ListItem } from '../ListItem/ListItem';
import mercadoLibre from './../assets/img/mercadolibre.svg';
const shareFunction = new ShareFunction();
const Config = require('../assets/util/config');

const ProductContext = React.createContext();

function ProductProvider(props) {

    const [products, setProducts] = React.useState([]);
    const [searchValue, setSearchValue] = React.useState('');
    const [category, setCategory] = React.useState([]);
    const [loadingSearch, setLoadingSearch] = React.useState(false);

    React.useEffect(() => {
        const productsFetch = async () => {
            const productResponse = await axios.get(`${Config.URL_API}/items`, { params: { q: searchValue } })
                .catch((err) => {
                    console.log(err);
                    shareFunction.generalErrorMessage();
                });                            
            setCategory(productResponse.data.categories);
            setProducts(productResponse.data.items);
        };
        if (loadingSearch) {
            productsFetch();
        }
    }, [searchValue, loadingSearch]);

    const emptyList = () => {

        if (products.length === 0) {
            return (
                <div className="container bg-white py-4">
                    <h3 className="text-center p-3">No se encontraron resultados para su búsqueda.</h3>
                    <img src={mercadoLibre} className="img-fluid d-block w-25 m-auto" alt="logo" />
                </div>
            );
        } else {
            return (products.map(product => (
                <ListItem key={product.id} id={product.id} title={product.title} price={product.price} image={product.thumbnail} />
            )));
        }
    };

    return (
        <ProductContext.Provider value={{
            searchValue,
            setSearchValue,
            emptyList,
            setLoadingSearch,
            category,
            setCategory
        }}>
            {props.children}
        </ProductContext.Provider>
    );
};

export { ProductContext, ProductProvider };