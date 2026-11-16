export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  thumbnail: string;
  images: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface ProductState {
  cart: CartItem[];
}

export interface ProductContextType {
  productState: ProductState;
  products: Product[];
  isLoading: boolean;
  isError: string | null;
  handleAddItem: (product: Product) => void;
  handleRemoveItem: (id: number) => void;
  handleIncreaseQty: (id: number) => void;
  handleDecreaseQty: (id: number) => void;
}

export interface ProductCard {
  product: Product;
}

export interface CartCard {
  item: CartItem;
}
