"use client";

import React from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";

const ProductDetails = ({ product }) => {
  const addToCart = () => {
    const cartItem = {
      id: product.id,
      title: product.title,
      price: product.price,
      category: product.category,
      image: product.image,
    };
    const currentCart = JSON.parse(localStorage.getItem("cart")) || [];
    localStorage.setItem("cart", JSON.stringify([...currentCart, cartItem]));
  };

  return (
    <div className="min-h-screen bg-cream py-12 px-4 sm:px-6 lg:px-8 font-serif">
      <div className="max-w-4xl mx-auto bg-white border border-gray-300 rounded shadow-md overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0 p-6 flex items-center justify-center bg-gray-100">
            <div className="h-64 w-64 relative">
              <Image
                src={product.image}
                alt={product.title}
                layout="fill"
                objectFit="contain"
                className="rounded"
              />
            </div>
          </div>
          <div className="p-8 border-l border-gray-300">
            <div className="uppercase tracking-wide text-sm text-gray-600 font-semibold">
              {product.category}
            </div>
            <h1 className="mt-2 text-3xl leading-8 font-bold text-gray-900">
              {product.title}
            </h1>
            <p className="mt-4 text-2xl text-gray-700">
              ${product.price.toFixed(2)}
            </p>
            <div className="mt-4 flex items-center">
              <span className="text-yellow-500">★★★★☆</span>
              <span className="ml-2 text-gray-600">
                {product.rating.rate} out of 5
              </span>
            </div>
            <p className="mt-4 text-gray-600 leading-relaxed">
              {product.description}
            </p>
            <button
              onClick={addToCart}
              className="mt-6 w-full bg-gray-800 border border-transparent rounded py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition duration-150 ease-in-out"
            >
              <ShoppingCart className="mr-2 h-5 w-5" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
