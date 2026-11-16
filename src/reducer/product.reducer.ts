import type { ProductState } from "../types/interface/product.interface";
import type { ProductAction } from "../types/type/product.type";

export const productInitialState: ProductState = {
   cart: [],
};

export const productreducerFns = (
  state: ProductState,
  action: ProductAction,
): ProductState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  quantity: item.quantity + 1,
                }
              : item
          ),
        };
      }

      return {
        ...state,
        cart: [
          ...state.cart,
          {
            ...action.payload,
            quantity: 1,
          },
        ],
      };
    }

    // REMOVE ITEM
    case "REMOVE_ITEM":
      return {
        ...state,
        cart: state.cart.filter(
          (item) => item.id !== action.payload
        ),
      };

    // INCREASE QUANTITY
    case "INCREASE_QTY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item
        ),
      };

    // DECREASE QUANTITY
    case "DECREASE_QTY":
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.id === action.payload
              ? {
                  ...item,
                  quantity: item.quantity - 1,
                }
              : item
          )
          .filter((item) => item.quantity > 0),
      };

    default:
      return state;
  }
};
