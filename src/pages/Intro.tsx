import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Intro() {
  const [text, setText] = useState("Hello!");
  const [hovered, setHovered] = useState(false);

  return (
    <div className="flex items-center justify-center grow h-full">
      <Link
        to="/home"
        className="bg-black dark:bg-white flex justify-center m-auto size-75 rounded-full z-1"
        onMouseEnter={() => {
          setHovered(true);
          setText("Start");
        }}
      >
        <h2 className="m-auto text-2xl font-medium dark:text-black">{text}</h2>
      </Link>
      <div className="absolute flex gap-2">
        <motion.div
          className="w-[500px] h-[200px]"
          animate={hovered ? { x: -175, opacity: 1 } : { x: 0, opacity: 0 }}
          transition={{ ease: "circOut", duration: 0.9 }}
        >
          <h2 className="text-right text-6xl font-medium text-black dark:text-white pb-[60px]">
            I'm <br />
            Daniel Terol
          </h2>
        </motion.div>
        <motion.div
          className="w-[500px] h-[200px]"
          animate={hovered ? { x: 175, opacity: 1 } : { x: 0, opacity: 0 }}
          transition={{ ease: "circOut", duration: 0.9 }}
        >
          <h2 className="text-left text-6xl font-medium text-black dark:text-white pt-[60px]">
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
