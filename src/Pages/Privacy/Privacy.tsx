import * as React from 'react';
import Footer from '../../Components/Footer/Footer';
import Menu from '../../Components/Menu/Menu';
import { PropsWithRouter, withRouter } from '../../@functions/router';
import { getLanguage } from '../../@presets/language';
import { Browser } from '../../@types/browser';
import './Privacy.scss';

interface Props extends PropsWithRouter {
    browser: Browser;
}

class Privacy extends React.Component<Props> {
    render() {
        // DEFINE VARIABLES
        const language = this.props.browser.language;
        // RETURN COMPONENT
        return (
            <div id='privacy' className='page'>
                <Menu browser={this.props.browser} behaviour={'Static'} />
                <div id='privacyContent'>
                    <h1>{getLanguage(this.props.browser.language, 'privacy')}</h1>
                    {language === 'de' && (
                        <div id='privacyWrapper'>
                            <article data-name='Allgemein'>
                                <h2>Allgemein</h2>
                                <h4>Hinweise zum Datenschutz</h4>
                                <p>
                                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert,
                                    wenn Sie diese Webseite besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert
                                    werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text
                                    aufgeführten Datenschutzerklärung.
                                </p>
                                <h4>Wer ist verantwortlich für die Datenerfassung auf dieser Webseite?</h4>
                                <p>
                                    Die Datenverarbeitung auf dieser Webseite erfolgt durch den Webseitenbetreiber. Dessen Kontaktdaten können Sie dem
                                    Abschnitt ≫Hinweis zur Verantwortlichen Stelle≪ in dieser Datenschutzerklärung entnehmen.
                                </p>
                                <h4>Wie erfassen wir Ihre Daten?</h4>
                                <p>
                                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten
                                    handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch oder nach Ihrer Einwilligung
                                    beim Besuch der Webseite durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B.
                                    Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch,
                                    sobald Sie diese Webseite betreten.
                                </p>
                                <h4>Wofür nutzen wir Ihre Daten?</h4>
                                <p>
                                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Webseite zu gewährleisten. Andere Daten
                                    können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                                </p>
                                <h4>Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                                <p>
                                    Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten
                                    personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder Löschung dieser Daten zu
                                    verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit
                                    für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der
                                    Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der
                                    zuständigen Aufsichtsbehörde zu. Hierzu, sowie zu weiteren Fragen zum Thema Datenschutz, können Sie sich jederzeit
                                    an uns wenden.
                                </p>
                                <h4>Tools von Drittanbietern</h4>
                                <p>
                                    Beim Besuch dieser Webseite kann Ihr Surfverhalten statistisch ausgewertet werden. Das geschieht vor allem mit
                                    sogenannten Analyseprogrammen. Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden
                                    Datenschutzerklärung.
                                </p>
                            </article>
                            <article data-name='Hosting'>
                                <h2>Hosting</h2>
                                <p>
                                    Diese Webseite wird extern gehostet. Die personenbezogenen Daten, die auf dieser Webseite erfasst werden, werden
                                    auf den Servern der Hoster gespeichert. Hierbei kann es sich vor allem um IP-Adressen, Kontaktanfragen, Meta- und
                                    Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Webseitezugriffe und sonstige Daten, die über eine
                                    Webseite generiert werden, handeln. Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren
                                    potenziellen und bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und
                                    effizienten Bereitstellung unseres Onlineangebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f
                                    DSGVO). Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf
                                    Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit die Einwilligung die Speicherung von
                                    Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Fingerabdruck) im Sinne des TDDDG
                                    umfasst. Die Einwilligung ist jederzeit widerrufbar. Unsere Hoster werden Ihre Daten nur insoweit verarbeiten, wie
                                    dies zur Erfüllung seiner Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten
                                    befolgen. Wir setzen dabei folgende Hoster ein:
                                </p>
                                <p className='column'>
                                    <span>united-domains AG</span>
                                    <span>Gautinger Straße 10</span>
                                    <span>82319 Starnberg</span>
                                    <span>Deutschland</span>
                                </p>
                            </article>
                            <article data-name='Pflichtinformationen'>
                                <h2>Pflichtinformationen</h2>
                                <h4>Datenschutz</h4>
                                <p>
                                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
                                    personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften. Wenn Sie diese
                                    Webseite benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit
                                    denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir
                                    erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht. Wir weisen darauf
                                    hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen
                                    kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
                                </p>
                                <h4>Hinweis zur verantwortlichen Stelle</h4>
                                <p>Die verantwortliche Stelle für die Datenverarbeitung auf dieser Webseite ist:</p>
                                <p className='column'>
                                    <span>Ebenrieder Farmhaus GmbH</span>
                                    <span>Remnatsried 2</span>
                                    <span>87675 Stötten am Auerberg</span>
                                    <span>Deutschland</span>
                                </p>
                                <p className='column'>
                                    <span>+49 171 9014541</span>
                                    <span>hallo@ebenrieder.de</span>
                                </p>
                                <h4>Wie erfassen wir Ihre Daten?</h4>
                                <p>
                                    Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die
                                    Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen) entscheidet.
                                </p>
                                <h4>Speicherdauer</h4>
                                <p>
                                    Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben Ihre
                                    personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein berechtigtes
                                    Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht,
                                    sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z.
                                    B. steuer- oder handelsrechtliche Aufbewahrungsfristen). Im letztgenannten Fall erfolgt die Löschung nach Fortfall
                                    dieser Gründe.
                                </p>
                                <h4>Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Webseite</h4>
                                <p>
                                    Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf Grundlage
                                    von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien nach Art. 9 Abs.
                                    1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung personenbezogener Daten
                                    in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art. 49 Abs. 1 lit. a DSGVO. Sofern Sie
                                    in die Speicherung von Cookies oder in den Zugriff auf Informationen in Ihr Endgerät (z. B. via Fingerabdruck)
                                    eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich auf Grundlage von § 25 Abs. 1 TDDDG. Die Einwilligung
                                    ist jederzeit widerrufbar. Sind Ihre Daten zur Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen
                                    erforderlich, verarbeiten wir Ihre Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten
                                    wir Ihre Daten, sofern diese zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von
                                    Art. 6 Abs. 1 lit. c DSGVO. Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach
                                    Art. 6 Abs. 1 lit. f DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den
                                    folgenden Absätzen dieser Datenschutzerklärung informiert.
                                </p>
                                <h4>Empfänger von personenbezogenen Daten</h4>
                                <p>
                                    Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei ist teilweise
                                    auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich. Wir geben
                                    personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer Vertragserfüllung
                                    erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten an Steuerbehörden),
                                    wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe haben oder wenn eine
                                    sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von Auftragsverarbeitern geben wir
                                    personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen Vertrags über Auftragsverarbeitung weiter.
                                    Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über gemeinsame Verarbeitung geschlossen.
                                </p>
                                <h4>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h4>
                                <p>
                                    Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits
                                    erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten Datenverarbeitung
                                    bleibt vom Widerruf unberührt.
                                </p>
                                <h4>Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen Direktwerbung</h4>
                                <p>
                                    Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 Lit. E oder F DSGVO erfolgt, haben Sie jederzeit das
                                    Recht, aus Gründen die sich aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer personenbezogenen
                                    Daten Widerspruch einzulegen. Dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. Die jeweilige
                                    Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen Sie dieser Datenschutzerklärung. Wenn Sie
                                    Widerspruch einlegen, werden wir Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir
                                    können zwingende schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten
                                    überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen
                                    (Widerspruch nach Art. 21 Abs. 1 DSGVO). Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu
                                    betreiben, so haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung Sie betreffender personenbezogener
                                    Daten zum Zwecke derartiger Werbung einzulegen. Dies gilt auch für das Profiling, soweit es mit solcher
                                    Direktwerbung in Verbindung steht. Wenn Sie widersprechen, werden Ihre personenbezogenen Daten anschließend nicht
                                    mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21 Abs. 2 DSGVO).
                                </p>
                                <h4>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h4>
                                <p>
                                    Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer Aufsichtsbehörde,
                                    insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes oder des Orts des
                                    mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
                                    gerichtlicher Rechtsbehelfe.
                                </p>
                                <h4>Recht auf Datenübertragbarkeit</h4>
                                <p>
                                    Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
                                    automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen
                                    zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies
                                    nur, soweit es technisch machbar ist.
                                </p>
                                <h4>Auskunft, Berichtigung und Löschung</h4>
                                <p>
                                    Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über
                                    Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und
                                    ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
                                    personenbezogene Daten können Sie sich jederzeit an uns wenden.
                                </p>
                                <h4>Recht auf Einschränkung der Verarbeitung</h4>
                                <p>
                                    Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Hierzu können
                                    Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in folgenden Fällen:
                                </p>
                                <ul>
                                    <li>
                                        Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der
                                        Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die Einschränkung der
                                        Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                                    </li>
                                    <li>
                                        Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah, können Sie statt der Löschung die
                                        Einschränkung der Datenverarbeitung verlangen.
                                    </li>
                                    <li>
                                        Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder
                                        Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung die Einschränkung der
                                        Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                                    </li>
                                    <li>
                                        Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen Ihren und
                                        unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen überwiegen, haben Sie
                                        das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                                    </li>
                                </ul>
                                <p>
                                    Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von ihrer
                                    Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung von
                                    Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder juristischen Person oder aus Gründen
                                    eines wichtigen öffentlichen Interesses der Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
                                </p>
                            </article>
                            <article data-name='Datenerfassung'>
                                <h2>Datenerfassung</h2>
                                <h4>Cookies</h4>
                                <p>
                                    Unsere Internetseiten verwenden so genannte ≫Cookies≪. Cookies sind kleine Datenpakete und richten auf Ihrem
                                    Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session Cookies) oder
                                    dauerhaft (Permanente Cookies) auf Ihrem Endgerät gespeichert. Session Cookies werden nach Ende Ihres Besuchs
                                    automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder
                                    eine automatische Löschung durch Ihren Webbrowser erfolgt. Cookies können von uns (First-Party-Cookies) oder von
                                    Drittunternehmen stammen (Third-Party-Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter
                                    Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z. B. Cookies zur Abwicklung von
                                    Zahlungsdienstleistungen). Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da
                                    bestimmte Webseitenfunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige
                                    von Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet werden.
                                </p>
                                <p>
                                    Notwendige Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter,
                                    von Ihnen erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur Optimierung der Webseite (z. B.
                                    Cookies zur Messung des Webpublikums) erforderlich sind, werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO
                                    gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Webseitenbetreiber hat ein berechtigtes
                                    Interesse an der Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung
                                    seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren
                                    Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage dieser
                                    Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG). Die Einwilligung ist jederzeit widerrufbar.
                                </p>
                                <p>
                                    Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im
                                    Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische
                                    Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die
                                    Funktionalität dieser Webseite eingeschränkt sein. Welche Cookies und Dienste auf dieser Webseite eingesetzt
                                    werden, können Sie dieser Datenschutzerklärung entnehmen.
                                </p>
                                <h4>Anfrage per E-Mail, Telefon oder Telefax</h4>
                                <p>
                                    Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus
                                    hervorgehenden personenbezogenen Daten (Name, Anfrage, Adresse etc.) zum Zwecke der Bearbeitung Ihres Anliegens
                                    bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Die Verarbeitung
                                    dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
                                    Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen
                                    beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten
                                    Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese
                                    abgefragt wurde. Die Einwilligung ist jederzeit widerrufbar. Die von Ihnen an uns per Kontaktanfragen übersandten
                                    Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder
                                    der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende
                                    gesetzliche Bestimmungen – insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
                                </p>
                            </article>
                            <article data-name='Newsletter'>
                                <h2>Newsletter</h2>
                                <p>
                                    Wenn Sie den auf der Webseite angebotenen Newsletter beziehen möchten, benötigen wir von Ihnen eine E-Mail-Adresse
                                    sowie Informationen, welche uns die Überprüfung gestatten, dass Sie der Inhaber der angegebenen E-Mail-Adresse
                                    sind und mit dem Empfang des Newsletters einverstanden sind. Weitere Daten werden nicht bzw. nur auf freiwilliger
                                    Basis erhoben. Diese Daten verwenden wir ausschließlich für den Versand der angeforderten Informationen und geben
                                    diese nicht an Dritte weiter.
                                </p>
                                <p>
                                    Die Verarbeitung der in das Newsletteranmeldeformular eingegebenen Daten erfolgt ausschließlich auf Grundlage
                                    Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO). Die erteilte Einwilligung zur Speicherung der Daten, der
                                    E-Mail-Adresse sowie deren Nutzung zum Versand des Newsletters können Sie jederzeit widerrufen, etwa über den
                                    ≫Abbestellen≪-Link im Newsletter. Die Rechtmäßigkeit der bereits erfolgten Datenverarbeitungsvorgänge bleibt vom
                                    Widerruf unberührt.
                                </p>
                                <p>
                                    Die von Ihnen zum Zwecke des Newsletter-Bezugs bei uns hinterlegten Daten werden von uns bis zu Ihrer Austragung
                                    aus dem Newsletter bei uns bzw. dem Newsletterdiensteanbieter gespeichert und nach der Abbestellung des
                                    Newsletters oder nach Zweckfortfall aus der Newsletterverteilerliste gelöscht. Wir behalten uns vor,
                                    E-Mail-Adressen aus unserem Newsletterverteiler nach eigenem Ermessen im Rahmen unseres berechtigten Interesses
                                    nach Art. 6 Abs. 1 lit. f DSGVO zu löschen oder zu sperren. Daten, die zu anderen Zwecken bei uns gespeichert
                                    wurden, bleiben hiervon unberührt.
                                </p>
                                <p>
                                    Nach Ihrer Austragung aus der Newsletterverteilerliste wird Ihre E-Mail-Adresse bei uns bzw. dem
                                    Newsletterdiensteanbieter ggf. in einer Blacklist gespeichert, sofern dies zur Verhinderung künftiger Mailings
                                    erforderlich ist. Die Daten aus der Blacklist werden nur für diesen Zweck verwendet und nicht mit anderen Daten
                                    zusammengeführt. Dies dient sowohl Ihrem Interesse als auch unserem Interesse an der Einhaltung der gesetzlichen
                                    Vorgaben beim Versand von Newslettern (berechtigtes Interesse im Sinne des Art. 6 Abs. 1 lit. f DSGVO). Die
                                    Speicherung in der Blacklist ist zeitlich nicht befristet. Sie können der Speicherung widersprechen, sofern Ihre
                                    Interessen unser berechtigtes Interesse überwiegen.
                                </p>
                            </article>
                            <article data-name='Plugins und Tools'>
                                <h2>Plugins und Tools</h2>
                                <h4>Google Maps</h4>
                                <p>
                                    Diese Seite nutzt den Kartendienst Google Maps. Anbieter ist die Google Ireland Limited, Gordon House, Barrow
                                    Street, Dublin 4, Irland. Mit Hilfe dieses Dienstes können wir Kartenmaterial auf unserer Webseite einbinden. Zur
                                    Nutzung der Funktionen von Google Maps ist es notwendig, Ihre IP-Adresse zu speichern. Diese Informationen werden
                                    in der Regel an einen Server von Google in den USA übertragen und dort gespeichert. Der Anbieter dieser Seite hat
                                    keinen Einfluss auf diese Datenübertragung. Wenn Google Maps aktiviert ist, kann Google zum Zwecke der
                                    einheitlichen Darstellung der Schriftarten Google Fonts verwenden. Beim Aufruf von Google Maps lädt Ihr Browser
                                    die benötigten Web Fonts in Ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
                                </p>
                                <p>
                                    Die Nutzung von Google Maps erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote und an
                                    einer leichten Auffindbarkeit der von uns auf der Webseite angegebenen Orte. Dies stellt ein berechtigtes
                                    Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung abgefragt wurde,
                                    erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG, soweit
                                    die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B.
                                    Fingerabdruck) im Sinne des TDDDG umfasst. Die Einwilligung ist jederzeit widerrufbar.
                                </p>
                                <p>
                                    Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden
                                    Sie unter folgendem{' '}
                                    <a
                                        className='underlineLink'
                                        href='https://privacy.google.com/businesses/gdprcontrollerterms/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        Link
                                    </a>
                                    . Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der{' '}
                                    <a
                                        className='underlineLink'
                                        href='https://policies.google.com/privacy?hl=de'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        Datenschutzerklärung
                                    </a>{' '}
                                    von Google.
                                </p>
                                <p>
                                    Das Unternehmen verfügt über eine Zertifizierung nach dem ≫EU-US Data Privacy Framework≪ (DPF). Der DPF ist ein
                                    Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards
                                    bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet
                                    sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter
                                    folgendem{' '}
                                    <a
                                        className='underlineLink'
                                        href='https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        Link
                                    </a>
                                    .
                                </p>
                            </article>
                        </div>
                    )}
                    {language === 'en' && (
                        <div id='privacyWrapper'>
                            <article data-name='General'>
                                <h2>General</h2>
                                <h4>Privacy policy notes</h4>
                                <p>
                                    The following notes provide a simple overview of what happens to your personal data when you visit this website.
                                    Personal data are all data with which you can be personally identified. Detailed information on the subject of
                                    data protection can be found in our privacy policy listed below this text.
                                </p>
                                <h4>Who is responsible for data collection on this website?</h4>
                                <p>
                                    The data processing on this website is carried out by the website operator. You can find their contact details in
                                    the section ≫Information on the responsible party≪ in this privacy policy.
                                </p>
                                <h4>How do we collect your data?</h4>
                                <p>
                                    Your data is collected firstly when you provide it to us. This can be, for example, data that you enter into a
                                    contact form. Other data is collected automatically or with your consent when you visit the website by our IT
                                    systems. This mainly includes technical data (e.g. internet browser, operating system, or time of the page
                                    visit). The collection of this data happens automatically as soon as you enter this website.
                                </p>
                                <h4>What do we use your data for?</h4>
                                <p>
                                    Some of the data is collected to ensure that the website is provided without errors. Other data can be used to
                                    analyze your user behavior.
                                </p>
                                <h4>What rights do you have regarding your data?</h4>
                                <p>
                                    You have the right to obtain information about the origin, recipient, and purpose of your stored personal data at
                                    any time free of charge. You also have the right to request the correction or deletion of this data. If you have
                                    given consent to data processing, you can revoke this consent at any time for the future. Additionally, you have
                                    the right to request the restriction of the processing of your personal data under certain circumstances.
                                    Furthermore, you have the right to lodge a complaint with the competent supervisory authority. For this and other
                                    questions regarding data protection, you can contact us at any time.
                                </p>
                                <h4>Third-party tools</h4>
                                <p>
                                    When visiting this website, your surfing behavior can be statistically analyzed. This is done primarily with
                                    so-called analysis programs. Detailed information about these analysis programs can be found in the following
                                    privacy policy.
                                </p>
                            </article>
                            <article data-name='Hosting'>
                                <h2>Hosting</h2>
                                <p>
                                    This website is hosted externally. The personal data collected on this website are stored on the servers of the
                                    hosting provider. This mainly includes IP addresses, contact requests, meta and communication data, contract data,
                                    contact details, names, website access, and other data generated via a website. External hosting is done for the
                                    purpose of fulfilling contracts with our potential and existing customers (Art. 6 Abs. 1 lit. b DSGVO) and in the
                                    interest of a secure, fast, and efficient provision of our online offer by a professional provider (Art. 6 Abs. 1
                                    lit. f DSGVO). If a corresponding consent was requested, the processing is carried out exclusively on the basis of
                                    Art. 6 Abs. 1 lit. a DSGVO and § 25 Abs. 1 TDDDG, insofar as the consent includes the storage of cookies or access
                                    to information on the user's device (e.g. device fingerprinting) within the meaning of the TTDPA. The consent can
                                    be revoked at any time. Our hosting providers will only process your data to the extent necessary to fulfill their
                                    performance obligations and follow our instructions regarding this data. We use the following hosting providers:
                                </p>
                                <p className='column'>
                                    <span>united-domains AG</span>
                                    <span>Gautinger Straße 10</span>
                                    <span>82319 Starnberg</span>
                                    <span>Deutschland</span>
                                </p>
                            </article>
                            <article data-name='Mandatory Information'>
                                <h2>Mandatory Information</h2>
                                <h4>Privacy</h4>
                                <p>
                                    The operators of these pages take the protection of your personal data very seriously. We treat your personal data
                                    confidentially and in accordance with the statutory data protection regulations. When you use this website,
                                    various personal data are collected. Personal data are data with which you can be personally identified. This
                                    privacy policy explains which data we collect and what we use it for. It also explains how and for what purpose
                                    this happens. We would like to point out that data transmission on the internet (e.g. when communicating by
                                    email) can have security gaps. Complete protection of data against access by third parties is not possible.
                                </p>
                                <h4>Information on the responsible party</h4>
                                <p>The responsible party for data processing on this website is:</p>
                                <p className='column'>
                                    <span>Ebenrieder Farmhaus GmbH</span>
                                    <span>Remnatsried 2</span>
                                    <span>87675 Stötten am Auerberg</span>
                                    <span>Germany</span>
                                </p>
                                <p className='column'>
                                    <span>+49 171 9014541</span>
                                    <span>hallo@ebenrieder.de</span>
                                </p>
                                <h4>How do we collect your data?</h4>
                                <p>
                                    Responsible party is the natural or legal person who alone or jointly with others decides on the purposes and
                                    means of processing personal data (e.g. names, email addresses).
                                </p>
                                <h4>Storage duration</h4>
                                <p>
                                    Unless a more specific storage period is stated in this privacy policy, your personal data will remain with us
                                    until the purpose for the data processing ceases to apply. If you make a legitimate request for deletion or revoke
                                    your consent to data processing, your data will be deleted unless we have other legally permissible reasons for
                                    storing your personal data (e.g. tax or commercial law retention periods). In the latter case, the deletion will
                                    take place after these reasons cease to apply.
                                </p>
                                <h4>General information on the legal basis for data processing on this website</h4>
                                <p>
                                    If you have consented to data processing, we process your personal data on the basis of Art. 6 Abs. 1 lit. a DSGVO
                                    or Art. 9 Abs. 2 lit. a DSGVO if special categories of data are processed according to Art. 9 Abs. 1 DSGVO. In the
                                    case of explicit consent to the transfer of personal data to third countries, the data processing is also carried
                                    out on the basis of Art. 49 Abs. 1 lit. a DSGVO. If you have consented to the storage of cookies or to access
                                    information on your device (e.g. via device fingerprinting), the data processing is also based on § 25 Abs. 1
                                    TDDDG. The consent can be revoked at any time. If your data is necessary for the fulfillment of a contract or for
                                    pre-contractual measures, we process your data on the basis of Art. 6 Abs. 1 lit. b DSGVO. Furthermore, we process
                                    your data if it is necessary for the fulfillment of a legal obligation on the basis of Art. 6 Abs. 1 lit. c DSGVO.
                                    The data processing may also be based on our legitimate interest according to Art. 6 Abs. 1 lit. f DSGVO. The
                                    respective legal basis applicable in each individual case is explained in the following paragraphs of this privacy
                                    policy.
                                </p>
                                <h4>Recipients of personal data</h4>
                                <p>
                                    In the context of our business activities, we work with various external parties. It is sometimes necessary to
                                    transfer personal data to these external parties. We only pass on personal data to external parties if this is
                                    necessary in the context of contract fulfillment, if we are legally obliged to do so (e.g. data transfer to tax
                                    authorities), if we have a legitimate interest according to Art. 6 Abs. 1 lit. f DSGVO in the transfer, or if
                                    another legal basis allows the data transfer. When using data processors, we only pass on personal data of our
                                    customers on the basis of a valid data processing agreement. In the case of joint processing, a joint processing
                                    agreement is concluded.
                                </p>
                                <h4>Revocation of your consent to data processing</h4>
                                <p>
                                    Many data processing operations are only possible with your express consent. You can revoke a previously given
                                    consent at any time. The legality of the data processing carried out until the revocation remains unaffected by
                                    the revocation.
                                </p>
                                <h4>Right to object to the collection of data in special cases and to direct marketing</h4>
                                <p>
                                    If the data processing is based on Art. 6 Abs. 1 Lit. e or f DSGVO , you have the right to object to the
                                    processing of your personal data at any time for reasons arising from your particular situation; this also applies
                                    to profiling based on these provisions. The respective legal basis on which the processing is based can be found
                                    in this privacy policy. If you object, we will no longer process your affected personal data unless we can
                                    demonstrate compelling legitimate grounds for the processing that override your interests, rights, and freedoms or
                                    the processing serves the establishment, exercise, or defense of legal claims (objection according to Art. 21 Abs.
                                    1 DSGVO). If your personal data is processed for direct marketing purposes, you have the right to object at any
                                    time to the processing of personal data concerning you for such marketing purposes. This also applies to profiling
                                    to the extent that it is related to such direct marketing. If you object, your personal data will no longer be
                                    used for direct marketing purposes (objection according to Art. 21 Abs. 2 DSGVO).
                                </p>
                                <h4>Right to lodge a complaint with the competent supervisory authority</h4>
                                <p>
                                    In the event of breaches of the DSGVO, data subjects have the right to lodge a complaint with a supervisory
                                    authority, in particular in the Member State of their habitual residence, their place of work, or the place of the
                                    alleged infringement. The right to lodge a complaint exists without prejudice to other administrative or judicial
                                    remedies.
                                </p>
                                <h4>Right to data portability</h4>
                                <p>
                                    You have the right to have data that we process automatically on the basis of your consent or in the fulfillment
                                    of a contract handed over to you or to a third party in a common, machine-readable format. If you request the
                                    direct transfer of the data to another controller, this will only be done to the extent that it is technically
                                    feasible.
                                </p>
                                <h4>Information, correction, and deletion</h4>
                                <p>
                                    Within the framework of the applicable legal provisions, you have the right to free information at any time about
                                    your stored personal data, its origin, and recipients, and the purpose of the data processing and, if necessary, a
                                    right to correction or deletion of this data. For this purpose and for further questions on the subject of
                                    personal data, you can contact us at any time.
                                </p>
                                <h4>Right to restriction of processing</h4>
                                <p>
                                    You have the right to request the restriction of the processing of your personal data. For this purpose, you can
                                    contact us at any time. The right to restriction of processing exists in the following cases:
                                </p>
                                <ul>
                                    <li>
                                        If you dispute the accuracy of your personal data stored with us, we usually need time to verify this. For the
                                        duration of the verification, you have the right to request the restriction of the processing of your personal
                                        data.
                                    </li>
                                    <li>
                                        If the processing of your personal data happened unlawfully, you can request the restriction of the data
                                        processing instead of deletion.
                                    </li>
                                    <li>
                                        If we no longer need your personal data, but you need it to exercise, defend, or establish legal claims, you
                                        have the right to request the restriction of the processing of your personal data instead of deletion.
                                    </li>
                                    <li>
                                        If you have objected according to Art. 21 Abs. 1 DSGVO, a balance must be struck between your interests and
                                        ours. As long as it has not been determined whose interests prevail, you have the right to request the
                                        restriction of the processing of your personal data.
                                    </li>
                                </ul>
                                <p>
                                    If you have restricted the processing of your personal data, these data may – apart from being stored – only be
                                    processed with your consent or for the establishment, exercise, or defense of legal claims or for the protection
                                    of the rights of another natural or legal person or for reasons of important public interest of the European Union
                                    or a Member State.
                                </p>
                            </article>
                            <article data-name='Data Collection'>
                                <h2>Data Collection</h2>
                                <h4>Cookies</h4>
                                <p>
                                    Our websites use so-called ≫Cookies≪. Cookies are small text files and do not cause any damage to your device.
                                    They are either temporarily stored on your device for the duration of a session (session cookies) or permanently
                                    (permanent cookies). Session cookies are automatically deleted at the end of your visit. Permanent cookies remain
                                    stored on your device until you delete them yourself or until they are automatically deleted by your web browser.
                                    Cookies can be provided by us (first-party cookies) or by third parties (third-party cookies). Third-party cookies
                                    allow the integration of certain services provided by third parties within websites (e.g. cookies for payment
                                    processing services). Cookies have various functions. Numerous cookies are technically necessary, as certain
                                    website functions would not work without them (e.g. the shopping cart function or the display of videos). Other
                                    cookies can be used to analyze user behavior or for advertising purposes.
                                </p>
                                <p>
                                    Cookies that are necessary for the performance of electronic communication processes or for the provision of
                                    certain functions you want (e.g. shopping cart function) or for the optimization of the website (e.g. cookies for
                                    measuring web audience) are stored based on Art. 6 Abs. 1 lit. f DSGVO, unless another legal basis is specified.
                                    The website operator has a legitimate interest in storing cookies for the technically error-free and optimized
                                    provision of their services. If consent to the storage of cookies has been requested, the relevant cookies are
                                    stored exclusively on the basis of this consent (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TDDDG). The consent
                                    can be revoked at any time.
                                </p>
                                <p>
                                    You can set your browser so that you are informed about the setting of cookies and only allow cookies in
                                    individual cases, exclude the acceptance of cookies for certain cases or generally, and activate the automatic
                                    deletion of cookies when closing the browser. If you deactivate cookies, the functionality of this website may be
                                    limited. If cookies are used by third-party companies or for analysis purposes, we will inform you separately
                                    within the framework of this privacy policy and, if necessary, request your consent.
                                </p>
                                <h4>Request by e-mail, phone or fax</h4>
                                <p>
                                    If you contact us via email, phone, or fax, your request, including all resulting personal data (name, request,
                                    address, etc.), will be stored and processed by us for the purpose of handling your request. We do not share this
                                    data without your consent. The processing of this data is based on Art. 6 Abs. 1 lit. b DSGVOif your request is
                                    related to the fulfillment of a contract or necessary for the implementation of pre-contractual measures. In all
                                    other cases, the processing is based on our legitimate interest in the effective processing of inquiries addressed
                                    to us (Art. 6 Abs. 1 lit. f DSGVO) or on your consen (Art. 6 Abs. 1 lit. a DSGVO), if this was requested. The
                                    consent can be revoked at any time. The data you send to us via contact requests will remain with us until you
                                    request deletion, revoke your consent to storage, or the purpose for data storage no longer applies (e.g. after
                                    your request has been processed). Mandatory statutory provisions – especially statutory retention periods – remain
                                    unaffected.
                                </p>
                            </article>
                            <article data-name='Newsletter'>
                                <h2>Newsletter</h2>
                                <p>
                                    If you wish to receive the newsletter offered on the website, we require an email address from you as well as
                                    information that allows us to verify that you are the owner of the provided email address and agree to receive the
                                    newsletter. Further data is not collected or is only collected on a voluntary basis. We use this data exclusively
                                    for sending the requested information and do not pass it on to third parties.
                                </p>
                                <p>
                                    The processing of the data entered into the newsletter subscription form is based solely on your consent (Art. 6
                                    Abs. 1 lit. a DSGVO). You can revoke your consent to the storage of data, the email address, and their use for
                                    sending the newsletter at any time, for example, via the ≫Unsubscribe≪ link in the newsletter. The legality of the
                                    data processing operations already carried out remains unaffected by the revocation.
                                </p>
                                <p>
                                    The data you provide for the purpose of receiving the newsletter will be stored by us or the newsletter service
                                    provider until you unsubscribe from the newsletter and will be deleted from the newsletter distribution list after
                                    you unsubscribe (Art. 6 Abs. 1 lit. f DSGVO). Data stored by us for other purposes remain unaffected.
                                </p>
                                <p>
                                    After you unsubscribe from the newsletter distribution list, your email address may be stored in a blacklist by us
                                    or the newsletter service provider if necessary to prevent future mailings. The data from the blacklist will only
                                    be used for this purpose and will not be merged with other data. This serves both your interest and our interest
                                    in complying with legal requirements when sending newsletters (legitimate interest within the meaning of Art. 6
                                    Abs. 1 lit. f DSGVO). The storage in the blacklist is indefinite. You can object to the storage if your interests
                                    outweigh our legitimate interest.
                                </p>
                            </article>
                            <article data-name='Plugins and Tools'>
                                <h2>Plugins and Tools</h2>
                                <h4>Google Maps</h4>
                                <p>
                                    This site uses the Google Maps map service. The provider is Google Ireland Limited, Gordon House, Barrow Street,
                                    Dublin 4, Ireland. With the help of this service, we can integrate map material on our website. To use the
                                    functions of Google Maps, it is necessary to store your IP address. This information is generally transmitted to a
                                    Google server in the USA and stored there. The provider of this site has no influence on this data transfer. If
                                    Google Maps is activated, Google may use Google Fonts for the uniform display of fonts. When you call up Google
                                    Maps, your browser loads the necessary web fonts into your browser cache to display texts and fonts correctly.
                                </p>
                                <p>
                                    The use of Google Maps is in the interest of an appealing presentation of our online offers and easy findability
                                    of the places indicated by us on the website. This constitutes a legitimate interest within the meaning of Art. 6
                                    Abs. 1 lit. f DSGVO. If consent has been requested, the processing is carried out exclusively on the basis of Art.
                                    6 Abs. 1 lit. a DSGVO and § 25 Abs. 1 TDDDG, insofar as the consent includes the storage of cookies or access to
                                    information on the user's device (e.g. device fingerprinting) within the meaning of the TDDDG. The consent can be
                                    revoked at any time.
                                </p>
                                <p>
                                    Data transfer to the USA is based on the EU Commission's standard contractual clauses. Details can be found at the
                                    following{' '}
                                    <a
                                        className='underlineLink'
                                        href='https://privacy.google.com/businesses/gdprcontrollerterms/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        link
                                    </a>
                                    . More information on how user data is handled can be found in Google's{' '}
                                    <a
                                        className='underlineLink'
                                        href='https://policies.google.com/privacy?hl=de'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        privacy policy
                                    </a>{' '}
                                    .
                                </p>
                                <p>
                                    The company is certified under the ≫EU-US Data Privacy Framework≪ (DPF). The DPF is an agreement between the
                                    European Union and the USA that aims to ensure compliance with European data protection standards for data
                                    processing in the USA. Each company certified under the DPF is committed to complying with these data protection
                                    standards. Further information can be obtained from the provider at the following{' '}
                                    <a
                                        className='underlineLink'
                                        href='https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active/'
                                        target='_blank'
                                        rel='noopener noreferrer'
                                    >
                                        link
                                    </a>
                                    .
                                </p>
                            </article>
                        </div>
                    )}
                </div>
                <Footer browser={this.props.browser} />
            </div>
        );
    }
}

export default withRouter(Privacy);
