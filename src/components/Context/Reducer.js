export const getCartTotal = (cart) => {
  cart?.reduce((amount, item) => item.price + amount, 0);
  console.log("Frommcart");
  console.log(cart?.price);
};
export const initialState = {
  cart: [],
  user: null,
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "ADD_TO_CART":
      //Logic for adding the items to cart
      return {
        ...state,
        cart: [...state.cart, action.item],
      };
      break;
    case "REMOVE_FROM_CART":
      //Logic To Remove Items From Cart

      //getting the cart
      let newCart = [...state.cart];
      //finding the index of state
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.id
      );
      if (index >= 0) {
        //if fount in cart , remove it...
        newCart.splice(index, 1);
      }
      return {
        ...state,
        cart: newCart,
      };
      break;
    default:
      return state;
  }
};

export default reducer;
