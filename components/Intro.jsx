"use client";
import { ReactTyped } from "react-typed";

const Intro = () => {
  return (
    <div>
      <span>a </span>
      <ReactTyped
        strings={[
          "Software Developer",
          "Web Developer",
          "Front End Developer",
          "Full Stack Developer",
        ]}
        className="text-accent border-none font-extrabold "
        typeSpeed={70}
        backSpeed={70}
        loop
      />
    </div>
  );
}

export default Intro
