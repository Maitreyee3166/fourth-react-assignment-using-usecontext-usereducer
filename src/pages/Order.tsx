import { IndianRupee } from "lucide-react";
import useProduct from "../hooks/useProduct";

const Order = () => {
  const { productState } = useProduct();
  const cartItems = productState.cart;
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  return (
    <div className="bg-white rounded-2xl shadow-sm border p-6 h-fit">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Order Summary</h2>

      <div className="flex justify-between text-gray-600 mb-4">
        <span>Total Items</span>
        <span>{cartItems.reduce((sum, item) => sum + item.quantity, 0)}</span>
      </div>

      <div className="flex justify-between text-gray-600 mb-4">
        <span>Subtotal</span>
        <span className="flex items-center">
          <IndianRupee size={15} />
          {totalPrice.toFixed(2)}
        </span>
      </div>

      <div className="flex justify-between text-gray-600 mb-4">
        <span>Shipping</span>
        <span className="text-green-600">Free</span>
      </div>

      <hr className="my-5" />

      <div className="flex justify-between text-xl font-bold">
        <span>Total</span>
        <span className="text-violet-600 flex items-center">
          <IndianRupee size={18} />
          {totalPrice.toFixed(2)}
        </span>
      </div>

      <button className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-3 rounded-xl mt-6 transition">
        Proceed to Checkout
      </button>
    </div>
  );
};

export default Order;
