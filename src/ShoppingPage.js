import React, {useState} from "react";
import ItemCard from "./ItemCard"
import "./ShoppingPage.css"


//TODO: TIPS FROM JOEL;PLURAL THINGS refer often to ARRAYS, be careful wtih variable names
//structures should have obvious names; products and shopping cart do not describe what variables are

function ShoppingPage({products, AddItemCart, RemoveItemCart}) {
  
  //TODO: 20 ~ 24 : sounds like they are components themselves! be careful using Capital case
  //use lower case instead 
  //TIPS FROM JOEL: object.entries() can unpack product id key & value

  const shoppingItems=[];
  for(const product in products) {
    shoppingItems.push(
      <ItemCard
        id={product}
        name={products[product].name}
        price={products[product].price}
        description={products[product].description}
        image_url={products[product].image_url}
        AddItemCart={AddItemCart}
        RemoveItemCart={RemoveItemCart}
        key={product}
      />)
  };

  //TIPS FROM JOEL: uuid is getting rendered everytime and changing! IT IS NOT STABLE
  //can lead to many performance hits! use id that we have instead 

  
  return (
    <div>
      <div className="titleArea">
        <h1>Rithm Retail Shop</h1>
      </div>
      {shoppingItems}
    </div>
  );
}

export default ShoppingPage;
