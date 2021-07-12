import React from "react";
import s from "../styles/Card.module.css";

const Card = ({
  title = "Pass 'title' prop",
  body = "Pass 'body' prop",
  image = "Pass 'image' prop",
  buttonText = "Pass 'buttonText' prop",
  buttonText2,
  buttonIcon,
  buttonIcon2,
  onClick = () => window.alert("Add 'onClick' prop"),
  onClick2,
  accent,
}) => {
  return (
    <div
      className={s.container}
      style={{ background: accent && "var(--accent)" }}
    >
      <div className={s.imageContainer}>{image}</div>
      <h2>{title}</h2>
      <p>{body}</p>
      <button onClick={onClick} style={{ color: accent && "var(--accent)" }}>
        <div className={s.buttonIcon}>{buttonIcon}</div>
        <div className={s.buttonText}>{buttonText}</div>
      </button>
      {buttonText2 && (
        <button onClick={onClick2} style={{ color: accent && "var(--accent)" }}>
          <div className={s.buttonIcon}>{buttonIcon2}</div>
          <div className={s.buttonText}>{buttonText2}</div>
        </button>
      )}
    </div>
  );
};

export default Card;
