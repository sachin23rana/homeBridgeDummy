import Hero from "./HeroSection";
import WhyUs from "./WhyUs";
import Products from "./Products";
import ProductsSec from "../components/ProductSection";

export default function Home() {
  return (
    <>
      <Hero />
      <WhyUs/>
      <Products />
      <ProductsSec /> 
    </>
  );
}
