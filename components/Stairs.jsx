import { motion } from "motion/react";

// variant
const stairAnimation = {
  initial: {
    top: "0%",
  },
  animate: {
    top: "100%",
  },
  exit: {
    top: ["100%", "0%"],
  },
};

//calculate the reverse index for staggered delay
const reverseIndex = (index) => {
  const totalSteps = 6; //number of steps
  return totalSteps - index - 1;
}

const Stairs = () => {
  // render 6 motion devs, each represention a step of the stairs
  // each div will have the same animamtion defined by the stairAnimation object.
  // the delay for each div is calculated dynamically on it's reversed index,
  // creating a staggered effect with descreasin delay for each subsquent step.
  return (
    <>
      {[...Array(6)].map((_, index)=> {
        return(
          <motion.div
            key={index}
            variants={stairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: "easeInOut",
              delay: reverseIndex(index) * 0.1,
            }}
            className="h-full w-full bg-white relative"
          />
        )
      })}
    </>
  )
}

export default Stairs
