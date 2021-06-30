import React from "react";
import s from "../styles/Button.module.css";

const Button = ({ src, text, onClick, accent, style, large }) => {
  return (
    <button style={style} className={`${s.container} ${accent && s.container_accent} ${large && s.container_large}`} onClick={onClick}>
      {src && src}
      {text && <p style={{ marginLeft: src ? "15px" : "0" }}>{text}</p>}
    </button>
  );
};

export default Button;
