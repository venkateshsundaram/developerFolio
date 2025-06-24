import React, { useState, createRef } from "react";
import "./ExperienceCard.scss";
import ColorThief from "colorthief";

export default function ExperienceCard({
  cardInfo,
  isDark,
  isLoading,
  index,
  expandIndex,
  setExpandIndex,
  loadingCount = 1
}) {
  const [colorArrays, setColorArrays] = useState([]);
  const expand = expandIndex === index;
  const imgRef = createRef();

  function getColorArrays() {
    const colorThief = new ColorThief();
    setColorArrays(colorThief.getColor(imgRef.current));
  }

  function rgb(values) {
    return typeof values === "undefined"
      ? null
      : "rgb(" + values.join(", ") + ")";
  }

  const GetDescBullets = ({ descBullets, isDark }) => {
    return descBullets
      ? descBullets.map((item, i) => (
        <li
          key={i}
          className={isDark ? "subTitle dark-mode-text" : "subTitle"}
        >
          {item}
        </li>
      ))
      : null;
  };

  if (isLoading) {
    return (
      <>
        {Array(loadingCount)
          .fill(0)
          .map((loadingItem, loadingItemIndex) => {
            return (
              <div
                key={loadingItemIndex}
                className={isDark ? "loading-card-dark" : "loading-card"}
              >
                <div className="shimmerBG media"></div>
                <div className="p-32">
                  <div className="shimmerBG title-line"></div>
                  <div className="shimmerBG title-line end"></div>
                  <div className="shimmerBG content-line m-t-24"></div>
                  <div className="shimmerBG content-line"></div>
                  <div className="shimmerBG content-line"></div>
                  <div className="shimmerBG content-line"></div>
                  <div className="shimmerBG content-line end"></div>
                </div>
              </div>
            );
          })}
      </>
    );
  }

  return (
    <div style={{ height: !expand ? "max-content": "100%" }} onClick={() => setExpandIndex(index === expandIndex ? null : index)} className={isDark ? "experience-card-dark" : "experience-card"}>
      <div style={{ background: rgb(colorArrays) }} className="experience-banner">
        <div className="experience-blurred_div"></div>
        <div className="experience-div-company">
          <h5 className="experience-text-company">{cardInfo.company}</h5>
        </div>
        <img
          crossOrigin={"anonymous"}
          ref={imgRef}
          className="experience-roundedimg"
          src={cardInfo.companylogo}
          alt={cardInfo.company}
          onLoad={() => getColorArrays()}
        />
      </div>
      <div className="experience-text-details">
        <h5
          className={
            isDark
              ? "experience-text-role dark-mode-text"
              : "experience-text-role"
          }
        >
          {cardInfo.role}
        </h5>
        <h5
          className={
            isDark
              ? "experience-text-date dark-mode-text"
              : "experience-text-date"
          }
        >
          {cardInfo.date}
        </h5>
        {expand && <><p
          className={
            isDark
              ? "subTitle experience-text-desc dark-mode-text"
              : "subTitle experience-text-desc"
          }
        >
          {cardInfo.desc}
        </p>
          <ul>
            <GetDescBullets descBullets={cardInfo.descBullets} isDark={isDark} />
          </ul>
        </>}
      </div>
    </div>
  );
}
