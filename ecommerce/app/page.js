import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="max-w-5xl mx-auto py-20 text-center">
        <h1 className="text-6xl font-extrabold text-teal-300 mb-6">
          Welcome to YourBrand
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Explore our exclusive range of premium products. Don't miss out on our
          best offers!
        </p>
        <a
          href="#"
          className="inline-block px-10 py-4 bg-teal-500 text-gray-900 rounded-full hover:bg-teal-600 transition transform hover:scale-105 shadow-lg"
        >
          Shop Now
        </a>
      </section>

      {/* Featured Products as Table */}
      <section className="max-w-5xl mx-auto py-16">
        <h2 className="text-4xl font-extrabold text-teal-400 mb-8 text-left">
          Featured Products
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto bg-gray-700 bg-opacity-40 rounded-lg shadow-lg">
            <thead>
              <tr className="bg-teal-500 text-gray-900 text-left">
                <th className="px-6 py-4 text-lg font-semibold">Product</th>
                <th className="px-6 py-4 text-lg font-semibold">Price</th>
                <th className="px-6 py-4 text-lg font-semibold">Image</th>
                <th className="px-6 py-4 text-lg font-semibold">Action</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3].map((item, index) => (
                <tr key={index} className="hover:bg-gray-600 transition">
                  <td className="px-6 py-4 text-gray-300">Premium Product</td>
                  <td className="px-6 py-4 text-gray-300">$149.99</td>
                  <td className="px-6 py-4">
                    <img
                      className="w-20 h-20 object-cover rounded-lg"
                      src="https://via.placeholder.com/300"
                      alt="Product"
                    />
                  </td>
                  <td className="px-6 py-4">
                    <button className="bg-teal-500 text-gray-900 px-4 py-2 rounded-full hover:bg-teal-600 transition transform hover:scale-105">
                      Add to Cart
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gray-800 py-12">
        <div className="max-w-5xl mx-auto flex justify-between items-center">
          <h2 className="text-4xl font-extrabold text-teal-300">
            Ready to elevate your style?
          </h2>
          <a
            href="#"
            className="inline-flex items-center bg-teal-500 text-gray-900 px-6 py-3 rounded-full hover:bg-teal-600 transition transform hover:scale-105"
          >
            Get started <ChevronRight className="ml-2" />
          </a>
        </div>
      </section>
    </div>
  );
}
