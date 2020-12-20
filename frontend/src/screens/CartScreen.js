import React from 'react';

export default function CartScreen(props) {
  const productId = props.match.params.id;
  const qty = props.location.search
    ? Number(props.location.search.split('=')[1])
    : 1;
  return (
    <div>
      <h1>Pantalla de Cesta</h1>
      <p>
        AÑADIR A LA CESTA : ProductID: {productId} Qty: {qty}
      </p>
    </div>
  );
}
