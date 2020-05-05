import { ADD_PRODUCT, REMOVE_PRODUCT } from "./actionTypes";
import data from "./data.json"


const INITIAL_STATE = {
  products: data.products,
  shoppingCart: {},
  cartTotal: 0
};

//TIPS FROM JOEL: CartTotal can be confusing variable name; avoid Capital letter C

function rootReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

    case ADD_PRODUCT:
      let additionTotal = state.cartTotal + state.products[action.id]["price"];
      let shoppingCartCopy = { ...state.shoppingCart};

      //if the item did not exist in the cart, set the count to equal 1
      if (shoppingCartCopy[action.id] === undefined){
        shoppingCartCopy[action.id] = 1;
      } else {
        shoppingCartCopy[action.id] += 1;
      };

      return {
        ...state,
        shoppingCart: shoppingCartCopy,
        cartTotal: Math.round((additionTotal*100)/100)
      }

    case REMOVE_PRODUCT:

      let CartCopyRemove = { ...state.shoppingCart };
      let subtractionTotal;

      /**if the item did not exist in the cart, set CartState to currentcartTotalState*/
      if (CartCopyRemove[action.id] === undefined){
        subtractionTotal=state.cartTotal;
        } else {
          CartCopyRemove[action.id] -= 1;
          subtractionTotal = state.cartTotal - state.products[action.id]["price"];

          //when the count reaches 0; remove the item from the shoppingCart object.
          if (CartCopyRemove[action.id] === 0){
          delete CartCopyRemove[action.id]};
        }

      return {
        ...state,
        shoppingCart: CartCopyRemove,
        cartTotal: Math.round((subtractionTotal*100)/100)
      }

    default:
      return state;
  }
}
// end

export default rootReducer;
