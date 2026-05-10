import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import {illustration, skillsSection} from "../../portfolio";
import {Fade} from "react-reveal";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <div className={isDark ? "dark-mode main" : "main"} id="skills">
      <div className="skills-main-div">
        <Fade bottom duration={1000}>
          <div className="skills-text-div">
            <h1 className={isDark ? "dark-mode skills-heading" : "skills-heading"}>
              {skillsSection.title}
            </h1>
            <p className={isDark ? "dark-mode subTitle skills-text-subtitle" : "subTitle skills-text-subtitle"}>
              {skillsSection.subTitle}
            </p>
            <SoftwareSkill />
            <div style={{marginTop: "40px"}}>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={isDark ? "dark-mode subTitle skills-text" : "subTitle skills-text"}
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
        </Fade>
        
        <Fade bottom duration={1000} delay={500}>
          <div className="expertise-cloud">
            <h2 className="expertise-title">Design & Architecture Expertise</h2>
            <div className="tag-container">
              <span className="tag">Web Development</span>
              <span className="tag">System Architecture</span>
              <span className="tag">Cloud Infrastructure</span>
              <span className="tag">Mobile Development</span>
              <span className="tag">State Management</span>
              <span className="tag">Performance Optimization</span>
              <span className="tag">API Design</span>
              <span className="tag">Responsive Layouts</span>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
