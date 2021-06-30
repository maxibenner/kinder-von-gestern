import React from "react";
import s from "../styles/Angebot.module.css";
import pages from "../styles/Pages.module.css";
import Head from "next/head";

const Angebot = () => {
  return (
    <div>
      <Head>
        <title>Unser Angebot</title>
        <meta
          name="description"
          content="Hier finden Sie einen kompakten Überblich unserer Angebote."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={pages.main}>
        <div className={pages.section}>
          <h1>Unser Angebot für Senioren</h1>
          <h3>
            Unser Anliegen ist es, Ihnen Aktivitäten zu bieten, die Raum für
            neue Kontakte und Interaktion bieten. Getreu unserem Motto von
            „gemeinschaftlicher Freude und Sonnenschein“ versuchen wir alles
            anzubieten, was ein von Lebensfreude erfülltes Herz begehrt. Unser
            wöchentliches Zusatzangebot haben wir ebenfalls unter dieses Motto
            gestellt. Wir wünschen Ihnen gute Unterhaltung.
          </h3>
          <h2>Unterhaltungsangebot</h2>
          <p>
            Unsere Unterhaltungsmöglichkeiten sind unbegrenzt!
            Gesellschaftsspiele aller Art, Malkurse, Lesungen, gemeinsames
            Fernsehen und Musik hören, alles ist dabei. Aber nicht nur das, auch
            Gesangsabende, Vorträge zu aktuellen Themen und Diskussionsrunden
            gehören zu unserem umfangreichen Angebot. Darüber hinaus wollen wir
            auch unserer künstlerischen Ader im Rahmen von Bastelabenden oder
            gemeinsamen Näh- und Strickprojekten freien Lauf lassen. Ein
            wichtiges Anliegen ist uns auch der intergenerative Austausch,
            welcher im Laufe der Zeit immer mehr verstärkt werden soll.
            Vielleicht haben Sie ja Interesse daran, ein „Paten-Opa“ oder eine
            „Paten-Oma“ zu werden. Eins ist jedenfalls sicher: Langweilig wird
            es Ihnen bei uns bestimmt nicht!
          </p>
          <h2>Fitness für aktive Senioren</h2>
          <p>
            Gesunde und ausgewogene Ernährung ist gerade im Alter ein wichtiges
            und nicht zu vernachlässigendes Thema. Ebenso von essentieller
            Bedeutung ist aber Bewegung, seien es Spaziergänge an der frischen
            Luft oder auch Yoga. Tanzabende und sanftes Körpertraining sind
            ebenso ein Teil unseres Fitnessprogramms, das dazu beitragen soll,
            die Mobilität im Alter zu bewahren und eventuell auch ein Stück weit
            zurück zu gewinnen.
          </p>
          <h2>Informationsangebot</h2>
          <p>
            Sollten Sie Hilfe oder Beratung bei Belangen wie
            Heizkostenzuschüssen, Behördengängen oder Ähnlichem brauchen, stehen
            wir Ihnen gerne mit Rat und Tat zur Seite. Ebenso wie bei Umzügen
            oder täglichen Problemen. Unsere ehrenamtlichen Helfer unterstützen
            Sie auch gerne beim Erlernen von Computerkenntnissen oder im Umgang
            mit dem Internet. Kommen Sie einfach auf uns zu.
          </p>
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

export default Angebot;
