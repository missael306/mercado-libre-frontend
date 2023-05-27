import React from 'react';
import './ListResult.css';
import { ListItem } from '../ListItem/ListItem.js';
import { ProductContext } from '../ProductContext/ProductContext.js';

function ListResult() {    
  const { searchedProducts } = React.useContext(ProductContext);  
  
  return (
    <React.Fragment>
      <div className="container">
        <nav aria-label="breadcrumb" className='app-breadcrumb rounded-top-1 mt-3 p-2'>
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><a href="index.html">Celulares y Telefonía</a></li>
            <li className="breadcrumb-item active" aria-current="page"><a href='index.html'>Celulares y Smartphones</a></li>
          </ol>
        </nav>
        <div className="container bg-white">
          {
            searchedProducts.map(product => (
              <ListItem key={product.id} title={product.title} price={product.price} image={product.thumbnail} />
            ))
          }
        </div>
      </div>
    </React.Fragment>
  );
}

export { ListResult };
