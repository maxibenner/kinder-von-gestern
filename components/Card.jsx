import React from "react";
import s from "../styles/Card.module.css";

const Card = ({
  title = "Pass 'title' prop",
  body = "Pass 'body' prop",
  image = "Pass 'image' prop",
  buttonText = "Pass 'buttonText' prop",
  onClick = () => window.alert("Add 'onClick' prop"),
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
      <button
        onClick={onClick}
        style={{ color: accent && "var(--accent)" }}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
