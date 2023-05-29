import React from 'react';
import ShareFunction from '../assets/util/shareFunctions';
import { Link } from 'react-router-dom';
const shareFunction = new ShareFunction();

function ListItem(props) {
  return (
    <React.Fragment>
      <Link to={`/items/${props.id}`} >
      <div className="row app-list-item">
        <div className="col col-sm-4 col-md-3 d-flex justify-content-center align-items-center">
          <img src={props.image} alt="Producto" className='img-fluid' />
        </div>
        <div className="col col-sm-8 col-md-6 p-3">
          <div className="row">
            <div className="col d-flex">
              <p className='fs-3 align-self-center m-0'>
                <span>$</span>
                {parseFloat(props.price).toLocaleString(undefined, { maximumFractionDigits: 2 })}
              </p>
              <i className="bi bi-circle-fill fs-6 align-self-center ms-2 app-bullet-available"></i>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <p className='fs-5'>{props.title}</p>
            </div>
          </div>
        </div>
        <div className="col col-md-3 d-flex justify-ontent-center align-items-center d-none  d-md-flex">
          <div className="row w-100">
            <div className="col d-grid gap-2">
              <Link to={`/items/${props.id}`} className="btn btn-primary btn-sm">
                Comprar ahora
              </Link>
              <button type="button" className="btn btn-light btn-sm" onClick={() => { shareFunction.onDevelop() }}>Agregar al carrito</button>
            </div>
          </div>
        </div>
      </div>
      </Link>
    </React.Fragment>
  );
}

export { ListItem };