import React from "react";

const WhyUs = () => {
  return (
    <section className="flexCenter mx-auto w-full px-6 lg:px-20 py-16">
      <div className=" md:w-[43%] w-[95%] rounded-2xl border border-[#0D72B9] flex flex-col justify-center items-center bg-[#101010] md:p-10 p-8 text-white shadow-[0_0_10px_#0D72B9]">
        <div className="justify-center items-center text-4xl flex gap-1 font-medium mb-8">
          <h2>Why{" "}</h2>
          <span className=" text-[#0D72B9]">
            <img
              src="/small-logo.svg"
              alt="HB.ai Logo"
              className=" h-20 w-20"
            />
          </span>{" "}
          <h2>?</h2>
          
        </div>
        <div className="space-y-6">
          {/* Item 1 */}
          <div className="flex items-center gap-4">
            <div className="flexCenter h-12 w-12 p-2 rounded-full bg-[#474747] text-white border-2 border-[#0D72B9]">
              <img
                src="/icons/points.svg"
                alt="Check Icon"
                className="h-full w-full"
              />
            </div>
            <p className="md:regular-20 text-[16px]">Licensed HB.ai Contractors</p>
          </div>
          {/* Item 2 */}
          <div className="flex items-center gap-4">
            <div className="flexCenter h-12 w-12 p-2 rounded-full bg-[#474747] text-white border-2 border-[#0D72B9]">
              <img
                src="/icons/points.svg"
                alt="Finance Icon"
                className="h-full w-full"
              />
            </div>
            <p className="md:regular-20 text-[16px]">Lowest finance payment available</p>
          </div>
          {/* Item 3 */}
          <div className="flex items-center gap-4">
            <div className="flexCenter h-12 w-12 p-2 rounded-full bg-[#474747] text-white border-2 border-[#0D72B9]">
              <img
                src="/icons/points.svg"
                alt="Guarantee Icon"
                className="h-full w-full"
              />
            </div>
            <p className="md:regular-20 text-[16px]">Hassle free guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
