import React from 'react';
import './ListResult.css';
import { ProductContext } from '../ProductContext/ProductContext.js';
import { useLocation } from 'react-router-dom';
import { BreadCrumb } from '../BreadCrumb/BreadCrumb';
import { ListItem } from '../ListItem/ListItem';
import { Loading } from '../Share/Loading';
import { EmptyResult } from '../Share/EmptyResult';
import { Unexpected } from "../Share/Unexpecetd";
import { ProductServices } from '../services/ProductService';

function ListResult() {
  const { setCategory,setSearch } = React.useContext(ProductContext);
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const searchQuery = (query.get('search')) ? query.get('search') : "";
  const [loadingSearch, setLoadingSearch] = React.useState(true);
  const [errorgSearch, setErrorgSearch] = React.useState(false);
  const [products, setProducts] = React.useState([]);
  
  React.useEffect(() => {        
    setSearch(searchQuery);
    ProductServices.getProducts(searchQuery).then((response) => {      
      setProducts(response.items);
      setLoadingSearch(false);
      setCategory(response.categories);
    }).catch(() => {            
      setCategory([]);
      setProducts([]);
      setErrorgSearch(true);
      setLoadingSearch(false);
    });
  }, [searchQuery, setProducts, setCategory, setSearch]);

  return (
    <React.Fragment>
      <div className="container">
        <BreadCrumb />
        <div className="container bg-white">
          {!loadingSearch && errorgSearch && <Unexpected />}
          {loadingSearch && products.length === 0 && <Loading />}
          {!loadingSearch && products.length === 0 && <EmptyResult />}
          {
            products.map(product => (
              <ListItem key={product.id} id={product.id} title={product.title} price={product.price} image={product.thumbnail} />
            ))
          }
        </div>
      </div>
    </React.Fragment>
  );
}

export { ListResult };
