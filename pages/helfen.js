import Head from "next/head";
import pages from "../styles/Pages.module.css";
import Card from "../components/Card";
import { FiHeart, FiGift } from "react-icons/fi";

const Helfen = () => {
  return (
    <div>
      <Head>
        <title>Helfen</title>
        <meta
          name="description"
          content="Helfen Sie uns die Kinder von gestern weiterzuführen."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={pages.main}>
        <div className={pages.section}>
          <h1>Helfen</h1>
          <h3>
            Unser Ziel alten und einsamen Menschen die Möglichkeit zu Begegnung
            und Lebensfreude zu ermöglichen, können wir nur mit IHRER Hilfe
            umsetzen. Das Fundament für Kinder von gestern e. V. ist ein
            Zwei-Säulen-Prinzip - Zeitspenden und Geldspenden. Helfen Sie mit,
            die Säulen solide und beständig zu machen und lassen Sie uns
            gemeinsam unser Ziel Wirklichkeit werden.
          </h3>
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

export default Helfen;
