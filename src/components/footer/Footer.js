import React, {useContext, useEffect, useState} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  const [mousePos, setMousePos] = useState({x: 0, y: 0});

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({x: e.clientX, y: e.clientY});
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getPupilStyle = (eyeId) => {
    const eye = document.getElementById(eyeId);
    if (!eye) return {};
    
    const rect = eye.getBoundingClientRect();
    const eyeCenter = {
      x: rect.left + rect.width / 2,
      y: rect.top + rect.height / 2
    };
    
    const angle = Math.atan2(mousePos.y - eyeCenter.y, mousePos.x - eyeCenter.x);
    const distance = Math.min(20, Math.hypot(mousePos.x - eyeCenter.x, mousePos.y - eyeCenter.y) / 10);
    
    return {
      transform: `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`
    };
  };

  return (
    <div className="footer-div">
      <Fade bottom duration={1000} distance="20px">
        <div className="eyes-container">
          <div className="eye" id="eye-1">
            <div className="pupil" style={getPupilStyle("eye-1")}></div>
          </div>
          <div className="eye" id="eye-2">
            <div className="pupil" style={getPupilStyle("eye-2")}></div>
          </div>
        </div>
        
        
        <div style={{marginTop: "60px"}}>
          <p className="footer-subtext">
            © 2026 Venkatesh Sundaram. Built with Passion.
          </p>
        </div>
      </Fade>
    </div>
  );
}
