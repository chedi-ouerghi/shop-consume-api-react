import React, { useReducer, createContext, useEffect } from "react";
import axios from "axios";

const initialState = {
  products: null,
  isLoading: false,
  isLoaded: false
};

export const ProductsStateContext = createContext();
export const ProductsDispatchContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_PRODUCTS_REQUEST":
      return {
        ...state,
        isLoading: true,
        isLoaded: false
      };
    case "GET_PRODUCTS_SUCCESS":
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        products: action.payload.products
      };
    case "GET_PRODUCTS_FAILURE":
      return {
        ...state,
        products: null,
        isLoading: false,
        isLoaded: false
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

const ProductsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    getProducts(dispatch);
  }, []);

  return (
    <ProductsDispatchContext.Provider value={dispatch}>
      <ProductsStateContext.Provider value={state}>
        {children}
      </ProductsStateContext.Provider>
    </ProductsDispatchContext.Provider>
  );
};

export const getProducts = async (dispatch) => {
  dispatch({
    type: "GET_PRODUCTS_REQUEST"
  });

  const url = "https://dummyjson.com/products";

  try {
    const response = await axios.get(url);
    dispatch({
      type: "GET_PRODUCTS_SUCCESS",
      payload: {
        products: response.data.products
      }
    });
  } catch (error) {
    console.error(error);
    dispatch({
      type: "GET_PRODUCTS_FAILURE"
    });
  }
};

export default ProductsProvider;
