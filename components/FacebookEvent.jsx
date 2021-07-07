import React, { useState } from "react";
import s from "../styles/FacebookEvent.module.css";

export const FacebookEvent = ({ event }) => {
  const [readMore, setReadMore] = useState(false);

  // Format start and end time
  let dateTime = null;
  if (event.end.time) {
    dateTime = `${event.start.day}. ${event.start.month}, ${event.start.time} - ${event.end.time} Uhr`;
  } else {
    dateTime = `${event.start.day}. ${event.start.month}, ${event.start.time} Uhr`;
  }

  return (
    <div className={s.container}>
      <img className={s.image} src={event.imgSrc} />
      <div className={s.bodyContainer}>
        <h2 className={s.title}>{event.title}</h2>
        <p className={s.date}>{dateTime}</p>
        <p className={readMore ? s.bodyExpanded : s.body}>{event.body}</p>
        <p
          className={s.showMore}
          onClick={() => {
            setReadMore((prev) => !prev);
          }}
        >
          {readMore ? "weniger zeigen \u2191" : "mehr zeigen \u2193"}
        </p>
      </div>
    </div>
  );
};
