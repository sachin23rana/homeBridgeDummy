import React from "react";

const ProductCard = ({ position, title, imageSrc, imageAlt, onLearnMore }) => (
  <div className="relative h-[300px] md:h-[500px] overflow-hidden">
    <img src={imageSrc} alt={imageAlt} className="w-full h-full object-cover" />
    <div
      className={`absolute ${position === "left" ? "left-4" : "right-0 "
        } top-1/2 transform -translate-y-1/2 flex items-center`}
    >
      <div className={`flex flex-col ${position === "left" ? "items-start" : "items-end"
        }  p-6 sm:p-8 `}>
        <h3 className={`text-xl md:text-4xl w-[70%] md:w-1/2 text-white mb-2 ${position === "left" ? "text-start" : "text-end"
          } `}>
          {title}
        </h3>
        <button
          onClick={onLearnMore}
          className="rounded-full border border-gray-200 bg-black/60 px-6 py-3 text-white placeholder-gray-400 focus:border-[#0D72B9] focus:outline-none focus:ring-2 focus:ring-[#0D72B9] mb-4 hover:scale-105 transition-all"
        >
          Learn More
        </button>
      </div>
    </div>
  </div>
);

export default ProductCard;
