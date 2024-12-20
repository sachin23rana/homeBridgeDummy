/*import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center bg-bg-img-1 bg-cover bg-center bg-no-repeat min-h-screen">
      <h4>AMERICA'S HOME INNOVATION</h4>
      <h1 className="semibold-40">Revolutionize your Home with HB.ai</h1>
      <input
        type="text"
        placeholder="Enter your address"
        className="w-full max-w-md rounded-full border border-gray-300 bg-black/50 px-6 py-3 text-white placeholder-gray-400 focus:border-[#0D72B9] focus:outline-none focus:ring-2 focus:ring-[#0D72B9]"
      />

      <button className="w-80 max-w-md rounded-full border border-gray-300 bg-black/50 px-3 py-3 text-white placeholder-gray-400 focus:outline-none m-2">
        <span className="relative z-10">Let the magic happen!</span>
      </button>
      <img src="/Group21.svg" alt="" width={850} />
    </section>
  );
};

export default Hero;
*/
/*
import React from "react";
import CustomCard from "./CustomCard";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center bg-bg-img-1 bg-cover bg-center bg-no-repeat min-h-screen text-white px-4">
      
      <div className="text-center mb-8">
        <h4 className="text-sm font-light tracking-wider mb-2">
          AMERICA'S HOME INNOVATION
        </h4>
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
          Revolutionize your Home with{" "}
          <span className="text-[#0D72B9]">HB.ai</span>
        </h1>
        <input
          type="text"
          placeholder="Enter your address"
          className="w-full md:w-96 rounded-full border border-gray-500 bg-black/60 px-6 py-3 text-white placeholder-gray-400 focus:border-[#0D72B9] focus:outline-none focus:ring-2 focus:ring-[#0D72B9] mb-4"
        />
        <button className="w-full md:w-96 rounded-full border border-gray-500 bg-black/60 px-6 py-3 text-white placeholder-gray-400 focus:border-[#0D72B9] focus:outline-none focus:ring-2 focus:ring-[#0D72B9] mb-4">
          Let the magic happen!
        </button>
      </div>

      
      <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 w-full max-w-7xl px-4">
        
        <div className="relative flex flex-col items-center justify-center p-6 rounded-lg bg-black/50 border border-gray-800 shadow-lg shadow-blue-500/20">
          <div className="mb-4">
            <img
              src="/icon-custom.svg"
              alt="Custom Icon"
              className="h-12 w-12"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white">
            Customized Home Improvement
          </h3>
          <p className="text-center text-gray-400 text-sm">
            The HB.ai engine will bundle the most cost-effective, energy-saving
            home solutions for you. Increase the value of your home with
            innovation.
          </p>
        </div>

       
        <div className="relative flex flex-col items-center justify-center p-6 rounded-lg bg-black/50 border border-gray-800 shadow-lg shadow-blue-500/20">
          <div className="mb-4">
            <img
              src="/icon-payment.svg"
              alt="Payment Icon"
              className="h-12 w-12"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white">
            Easy Monthly Payment
          </h3>
          <p className="text-center text-gray-400 text-sm">
            HB.ai will provide the lowest monthly payment available for your
            turnkey bundle. The energy savings calculator will showcase your
            monthly savings.
          </p>
        </div>

      
        <div className="relative flex flex-col items-center justify-center p-6 rounded-lg bg-black/50 border border-gray-800 shadow-lg shadow-blue-500/20">
          <div className="mb-4">
            <img
              src="/icon-warranty.svg"
              alt="Warranty Icon"
              className="h-12 w-12"
            />
          </div>
          <h3 className="text-xl font-semibold mb-2 text-white">
            Peace of Mind
          </h3>
          <p className="text-center text-gray-400 text-sm">
            HB.ai provides a bumper-to-bumper warranty on all products, parts,
            and labor. You have zero worries during the HB.ai subscription.
          </p>
        </div>
      </div>
      <CustomCard />
    </section>
  );
};

export default Hero;
*/
"use client";
import React from "react";
import CustomCard from "./CustomCard";

const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center bg-bg-img-1 bg-cover bg-center bg-no-repeat min-h-screen text-white px-4">
      <div className="text-center mb-8">
        <h4 className="text-sm font-light tracking-wider mb-2">
          AMERICA'S HOME INNOVATION
        </h4>
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
          Revolutionize your Home with{" "}
          <span className="text-[#0D72B9]">HB.ai</span>
        </h1>
        <div className="flex flex-col items-center justify-center">
          <input
            type="text"
            placeholder="Enter your address"
            className="w-full md:w-96 rounded-full border border-gray-500 bg-black/60 px-6 py-3 text-white placeholder-gray-400 focus:border-[#0D72B9] focus:outline-none focus:ring-2 focus:ring-[#0D72B9] mb-4"
          />
          <button className="w-full md:w-64 rounded-full border border-gray-500 bg-black/60 px-6 py-3 text-white placeholder-gray-400 focus:border-[#0D72B9] focus:outline-none focus:ring-2 focus:ring-[#0D72B9] mb-4">
            Let the magic happen!
          </button>
        </div>
      </div>
      <div className="h-16 w-[38rem] border-x-4 border-t-4 rounded-tl-xl rounded-tr-xl border-sky-300 relative">
        <div className="h-28 absolute left-1/2 border-[2px] top-[-88%] border-sky-300"></div>
        <div className="triangle absolute bottom-[-17%] z-10 -right-[2rem] w-0 h-0 border-l-[30px] border-r-[30px] border-b-[40px] border-transparent border-b-[#fffbe6]"></div>
        <div className="triangle absolute bottom-[-5%] -right-[2rem] w-0 h-0 border-l-[30px] border-r-[30px] border-b-[40px] border-transparent border-b-[#45b8e6]"></div>        
        <div className="triangle absolute bottom-[-17%] z-10 left-[45.4%] w-0 h-0 border-l-[30px] border-r-[30px] border-b-[40px] border-transparent border-b-[#fffbe6]"></div>
        <div className="triangle absolute bottom-[-5%] left-[45.4%] w-0 h-0 border-l-[30px] border-r-[30px] border-b-[40px] border-transparent border-b-[#45b8e6]"></div>        
        <div className="triangle absolute bottom-[-17%] z-10 -left-[2rem] w-0 h-0 border-l-[30px] border-r-[30px] border-b-[40px] border-transparent border-b-[#fffbe6]"></div>
        <div className="triangle absolute bottom-[-5%] -left-[2rem] w-0 h-0 border-l-[30px] border-r-[30px] border-b-[40px] border-transparent border-b-[#45b8e6]"></div>        
      </div>


      <div className="relative flex items-center justify-center gap-8 w-full max-w-7xl px-4">
        <CustomCard />
        <CustomCard />
        <CustomCard />
      </div>
      <style jsx>{`
       .triangle{
        filter: blur(8px);
        /* box-shadow: 0px -5px 4px 0px #45b8e6; */
        /* filter: drop-shadow(-1px -7px 13px rgba(69, 184, 230, 1)); */
       }
      `}</style>
    </section>
  );
};

export default Hero;
