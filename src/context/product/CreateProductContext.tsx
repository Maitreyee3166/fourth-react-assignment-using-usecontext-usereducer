import { createContext } from 'react'
import type { ProductContextType } from '../../types/interface/product.interface';

const CreateProductContext = createContext<ProductContextType | null>(null)

export default CreateProductContext;
