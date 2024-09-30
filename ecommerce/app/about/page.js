import React from "react";
import { ShoppingBag, Truck, Headphones, ThumbsUp } from "lucide-react";
import Image from "next/image";

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:shadow-xl hover:scale-105">
    {icon}
    <h3 className="mt-4 text-xl font-semibold text-gray-800">{title}</h3>
    <p className="mt-2 text-gray-600">{description}</p>
  </div>
);

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center text-gray-800 mb-8 animate-fade-in-down">
          About Our Store
        </h1>

        <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                width={400}
                height={400}
                alt="Store front"
                src="/api/placeholder/400/400"
                className="h-full w-full object-cover md:w-96"
              />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
                Our Story
              </div>
              <p className="mt-2 text-gray-600 leading-relaxed">
                Founded in 2010, our e-commerce store has been dedicated to
                providing high-quality products and exceptional customer
                service. We believe in the power of online shopping to connect
                people with the items they love, no matter where they are in the
                world. Our journey began with a simple idea: to create a
                platform that makes shopping convenient, enjoyable, and
                rewarding for everyone.
              </p>
              <p className="mt-4 text-gray-600 leading-relaxed">
                Over the years, we've grown from a small startup to a trusted
                name in e-commerce, serving customers across the globe. Our
                success is built on our commitment to quality, innovation, and
                customer satisfaction.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in-up">
          <FeatureCard
            icon={<ShoppingBag className="h-12 w-12 text-indigo-500" />}
            title="Wide Selection"
            description="Browse through thousands of products across various categories."
          />
          <FeatureCard
            icon={<Truck className="h-12 w-12 text-indigo-500" />}
            title="Fast Shipping"
            description="Get your orders delivered quickly and efficiently to your doorstep."
          />
          <FeatureCard
            icon={<Headphones className="h-12 w-12 text-indigo-500" />}
            title="24/7 Support"
            description="Our customer service team is always ready to assist you."
          />
          <FeatureCard
            icon={<ThumbsUp className="h-12 w-12 text-indigo-500" />}
            title="Satisfaction Guaranteed"
            description="We stand behind the quality of our products with a 100% satisfaction guarantee."
          />
        </div>

        <div className="mt-16 bg-indigo-700 rounded-lg text-white p-8 shadow-lg animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-lg leading-relaxed">
            To provide our customers with a seamless online shopping experience,
            offering a curated selection of high-quality products at competitive
            prices, all while maintaining exceptional customer service and
            fostering long-lasting relationships with our clients. We strive to
            be more than just an e-commerce platform; we aim to be a trusted
            partner in our customers' lives, helping them find the products they
            need and love.
          </p>
        </div>
      </div>
    </div>
  );
}
