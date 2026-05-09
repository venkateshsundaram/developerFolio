import React from "react";
import "./TalkCard.scss";

export default function TalkCard({talkDetails}) {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const primaryUrl = talkDetails.slides_url || talkDetails.event_url;

  return (
    <div 
      className="talk-card-container"
      onClick={() => openUrlInNewTab(primaryUrl)}
      style={{cursor: primaryUrl ? "pointer" : "default"}}
    >
      <div
        className={
          talkDetails.isDark ? "dark-rectangle rectangle" : "rectangle"
        }
      >
        <div className="diagonal-fill"></div>
        <div className="talk-header-wrapper">
          <div className="talk-card-title">{talkDetails.title}</div>
          {primaryUrl && (
            <svg className="external-link-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          )}
        </div>
        <p className="talk-card-subtitle">{talkDetails.subtitle}</p>

        <div className="card-footer-button-div">
          {talkDetails.slides_url && (
            <a 
              href={talkDetails.slides_url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="talk-button"
              onClick={(e) => e.stopPropagation()}
            >
              Slides
            </a>
          )}
          {talkDetails.event_url && (
            <a 
              href={talkDetails.event_url} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="talk-button"
              onClick={(e) => e.stopPropagation()}
            >
              Event
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
