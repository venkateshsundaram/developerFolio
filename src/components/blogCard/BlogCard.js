import React from "react";
import "./BlogCard.scss";

export default function BlogCard({blog, isDark}) {
  function openUrlInNewTab(url, name) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div 
      className={isDark ? "blog-container dark-mode" : "blog-container"}
      onClick={() => openUrlInNewTab(blog.url, blog.title)}
    >
      <div className={isDark ? "dark-mode blog-card" : "blog-card"}>
        <div className="blog-header-wrapper">
          <h3 className="blog-title">
            {blog.title}
          </h3>
          <svg className="external-link-icon" xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </div>
        <p className="blog-description">
          {blog.description}
        </p>
        <div className="go-corner">
          <div className="go-arrow">→</div>
        </div>
      </div>
    </div>
  );
}
