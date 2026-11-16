import { NavLink } from "react-router-dom";
import useProduct from "../../hooks/useProduct";

const Header = () => {
  const { productState } = useProduct();

  const cartCount = productState.cart.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <nav className="bg-slate-900 text-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-center">
        <div className="flex justify-center gap-12 p-3 text-xl">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "text-white"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/products"
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "text-white"
            }
          >
            Products
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `relative inline-flex items-center ${
                isActive ? "text-yellow-500" : "text-white"
              }`
            }
          >
            Cart
            <span className="absolute -top-3 -right-4 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              {cartCount}
            </span>
          </NavLink>

          <NavLink
            to="/form"
            className={({ isActive }) =>
              isActive ? "text-yellow-500" : "text-white"
            }
          >
            Form
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Header;
