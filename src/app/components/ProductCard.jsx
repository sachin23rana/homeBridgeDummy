"use client";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


const ProductCard = ({
  position,
  title,
  images,
  imageAlt,
  setSelectedProduct,
  setShowDetails,
  product,
}) => {

  const cardRef = useRef(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  const fadeInVariants = {
    hidden: {
      opacity: 0,
      x: position === "left" ? -50 : 50,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };
  return (
    <div ref={containerRef} className="relative h-[300px] md:h-[500px] overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          style={{ 
            y,
            height: "120%",
            top: "-10%"
          }}
          className="absolute inset-0"
        >
          <img
            src={images[0]?.main}
            alt={imageAlt}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>
      <motion.div
        ref={cardRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInVariants}
        className={`absolute ${
          position === "left" ? "left-[2%]" : "right-[2%]"
        } top-[25%] transform -translate-y-1/2 flex items-center`}
      >
        <div
          className={`flex flex-col ${
            position === "left" ? "items-start" : "items-end"
          } p-6 sm:p-8`}
        >
          <h3
            className={`text-xl md:text-4xl w-[70%] items-center flex text-white mb-2 ${
              position === "left" ? "justify-start text-start" : "justify-end text-end"
            }`}
          >
            {title}
          </h3>
          <button
            onClick={() => {
              setShowDetails(true);
              setSelectedProduct(product);
            }}
            className="rounded-full border border-gray-200 bg-black/60 px-6 py-3 text-white placeholder-gray-400 focus:border-[#0D72B9] focus:outline-none focus:ring-2 focus:ring-[#0D72B9] mb-4 hover:scale-105 transition-all"
          >
            Learn More
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ProductCard;
