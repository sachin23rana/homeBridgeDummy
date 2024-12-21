import React from "react";

const Button = ({ type, title, variant, full }) => {
  return (
    <button
      type={type}
      className={`flexCenter gap-1 rounded-full border ${variant} ${
        full && "w-full"
      }`}
    >
      {title}
    </button>
  );
};

export default Button;
