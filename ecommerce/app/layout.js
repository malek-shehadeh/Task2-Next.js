"use client"; // Mark this as a Client Component

import localFont from "next/font/local";
import "./globals.css";
import { ShoppingCart, Search, Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export default function RootLayout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        <div className="flex">
          {/* Sidebar */}
          <aside
            className={`bg-gradient-to-tl from-orange-300 to-emerald-700 min-h-screen w-64 transform ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            } md:translate-x-0 transition-transform duration-300 ease-in-out fixed`}
          >
            <div className="p-4">
              <span className="text-white text-xl font-bold">E-commerce</span>
            </div>
            <nav className="flex flex-col space-y-4 mt-10">
              <Link href="/" className="text-white px-6 py-3 hover:bg-gray-400">
                Home
              </Link>
              <Link
                href="/about"
                className="text-white px-6 py-3 hover:bg-blue-600"
              >
                About
              </Link>
              <Link
                href="/AllProducts"
                className="text-white px-6 py-3 hover:bg-blue-600"
              >
                All Products
              </Link>
              <Link
                href="/AllPosts"
                className="text-white px-6 py-3 hover:bg-blue-600"
              >
                All Posts
              </Link>
            </nav>
          </aside>

          {/* Main Content */}
          <div className="flex-1 ml-64">
            <header className="bg-white shadow py-4 px-6">
              <div className="flex justify-between items-center">
                <button
                  className="md:hidden text-blue-500"
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                >
                  <Menu className="h-6 w-6" />
                </button>
                <div className="flex items-center">
                  <button className="text-blue-500 p-2">
                    <Search className="h-6 w-6" />
                  </button>
                  <Link href="/cart" className="ml-4">
                    <ShoppingCart className="h-6 w-6 text-blue-500" />
                  </Link>
                </div>
              </div>
            </header>
            <main className="p-6">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
