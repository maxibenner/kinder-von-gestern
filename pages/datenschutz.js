import React from "react";
import Head from "next/head";
import s from "../styles/Formell.module.css";

const Datenschutz = () => {
  return (
    <div>
      <Head>
        <title>Datenschutz</title>
        <meta
          name="description"
          content="Hier finden Sie Informationen zu unserem Datenschutz."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={s.main}>
        <div className={s.section}>
          <h1>Datenschutz</h1>
          <p>
            Die Nutzung unserer Webseite ist in der Regel ohne Angabe
            personenbezogener Daten möglich. Soweit auf unseren Seiten
            personenbezogene Daten (beispielsweise Name, Anschrift oder
            eMail-Adressen) erhoben werden, erfolgt dies, soweit möglich, stets
            auf freiwilliger Basis. Diese Daten werden ohne Ihre ausdrückliche
            Zustimmung nicht an Dritte weitergegeben.
          </p>
          <p>
            Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B.
            bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.
            Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
            nicht möglich.
          </p>
          <p>
            Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten
            Kontaktdaten durch Dritte zur Übersendung von nicht ausdrücklich
            angeforderter Werbung und Informationsmaterialien wird hiermit
            ausdrücklich widersprochen. Die Betreiber der Seiten behalten sich
            ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung
            von Werbeinformationen, etwa durch Spam-Mails, vor.
          </p>
          <h3>Datenschutzerklärung für die Nutzung von Google Analytics</h3>
          <p>
            Diese Website benutzt Google Analytics, einen Webanalysedienst der
            Google Inc. („Google“). Google Analytics verwendet sog. „Cookies“,
            Textdateien, die auf Ihrem Computer gespeichert werden und die eine
            Analyse der Benutzung der Website durch Sie ermöglichen. Die durch
            den Cookie erzeugten Informationen über Ihre Benutzung dieser
            Website werden in der Regel an einen Server von Google in den USA
            übertragen und dort gespeichert. Im Falle der Aktivierung der
            IP-Anonymisierung auf dieser Webseite wird Ihre IP-Adresse von
            Google jedoch innerhalb von Mitgliedstaaten der Europäischen Union
            oder in anderen Vertragsstaaten des Abkommens über den Europäischen
            Wirtschaftsraum zuvor gekürzt.
          </p>
          <p>
            Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von
            Google in den USA übertragen und dort gekürzt. Im Auftrag des
            Betreibers dieser Website wird Google diese Informationen benutzen,
            um Ihre Nutzung der Website auszuwerten, um Reports über die
            Websiteaktivitäten zusammenzustellen und um weitere mit der
            Websitenutzung und der Internetnutzung verbundene Dienstleistungen
            gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von
            Google Analytics von Ihrem Browser übermittelte IP-Adresse wird
            nicht mit anderen Daten von Google zusammengeführt.
          </p>
          <p>
            Sie können die Speicherung der Cookies durch eine entsprechende
            Einstellung Ihrer Browser-Software verhindern; wir weisen Sie jedoch
            darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche
            Funktionen dieser Website vollumfänglich werden nutzen können. Sie
            können darüber hinaus die Erfassung der durch das Cookie erzeugten
            und auf Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer
            IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch
            Google verhindern, indem sie das unter{" "}
            <a href="http://tools.google.com/dlpage/gaoptout?hl=de">diesem</a>{" "}
            Link verfügbare Browser-Plugin herunterladen und installieren.
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

export default Datenschutz;
