"use client";
import React, { useRef, useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";

const ProductDetails = ({
  setShowDetails,
  selectedProduct,
  setSelectedProduct,
}) => {
  const detailsRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(
    selectedProduct.images[0].main
  );

  useEffect(() => {
    console.log("selected card", selectedProduct);
    console.log("images", selectedProduct.images[0]);
    const handleClose = (e) => {
      if (detailsRef.current && !detailsRef.current.contains(e.target)) {
        setShowDetails(false);
      }
    };

    document.addEventListener("mousedown", handleClose);
    return () => {
      document.removeEventListener("mousedown", handleClose);
    };
  }, [detailsRef]);

  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-md z-40 flex justify-center items-center">
      <div
        ref={detailsRef}
        className="w-[95%] h-[75%] bg-white mt-10 shadow-xl relative p-6 flex gap-6"
      >
        <button
          onClick={() => {
            setShowDetails(false);
          }}
          className=" absolute top-2 right-2 bg-gray-300 text-xl text-black p-1"
        >
          <IoCloseSharp />
        </button>

        <div className="w-[63%] h-full">
          <img
            src={selectedImage}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>
        <div className="w-[12%]">
          {selectedProduct.images.map((imageObject, index) => (
            <div
              key={index}
              className="flex flex-col justify-start items-center gap-4"
            >
              {Object.values(imageObject).map((imageSrc, imgIndex) => (
                <img
                  key={imgIndex}
                  src={imageSrc}
                  alt={`Image ${imgIndex}`}
                  onClick={() => {
                    setSelectedImage(imageSrc);
                  }}
                  className="h-24 w-full object-cover border-2 cursor-pointer hover:shadow-xl border-gray-20 hover:border-[#0D72B9] hover:border-[3px] duration-200 transition-all"
                />
              ))}
            </div>
          ))}
        </div>
        <div className="w-[1px] h-full bg-gray-400"></div>
        <div className="w-[25%] h-full flex flex-col gap-[4%] pr-3">
          <div className="h-1/2 w-full gap-3 flex flex-col justify-center items-start">
            <h1 className="text-black font-bold text-3xl">
              {selectedProduct.name}
            </h1>
            <p className="text-wrap text-black text-sm">
              {selectedProduct.desc}
            </p>
          </div>
          <div className="h-[1px] w-[90%] bg-gray-400"></div>
          <div className="h-1/2 flex flex-col gap-2 ">
            <span className="text-black font-bold text-2xl">Key Benifits</span>
            <div className="h-1/2 flex flex-col gap-1">
              <span className="text-black text-lg font-bold">Cost Savings</span>
              <span className=" text-black text-base">
                Lower energy bills by optimizing energy usage and reducing
                waste.
              </span>
            </div>
            <div className="h-1/2 flex flex-col gap-1">
              <span className="text-black text-lg font-bold">
                Improved Efficiency
              </span>
              <span className="text-black text-base ">
                Ensure all systems in your home or business run at peak
                performance.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
