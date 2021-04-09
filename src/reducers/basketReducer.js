import { ACTIONS } from "./ACTIONS";

export const basketReducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TO_BASKET:
      return action.payload;
    case ACTIONS.INCREMENT_ITEM:
      return state.map((item) => {
        if (item.id === action.id) {
          return { ...item, quantity: item.quantity + 1 };
        } else {
          return item;
        }
      });
    case ACTIONS.DECREMENT_ITEM:
      return state.map((item) => {
        if (item.id === action.id && item.quantity > 0) {
          return { ...item, quantity: item.quantity - 1 };
        } else {
          return item;
        }
      });
    case ACTIONS.DELETE_FROM_BASKET:
      return state.filter((item) => item.id !== action.id);
    case ACTIONS.EMPTY_BASKET:
      return action.payload;
    default:
      return state;
  }
};
