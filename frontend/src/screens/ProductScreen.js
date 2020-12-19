import React from 'react';
import { Link } from 'react-router-dom';
import data from '..//data';

/**Returns a Screen for a Product
 * @function
 * @name ProductScreen
 * @param {*} props - any property from Product Component
 */

export default function ProductScreen(props) {
  const product = data.products.find((x) => x._id === props.match.params.id);
  if (!product) {
    return <div> Producto no encontrado</div>;
  }
  return (
    <div>
      <Link to="/">Back to result</Link>
      <div className="row top">
        <div className="col-2">
          <img className="large" src={product.image} alt={product.name}></img>
        </div>
        <div className="col-1">
          <ul>
            <li>
              <h1>{product.name}</h1>
            </li>
            <li>Precio: {product.price}</li>
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
  );
}