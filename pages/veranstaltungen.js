import { useEffect, useState } from "react";
import utils from "../styles/Utils.module.css";
import pages from "../styles/Pages.module.css";
import Head from "next/head";
import { FacebookEvent } from "../components/FacebookEvent";
import { FaSpinner } from "react-icons/fa";

const Veranstaltungen = () => {
  const [events, setEvents] = useState([]);

  // Get and format event object array
  useEffect(() => {
    // Build and format event data
    fetch(`${window.location.origin}/api/page_events`).then(async (res) => {
      const parsedResponse = await res.json();

      // Set state
      setEvents(parsedResponse);
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Veranstaltungen</title>
        <meta
          name="description"
          content="Hier finden Sie bevorstehende Veranstaltungen."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={pages.main}>
        <div className={pages.section}>
          <h1>Veranstaltungen</h1>
          {events.length > 0 ? (
            events.map((event) => (
              <FacebookEvent key={event.id} event={event.data} />
            ))
          ) : (
            <div className={utils.spinnerContainer}>
              <FaSpinner className={utils.spinner} />
            </div>
          )}
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        style={{ display: "block", margin: "0 0 -2px -2px" }}
      >
        <path
          fill="#394D98"
          fillOpacity="1"
          d="M0,160L60,170.7C120,181,240,203,360,197.3C480,192,600,160,720,170.7C840,181,960,235,1080,234.7C1200,235,1320,181,1380,154.7L1440,128L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Veranstaltungen;
