import React from "react";

const products = [
  { id: 1, name: "Efficient HVAC", icon: "/icons/hvac.svg" },
  { id: 2, name: "Tankless HWH", icon: "/icons/hwh.svg" },
  { id: 3, name: "Attic Insulation", icon: "/icons/insulation.svg" },
  { id: 4, name: "Water Filtration", icon: "/icons/filtration.svg" },
  { id: 5, name: "Generator", icon: "/icons/generator.svg" },
  { id: 6, name: "Dehumidifier", icon: "/icons/dehumidifier.svg" },
  { id: 7, name: "Energy Management", icon: "/icons/energy-management.svg" },
];

const Products = () => {
  return (
    <section className="py-16 bg-[#101010] text-white w-full flex flex-col items-center">
      {/* Section Title */}
      <h2 className="text-center text-4xl font-medium mb-12">Our Products</h2>

      {/* Product Flex Container */}
      <div className="flex flex-wrap justify-center gap-10 w-[70%] px-0 md:px-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="group flex flex-col items-center justify-center w-[80%] md:w-[200px]  h-[200px] md:h-[180px] rounded-lg bg-[#101010] p-4 border border-[#0D72B9]/50 transition-all duration-300 shadow-[0_0_20px_#0D72B9] hover:bg-[#0D72B9]/10 hover:scale-105"
          >
            {/* Icon */}
            <img
              src={product.icon}
              alt={product.name}
              className="h-24 w-24 mb-4 text-[#0D72B9] group-hover:text-white"
            />
            {/* Product Name */}
            <p className="text-center text-lg font-medium group-hover:text-[#0D72B9]">
              {product.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
