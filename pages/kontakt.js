import React from "react";
import Head from "next/head";
import s from "../styles/Formell.module.css";

const Kontakt = () => {
  return (
    <div>
      <Head>
        <title>Kontakt</title>
        <meta
          name="description"
          content="Hier finden Sie unsere Kontaktinformationen"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={s.main}>
        <div className={s.section} style={{width: "max-content"}}>
          <h1>Kontakt</h1>
          <p>
            Kinder von gestern e.V. <br />
            Schleißheimer Straße 53 <br />
            80797 München
          </p>
          <p>
            <b>Email:</b> <a href="mailto: info@kvg-ev.de">info@kvg-ev.de</a>
          </p>
          <p><b>Telefon:</b> 089/36 00 82 82</p>
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

export default Kontakt;
