import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Intro() {
  const [text, setText] = useState("Hello!");
  const [hovered, setHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isMobile) {
      setTimeout(() => setShowText(true), 500); // Delayed animation trigger
    }
  }, [isMobile]);

  return (
    <div className="flex h-full grow items-center justify-center relative">
      <Link
        to="/home"
        className={`z-1 m-auto flex rounded-full bg-black dark:bg-white ${
          isMobile ? "size-56" : "size-75"
        }`}
        onMouseEnter={() => {
          if (!isMobile) {
            setHovered(true);
            setText("Start");
          }
        }}
      >
        <h2 className="m-auto text-2xl font-medium dark:text-black">{text}</h2>
      </Link>

      {isMobile ? (
        <div className="absolute flex flex-col items-center gap-4">
          <motion.div
            className="text-right pr-[150px] h-[60px] w-[300px] align-bottom"
            initial={{ opacity: 0, y: 0 }}
            animate={{ y: -115, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.9, delay: 0.5 }}
          >
            <h2 className="text-2xl font-medium text-black dark:text-white">
              I'm <br />
              Daniel Terol
            </h2>
          </motion.div>
          <motion.div
            className="text-left pl-[150px] h-[60px] w-[300px]"
            initial={{ opacity: 0, y: 0 }}
            animate={{ y: 115, opacity: 1 }}
            transition={{ ease: "easeOut", duration: 0.9, delay: 0.5 }}
          >
            <h2 className="text-2xl font-medium text-black dark:text-white">
              a Visual <br />
              Designer
            </h2>
          </motion.div>
        </div>
      ) : (
        <div className="absolute flex gap-2">
          <motion.div
            className="h-[200px] w-[500px]"
            initial={{ opacity: 0, x: 0 }}
            animate={hovered ? { x: -175, opacity: 1 } : { x: 0, opacity: 0 }}
            transition={{ ease: "circOut", duration: 0.9 }}
          >
            <h2 className="pb-[60px] text-right text-5xl xl:text-6xl font-medium text-black dark:text-white">
              I'm <br />
              Daniel Terol
            </h2>
          </motion.div>
          <motion.div
            className="h-[200px] w-[500px]"
            initial={{ opacity: 0, x: 0 }}
            animate={hovered ? { x: 175, opacity: 1 } : { x: 0, opacity: 0 }}
            transition={{ ease: "circOut", duration: 0.9 }}
          >
            <h2 className="pt-[60px] text-left text-5xl xl:text-6xl font-medium text-black dark:text-white">
              a Visual
              <br />
              Designer
            </h2>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default Intro;
