import "./intro.scss";
import { KeyboardArrowDown } from "@mui/icons-material";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Web Developer",
        "Creative Designer",
        "Learner",
        "Problem Solver",
      ],
    });
  }, []);

  

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/pro.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi,</h2>
          <h1><span>I'm</span> Anup Haldar</h1>
          <h3>
            A <span ref={textRef}></span>
          </h3>
            <a
              href="https://drive.google.com/file/d/1ghsZjUntudLDSeJVkc0kWcV9LUqkprv8/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              <button>Resume</button>
            </a>
        </div>

        <a href="#about">
          <KeyboardArrowDown className="downArrow" />
        </a>
      </div>
    </div>
  );
}
