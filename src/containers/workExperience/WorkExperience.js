import React, {useEffect,useState, useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import Button from "../../components/button/Button";
import {workExperiences} from "../../portfolio";
import {Fade} from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience({ loadingState, updateShowMoreExperiences }) {
  const {isDark} = useContext(StyleContext);
  const [enableMore, updateEnableMore] = useState(false);
  const [isLoading, updateLoading] = useState(false);
  
  useEffect(() => {
    updateLoading(loadingState)
  }, [loadingState]);

  const updateExperience = (state) => {
    updateShowMoreExperiences(true);
    setTimeout(() => {
      updateEnableMore(state);
      updateShowMoreExperiences(false);
    }, 2000)
  }

  if (workExperiences.display) {
    return (
      <div id="experience">
        <Fade bottom duration={1000} distance="20px">
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  if ((!enableMore && i <2) || enableMore) {
                    return (
                      <ExperienceCard
                        key={i}
                        isDark={isDark}
                        cardInfo={{
                          company: card.company,
                          desc: card.desc,
                          date: card.date,
                          companylogo: card.companylogo,
                          role: card.role,
                          descBullets: card.descBullets
                        }}
                      />
                    );
                  }
                  return null;
                })}
                {isLoading && 
                  <ExperienceCard 
                    isDark={isDark}
                    isLoading={isLoading} 
                    loadingCount={3}
                  />}
              </div>
              {!enableMore && (
                <Button
                  text={"More Experiences"}
                  onClick={(e) => {
                    e.preventDefault();
                    updateExperience(true);
                  }}
                  className="project-button"
                />
              )}
            </div>
          </div>
        </Fade>
      </div>
    );
  }
  return null;
}
