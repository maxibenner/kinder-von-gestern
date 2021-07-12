import React, { useState } from "react";
import Head from "next/head";
import pages from "../styles/Pages.module.css";
import s from "../styles/About.module.css";
import ReactPlayer from "react-player";
import Button from "../components/Button";
import { FiGift } from "react-icons/fi";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  const [playerLoaded, setPlayerLoaded] = useState(false);
  return (
    <div>
      <Head>
        <title>Wer wir sind</title>
        <meta name="description" content="Jugendzentrum für Senioren" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={pages.main}>
        <div className={pages.section}>
          <h1>Wer wir sind</h1>
          <h3>
            Wir sind ein gemeinnütziger Verein der Senioren einen Ort bietet, an
            dem sie mit Gleichgesinnten gemeinsam Zeit verbringen können. Mit
            ehrenamtlichen Unterstützern vor Ort, die bei Bedarf unter die Arme
            greifen.
          </h3>
          <div
            style={{
              width: "fit-content",
              margin: "50px auto",
            }}
          >
            <ReactPlayer
              style={{
                opacity: playerLoaded ? 1 : 0,
                transition: ".5s opacity",
              }}
              onReady={() => setPlayerLoaded(true)}
              className={s.react_player}
              url="https://vimeo.com/568025954"
            />
          </div>

          <p>
            Wir sind kein Pflege- und kein Altersheim, ganz im Gegenteil. Kinder
            von gestern e. V. ist ein gemeinnütziger Verein, der es zum Ziel
            hat, unseren Gästen das zu bieten, was es für Jugendliche längst
            gibt: ein Jugendzentrum. Ein Ort, wo mit jugendlichem Esprit unter
            Gleichgesinnten gemeinsam Zeit verbracht werden kann. Aber auch mit
            ehrenamtlicher Hilfe vor Ort, die unter die Arme greift, wenn nötig.
            Trotzdem wollen wir einen selbstbestimmten Aufenthalt in einer
            Begegnungsstätte bieten. Unsere Gäste sollen gemeinsam mit uns nicht
            nur aus der Einsamkeit finden, sondern auch die Unterstützung
            erhalten, die sie tatsächlich brauchen. Unser erstes Zentrum hat
            bereits die Pforten geöffnet und es sollen noch viele Weitere
            folgen.
          </p>
          <h2>Was uns antreibt</h2>
          <p>
            Viele Senioren werden im Alter einsam. Sei es, dass der Partner
            verstorben ist, die Kinder und Enkel weit weg wohnen oder ein
            langjähriger Nachbar weggezogen ist. Studien zeigen das Problem klar
            auf: bis zu 30 Prozent der Senioren geben an, unter ausgeprägten
            Einsamkeitsgefühlen zu leiden. Die oft eingeschränkte Mobilität
            fördert zudem ein abgeschottetes Leben. Des Weiteren ist Altersarmut
            ein reales Problem. 15,3 Prozent der über 65 Jährigen sind
            armutsgefährdet. Dagegen wollen wir vorgehen. Den Senioren unserer
            Zeit nun etwas zurückzugeben und unter die Arme zu greifen ist uns
            ein innerstes Bedürfnis, als Dank für all das, was sie einst für uns
            geleistet haben.
          </p>
          <h2>Was wir machen</h2>
          <p>
            Unser umfangreiches Angebot an gemeinsamen Aktivitäten, Erlebnissen
            und Ausflügen bereitet Senioren nicht nur Freude, sondern führt auch
            Gleichgesinnte zueinander und schafft so die Basis für eine
            nachhaltige Verbesserung der Lebensqualität. Bei uns sollen Senioren
            trotz physischen, emotionalen, oder finanziellen Engpässen an allen
            unseren Aktivitäten teilnehmen können. Wir bieten kostenlos belegte
            Semmeln, Salate, Kaffee, Kuchen und andere Kleinigkeiten an, damit
            der Geldbeutel unserer Senioren geschont wird. Die offenen Ohren
            unserer ehrenamtlichen Helfer schafft eine vertrauensbasierte
            Gesprächsebene, auf welche unsere Gäste zählen können.
          </p>
          <h2>Wer dahinter steht</h2>
          <div className={s.board_card}>
            <div>
              <h3>Ernst Benner</h3>
              <p className={s.board_subtitle}>2. Vorstand</p>
              <p className={s.board_body}>
                Inhaber einer der größten unabhängigen Marketingagenturen im
                deutschsprachigen Raum, Uni-Dozent, Aufsichtsrat, gefragter
                Visionär, Redner. Nach eigener Aussage „ein kleines Licht und
                ein Mensch wie jeder andere“. Liebt seine „la famiglia“ und lebt
                seinen Traum der „Kinder von gestern“.
              </p>
            </div>
            <Image
              src="/images/benner.jpg"
              width={200}
              height={200}
              layout="fixed"
            />
          </div>
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
      <div className={s.cta}>
        <div>
          <h1>Jetzt aktiv werden</h1>
          <p>
            Spenden sie Zeit oder Geld um Deutschlands erstes Jugendzentrum für
            Senioren zu unterstützen.
          </p>
          <Link href="/#helfen">
            <div>
              <Button large accent text="Spenden" src={<FiGift />} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
