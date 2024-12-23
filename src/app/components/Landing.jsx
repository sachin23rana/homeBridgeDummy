"use client";
import React, {useState} from "react";
import Hero from "./HeroSection";
import WhyUs from "./WhyUs";
import Products from "./Products";
import ProductsSec from "../components/ProductSection";
import ProductDetails from "./ProductDetails";

export default function Home() {


  const [showDetails , setShowDetails] = useState(false);
  return (
    <div className="relative">
      <Hero />
      <WhyUs/>
      <Products />
      <ProductsSec setShowDetails={setShowDetails} /> 
      {showDetails && <ProductDetails setShowDetails={setShowDetails}/>}
    </div>
  );
}
