"use client";

import Image from "next/image";
import { Star } from "lucide-react";

const ProductCard = ({ image, name, price, rating }) => {
  return (
    <div className="w-full sm:w-64 md:w-72 lg:w-80 bg-white my-2 shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-all transform hover:scale-105">
      <div className="relative w-full h-64">
        <Image
          src={image}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <div className="flex items-center gap-1 text-yellow-500 mt-2">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              fill={i < rating ? "#facc15" : "none"}
              className="w-5 h-5"
            />
          ))}
        </div>
        <p className="text-xl font-bold text-gray-900 mt-2">{price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
