import React from "react";
import Link from "next/link";

const cards = [
  { id: 1, title: "Product 1", price: 3.5 },
  { id: 2, title: "Product 2", price: 4.0 },
  { id: 3, title: "Product 3", price: 5.5 },
  { id: 4, title: "Product 4", price: 7.5 },
];

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-serif mb-6 text-center">Our Products</h1>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="border border-gray-300 p-2 font-serif">Product</th>
            <th className="border border-gray-300 p-2 font-serif">Price</th>
            <th className="border border-gray-300 p-2 font-serif">Action</th>
          </tr>
        </thead>
        <tbody>
          {cards.map((product) => (
            <tr key={product.id} className="hover:bg-gray-50">
              <td className="border border-gray-300 p-2 font-serif">
                {product.title}
              </td>
              <td className="border border-gray-300 p-2 font-serif text-center">
                ${product.price.toFixed(2)}
              </td>
              <td className="border border-gray-300 p-2 text-center">
                <Link
                  href={`/product/${product.id}`}
                  className="text-blue-600 hover:underline font-serif"
                >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
