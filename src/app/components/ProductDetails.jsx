import React from "react";
import { IoCloseSharp } from "react-icons/io5";

const ProductDetails = ({ setShowDetails }) => {
  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-md z-40 flex justify-center items-center">
      <div className="w-[95%] h-[80%] bg-white mt-10 shadow-xl relative p-6 flex gap-[5%]">
        <button
          onClick={() => {
            setShowDetails(false);
          }}
          className=" absolute top-2 right-2 bg-gray-300 text-xl text-black p-1"
        >
          <IoCloseSharp />
        </button>

        <div className="w-[60%] h-full">
          <img src="" alt="" className="h-full w-full object-cover" />
        </div>
        <div className="w-[40%] h-full flex flex-col gap-[4%]">
          <div className="h-1/2 w-full flex flex-col justify-center items-start">
            <h1 className="text-black text-3xl">Energy Management</h1>
            <p className="text-wrap text-black text-sm">
              Energy management is the strategic process of monitoring,
              controlling, and optimizing energy usage to enhance efficiency,
              reduce costs, and promote sustainability. By leveraging advanced
              technologies like energy monitoring systems and real-time
              analytics, homeowners and businesses can make smarter decisions
              about energy consumption.
            </p>
          </div>
          <div className="h-1 w-[90%] bg-gray-300"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
