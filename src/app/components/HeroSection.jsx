"use client";
import React, { useState, useEffect } from "react";
import CustomCard from "./CustomCard";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

const HeroSection = () => {
  const [firstTypewriterComplete, setFirstTypewriterComplete] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 938);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const animationPlayed = localStorage.getItem("typewriterAnimated");
    if (animationPlayed) {
      setHasAnimated(true);
      setFirstTypewriterComplete(true);
    }
  }, []);

  const handleFirstTypewriterComplete = () => {
    setFirstTypewriterComplete(true);
    localStorage.setItem("typewriterAnimated", "true");
  };

  // useEffect(() => {
  //   const handleResize = () => {
  //     setIsMobile(window.innerWidth <= 938);
  //   };

  //   window.addEventListener("resize", handleResize);
  //   return () => window.removeEventListener("resize", handleResize);
  // }, []);

  const words = [
    { text: "Revolutionize" },
    { text: "your" },
    { text: "Home" },
    { text: "with" },
  ];

  const heading = [
    {
      text: "HB.ai",
      className:
        "text-[#0D72B9] hover:text-[#2B9EE6] dark:text-[#3AA5ED] dark:hover:text-[#5DB7F3]",
    },
  ];

  

  const cards = [
    {
      id: 1,
      name: "Customized Home Improvement",
      desc: "The HB.ai engine will bundle the most cost effective, energy saving home solutions for you.  Increase the value of your home with innovation.",
      image: "icons/icon1.png",
    },
    {
      id: 1,
      name: "Easy Monthly Payment",
      desc: " Hb.ai will provide the lowest monthly payment available for your turnkey bundle.  The energy savings calculator will clearly showcase your monthly savings.",
      image: "icons/icon2.png",
    },
    {
      id: 1,
      name: "Peace of Mind",
      desc: "HB.ai provides a bumper to bumper warranty on all product, parts and labor on all customized bundles.  You have zero worries during the HB.ai subscription.",
      image: "icons/icon3.png",
    },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center bg-bg-img-1 bg-cover bg-center bg-no-repeat h-[120vh] text-white px-4">
      <div className="text-center mb-8 flex flex-col items-center mt-6 justify-center ">
        <h4 className="text-sm font-light">AMERICA'S HOME INNOVATION</h4>
        {!isMobile ? (
          <h1 className="text-4xl md:text-5xl flex items-center flex-col justify-center font-semibold mb-3">
            <TypewriterEffectSmooth
              words={words}
              showCursor={true}
              onComplete={handleFirstTypewriterComplete}
              duration={2}
              isFirst={true}
              isTypingComplete={firstTypewriterComplete}
              hasAnimated={hasAnimated}
            />
            <TypewriterEffectSmooth
              words={heading}
              startDelay={firstTypewriterComplete ? 0 : 2.5}
              showCursor={true}
              duration={0.7}
              isFirst={false}
              isTypingComplete={firstTypewriterComplete}
              hasAnimated={hasAnimated}
            />
          </h1>
        ) : (
          <h1 className="text-4xl md:text-5xl font-semibold mb-6">
            Revolutionize your Home with{" "}
            <span className="text-[#0D72B9]">HB.ai</span>
          </h1>
        )}
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

      <div className="h-24 w-[38rem] border-x-4 border-t-4 rounded-tl-xl rounded-tr-xl border-sky-300 relative">
        <div className="spotlight-center z-50" />
        <div className="spotlight-left z-50" />
        <div className="spotlight-right z-50" />
        <div className="h-28 absolute left-1/2 border-[2px] top-[-57%] border-sky-300"></div>
        <div className="triangle absolute bottom-[-6%] blur-sm z-30 -right-[2rem] w-0 h-0 border-l-[30px] border-r-[30px] border-b-[40px] border-transparent border-b-[#fffbe6]"></div>
        <div className="triangle absolute bottom-[6%] blur-sm -right-[2rem] w-0 h-0 border-l-[30px] border-r-[30px] border-b-[40px] border-transparent border-b-[#45b8e6]"></div>
        <div className="triangle absolute bottom-[-6%] blur-sm z-30 left-[45.4%] w-0 h-0 border-l-[30px] border-r-[30px] border-b-[40px] border-transparent border-b-[#fffbe6]"></div>
        <div className="triangle absolute bottom-[6%] blur-sm left-[45.4%] w-0 h-0 border-l-[30px] border-r-[30px] border-b-[40px] border-transparent border-b-[#45b8e6]"></div>
        <div className="triangle absolute bottom-[-6%] blur-sm z-30 -left-[2rem] w-0 h-0 border-l-[30px] border-r-[30px] border-b-[40px] border-transparent border-b-[#fffbe6]"></div>
        <div className="triangle absolute bottom-[6%] blur-sm -left-[2rem] w-0 h-0 border-l-[30px] border-r-[30px] border-b-[40px] border-transparent border-b-[#45b8e6]"></div>
      </div>

      <div className="relative flex items-center justify-center gap-8 w-full max-w-7xl px-4">
        {cards.map((card, index) => (
          <CustomCard key={index} card = {card}/>
        ))}
      </div>
      <style jsx>{`
        .spotlight-center {
          position: absolute;
          width: 60px;
          height: 40px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0.8) 70%
          );
          left: calc(50% - 10px);
          top: 100%;
          animation: moveDown 10s infinite;
          filter: blur(5px);
          box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.6);
        }

        .spotlight-left {
          position: absolute;
          width: 60px;
          height: 40px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0.8) 70%
          );
          left: 0;
          top: -50%;
          opacity: 0;
          animation: moveLeft 10s infinite;
          filter: blur(5px);
          box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.6);
        }

        .spotlight-right {
          position: absolute;
          width: 60px;
          height: 40px;
          border-radius: 50%;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 1) 0%,
            rgba(255, 255, 255, 0.8) 70%
          );

          right: 0;
          top: 0;
          opacity: 0;
          animation: moveRight 10s infinite;
          filter: blur(5px);
          box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.6);
        }

        @keyframes moveDown {
          0% {
            top: -28%;
            opacity: 1;
          }
          30% {
            top: 0;
            opacity: 1;
          }
          31% {
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes moveLeft {
          0%,
          30% {
            opacity: 0;
            top: 0;
            left: 50%;
          }
          31% {
            opacity: 1;
            top: 0;
            left: 50%;
          }
          65% {
            opacity: 1;
            top: 0;
            left: 0;
          }
          66% {
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }

        @keyframes moveRight {
          0%,
          30% {
            opacity: 0;
            top: 0;
            right: 50%;
          }
          31% {
            opacity: 1;
            top: 0;
            right: 50%;
          }
          65% {
            opacity: 1;
            top: 0;
            right: 0;
          }
          66% {
            opacity: 0;
          }
          100% {
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
