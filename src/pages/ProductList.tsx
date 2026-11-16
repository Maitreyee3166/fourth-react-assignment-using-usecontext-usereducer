
import ProductCardItem from "../component/ProductCardItem";
import useProduct from "../hooks/useProduct";

import { CircularProgress } from "@mui/material";

const ProductList = () => {
  const { products, isLoading, isError } = useProduct();

  return (
    <div className="bg-gray-200 min-h-screen p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      {isLoading && <CircularProgress />}
      {/* 4 Cards in a Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => {
          return (
            /* Individual Product Card */
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <ProductCardItem product={product} />
            </div>
          );
        })}
      </div>
      {isError && <p>{isError}</p>};
    </div>
  );
};

export default ProductList;
