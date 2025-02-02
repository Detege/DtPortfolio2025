import { useState } from "react";
import { Link } from "react-router-dom";

function Intro() {
  const [text, setText] = useState("Hello!");

  return (
    <div className="flex items-center justify-center grow h-full">
      <Link
        to="/home"
        className="bg-black dark:bg-white flex justify-center m-auto size-75 rounded-full"
        onMouseEnter={() => setText("Start")}
      >
        <h2 className="m-auto text-2xl font-medium dark:text-black">{text}</h2>
      </Link>
    </div>
  );
}

export default Intro;
