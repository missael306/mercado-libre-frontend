import React from 'react';
import logo from './../assets/img/logo.svg';
import { ProductContext } from '../ProductContext/ProductContext.js';
import './SearchBar.css';

function SearchBar() {
  const { search, setSearch } = React.useContext(ProductContext);

  const onSearchChange = (event) => {    
    setSearch(event.target.value);
  }
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg app-navbar">
        <div className="container d-flex">
          <a href='/'>
            <img src={logo} className="app-logo" alt="logo" />
          </a>
          <form className="flex-grow-1" role="search" action='/items'>
            <div className="input-group">
              <input
                name='search'
                type="text"
                className="form-control"
                placeholder="Buscar productos..."
                aria-label="Buscar productos..."
                aria-describedby="basic-addon2"
                value={search}
                onChange={onSearchChange}/>
              <span className="input-group-text bi bi-search" id="basic-addon2"></span>
            </div>
          </form>
        </div>
      </nav>
    </React.Fragment>
  );
}

export { SearchBar };
