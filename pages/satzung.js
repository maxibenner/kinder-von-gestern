import Head from "next/head";
import s from "../styles/Formell.module.css";

const Satzung = () => {
  return (
    <div>
      <Head>
        <title>Satzung</title>
        <meta
          name="description"
          content="Hier finden Sie unsere Vereinssatzung."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={s.main}>
        <div className={s.section}>
          <h1>Satzung</h1>
          <h3>§ 1 Name, Sitz und Geschäftsjahr</h3>
          <ol>
            <li>Der Verein führt den Namen Kinder von gestern e.V.</li>
            <li>
              Der Kinder von gestern e.V. hat seinen Sitz in München und
              verfolgt ausschließlich und unmittelbar gemeinnützige Zwecke im
              Sinne des Abschnitts „Steuerbegünstigte Zwecke“ der
              Abgabenordnung.
            </li>
            <li>Das Geschäftsjahr des Vereins ist das Kalenderjahr.</li>
          </ol>
          <h3>§ 2 Zweck und Gemeinnützigkeit des Vereins</h3>
          <ol>
            <li>
              Zweck des Vereins ist
              <ol>
                <li>
                  Beschaffung von Finanzmitteln für die Errichtung von
                  Einrichtungen zur Hilfe für Menschen in existenziellen,
                  finanziellen Schwierigkeiten.
                </li>
                <li>
                  Die direkte Hilfeleistung für Menschen mit Behinderungen,
                  Erkrankungen, sozialen Schwierigkeiten und
                  Pflegebedürftigkeit.
                </li>
              </ol>
            </li>
            <li>
              Satzungszweck wird verwirklicht insbesondere durch
              <ol>
                <li>
                  Spendensammlungen, sowie das Erwirtschaften von Finanzmitteln
                  durch die Organisation und Durchführung von Verkaufs- und
                  Informations-veranstaltungen mit gemeinnützigem Hintergrund.
                </li>
                <li>
                  Organisation und Durchführung von Hilfsprojekten für
                  Bedürftige aus den unter § 2 Abs. 1 aufgeführten Bereichen.
                </li>
              </ol>
            </li>
            <li>
              Der Verein ist selbstlos tätig und verfolgt nicht in erster Linie
              eigenwirtschaftliche Zwecke.
            </li>
            <li>
              Mittel des Vereins dürfen nur für die satzungsmäßigen Zwecke
              verwendet werden. Die Mitglieder erhalten keine Zuwendungen aus
              Mitteln des Vereins.
            </li>
            <li>
              Es darf keine Person durch Ausgaben, die dem Zwecke der
              Körperschaft fremd sind, oder durch unverhältnismäßig hohe
              Vergütungen begünstigt werden.
            </li>
          </ol>
          <h3>§ 3 Mitgliedschaft</h3>
          <p>Mitglied des Vereins kann werden:</p>
          <ol>
            <li>
              Natürliche und juristische Personen, die mit Ziel und Zweck des
              Vereins eng verbunden sind.
            </li>
            <li>
              Der Verein besteht aus aktiven Mitgliedern, Fördermitgliedern und
              Ehrenmitgliedern
            </li>
            <li>
              Mitglied kann jede natürliche Person werden, die im Verein oder
              einem von ihm geförderten Projekt aktiv mitarbeiten möchte.
              Fördermitglied kann jede natürliche oder juristische Person
              werden, die sich zwar nicht aktiv betätigen, jedoch die Ziele und
              den Zweck des Vereins fördern und unterstützten möchte.
            </li>
            <li>
              Zum Ehrenmitglied können natürliche Personen ernannt werden, die
              sich in besonderer Weise um den Verein verdient gemacht haben.
              Hierfür ist ein Beschluss der Mitgliederversammlung erforderlich.
            </li>
            <li>
              Aufnahmeanträge sind schriftlich an den Vorstand des Vereins zu
              richten.
            </li>
          </ol>
          <h3>§ 4 Beendigung der Mitgliedschaft</h3>
          <ol>
            <li>
              Die Mitgliedschaft erlischt
              <ol>
                <li>durch Tod,</li>
                <li>durch Austrittserklärung,</li>
                <li>durch Ausschluss.</li>
              </ol>
            </li>
            <li>
              Der Austritt kann durch schriftliche Erklärung gegenüber dem
              Vorstand erfolgen, jedoch nur zum Ende des Geschäftsjahres. Die
              schriftliche Erklärung muss dem Vorstand spätestens drei Monate
              vor Beendigung des Geschäftsjahres zugehen.
            </li>
            <li>
              Der Ausschluss erfolgt
              <ol>
                <li>
                  falls das Mitglied seinen Jahresbeitrag drei Monate nach
                  Fälligkeit trotz schriftlicher Mahnung nicht entrichtet hat,
                </li>
                <li>
                  falls das Mitglied durch sein Verhalten die Belange oder das
                  Ansehen des Vereins schädigt.
                </li>
                <li>
                  Über den Ausschluss entscheidet der Vorstand. Das Mitglied
                  wird unter Angabe der Gründe davon schriftlich unterrichtet.
                  Gegen diesen Beschluss kann innerhalb eines Monats nach
                  Zustellung die Entscheidung in der nächsten
                  Mitgliederversammlung beantragt werden.
                </li>
              </ol>
            </li>
          </ol>
          <h3>§ 5 Beiträge und Spenden</h3>
          <ol>
            <li>Ein jährlicher Mitgliedsbeitrag ist zu leisten.</li>
            <li>
              Die Höhe des Mitgliedsbeitrags beträgt 5000,00 Euro pro Jahr. Die
              Gründungsmitglieder sind, solange keine andere Regelung getroffen
              wird, von den Mitgliedbeiträgen befreit.
            </li>
            <li>
              Die Mittel zur Erreichung des Vereinszwecks sollen ferner durch
              Geld- und Sachspenden, Beiträge der Mitglieder, öffentliche
              Mittel, sowie durch Inanspruchnahme öffentlicher oder privater
              Stiftungen aufgebracht werden.
            </li>
          </ol>
          <h3>§ 6 Organe</h3>
          <p>Organe des Vereins sind:</p>
          <ol>
            <li>Die Mitgliederversammlung</li>
            <li>Der Vorstand</li>
          </ol>
          <h3>§ 7 Mitgliederversammlung</h3>
          <ol>
            <li>
              Innerhalb von drei Monaten nach Ablauf eines Geschäftsjahres ist
              die ordentliche Mitgliederversammlung durch den Vorstand
              einzuberufen. Die Einladung hat schriftlich unter Angabe der
              Tagesordnung und Einhaltung einer Frist von vier Wochen zwischen
              Absendetermin und Versammlungstermin zu erfolgen.
            </li>
            <li>
              Außerordentliche Mitgliederversammlungen sind auf Antrag des
              Vorstandes oder auf schriftliches Verlangen von mindestens einem
              Viertel der Mitglieder durch den Vorstand einzuberufen. Dazu sind
              die unter § 7 Abs. 1 genannten Formvorschriften entsprechend
              anzuwenden.
            </li>
            <li>
              Der Beschlussfassung durch die ordentliche Mitgliederversammlung
              unterliegen insbesondere:
              <ol>
                <li>
                  Genehmigung des Berichts über das abgelaufene Geschäftsjahr
                </li>
                <li>
                  Genehmigung der Jahresabrechnung und des Haushaltsplanes
                </li>
                <li>Entlastung des Vorstandes</li>
                <li>Wahlen zum Vorstand</li>
                <li>Zwei Rechnungsprüfern</li>
                <li>Satzungsänderungen und Auflösung des Vereins</li>
              </ol>
            </li>
            <li>
              Im Übrigen beschließt die Mitgliederversammlung über die vom
              Vorstand bei Einberufung angekündigten Tagesordnungspunkte.
              Anträge zur Tagesordnung müssen bis 14 Tage vor der
              Mitgliederversammlung schriftlich an den Vorstand gestellt werden.
              In der Mitgliederversammlung können Anträge zur Tagesordnung nur
              noch in Dringlichkeitsfällen und mit Zustimmung von 3/4 der
              vertretenen Mitglieder zugelassen werden. Die
              Mitgliederversammlung wird vom Vorsitzenden oder vom Schriftführer
              geleitet. Über die Beschlüsse der Mitgliederversammlung ist ein
              Protokoll anzufertigen, das vom Schriftführer zu unterzeichnen
              ist.
            </li>
            <li>
              Die Mitgliederversammlung beschließt – insoweit nicht gesetzlich
              eine andere Mehrheit zwingend vorgeschrieben ist – mit Mehrheit
              der abgegebenen Stimmen. Die Mitgliederversammlung ist
              beschlussfähig, wenn mindestens 1/3 aller Vereinsmitglieder
              anwesend oder repräsentiert sind. Bei Beschlussunfähigkeit ist
              eine neue Mitgliederversammlung einzuberufen, die dann in jedem
              Fall beschlussfähig ist. In der Einladung ist darauf besonders
              hinzuweisen.
            </li>
            <li>
              Jedes Mitglied des Vereins hat eine Stimme. Es kann sich in der
              Ausübung des Stimmrechts durch ein durch eine schriftliche
              Vollmacht ausgewiesenes Mitglied vertreten lassen. Bei
              Stimmengleichheit gibt die Stimme des Vorsitzenden den Ausschlag.
            </li>
          </ol>
          <h3>§ 8 Vorstand</h3>
          <ol>
            <li>
              Der Vorstand besteht aus
              <ol>
                <li>zwei Vorsitzenden</li>
                <li>dem Schriftführer</li>
              </ol>
            </li>
            <p>
              Der Verein wird gerichtlich und außergerichtlich durch jeweils
              zwei Vorsitzende gemeinsam vertreten. Im Innenverhältnis vertreten
              die Vorsitzenden den Verein ebenfalls jeweils zu zweit.
            </p>
            <li>
              Die Vorsitzenden werden von der Mitgliederversammlung für eine
              Amtszeit von fünf Jahren gewählt. Wiederwahl ist zulässig.
            </li>
            <li>
              Außer den dem Vorstand in dieser Satzung oder von der
              Mitgliederversammlung übertragenen Aufgaben führt der Vorstand die
              laufenden Geschäfte des Vereins. Er kann besondere Zuständigkeiten
              auf einzelne Mitglieder des Vereins übertragen.
            </li>
            <li>
              Der Vorstand kann bei Bedarf und unter Berücksichtigung der
              wirtschaftlichen Verhältnisse und der Haushaltslage beschließen,
              dass Vereins- und Organ-Ämter entgeltlich auf der Grundlage eines
              Dienstvertrags oder gegen Zahlung einer pauschalierten
              Aufwandsentschädigung ausgeübt werden. Die Entscheidung über
              Vertragsbeginn, Vertragsinhalte und Vertragsende trifft der
              Vorstand.
            </li>
            <li>
              Der Vorstand ist ermächtigt, Tätigkeiten für den Verein gegen
              Zahlung einer angemessenen Vergütung oder Aufwandsentschädigung zu
              beauftragen. Maßgebend ist die Haushaltslage des Vereins.
            </li>
            <li>
              Zur Erledigung der Geschäftsführungsaufgaben und zur Führung der
              Geschäftsstelle ist der Vorstand ermächtigt, im Rahmen der
              haushaltsrechtlichen Tätigkeiten, hauptamtlich Beschäftigte für
              die Verwaltung anzustellen.
            </li>
            <li>
              Im Übrigen haben die Mitglieder und Mitarbeiter des Vereins einen
              Aufwendungsersatzanspruch nach § 670 BGB für solche Aufwendungen,
              die ihnen durch die Tätigkeit für den Verein entstanden sind.
              Hierzu gehören insbesondere Fahrtkosten, Reisekosten, Porto-,
              Telefon- sowie Kopier- und Druckkosten. Die Mitglieder und
              Mitarbeiter haben das Gebot der Sparsamkeit zu beachten. Der
              Vorstand kann durch Beschluss im Rahmen der steuerrechtlichen
              Möglichkeiten Aufwandspauschalen festsetzen.
            </li>
          </ol>
          <h3>§ 9 Rechnungsprüfung</h3>
          <p>
            Die Rechnungsprüfer des Vereins haben nach Ablauf eines
            Geschäftsjahres die vom Vorstand vorzulegende Jahresabrechnung und
            Vermögensverwaltung rechnerisch und buchmäßig zu prüfen und der
            nächsten Mitgliederversammlung Bericht zu erstatten. Ihre Amtszeit
            beträgt ein Jahr; Wiederwahl ist möglich.
          </p>
          <h3>§ 10 Auflösung des Vereins</h3>
          <ol>
            <li>
              Eine Auflösung des Vereins kann nur mit einer 3/4-Mehrheit der
              Mitglieder-versammlung beschlossen werden, sofern mindestens 2/3
              der Mitglieder vertreten sind. Sind weniger Mitglieder vertreten,
              ist innerhalb von 6 Wochen eine neue Mitgliederversammlung
              einzuberufen, die dann mit einer 3/4-Mehrheit aller vertretenen
              Mitglieder über die Auflösung des Vereins beschließen kann.
            </li>
            <li>
              Bei Auflösung des Vereins hat die Mitgliederversammlung einen
              Liquidator zu bestellen.
            </li>
            <li>
              Bei Auflösung des Vereins, dem Entzug der Rechtsfähigkeit des
              Vereins oder bei Wegfall steuerbegünstigter Zwecke fällt das
              Vermögen des Vereins an eine juristische Person des öffentlichen
              Rechts oder eine andere steuerbegünstigte Körperschaft zwecks
              Verwendung im Bereich der Kranken-, Kinder- und Alten- und
              Katastrophenhilfe. Die Auswahl der Körperschaft wird dem Vorstand
              überlassen.
            </li>
            <li>
              Ein Anspruch auf Rückgewährung geleisteter Beiträge, Zuwendungen,
              Spenden oder sonstiger Einlagen besteht weder bei Auflösung noch
              in einem sonstigen Fall.
            </li>
          </ol>
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

export default Satzung;
