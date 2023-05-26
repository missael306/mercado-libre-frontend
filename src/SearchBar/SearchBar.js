import React from 'react';
import logo from './../assets/img/logo.svg';
import './SearchBar.css';

function SearchBar() {

  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg app-navbar">
        <div className="container d-flex">
          <img src={logo} className="app-logo" alt="logo" />
          <form className="flex-grow-1" role="search">
            <div className="input-group">
              <input type="text" className="form-control" placeholder="Buscar productos..." aria-label="Buscar productos..." aria-describedby="basic-addon2" />
              <span className="input-group-text bi bi-search" id="basic-addon2"></span>
            </div>
          </form>
        </div>
      </nav>
    </React.Fragment>
  );
}

export { SearchBar };
