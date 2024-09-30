"use client";
import React, { useEffect, useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(storedCart);
  }, []);

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif mb-6 text-center">Your Cart</h1>
      {cartItems.length === 0 ? (
        <p className="text-center font-serif">Your cart is empty.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-300 p-2 font-serif">Product</th>
              <th className="border border-gray-300 p-2 font-serif">Price</th>
              <th className="border border-gray-300 p-2 font-serif">Action</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id} className="hover:bg-gray-50">
                <td className="border border-gray-300 p-2 font-serif">
                  {item.title}
                </td>
                <td className="border border-gray-300 p-2 font-serif text-center">
                  ${item.price.toFixed(2)}
                </td>
                <td className="border border-gray-300 p-2 text-center">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-600 hover:underline font-serif"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
