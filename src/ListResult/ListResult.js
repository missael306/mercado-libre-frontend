import React from 'react';
import './ListResult.css';
import ShareFunction from '../assets/util/shareFunctions';
const shareFunction = new ShareFunction();

function ListResult() {

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
        <div className="row">
            <div className="col col-sm-4 col-md-3 d-flex justify-ontent-center align-items-center">
              <img src="https://cdn1.coppel.com/images/catalog/pm/2894843-1.jpg" alt="Producto" className='img-fluid' />
            </div>
            <div className="col col-sm-8 col-md-6 p-3">
              <div className="row">
                <div className="col d-flex">
                  <p className='fs-3 align-self-center m-0'>$ 1,902</p>
                  <i className="bi bi-circle-fill fs-6 align-self-center ms-2 app-bullet-available"></i>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className='fs-5'>Xiaomi Redmi Note 12 Pro 5G Dual SIM 128 GB negro 6 GB RAM</p>
                </div>
              </div>
            </div>
            <div className="col col-md-3 d-flex justify-ontent-center align-items-center d-none  d-md-flex">
              <div className="row w-100">
                <div className="col d-grid gap-2">
                  <button type="button" className="btn btn-primary btn-sm">Comprar ahora</button>
                  <button type="button" className="btn btn-light btn-sm" onClick={()=>{shareFunction.onDevelop()}}>Agregar al carrito</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col-sm-4 col-md-3 d-flex justify-ontent-center align-items-center">
              <img src="https://cdn1.coppel.com/images/catalog/pm/2894843-1.jpg" alt="Producto" className='img-fluid' />
            </div>
            <div className="col col-sm-8 col-md-6 p-3">
              <div className="row">
                <div className="col d-flex">
                  <p className='fs-3 align-self-center m-0'>$ 1,902</p>
                  <i className="bi bi-circle-fill fs-6 align-self-center ms-2 app-bullet-available"></i>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className='fs-5'>Xiaomi Redmi Note 12 Pro 5G Dual SIM 128 GB negro 6 GB RAM</p>
                </div>
              </div>
            </div>
            <div className="col col-md-3 d-flex justify-ontent-center align-items-center d-none  d-md-flex">
              <div className="row w-100">
                <div className="col d-grid gap-2">
                  <button type="button" className="btn btn-primary btn-sm">Comprar ahora</button>
                  <button type="button" className="btn btn-light btn-sm" onClick={()=>{shareFunction.onDevelop()}}>Agregar al carrito</button>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col col-sm-4 col-md-3 d-flex justify-ontent-center align-items-center">
              <img src="https://cdn1.coppel.com/images/catalog/pm/2894843-1.jpg" alt="Producto" className='img-fluid' />
            </div>
            <div className="col col-sm-8 col-md-6 p-3">
              <div className="row">
                <div className="col d-flex">
                  <p className='fs-3 align-self-center m-0'>$ 1,902</p>
                  <i className="bi bi-circle-fill fs-6 align-self-center ms-2 app-bullet-available"></i>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className='fs-5'>Xiaomi Redmi Note 12 Pro 5G Dual SIM 128 GB negro 6 GB RAM</p>
                </div>
              </div>
            </div>
            <div className="col col-md-3 d-flex justify-ontent-center align-items-center d-none  d-md-flex">
              <div className="row w-100">
                <div className="col d-grid gap-2">
                  <button type="button" className="btn btn-primary btn-sm">Comprar ahora</button>
                  <button type="button" className="btn btn-light btn-sm" onClick={()=>{shareFunction.onDevelop()}}>Agregar al carrito</button>
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
