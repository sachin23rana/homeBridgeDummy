"use client";
import React from "react";
import ProductCard from "./ProductCard";
const products = [
  {
    id: 1,
    name: "Efficient Air Conditioning System",
    desc: "Energy management is the strategic process of monitoring, controlling, and optimizing energy usage to enhance efficiency, reduce costs, and promote sustainability. By leveraging advanced technologies like energy monitoring systems and real-time analytics, homeowners and businesses can make smarter decisions about energy consumption.",
    // image: "/images/hvac.png",
    images : [
      {
        main : "/images/hvac.png",
        imag1: "/images/hwh.png",
        image2: "/images/hvac.png",
      }
    ]
  },
  {
    id: 2,
    name: "Tankless Hot Water Heater",
    // image: "/images/hwh.png",
    desc: "Energy management is the strategic process of monitoring, controlling, and optimizing energy usage to enhance efficiency, reduce costs, and promote sustainability. By leveraging advanced technologies like energy monitoring systems and real-time analytics, homeowners and businesses can make smarter decisions about energy consumption.",
    images : [
      {
        main : "/images/hwh.png",
        imag1: "/images/hwh.png",
        image2: "/images/hwh.png",
      }
    ]
  },
  {
    id: 3,
    name: "Insulation in the Attic",
    // image: "/images/insulation.png",
    images : [
      {
        main : "/images/insulation.png",
        imag1: "/images/insulation.png",
        image2: "/images/insulation.png",
      }
    ],
    desc: "Energy management is the strategic process of monitoring, controlling, and optimizing energy usage to enhance efficiency, reduce costs, and promote sustainability. By leveraging advanced technologies like energy monitoring systems and real-time analytics, homeowners and businesses can make smarter decisions about energy consumption.",
  },
  {
    id: 4,
    name: "Water Filtration and Softening",
    // image: "/images/filtration.png",
    images : [
      {
        main : "/images/filtration.png",
        imag1: "/images/filtration.png",
        image2: "/images/filtration.png",
      }
    ],
    desc: "Energy management is the strategic process of monitoring, controlling, and optimizing energy usage to enhance efficiency, reduce costs, and promote sustainability. By leveraging advanced technologies like energy monitoring systems and real-time analytics, homeowners and businesses can make smarter decisions about energy consumption.",
  },
  {
    id: 5,
    name: "Full Home Generator",
    // image: "/images/generator.png",
    images : [
      {
        main : "/images/generator.png",
        imag1: "/images/generator.png",
        image2: "/images/generator.png",
      }
    ],
    desc: "Energy management is the strategic process of monitoring, controlling, and optimizing energy usage to enhance efficiency, reduce costs, and promote sustainability. By leveraging advanced technologies like energy monitoring systems and real-time analytics, homeowners and businesses can make smarter decisions about energy consumption.",
  },
  {
    id: 6,
    name: "Home Dehumidifier",
    // image: "/images/dehumidifier.png",
    images : [
      {
        main : "/images/dehumidifier.png",
        imag1: "/images/dehumidifier.png",
        image2: "/images/dehumidifier.png",
      }
    ],
    desc: "Energy management is the strategic process of monitoring, controlling, and optimizing energy usage to enhance efficiency, reduce costs, and promote sustainability. By leveraging advanced technologies like energy monitoring systems and real-time analytics, homeowners and businesses can make smarter decisions about energy consumption.",
  },
  {
    id: 7,
    name: "Energy Management",
    // image: "/images/energy-management.png",
    images : [
      {
        main : "/images/energy-management.png",
        imag1: "/images/energy-management.png",
        image2: "/images/energy-management.png",
      }
    ],
    desc: "Energy management is the strategic process of monitoring, controlling, and optimizing energy usage to enhance efficiency, reduce costs, and promote sustainability. By leveraging advanced technologies like energy monitoring systems and real-time analytics, homeowners and businesses can make smarter decisions about energy consumption.",
  },
];

const ProductsSec = ({
  setShowDetails,
  selectedProduct,
  setSelectedProduct,
}) => {
  return (
    <div>
      <div>
        {products.map((product, index) => (
          <ProductCard
            key={product.id}
            position={index % 2 === 0 ? "left" : "right"}
            title={product.name}
            images={product.images}
            imageAlt={product.name}
            setShowDetails={setShowDetails}
            setSelectedProduct={setSelectedProduct}
            product={product}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductsSec;
