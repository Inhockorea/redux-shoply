import data from "./data.json";
import rootReducer from "./rootReducer";

const INITIAL_STATE = {
  products: data.products,
  shoppingCart: {},
  CartTotal: 0
};

//TODO: IMPORT initial state from root reducer
//IMPORT from action types && 14 and 18 could lead to typo so intead use action types!

const testActionAdd = {
  type: "ADD_PRODUCT",
  id: "47314fa1-ae56-4eae-80be-af6691145951"
}
const testActionRemove = {
  type: "REMOVE_PRODUCT",
  id: "47314fa1-ae56-4eae-80be-af6691145951"
}

describe("#rootReducer", function () {
  it("is a function", function () {
    expect(typeof rootReducer).toEqual("function");
  });
});

describe("#rootReducer funcitonality", function () {
  test('it correctly adds a product', () => {
    expect(rootReducer(INITIAL_STATE, testActionAdd))
      .toEqual({
        products: data.products,
        shoppingCart: { "47314fa1-ae56-4eae-80be-af6691145951": 1 },
        CartTotal: 220
      })
    //Should not mutate the INITIAL_STATE
    expect(INITIAL_STATE).toEqual(
      {
        products: data.products,
        shoppingCart: {},
        CartTotal: 0
      }
    )
  })

  // line 47,48 Consistent 28 was using function but 47 used arrow; 
  test('it correctly removes a product', () => {
    //ADD an item to the cart first
    let result = rootReducer(INITIAL_STATE, testActionAdd)

    //REMOVE the item that was added
    expect(rootReducer(result, testActionRemove))
      .toEqual({
        products: data.products,
        shoppingCart: {},
        CartTotal: 0
      })
    //Should not mutate the INITIAL_STATE
    expect(INITIAL_STATE).toEqual(
      {
        products: data.products,
        shoppingCart: {},
        CartTotal: 0
      }
    )
  })

  test('it correctly counts a number of products', () => {
    //ADD an item to the cart two times
    let result = rootReducer(INITIAL_STATE, testActionAdd)
    let secondResult = rootReducer(result, testActionAdd)

    //REMOVE a single item that was added.
    expect(rootReducer(secondResult, testActionRemove))
      .toEqual({
        products: data.products,
        shoppingCart: {"47314fa1-ae56-4eae-80be-af6691145951":1},
        CartTotal: 220
      })
    //Should not mutate the INITIAL_STATE
    expect(INITIAL_STATE).toEqual(
      {
        products: data.products,
        shoppingCart: {},
        CartTotal: 0
      }
    )
  })
});
