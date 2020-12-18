import React from 'react';
import { Product } from '../components/Product';
import data from '../data';

/** 
 * Returns a list of products 
 * @param {Object[]} product - The products items 
 * @returns {Product}  products objects inside a row center 
*/

export default function HomeScreen() {
  return (
    <div>
      <div className="row center">
        {data.products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
}
