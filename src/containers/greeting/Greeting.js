import React, {useContext} from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
// import landingPerson from "../../assets/lottie/landingPerson";
import profile from "../../assets/images/profile.png"
import github from "../../assets/images/github.png"
import gitlab from "../../assets/images/gitlab.png"
import instagram from "../../assets/images/instagram.png"
import linkedin from "../../assets/images/linkedin.png"

// import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {
  // illustration, 
  greeting,contactInfo
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
          {/* <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div> */}
          <div className="rounding-sec">
                <div className="big-circle">
                    <div className="icon-block">
                        <img src={github} alt="" />
                    </div>
                    <div className="icon-block">
                       <img src={instagram} alt="" />
                    </div>
                    <div className="icon-block">
                        <img src={gitlab} alt="" />
                    </div>
                    <div className="icon-block">
                        <img src={linkedin} alt="" />
                    </div>
                </div>
                <div className="images">
                    <img src={profile} alt="" className="img-w"/>
                </div>
            </div>
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                {greeting.displayContact && <Button className="greeting-button" newTab text="Say Hello!" href={`mailto:${contactInfo.email_address}`} />}
                {greeting.displayReachout && <Button className="greeting-button" type="default" text="About Me" href="#reachout" />}
                {greeting.resumeLink && (
                  <Button
                    text="See my resume"
                    newTab={true}
                    href={greeting.resumeLink}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
