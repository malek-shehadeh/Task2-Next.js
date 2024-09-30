import React from "react";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

export default async function ProductListingPage() {
  const response = await axios.get("https://fakestoreapi.com/products");
  const products = response.data;

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-8 lg:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-10 text-center font-serif">
          Our Timeless Collection
        </h1>

        {/* Table for displaying products */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto bg-white shadow-lg rounded-lg">
            <thead>
              <tr className="bg-gray-900 text-white">
                <th className="px-6 py-4 text-left text-lg font-medium">
                  Image
                </th>
                <th className="px-6 py-4 text-left text-lg font-medium">
                  Product
                </th>
                <th className="px-6 py-4 text-left text-lg font-medium">
                  Price
                </th>
                <th className="px-6 py-4 text-left text-lg font-medium">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-b border-gray-200 hover:bg-gray-100 transition duration-300 ease-in-out"
                >
                  <td className="px-6 py-4">
                    <div className="relative w-20 h-20">
                      <Image
                        src={product.image}
                        alt={product.title}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-lg"
                      />
                    </div>
                  </td>
                  <td className="px-6 py-4 text-lg font-medium text-gray-800">
                    {product.title}
                  </td>
                  <td className="px-6 py-4 text-lg text-gray-600">
                    ${product.price.toFixed(2)}
                  </td>
                  <td className="px-6 py-4">
                    <Link href={`/AllProducts/${product.id}`}>
                      <button className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-700 transition duration-300 ease-in-out">
                        View Details
                      </button>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
