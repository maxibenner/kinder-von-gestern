import { FacebookEvent } from "./FacebookEvent";
import { SpinnerBlock } from "./SpinnerBlock";
import { useState, useEffect } from "react";
import s from "../styles/EventContainer.module.css";

export const EventContainer = ({ events }) => {
  const [eventTracker, setEventTracker] = useState({});
  const currentTimestamp = Date.now() + 1800; // Adds 30 minutes to current time as a buffer

  useEffect(() => {
    // Sort into boxes
    const past = [];
    const future = [];

    if (events.length > 0) {
      // Assign events
      events.forEach((event) => {
        // Get current timestamp
        const eventTimestamp = new Date(event.data.start.iso).getTime();
        const isPast = eventTimestamp - currentTimestamp <= 0 ? true : false;

        // Push to past or future events
        if (isPast) {
          past.push(event);
        } else {
          future.push(event);
        }
      });
    }

    // Push to event tracker
    setEventTracker({ past: past, future: future });
  }, [events]);

  return (
    <div>
      {events.length > 0 ? (
        <div style={{ marginTop: "50px" }}>
          <h2>Bevorstehend</h2>
          {eventTracker.future.length > 0 ? (
            eventTracker.future.map((event) => (
              <FacebookEvent key={event.id} event={event.data} />
            ))
          ) : (
            <div className={s.placeholder}>
              Keine bevorstehenden Veranstaltungen
            </div>
          )}
          <h2>Vergangen</h2>
          {eventTracker.past.length > 0 ? (
            eventTracker.past.map((event) => (
              <FacebookEvent
                key={event.id}
                event={event.data}
                style={{ opacity: ".5", pointerEvents: "none" }}
              />
            ))
          ) : (
            <div className={s.placeholder}>
              Keine vergangenen Veranstaltungen
            </div>
          )}
        </div>
      ) : (
        <SpinnerBlock />
      )}
    </div>
  );
};
