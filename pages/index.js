import Head from "next/head";
import Link from "next/link";
import { BiDice3 } from "react-icons/bi";
import { FaRunning } from "react-icons/fa";
import {
  FiCalendar,
  FiGift,
  FiHeart,
  FiInfo,
  FiClock,
  FiMap,
  FiPhone,
} from "react-icons/fi";
import { FaPaypal } from "react-icons/fa";
import { TiDocumentText } from "react-icons/ti";
import { MdFreeBreakfast } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import Button from "../components/Button";
import Card from "../components/Card";
import FeatureShowcase from "../components/FeatureShowcase";
import LinkArrow from "../components/LinkArrow";
import s from "../styles/Home.module.css";
import { useRef } from "react";

export default function Home() {
  const paypalRef = useRef();
  const formRef = useRef();
  const handlePaypalDonation = () => {
    paypalRef.current.click();
  };
  const handleFormDownload = () => {
    formRef.current.click();
  };
  return (
    <div>
      <Head>
        <title>Kinder von gestern</title>
        <meta name="description" content="Jugendzentrum für Senioren" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={s.main}>
        <div className={s.hero}>
          <div className={s.container_title}>
            <img src="/logo_text.png" />
            <h1>Jugendzentrum für Senioren</h1>
            <div className={s.openingTime}>
              <div>
                <FiClock />
                <p>
                  Geöffnet von <strong>Montag bis Freitag</strong>, 14:00 bis
                  19:00 Uhr.
                </p>
              </div>
              <div>
                <FiMap />
                <a
                  href="http://maps.google.com/?q=Schleißheimer Straße 53, 80797 München"
                  target="_empty"
                >
                  Schleißheimer Straße 53, München
                </a>
              </div>
              <div>
                <FiPhone />
                <a
                  href="tel:089-36008282
"
                >
                  089 36008282
                </a>
              </div>
            </div>
            <Link href="/veranstaltungen">
              <div>
                <Button text="Veranstaltungen" src={<FiCalendar />} large />
              </div>
            </Link>
          </div>
          <div className={s.container_images}>
            <img src="/images/1.jpg" />
            <img src="/images/2.jpg" />
          </div>
        </div>
        <div
          className={s.section}
          style={{ minHeight: "500px", marginTop: "-10%" }}
        >
          <h1>Wer wir sind</h1>
          <p>
            Wir sind ein gemeinnütziger Verein der seinen Gästen einen Ort
            bietet, an dem mit jugendlichem Esprit unter Gleichgesinnten
            gemeinsam Zeit verbracht werden kann.
          </p>
          <LinkArrow href="about" />
        </div>
        <div className={s.section}>
          <h1>Unser Angebot</h1>
          <FeatureShowcase
            style={{ marginTop: "100px" }}
            image={<BiDice3 />}
            title="Unterhaltung"
            body="Von Brettspielen bis hin zu musikalischen Vorführungen ist einiges geboten."
          />
          <FeatureShowcase
            image={<MdFreeBreakfast />}
            title="Verpflegung"
            body="Wir bieten kostenlos belegte Semmeln, Salate, Kaffee, Kuchen und andere Kleinigkeiten an, damit der Geldbeutel unserer Senioren geschont wird."
          />
          <FeatureShowcase
            image={<FiInfo />}
            title="Informationsangebot"
            body="Ob bei Beratung zu Heizkostenzuschüssen oder Hilfe bei Behördengängen, wir stehen Ihnen gerne mit Rat und Tat zur Seite."
          />
          <FeatureShowcase
            image={<FaRunning />}
            title="Fitness"
            body="Spaziergänge an der frischen Luft, Yoga, Tanzabende und sanftes Körpertraining sind Teil unseres Fitnessprogramms."
          />
        </div>
        <div className={s.section} id="helfen">
          <h1>Mithelfen</h1>
          <p>Wir können jede Art von Hilfe gebrauchen.</p>
          <div className={s.cardContainer}>
            <Card
              image={<FiHeart />}
              title="Zeit spenden"
              body="Kochen sie gerne? Ist Unterhaltung Ihre Stärke? Dann engagieren sie sich vor Ort!"
              buttonText="Engagieren"
              buttonIcon={<HiOutlineMail />}
              onClick={() =>
                (window.location.href =
                  "mailto:info@kvg-ev.de?subject=Engagement%20Angebot&body=1. Wie lautet Ihr Vor- und Nachname?%0d%0d%0d%0d2. Wie würden Sie sich gerne engagieren?%0d%0d%0d%0d3. Was ist Ihre zeitliche Verfügbarkeit?%0d%0d%0d%0d4. Wollen Sie uns noch etwas anderes mitteilen?")
              }
              accent
            />
            <Card
              image={<FiGift />}
              title="Geld spenden"
              body="Jede noch so kleine Spende ermöglicht es uns den Traum der Kinder von gestern weiterzuführen."
              buttonText="Online spenden"
              buttonIcon={<FaPaypal />}
              buttonText2="Spendenformular herunterladen"
              buttonIcon2={<TiDocumentText />}
              onClick={handlePaypalDonation}
              onClick2={handleFormDownload}
            />
          </div>
        </div>
        <form
          style={{ display: "none" }}
          action="https://www.paypal.com/donate"
          method="post"
          target="_top"
        >
          <input type="hidden" name="hosted_button_id" value="Q72AWA342TDWG" />
          <input
            ref={paypalRef}
            type="image"
            src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif"
            border="0"
            name="submit"
            title="PayPal - The safer, easier way to pay online!"
            alt="Donate with PayPal button"
          />
        </form>
        <a
          style={{ display: "none" }}
          ref={formRef}
          href="/Kinder-von-gestern_Foerdermitgliedsantrag.pdf"
          download="Kvg-Foerdermitgliedsantrag.pdf"
        >
          Download
        </a>
      </main>
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
}
