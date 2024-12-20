import React from "react";
import ProductCard from "./ProductCard";
const products = [
  {
    id: 1,
    name: "Efficient Air Conditioning System",
    image: "/images/hvac.png",
  },
  { id: 2, name: "Tankless Hot Water Heater", image: "/images/hwh.png" },
  { id: 3, name: "Insulation in the Attic", image: "/images/insulation.png" },
  {
    id: 4,
    name: "Water Filtration and Softening",
    image: "/images/filtration.png",
  },
  { id: 5, name: "Full Home Generator", image: "/images/generator.png" },
  { id: 6, name: "Home Dehumidifier", image: "/images/dehumidifier.png" },
  { id: 7, name: "Energy Management", image: "/images/energy-management.png" },
];

const ProductsSec = () => {
  return (
    <div>
      <div>
        {products.map((product,index) => (
          <ProductCard
            key={product.id}
            position={index % 2 === 0 ? "left" : "right"}
            title={product.name}
            imageSrc={product.image} 
            imageAlt={product.name}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsSec;
