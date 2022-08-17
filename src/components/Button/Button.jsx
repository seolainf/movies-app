import React from "react";
import "./button.scss";

const Button = ({ onClick, size = "small", children }) => {
  return (
    <button
      className={`btn ${size}`}
      onClick={onClick ? () => onClick() : null}
    >
      {children}
    </button>
  );
};

export default Button;
