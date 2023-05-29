import React from 'react';
import './DetailProduct.css';
import { useParams } from 'react-router-dom';
import { ProductContext } from '../ProductContext/ProductContext.js';
import { BreadCrumb } from '../BreadCrumb/BreadCrumb';
import { Loading } from '../Share/Loading';
import { EmptyResult } from '../Share/EmptyResult';
import { Unexpected } from "../Share/Unexpecetd";
import { Detail } from './Detail';
import { ProductServices } from '../services/ProductService';


function DetailProduct() {
  const { setCategory } = React.useContext(ProductContext);
  const [detail, setDetail] = React.useState({});
  const [loadingSearch, setLoadingSearch] = React.useState(true);
  const [errorgSearch, setErrorgSearch] = React.useState(false);
  const params = useParams();  

  React.useEffect(() => {
    ProductServices.getDetailtProduct(params.id).then((response) => {
      const detail = response.item;
      setDetail(detail);
      setCategory(response.categories);
      setLoadingSearch(false);
    }).catch(() => {
      setCategory([]);
      setDetail({});
      setLoadingSearch(false);
      setErrorgSearch(true);
    });
  }, [params.id, setCategory, setDetail]);

  let condition = "";
  let price = "";
  let picture = "";
  if (detail.id) {
    const attributeCondition = detail.attributes.find((item) => item.id === 'ITEM_CONDITION');
    condition = attributeCondition ? attributeCondition.value_name : "";

    price = parseFloat(detail.price).toLocaleString(undefined, { maximumFractionDigits: 2 });

    const lastPicture = detail.pictures.length > 1 ? detail.pictures[detail.pictures.length - 1] : detail.pictures[0];
    picture = lastPicture ? lastPicture.url : "";
  }

  return (
    <React.Fragment>
      <div className="container">
        <BreadCrumb />
        <div className="container bg-white">
          {!loadingSearch && errorgSearch && <Unexpected />}
          {loadingSearch && !detail.id && <Loading />}
          {!loadingSearch && !detail.id && <EmptyResult />}
          {!loadingSearch && detail.id && !errorgSearch &&
            <Detail picture={picture} condition={condition} sold_quantity={detail.sold_quantity} title={detail.title} price={price} description={detail.description} />
          }
        </div>
      </div>
    </React.Fragment>
  );
}

export { DetailProduct };
