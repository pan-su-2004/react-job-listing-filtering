import React from "react";

const Hero = ({ isOpen }) => {
  return <div className="hero">{isOpen ? "Hok tl" : "ma HOk bu"}</div>;
};
export default Hero;
