import React from "react";
import {Link} from "react-router-dom";
import "./ItemCard.css"

function ItemCard({ id,
  name,
  price,
  description,
  image_url,
  AddItemCart,
  RemoveItemCart }) {

  const handleAddItem = evt => { AddItemCart(id) };
  const handleRemoveItem = evt => { RemoveItemCart(id) };

  return (
    <div className="itemArea">
      <div className="itemCard">
        <div>
      <Link to={`/products/${id}`}>
          {name.toUpperCase()}
      </Link>
        </div>
        <img alt={name} src={image_url}></img>
        <div>
          ${price}
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

export default ItemCard;
