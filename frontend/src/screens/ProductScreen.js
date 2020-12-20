import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    dispatch(detailsProduct(productId));
  }, [dispatch, productId]);

  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
            <div>
              <Link to="/">Volver</Link>
              <div className="row top">
                <div className="col-2">
                  <img
                    className="large"
                    src={product.image}
                    alt={product.name}
                  ></img>
                </div>
                <div className="col-1">
                  <ul>
                    <li>
                      <h1>{product.name}</h1>
                    </li>
                    <li>Precio: ${product.price}</li>
                    <li>
                      Descripción:
                  <p>{product.description}</p>
                    </li>
                  </ul>
                </div>
                <div className="col-1">
                  <div className="card card-body">
                    <ul>
                      <li>
                        <div className="row">
                          <div>Price</div>
                          <div className="price">${product.price}</div>
                        </div>
                      </li>
                      <li>
                        <div className="row">
                          <div>Estado</div>
                          <div>
                            {product.countInStock > 0 ? (
                              <span className="success">En Stock</span>
                            ) : (
                                <span className="danger">No disponible</span>
                              )}
                          </div>
                        </div>
                      </li>
                      <li>
                        <button className="primary block">Añadir a la cesta</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )}
    </div>
  );
}
