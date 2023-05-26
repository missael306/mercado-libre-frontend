import React from 'react';
import './DetailProduct.css';
import ShareFunction from '../assets/util/shareFunctions';
const shareFunction = new ShareFunction();

function DetailProduct() {  
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
            <div className="col-xs-12 col-sm-12 col-md-8 d-flex justify-ontent-center align-items-center p-3">
              <img src="https://cdn1.coppel.com/images/catalog/pm/2894843-1.jpg" alt="Producto" className='img-fluid w-75 my-0 mx-auto' />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 p-3">
              <div className="card h-100">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <p className='fs-6'>Nuevo - 241 vistas</p>
                      <h6>Xiaomi Redmi Note 12 Pro 5G Dual SIM 128 GB negro 6 GB RAM</h6>
                      <p className='fs-2'>$ 1,980</p>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 d-grid gap-2">
                      <button type="button" className="btn btn-primary btn-sm" onClick={()=>{shareFunction.onDevelop()}}>Comprar ahora</button>
                      <button type="button" className="btn btn-light btn-sm" onClick={()=>{shareFunction.onDevelop()}}>Agregar al carrito</button>
                    </div>
                    <div className="col-12 pt-3">
                      <div className="row">
                        <div className="col-1 text-center">
                          <i className="bi bi-arrow-return-left d-inline-block"></i>
                        </div>
                        <div className="col-11">
                          <span className='app-nota' onClick={()=>{shareFunction.onDevelop()}}>Devolución gratis</span>
                          <span>. Tienes 30 días desde que lo recibes.</span>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-1 text-center">
                          <i className="bi bi-patch-check"></i>
                        </div>
                        <div className="col-11">
                          <span className='app-nota' onClick={()=>{shareFunction.onDevelop()}} >Compra Protegida</span>
                          <span>, recibe el producto que esperabas o te devolvemos tu dinero.</span>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-1 text-center">
                          <i className="bi bi-trophy"></i>
                        </div>
                        <div className="col-11">
                          <span className='app-nota' onClick={()=>{shareFunction.onDevelop()}}>Mercado Puntos</span>
                          <span>. Sumas 1052 puntos.</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row p-3">
            <h5>Descripción del producto</h5>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { DetailProduct };
