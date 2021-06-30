import React from "react";
import s from "../styles/FacebookPost.module.css";

const FacebookPost = ({ message, created, imgUrl = null }) => {
  const months = [
    "empty",
    "Januar",
    "Februar",
    "März",
    "April",
    "Mai",
    "Juni",
    "July",
    "August",
    "September",
    "Oktober",
    "November",
    "Dezember",
  ];

  // Extract title from body text
  const msgArray = message.split("\n");
  const title = msgArray.shift();

  // Format time_created
  const created_time = Date.parse(created);
  const date = new Date(created_time * 1000);
  const formatted_date = `${date.getDay()}. ${months[date.getMonth()]}`;

  return (
    <div className={s.container}>
      <h2>{title}</h2>
      <p>{formatted_date}</p>
      <p>{msgArray}</p>
      <img src={imgUrl} />
    </div>
  );
};

export default FacebookPost;
