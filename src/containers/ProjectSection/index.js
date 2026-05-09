import React, {useContext} from "react";
import {Fade} from "react-reveal";

import "./index.scss";
import StyleContext from "../../contexts/StyleContext";

export default function ProjectSection({projects}) {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const {isDark} = useContext(StyleContext);
  if (!projects.display) {
    return null;
  }
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="container-main" id="projects">
        <div>
          <h1 className="project-section-title">{projects.title}</h1>
          <p className={isDark ? "dark-mode project-section-subtitle" : "project-section-subtitle"}>
            {projects.subtitle}
          </p>

          <div className="projects-container">
            {projects.projects.map((project, i) => {
              const primaryUrl = project.footerLink && project.footerLink.length > 0 ? project.footerLink[0].url : null;
              return (
                <div
                  key={i}
                  className={isDark ? "dark-mode project-card" : "project-card"}
                  onClick={() => openUrlInNewTab(primaryUrl)}
                  style={{cursor: primaryUrl ? "pointer" : "default"}}
                >
                  <div className="project-detail">
                    <div className="project-name-wrapper">
                      <h5 className="project-name">
                        {project.projectName}
                      </h5>
                      {primaryUrl && (
                        <svg className="external-link-icon" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                      )}
                    </div>
                    <p className="project-desc">
                      {project.projectDesc}
                    </p>
                    {project.footerLink ? (
                      <div className="project-footer">
                        {project.footerLink.map((link, j) => {
                          return (
                            <span
                              key={j}
                              className="tag"
                              onClick={(e) => {
                                e.stopPropagation();
                                openUrlInNewTab(link.url);
                              }}
                            >
                              {link.name}
                            </span>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
