import React from "react";
import "./Header.css";

export default function Header({ theme }) {
  return (
    <section className={`header ${theme}`}>
      <div className="video-container">
        <video
          key={theme}
          className="header-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src={
              theme === "dark"
                ? "./assets/hero_dark_video.mp4"
                : "./assets/hero_light_video.mp4"
            }
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
}