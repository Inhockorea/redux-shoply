import React from "react";
import {useParams} from "react-router-dom"
import {useSelector, shallowEqual} from "react-redux"
import "./ItemCard.css"

function ItemDetailPage({AddItemCart, RemoveItemCart}) {

  const {id} = useParams();
  
  const products = useSelector(st => st.products, shallowEqual);

  const {name, image_url, price, description} = products[id];
  
  const handleAddItem = evt => { AddItemCart(id) };
  const handleRemoveItem = evt => { RemoveItemCart(id) };

  return (
    <div className="itemArea">
      <div className="itemCard">
        <div>
          {name.toUpperCase()}
        </div>
        <img alt={name} src={image_url}></img>
        <div>
          ${price}
          <br/>
          {description}
          <div>
            <button className="addButton" name={id} onClick={handleAddItem}>
              Add To Cart
            </button>
            <button name={id} onClick={handleRemoveItem}>
              Remove From Cart
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetailPage;