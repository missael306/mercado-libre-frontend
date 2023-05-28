import React from 'react';
import './ListResult.css';
import { ProductContext } from '../ProductContext/ProductContext.js';
import { useLocation } from 'react-router-dom';
import { BreadCrumb } from '../BreadCrumb/BreadCrumb';

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
        <BreadCrumb />        
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
