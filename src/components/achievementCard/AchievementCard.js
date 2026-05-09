import React from "react";
import "./AchievementCard.scss";

export default function AchievementCard({cardInfo, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const primaryUrl = cardInfo.footerLink && cardInfo.footerLink.length > 0 ? cardInfo.footerLink[0].url : null;

  return (
    <div 
      className={isDark ? "dark-mode certificate-card" : "certificate-card"}
      onClick={() => openUrlInNewTab(primaryUrl)}
      style={{cursor: primaryUrl ? "pointer" : "default"}}
    >
      <div className="certificate-image-div">
        <img
          src={cardInfo.image}
          alt={cardInfo.imageAlt || "Achievement"}
          className={`${cardInfo.className || ""} card-image`}
        ></img>
      </div>
      <div className="certificate-detail-div">
        <div className="card-title-wrapper">
          <h5 className={isDark ? "dark-mode card-title" : "card-title"}>
            {cardInfo.title}
          </h5>
          {primaryUrl && (
            <svg className="external-link-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
          )}
        </div>
        <p className={isDark ? "dark-mode card-subtitle" : "card-subtitle"}>
          {cardInfo.description}
        </p>
      </div>
      <div className="certificate-card-footer">
        {cardInfo.footerLink &&
          cardInfo.footerLink.map((v, i) => {
            return (
              <span
                key={i}
                className={
                  isDark ? "dark-mode certificate-tag" : "certificate-tag"
                }
                onClick={(e) => {
                  e.stopPropagation();
                  openUrlInNewTab(v.url, v.name);
                }}
              >
                {v.name}
              </span>
            );
          })}
      </div>
    </div>
  );
}
