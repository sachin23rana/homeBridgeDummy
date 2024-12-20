import React from "react";

type ButtonProps = {
  type: "button" | "submit";
  title: string;
  variant: string;
  full?: boolean;
};

const Button = ({ type, title, variant, full }: ButtonProps) => {
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
