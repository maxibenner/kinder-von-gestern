import React, { useState } from "react";
import s from "../styles/FacebookEvent.module.css";
import { FaClock, FaMap } from "react-icons/fa";

export const FacebookEvent = ({ event }) => {
  const [readMore, setReadMore] = useState(false);
  console.log(event);

  // Format start and end time
  let dateTime = null;
  if (event.end.time) {
    dateTime = `${event.start.day}. ${event.start.month}, ${event.start.time} - ${event.end.time} Uhr`;
  } else {
    dateTime = `${event.start.day}. ${event.start.month}, ${event.start.time} Uhr`;
  }

  // Format location
  const city =
    event.location.city === "Munich" ? "München" : event.location.city;
  const address = `${event.location.street}, ${city}`;
  const mapsLink = `http://maps.google.com/?q=${event.location.street}, ${event.location.zip} ${city}`;

  return (
    <div className={s.container}>
      <img className={s.image} src={event.imgSrc} />
      <div className={s.bodyContainer}>
        <h2 className={s.title}>{event.title}</h2>
        <div className={s.infoContainer}>
          <p className={s.date}>
            <FaClock style={{ marginRight: "8px" }} />
            {dateTime}
          </p>
          {event.location.street && (
            <a className={s.addressLink} href={mapsLink} target="_empty">
              <FaMap style={{ marginRight: "8px" }} />
              {address}
            </a>
          )}
        </div>

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
