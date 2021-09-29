import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductsProvider = (props) => {
  const [loadedProducts, setLoadedProducts] = useState([]);
  return (
    <ProductContext.Provider value={[loadedProducts, setLoadedProducts]}>
      {props.children}
    </ProductContext.Provider>
  );
};
