import { useContext } from 'react'
import CreateProductContext from '../context/product/CreateProductContext';

const useProduct = () => {
 const productcontext =  useContext(CreateProductContext);
   if (!productcontext) {
     throw new Error("Product Context not Provided!!");
   }
   return productcontext;
}

export default useProduct;
