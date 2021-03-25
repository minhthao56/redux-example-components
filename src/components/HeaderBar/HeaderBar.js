import React from "react";
import "./HeaderBar.scss";

export const HeaderBar = ({ backgroundColor, color }) => {
  return (
    <div className="header-bar" style={{ color, backgroundColor }}>
      HeaderBar
    </div>
  );
};
