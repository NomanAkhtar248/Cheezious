"use client";

import { useState } from "react";
import Menubar from "./components/CategoryBar";
import CartSection from "./components/CartSection";
import CheeziousCard from "./components/CheeziousCard";
import Navbar from "./components/Navbar";
import Mainnav from "./Mainnav";
import ExploreMenu from "./ExploreMenu";

// ✅ Renamed the import to avoid conflict with state
import menuCardData from "@/app/data/menucard";

function CheeziousMenu() {
  // ✅ cart state is now clear and separate
  const [cart, setCart] = useState([]);
  const [isCartVisible, setIsCartVisible] = useState(true); // Optional: toggle sidebar visibility

  // ✅ Add to cart
  const addToCart = (product) => {
    setCart((prev) => {
      const updatedCart = [...prev];
      const existingProduct = updatedCart.find((item) => item.id === product.id);
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        updatedCart.push({ ...product, quantity: 1 });
      }
      return updatedCart;
    });
    setIsCartVisible(true); // Show cart on add
  };

  // ✅ Remove item from cart
  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  // ✅ Update quantity
  const updateQuantity = (productId, delta) => {
    setCart((prev) => {
      const updatedCart = prev.map((item) =>
        item.id === productId ? { ...item, quantity: item.quantity + delta } : item
      );
      return updatedCart.filter((item) => item.quantity > 0);
    });
  };

  // ✅ Calculate total price
  const totalPrice = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <>
      {/* Navbar with cart count */}
      <Mainnav cartCount={cart.length} />

      {/* Menu Bar */}
      <div className="fixed w-[85%] top-[76px] right-[100px]">
        <Menubar />
      </div>

      {/* Menu Items */}
      <div className="flex flex-wrap mt-[150px] px-4">
        <ExploreMenu addToCart={addToCart} />
      </div>

      {/* Cart Sidebar */}
      {isCartVisible && (
        <div className="fixed top-[120px] right-0 w-[350px] h-full bg-white shadow-lg z-50 p-4 overflow-y-auto border-l">
          <CartSection
            cart={cart}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            totalPrice={totalPrice}
          />
          {/* Optional close button */}
          <button
            onClick={() => setIsCartVisible(false)}
            className="absolute top-2 right-2 text-xl font-bold text-gray-500 hover:text-black"
          >
            ×
          </button>
        </div>
      )}
    </>
  );
}

export default CheeziousMenu;
