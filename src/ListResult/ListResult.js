import React from 'react';
import './ListResult.css';

function ListResult() {

  return (
    <React.Fragment>
      <div className="container">
        <nav aria-label="breadcrumb" className='app-breadcrumb rounded-top-1 mt-3 p-2'>
          <ol class="breadcrumb mb-0">
            <li class="breadcrumb-item"><a href="index.html">Celulares y Telefonía</a></li>
            <li class="breadcrumb-item active" aria-current="page"><a href='index.html'>Celulares y Smartphones</a></li>
          </ol>
        </nav>
        <div className="container bg-white">
          <div className="row">
            <div className="col-3">
              <img src="https://cdn1.coppel.com/images/catalog/pm/2894843-1.jpg" alt="Producto" className='img-fluid' />
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col d-flex">
                  <p className='fs-3 align-self-center m-0'>$ 1,902</p>
                  <i class="bi bi-circle-fill fs-6 align-self-center ms-2 app-bullet-available"></i>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className='fs-5'>Xiaomi Redmi Note 12 Pro 5G Dual SIM 128 GB negro 6 GB RAM</p>
                </div>
              </div>
            </div>
            <div className="col-3 d-flex justify-content-center align-items-center">
              <div className="row w-100">
                <div className="col d-grid gap-2">
                  <button type="button" className="btn btn-primary btn-sm">Comprar ahora</button>
                  <button type="button" className="btn btn-light btn-sm">Agregar al carrito</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <img src="https://cdn1.coppel.com/images/catalog/pm/2894843-1.jpg" alt="Producto" className='img-fluid' />
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col d-flex">
                  <p className='fs-3 align-self-center m-0'>$ 1,902</p>
                  <i class="bi bi-circle-fill fs-6 align-self-center ms-2 app-bullet-available"></i>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className='fs-5'>Xiaomi Redmi Note 12 Pro 5G Dual SIM 128 GB negro 6 GB RAM</p>
                </div>
              </div>
            </div>
            <div className="col-3 d-flex justify-content-center align-items-center">
              <div className="row w-100">
                <div className="col d-grid gap-2">
                  <button type="button" className="btn btn-primary btn-sm">Comprar ahora</button>
                  <button type="button" className="btn btn-light btn-sm">Agregar al carrito</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-3">
              <img src="https://cdn1.coppel.com/images/catalog/pm/2894843-1.jpg" alt="Producto" className='img-fluid' />
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col d-flex">
                  <p className='fs-3 align-self-center m-0'>$ 1,902</p>
                  <i class="bi bi-circle-fill fs-6 align-self-center ms-2 app-bullet-available"></i>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className='fs-5'>Xiaomi Redmi Note 12 Pro 5G Dual SIM 128 GB negro 6 GB RAM</p>
                </div>
              </div>
            </div>
            <div className="col-3 d-flex justify-content-center align-items-center">
              <div className="row w-100">
                <div className="col d-grid gap-2">
                  <button type="button" className="btn btn-primary btn-sm">Comprar ahora</button>
                  <button type="button" className="btn btn-light btn-sm">Agregar al carrito</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { ListResult };
