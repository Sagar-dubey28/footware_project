import React from "react";
import shoe2 from "../assets/shoe2.avif"



const products = [
  {
    id: 1,
    name: "Nike Air Max",
    image: shoe2,
    size: "col-span-2 row-span-2",
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    image: shoe2,
    size: "col-span-1 row-span-1",
  },
  {
    id: 3,
    name: "Puma RS-X",
    image: shoe2,
    size: "col-span-1 row-span-2",
  },
  {
    id: 4,
    name: "New Balance 550",
    image: shoe2,
    size: "col-span-1 row-span-1",
  },
  {
    id: 5,
    name: "Reebok Classic",
    image: shoe2,
    size: "col-span-1 row-span-1",
  },
];


const ShoeGallery = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-4xl font-bold text-center mb-8">Footwear Collection</h2>
      <div className="grid grid-cols-3 gap-4 auto-rows-[200px]">
        {products.map((product) => (
          <div
            key={product.id}
            className={`relative overflow-hidden rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out ${product.size}`}
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
              <h3 className="text-white text-lg font-semibold">{product.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShoeGallery;
