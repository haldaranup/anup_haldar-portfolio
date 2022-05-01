import "./intro.scss";
import {KeyboardArrowDown} from '@mui/icons-material';
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Web Developer", "Creative Designer", "Learner", "Problem Solver", "Open source anthusiast"],
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
          <h2>Hi There, I'm</h2>
          <h1>Anup Haldar</h1>
          <h3>
            A <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#about">
        <KeyboardArrowDown className="downArrow" />
        </a>
      </div>
    </div>
  );
}
