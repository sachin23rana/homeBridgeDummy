"use client";
import React from "react";

const CustomCard = () => {
  return (
    <div className="card-wrapper z-20">
      <div className="card-all relative flex flex-col items-center justify-start p-6 rounded-xl bg-black/90 border border-gray-800 shadow-lg shadow-blue-500/20 w-64 h-80">
        
        <div className="mb-4">
          <img src="icons/CardIcon.png" alt="Card Icon" className="h-28 w-32" />
        </div>

        <h3 className="text-xl font-semibold text-white text-center mb-2">
          Card Title Here
        </h3>

        <p className="text-center text-gray-400 text-sm">
          This is a placeholder description for the card. Customize it with your
          text to make it relevant to your design.
        </p>
      </div>
      <style jsx>{`
        .card-wrapper {
          --margin: 1px;
          position: relative;
          padding: 8px 0.5px 0px 0.5px;
          isolation: isolate;
        }

        .card-all {
          position: relative;
          z-index: 2;
        }

        .card-wrapper::before,
        .card-wrapper::after {
          content: "";
          position: absolute;
          inset: 0;
          
          border-radius: 20px 20px 16px 16px;
          background: #fffbe6;
          filter: blur(3px);
          z-index: 1;
          /* box-shadow: 0px -8px 8px 0px , */
          box-shadow: 0px -5px 4px 0px rgba(69, 184, 230, 1);
        }

        .card-wrapper::after {
          opacity: 0.5;
        }
      `}</style>
    </div>
  );
};

export default CustomCard;
