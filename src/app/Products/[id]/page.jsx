import { notFound } from "next/navigation";
import { products } from "@/data/products";
import Image from "next/image";
import { Star } from "lucide-react";

export default function ProductDetail({ params }) {
  const productId = parseInt(params.id);
  const product = products.find((p) => p.id === productId);

  if (!product) return notFound();

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-[#f0f4ff] via-[#e0e7ff] to-[#d1d5ff]">
      <div className="max-w-4xl mx-auto bg-white shadow-xl rounded-lg p-6">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="relative w-full md:w-1/2 h-96 rounded overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          <div className="md:w-1/2 space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
            <p className="text-xl text-gray-600">{product.price}</p>

            <div className="flex items-center gap-1 text-yellow-500">
              {Array.from({ length: 5 }, (_, i) => (
                <Star
                  key={i}
                  fill={i < product.rating ? "#facc15" : "none"}
                  className="w-5 h-5"
                />
              ))}
            </div>

            <p className="text-gray-600">
              Premium quality cotton shirt perfect for all occasions.
            </p>

            <button className="mt-4 bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
