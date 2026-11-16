import { useEffect, useReducer, useState, type ReactNode } from "react";
import CreateProductContext from "./CreateProductContext";
import { productInitialState, productreducerFns } from "../../reducer/product.reducer";
import type { Product } from "../../types/interface/product.interface";
import axios from "axios";


const ProductProvider = ({ children }: { children: ReactNode }) => {
const [productState, productDispatch] = useReducer(
    productreducerFns,
    productInitialState,
  );
const [products, setProducts] = useState<Product[]>([]);
const [isLoading, setIsLoading] = useState<boolean>(false);
const [isError, setIsError] = useState<string | null>(null);


useEffect(() => {
  const fetchProducts = async () => {
  try {
    setIsLoading(true);

    const response = await axios.get("https://dummyjson.com/products");

    console.log(response);
    
    setProducts(response.data.products);
  } catch (error) {
    setIsError("Failed to fetch products");
  } finally {
    setIsLoading(false);
  }
};

  fetchProducts();
}, []);

const handleAddItem = (product: Product) => {
  productDispatch({
    type: "ADD_ITEM",
    payload: product,
  });
};

  const handleRemoveItem = (id: number) => {
  productDispatch({
    type: "REMOVE_ITEM",
    payload: id,
  });
};

const handleIncreaseQty = (id: number) => {
  productDispatch({
    type: "INCREASE_QTY",
    payload: id,
  });
};

const handleDecreaseQty = (id: number) => {
  productDispatch({
    type: "DECREASE_QTY",
    payload: id,
  });
};

  return (
    <CreateProductContext
      value={{productState,products, isLoading, isError, handleAddItem, handleRemoveItem, handleIncreaseQty, handleDecreaseQty}}
    >
      {children}
    </CreateProductContext>
  );

}

export default ProductProvider;
