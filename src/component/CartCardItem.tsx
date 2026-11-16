import React from "react";
import type { CartCard } from "../types/interface/product.interface";
import useProduct from "../hooks/useProduct";
import { IndianRupee, Plus, Minus, Trash2 } from "lucide-react";

const CartCardItem: React.FC<CartCard> = ({ item }) => {
  const {
    handleDecreaseQty,
    handleIncreaseQty,
    handleRemoveItem,
  } = useProduct();

  return (
    <div>
      <img
        src={item.thumbnail}
        alt={item.title}
        className="w-full sm:w-32 h-32 object-contain bg-gray-50 rounded-xl"
      />

      <div className="flex-1">
        <h2 className="text-lg font-bold text-gray-800">{item.title}</h2>

        <p className="text-sm text-gray-500 mt-2 line-clamp-2">
          {item.description}
        </p>

        <p className="text-xl font-bold text-violet-600 mt-3 flex items-center">
          <IndianRupee size={17} />
          {item.price.toFixed(2)}
        </p>

        <div className="flex items-center justify-between mt-4">
          {/* Quantity */}
          <div className="flex items-center gap-3">
            <button onClick={() => handleDecreaseQty(item.id)}>
              <Minus size={16} />
            </button>
            <span className="font-bold">{item.quantity}</span>

            <button onClick={() => handleIncreaseQty(item.id)}>
              <Plus size={16} />
            </button>
          </div>

          {/* Remove */}
          <button onClick={() => handleRemoveItem(item.id)}>
            <Trash2 size={18} />
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCardItem;
