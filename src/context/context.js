import React, { useReducer } from "react";
import { Provider } from ".";

const initialState = {
  items: [],
  totalItems: 0,
};

function init(initialState) {
  return initialState;
}

function reducer(state, action) {
  let index;
  let items = [...state.items];

  switch (action.type) {
    case "add":
      let product = action.payload;
      index = items.findIndex((ci) => ci.id === product.id);

      if (index < 0) {
        product.quantity = 1;
        items = [...items, { ...product }];
      } else {
        items[index] = { ...items[index], quantity: items[index].quantity + 1 };
      }

      return {
        items: [...items],
        totalItems: state.totalItems + 1,
      };
    case "remove":
      index = items.findIndex((ci) => ci.id === action.payload.id);

      if (index < 0 || items[index].quantity === 0)
        return {
          ...state,
        };

      items[index] = {
        ...items[index],
        quantity: items[index].quantity - 1,
      };

      return {
        items: [...items],
        totalItems: state.totalItems - 1,
      };
    case "clear":
      return init(initialState);

    default:
      return { ...state };
  }
}

export default function Context(props) {
  const [state, dispatch] = useReducer(reducer, initialState, init);

  const userProviderValue = {
    ...state,
    dispatch,
  };

  return <Provider value={userProviderValue}>{props.children}</Provider>;
}
