import React from "react";
import Hero from "./Hero";

const About = ({ isOpen }) => {
  return (
    <div className="about">
      About --
      <Hero isOpen={isOpen} />
    </div>
  );
};

export default About;
