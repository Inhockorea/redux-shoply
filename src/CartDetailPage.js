import React from "react";
import {useSelector, shallowEqual} from "react-redux"
import "./ItemCard.css"
import CartItemCard from "./CartItemCard";

function ItemDetailPage({ AddItemCart, RemoveItemCart}) {
  
  const products = useSelector(st => st.products, shallowEqual);
  const shoppingCart = useSelector(st => st.shoppingCart, shallowEqual);
  const cartTotal = useSelector(st => st.cartTotal, shallowEqual);

  let itemsToAdd = [];

  for (let id in shoppingCart) {
    let newProduct = {...products[id], id, count:shoppingCart[id]}
    itemsToAdd.push(newProduct)
  }

  let cartItems = itemsToAdd.map(product => {return (<CartItemCard
                                                  id={product.id}
                                                  name={product.name}
                                                  price={product.price}
                                                  count={product.count}
                                                  image_url={product.image_url}
                                                  AddItemCart={AddItemCart}
                                                  RemoveItemCart={RemoveItemCart}
                                                  key={product.id}
                                                />)})

  return (
    <div>
      <div className="titleArea">
        <h1>My Cart</h1>
      </div>
      {cartItems}
      Total: ${cartTotal}
    </div>
  );
}

export default ItemDetailPage;