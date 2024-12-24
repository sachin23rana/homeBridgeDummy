"use client";
import React, { useState,useRef} from "react";
import Hero from "./HeroSection";
import WhyUs from "./WhyUs";
import Products from "./Products";
import ProductsSec from "../components/ProductSection";
import ProductDetails from "./ProductDetails";

export default function Home() {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  return (
    <div className="relative">
      <Hero />
      <WhyUs />
      <Products />
      <ProductsSec
        setShowDetails={setShowDetails}
        selectedProduct={selectedProduct}
        setSelectedProduct={setSelectedProduct}
      />
      {showDetails && (
        <ProductDetails
          setShowDetails={setShowDetails}
          selectedProduct={selectedProduct}
          setSelectedProduct={setSelectedProduct}
        />
      )}
    </div>
  );
}
