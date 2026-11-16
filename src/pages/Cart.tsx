import { ShoppingBag } from "lucide-react";
import useProduct from "../hooks/useProduct";
import Order from "./Order";
import CartCardItem from "../component/CartCardItem";

const Cart = () => {
  const { productState } = useProduct();
  const cartItems = productState.cart;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {cartItems.length === 0 && (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
          <ShoppingBag size={70} className="text-gray-300 mb-4" />
          <h2 className="text-2xl font-bold text-gray-800">
            Your cart is empty
          </h2>
          <p className="text-gray-500 mt-2">Add some products to your cart!</p>
        </div>
      )}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Products */}
          <div className="lg:col-span-2 space-y-5">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl shadow-sm border p-5 flex flex-col sm:flex-row gap-5"
              >
                <CartCardItem item={item} />
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <Order />
        </div>
      </div>
    </div>
  );
};

export default Cart;
