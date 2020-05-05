import React from "react"
import { Redirect, Route, Switch } from "react-router-dom";
import ShoppingPage from "./ShoppingPage"
import ItemDetailPage from "./ItemDetailPage";
import CartDetailPage from "./CartDetailPage";
import { addProduct, removeProduct } from "./actions";
import {useDispatch, shallowEqual, useSelector} from "react-redux";
import NavBar from "./NavBar";

function Routes() {

  const dispatch = useDispatch();
  const products = useSelector(st => st.products, shallowEqual);
  const shoppingCart = useSelector(st => st.shoppingCart, shallowEqual);
  const cartTotal = useSelector(st => st.cartTotal, shallowEqual);

  const AddItemCart = id => {
    dispatch(addProduct(id));
  }

  const RemoveItemCart = id => {
    dispatch(removeProduct(id));
  } 

  return (
    <div>
    <NavBar />
    <Switch>
      <Route exact path="/" >
        <ShoppingPage products={products} AddItemCart={AddItemCart} RemoveItemCart={RemoveItemCart}/>
      </Route>
      <Route exact path="/products/:id" >
        <ItemDetailPage AddItemCart={AddItemCart} RemoveItemCart={RemoveItemCart}/>
      </Route>
      <Route exact path="/cart" >
        <CartDetailPage AddItemCart={AddItemCart} RemoveItemCart={RemoveItemCart}/>
      </Route>
      <Redirect to="/"/>
    </Switch>
    </div>
  )


}

export default Routes;