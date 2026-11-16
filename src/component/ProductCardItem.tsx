import React from 'react';
import type { ProductCard } from "../types/interface/product.interface";
import useProduct from "../hooks/useProduct";
import { IndianRupee, Star } from "lucide-react";

const ProductcardItem: React.FC<ProductCard> = (product) => {
 
  const { handleAddItem } = useProduct();

  return (
    <div>
      {/* Product Image */}
      <div className="relative bg-gray-50 h-56 p-5 flex items-center justify-center">
        <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
          {Math.round(product.product.discountPercentage)}% OFF
        </span>

        <img
          src={product.product.thumbnail}
          alt={product.product.title}
          className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
        />
      </div>

      {/* Product Details */}
      <div className="p-5">
        <p className="text-xs text-violet-600 font-semibold uppercase">
          {product.product.category}
        </p>

        <h2 className="text-lg font-bold text-gray-800 mt-2 line-clamp-1">
          {product.product.title}
        </h2>

        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
          {product.product.description}
        </p>

        {/* Price and Rating */}
        <div className="flex justify-between items-center mt-4">
          <div className="flex items-center gap-2 mt-4">
            <span className="text-sm text-black flex items-center">
              <IndianRupee size={14} />
              {product.product.price.toFixed(2)}
            </span>
          </div>

          <span className="text-sm text-yellow-500 font-semibold">
            <Star /> {product.product.rating}
          </span>
        </div>

        {/* Add to Cart */}
        <button
          onClick={() => handleAddItem(product.product)}
          disabled={product.product.stock <= 0}
          className="w-full mt-5 bg-violet-600 hover:bg-violet-700 disabled:bg-gray-400 text-white font-semibold py-3 rounded-xl transition-colors"
        >
          {product.product.stock <= 0 ? "Out of Stock" : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductcardItem;
