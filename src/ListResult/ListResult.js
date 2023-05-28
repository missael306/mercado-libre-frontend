import React from 'react';
import './ListResult.css';
import { ProductContext } from '../ProductContext/ProductContext.js';
import { useLocation } from 'react-router-dom';

function ListResult() {  
  const { emptyList } = React.useContext(ProductContext);
  const { setSearchValue } = React.useContext(ProductContext);
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
        <nav aria-label="breadcrumb" className='app-breadcrumb rounded-top-1 mt-3 p-2'>
          <ol className="breadcrumb mb-0">
            <li className="breadcrumb-item"><a href="index.html">Celulares y Telefonía</a></li>
            <li className="breadcrumb-item active" aria-current="page"><a href='index.html'>Celulares y Smartphones</a></li>
          </ol>
        </nav>
        <div className="container bg-white">
          {
            emptyList()
          }
        </div>
      </div>
    </React.Fragment>
  );
}

export { ListResult };
