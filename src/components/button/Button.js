import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab, onClick}) {
  return (
    <div onClick={onClick} className={className}>
      <a className="main-button" href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
}
