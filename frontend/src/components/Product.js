import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Product is a component that returns a card with product inside 
 * @typedef {Component} Product 
 * @property {string} _id - Product ID 
 * @property {string} image - Product image 
 * @property {string} name - Product name 
 * @property {string} price - Product price
*/

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <Link to={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </Link>
      <div className="card-body">
        <Link to={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </Link>
        
        <div className="price">${product.price}</div>
      </div>
    </div>
  );
}