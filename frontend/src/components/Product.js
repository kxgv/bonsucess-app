import React from 'react';

/**
 * Product is a component that returns a card with product inside 
 * @typedef {Component} Product 
 * @property {string} _id - Product ID 
 * @property {string} image - Product image 
 * @property {string} name - Product name 
 * @property {string} price - Product price
*/

export function Product(props) {
  const { product } = props; // to access product properties like id, name, image 
  return (
    <div key={product._id} className="card">
      <a href={`/product/${product._id}`}>
        <img className="medium" src={product.image} alt={product.name} />
      </a>
      <div className="card-body">
        <a href={`/product/${product._id}`}>
          <h2>{product.name}</h2>
        </a>
      
        <div className="price">${product.price}</div>
      </div>
    </div>
  );
}