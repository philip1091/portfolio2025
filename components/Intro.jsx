"use client";
import Typical from "react-typical";
import { motion } from "motion/react";
const Intro = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 1,
          duration: 0.4,
          ease: "easeInOut",
        },
      }}
    >
      <span>a </span>
      <Typical
        className="text-accent border-none font-extrabold antialiased "
        steps={[
          "Software Developer",
          1000,
          "Web Developer",
          1000,
          "Frontend Developer",
          1000,
          "Fullstack Developer",
          1000,
        ]}
        loop={Infinity}
        wrapper="span"
      />
    </motion.div>
  );
}

export default Intro
