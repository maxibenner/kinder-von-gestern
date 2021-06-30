import React from "react";
import s from "../styles/FeatureShowcase.module.css";

const FeatureShowcase = ({ title, body, image, style }) => {
  return (
    <div className={s.container} style={style}>
      <div className={s.imageContainer}>{image}</div>
      <div className={s.bodyContainer}>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
    </div>
  );
};

export default FeatureShowcase;
