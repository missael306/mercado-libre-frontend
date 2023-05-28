import React from 'react';
import './DetailProduct.css';
import axios from 'axios';
import ShareFunction from '../assets/util/shareFunctions';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../ProductContext/ProductContext.js';
import { BreadCrumb } from '../BreadCrumb/BreadCrumb';
const shareFunction = new ShareFunction();
const Config = require('../assets/util/config');

function DetailProduct(props) {
  const { setCategory } = React.useContext(ProductContext);
  const [detail, setDetail] = React.useState({});
  const [condition, setCondition] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [picture, setPicture] = React.useState("");
  const params = useParams();

  React.useEffect(() => {
    const detailFetch = async () => {
      const detailResponse = await axios.get(`${Config.URL_API}/items/${params.id}`)
        .catch((err) => {
          console.log(err);
          shareFunction.generalErrorMessage();
        });
      const dataDetailFetch = detailResponse.data.item
      setDetail(dataDetailFetch);
      const attributeCondition = dataDetailFetch.attributes.find((item) => item.id === 'ITEM_CONDITION');
      const condition = attributeCondition ? attributeCondition.value_name : "";
      setCondition(condition);
      const price = parseFloat(dataDetailFetch.price).toLocaleString(undefined, { maximumFractionDigits: 2 });
      setPrice(price);
      const lastPicture = dataDetailFetch.pictures.length > 1 ? dataDetailFetch.pictures[dataDetailFetch.pictures.length - 1] : dataDetailFetch.pictures[0];
      const picture = lastPicture ? lastPicture.url : "";
      setPicture(picture);
      setCategory(detailResponse.data.categories);
    };
    detailFetch();
  }, [params.id]);

  return (
    <React.Fragment>
      <div className="container">
        <BreadCrumb />
        <div className="container bg-white">
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-8 d-flex justify-ontent-center align-items-center p-3">
              <img src={picture} alt="Producto" className='img-fluid w-75 my-0 mx-auto' />
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 p-3">
              <div className="card h-100">
                <div className="card-body">
                  <div className="row">
                    <div className="col">
                      <p className='fs-6'>
                        {condition}
                        <span className='p-1'>|</span>
                        {detail.sold_quantity} vendidos
                      </p>
                      <h6>{detail.title}</h6>
                      <p className='fs-2'>
                        <span>$ </span>
                        {price}
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
              {detail.description}
            </p>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export { DetailProduct };
