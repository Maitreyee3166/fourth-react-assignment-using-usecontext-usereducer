import type { Product } from "../interface/product.interface";

export type ProductAction =
  | { type: "ADD_ITEM"; payload: Product }
  | { type: "REMOVE_ITEM"; payload: number }
  | { type: "INCREASE_QTY"; payload: number }
  | { type: "DECREASE_QTY"; payload: number };
