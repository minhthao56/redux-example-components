import React from "react";
import "./Button.scss";

export const Button = ({
  children,
  className,
  onClick,
  color,
  backgroundColor,
}) => {
  return (
    <button
      className={`btn ${className}`}
      onClick={onClick}
      style={{ color, backgroundColor }}
    >
      {children}
    </button>
  );
};
