"use client";
import React, { useState } from "react";
import menucard from "@/app/data/menucard.json";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import Menubar from "../components/Menubar";
import CartSection from "../components/CartSection";
import Mainnav from "../components/Mainnav";
import { Skeleton } from "@/components/ui/skeleton"
import Image from 'next/image'

const Page = () => {
  const [cart, setCart] = useState([]);

  const uniqueCategories = [...new Set(menucard.map((item) => item.category))];

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      const price = Number(product.price);
      if (existing) {
        return prev.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prev, { ...product, price, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="flex flex-col">     

      <div className="flex flex-col lg:flex-row">
        {/* Left Section */}
        <div className="w-full lg:w-3/4 py-10 mt-10 overflow-hidden px-4 lg:pr-10">
          <div className="fixed top-21 left-0 right-0 z-50 bg-white shadow">
            <Menubar />
          </div>

          {uniqueCategories.map((category) => (
            <div key={category} id={category} className="mb-6 mt-20">
              <h2 className="text-3xl font-bold text-black mb-6">{category}</h2>
              <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
                {menucard
                  .filter((menu) => menu.category === category)
                  .map((menu) => (
                    <div key={menu.id} className="bg-gray-100 rounded-lg border-2 shadow-md overflow-hidden group">
                      <div className="relative w-full aspect-square overflow-hidden">
                       <Skeleton className="w-full h-auto rounded-xl" />
                        <img
                          src={menu.imgUrl} 
                          fill
                          alt={menu.title}                          
                          className="object-cover absolute rounded-t-lg group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute top-2 right-2 p-1">
                          <Heart className="text-red-500 w-5 h-5" />
                        </div>
                      </div>
                      <div className="px-4 mt-2">
                        <h1 className="font-bold text-lg line-clamp-1 mb-2">{menu.title}</h1>
                        <p className="text-sm line-clamp-3 mb-1 h-15">{menu.subtext}</p>
                        <h2 className="text-red-500 font-bold text-lg mb-1">RS. {menu.price}</h2>
                        <div className="flex justify-center">
                          <Button
                            variant="outline"
                            className="hover:bg-orange-500 py-2 px-4 mb-2 cursor-pointer"
                            onClick={() => addToCart(menu)}
                          >
                            + ADD TO CART
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-1/4 hidden lg:block">
          <CartSection
            cart={cart}
            removeFromCart={removeFromCart}
            updateQuantity={updateQuantity}
            totalPrice={totalPrice}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
