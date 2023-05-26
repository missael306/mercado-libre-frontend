import React from 'react';
import './ListResult.css';
import { ListItem } from '../ListItem/ListItem.js';
import axios from 'axios';

function ListResult() {  
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
    const productsFetch = async () => {
      const productResponse = await axios.get('http://localhost:3000/api/v1/products', { headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': "*" } });
      setProducts(productResponse.data.items);
    };
    productsFetch().catch(() => { console.log('Error al obtener los productos') });
  }, []);
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
            products.map(product => (
              <ListItem key={product.id} title={product.title} price={product.price} image={product.thumbnail} />
            ))
          }          
        </div>
      </div>
    </React.Fragment>
  );
}

export { ListResult };
