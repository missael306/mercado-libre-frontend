import React from 'react';
import './ListResult.css';
import { ProductContext } from '../ProductContext/ProductContext.js';
import { useLocation } from 'react-router-dom';
import { BreadCrumb } from '../BreadCrumb/BreadCrumb';
import { ListItem } from '../ListItem/ListItem';
import { LoadingProducts } from './LoadingProducts';
import { EmptyResult } from './EmptyResult';
import { Unexpected } from "../Error/Unexpecetd";


function ListResult() {
  const { products } = React.useContext(ProductContext);
  const { setSearchValue } = React.useContext(ProductContext);
  const { setErrorgSearch } = React.useContext(ProductContext);
  const { setLoadingSearch } = React.useContext(ProductContext);
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  const searchQuery = (query.get('search')) ? query.get('search') : "";

  React.useEffect(() => {
    setLoadingSearch(true);
    setSearchValue(searchQuery);
  }, [searchQuery, setSearchValue, setLoadingSearch]);

  return (
    <React.Fragment>
      <div className="container">
        <BreadCrumb />
        <div className="container bg-white">
          {setLoadingSearch && products.length === 0 && <LoadingProducts />}
          {!setLoadingSearch && products.length === 0 && <EmptyResult />}
          {!setLoadingSearch && setErrorgSearch && <Unexpected />}
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
