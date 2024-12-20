import React from "react";

const HeroB = () => {
  return (
    <section className="flexCenter mx-auto max-w-[1440px] px-6 lg:px-20 py-16">
      <div className="w-100 rounded-2xl border border-[#0D72B9] bg-[#101010] p-10 text-white shadow-[0_0_10px_#0D72B9]">
        <h2 className="flexCenter text-4xl font-medium mb-8">
          Why{" "}
          <span className="ml-2 text-[#0D72B9]">
            <img
              src="/small-logo.svg"
              alt="HB.ai Logo"
              className="inline-block h-20 w-20"
            />
          </span>{" "}
          ?
        </h2>
        <div className="space-y-6">
          {/* Item 1 */}
          <div className="flex items-center gap-4">
            <div className="flexCenter h-12 w-12 rounded-full bg-[#474747] text-white border-2 border-[#0D72B9]">
              <img
                src="/icons/points.svg"
                alt="Check Icon"
                className="h-6 w-6"
              />
            </div>
            <p className="regular-20">Licensed HB.ai Contractors</p>
          </div>
          {/* Item 2 */}
          <div className="flex items-center gap-4">
            <div className="flexCenter h-12 w-12 rounded-full bg-[#474747] text-white border-2 border-[#0D72B9]">
              <img
                src="/icons/points.svg"
                alt="Finance Icon"
                className="h-6 w-6"
              />
            </div>
            <p className="regular-20">Lowest finance payment available</p>
          </div>
          {/* Item 3 */}
          <div className="flex items-center gap-4">
            <div className="flexCenter h-12 w-12 rounded-full bg-[#474747] text-white border-2 border-[#0D72B9]">
              <img
                src="/icons/points.svg"
                alt="Guarantee Icon"
                className="h-6 w-6"
              />
            </div>
            <p className="regular-20">Hassle free guarantee</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroB;
