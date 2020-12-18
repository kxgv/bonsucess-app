import React from 'react';
import { Product } from '../components/Product';
import data from '../data';

/** 
 * Returns products inside row in Home Screen
 * @function 
 * @name HomeScreen
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