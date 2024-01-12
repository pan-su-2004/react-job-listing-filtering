import React from "react";
import Hero from "./Hero";

const About = ({ name }) => {
  return (
    <div className="about">
      About --
      <Hero name={name} />
    </div>
  );
};

export default About;
