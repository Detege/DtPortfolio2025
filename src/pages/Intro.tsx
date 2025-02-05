import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Intro() {
  const [text, setText] = useState("Hello!");
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex h-full grow items-center justify-center">
      <Link
        to="/home"
        className="z-1 m-auto flex size-75 justify-center rounded-full bg-black dark:bg-white"
        onMouseEnter={() => {
          setHovered(true);
          setText("Start");
        }}
      >
        <h2 className="m-auto text-2xl font-medium dark:text-black">{text}</h2>
      </Link>
      <div className="absolute flex gap-2">
        <motion.div
          className="h-[200px] w-[500px]"
          animate={hovered ? { x: -175, opacity: 1 } : { x: 0, opacity: 0 }}
          transition={{ ease: "circOut", duration: 0.9 }}
        >
          <h2 className="pb-[60px] text-right text-6xl font-medium text-black dark:text-white">
            I'm <br />
            Daniel Terol
          </h2>
        </motion.div>
        <motion.div
          className="h-[200px] w-[500px]"
          animate={hovered ? { x: 175, opacity: 1 } : { x: 0, opacity: 0 }}
          transition={{ ease: "circOut", duration: 0.9 }}
        >
          <h2 className="pt-[60px] text-left text-6xl font-medium text-black dark:text-white">
            a Visual
            <br />
            Designer
          </h2>
        </motion.div>
      </div>
    </div>
  );
}

export default Intro;
