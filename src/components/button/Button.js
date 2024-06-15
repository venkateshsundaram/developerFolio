import React from "react";
import "./Button.scss";

export default function Button({text, type, className, href, newTab, onClick}) {
  return (
    <div onClick={onClick} className={className}>
      <a
        className={`main-button ${type === "default" ? "default-button" : ""}`}
        href={href}
        target={newTab && "_blank"}
      >
        {text}
      </a>
    </div>
  );
}
