import React from 'react';
import logo from './../assets/logo.svg';
import './SearchBar.css';

function SearchBar() {

  return (
    <nav className="navbar navbar-expand-lg App-navbar">
      <div className="container d-flex">
        <img src={logo} className="app-logo" alt="logo" />
        <form className="flex-grow-1" role="search">
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Buscar productos..." aria-label="Buscar productos..." aria-describedby="basic-addon2" />
            <span class="input-group-text bi bi-search" id="basic-addon2"></span>
          </div>
        </form>
      </div>
    </nav>
  );
}

export { SearchBar };
