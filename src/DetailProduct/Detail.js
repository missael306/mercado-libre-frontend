import React from "react";
import ShareFunction from '../assets/util/shareFunctions';
const shareFunction = new ShareFunction();

const Detail = (props) => {
    return (
        <React.Fragment>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-8 text-center p-3">
                    <img src={props.picture} alt="Producto" className='img-fluid' />
                </div>
                <div className="col-xs-12 col-sm-12 col-md-4 p-3">
                    <div className="card h-100">
                        <div className="card-body">
                            <div className="row">
                                <div className="col">
                                    <p className='fs-6'>
                                        {props.condition}
                                        <span className='p-1'>|</span>
                                        {props.sold_quantity} vendidos
                                    </p>
                                    <h6>{props.title}</h6>
                                    <p className='fs-2'>
                                        <span>$ </span>
                                        {props.price}
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 d-grid gap-2">
                                    <button type="button" className="btn btn-primary btn-sm" onClick={() => { shareFunction.onDevelop() }}>Comprar ahora</button>
                                    <button type="button" className="btn btn-light btn-sm" onClick={() => { shareFunction.onDevelop() }}>Agregar al carrito</button>
                                </div>
                                <div className="col-12 pt-3">
                                    <div className="row">
                                        <div className="col-1 text-center">
                                            <i className="bi bi-arrow-return-left d-inline-block"></i>
                                        </div>
                                        <div className="col-11">
                                            <span className='app-nota' onClick={() => { shareFunction.onDevelop() }}>Devolución gratis</span>
                                            <span>. Tienes 30 días desde que lo recibes.</span>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-1 text-center">
                                            <i className="bi bi-patch-check"></i>
                                        </div>
                                        <div className="col-11">
                                            <span className='app-nota' onClick={() => { shareFunction.onDevelop() }} >Compra Protegida</span>
                                            <span>, recibe el producto que esperabas o te devolvemos tu dinero.</span>
                                        </div>
                                    </div>
                                    <div className="row mt-3">
                                        <div className="col-1 text-center">
                                            <i className="bi bi-trophy"></i>
                                        </div>
                                        <div className="col-11">
                                            <span className='app-nota' onClick={() => { shareFunction.onDevelop() }}>Mercado Puntos</span>
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
                <p className='app-description'>
                    {props.description}
                </p>
            </div>
        </React.Fragment>
    )
};

export { Detail };