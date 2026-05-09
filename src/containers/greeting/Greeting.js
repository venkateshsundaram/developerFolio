import React, {useContext} from "react";
import {Fade} from "react-reveal";
import "./Greeting.scss";
import Button from "../../components/button/Button";

import {
  greeting
} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <h1 className={isDark ? "dark-mode greeting-text" : "greeting-text"}>
              Hi all, I'm <span className="blue-text">{greeting.username}</span>
            </h1>
            <p
              className={
                isDark ? "dark-mode greeting-text-p" : "greeting-text-p"
              }
              style={{marginInline: "auto"}}
            >
              {greeting.subTitle}
            </p>
            <div className="button-greeting-div">
              <Button text="Say Hello" href="mailto:contactvenkateshsundaram@gmail.com" />
              <Button
                text="About Me"
                href="#reachout"
              />
            </div>
          </div>
          
          <div className="browser-frame">
            <div className="browser-header">
              <div className="dot red"></div>
              <div className="dot yellow"></div>
              <div className="dot green"></div>
            </div>
            <div className="browser-content">
              <img
                src={require("../../assets/images/hero-illustration-man.png")}
                alt="Professional Illustration"
              />
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
