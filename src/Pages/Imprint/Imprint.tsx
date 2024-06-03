import * as React from 'react';
import Footer from '../../Components/Footer/Footer';
import Menu from '../../Components/Menu/Menu';
import { getLanguage } from '../../@presets/language';
import { Browser } from '../../@types/browser';
import './Imprint.scss';

interface Props {
    browser: Browser;
}

export default class Imprint extends React.Component<Props> {
    render() {
        // DEFINE VARIABLES
        const language = this.props.browser.language;
        // RETURN COMPONENT
        return (
            <div id='imprint' className='page'>
                <Menu browser={this.props.browser} behaviour={'Static'} />
                <div id='imprintContent'>
                    <h1>{getLanguage(this.props.browser.language, 'imprint')}</h1>
                    {language === 'de' && (
                        <div id='imprintWrapper'>
                            <div id='imprintLeft'>
                                <section>
                                    <span>Ebenrieder Farmhaus GmbH</span>
                                    <span>Remnatsried 2</span>
                                    <span>87675 Stötten am Auerberg</span>
                                    <span>Deutschland</span>
                                </section>
                                <section>
                                    <h4>{getLanguage(language, 'phone')}</h4>
                                    <a className='underlineLink' href='tel:+4983499763940'>
                                        +49 8349 9763940
                                    </a>
                                </section>
                                <section>
                                    <h4>{getLanguage(language, 'email')}</h4>
                                    <a className='underlineLink' href='mailto:hallo@ebenrieder.de'>
                                        hallo@ebenrieder.de
                                    </a>
                                </section>
                                <section>
                                    <h4>UST-ID</h4>
                                    <span>DE＊＊＊＊＊＊＊＊</span>
                                </section>
                                <section>
                                    <h4>Handelsregister</h4>
                                    <span>Kempten HRB 17493</span>
                                </section>
                                <section>
                                    <h4>Verantwortlich für den Inhalt</h4>
                                    <span>Stefan Hahn</span>
                                </section>
                                <section>
                                    <h4>Konzeption & Web Design</h4>
                                    <span>Gerwin Schmidt</span>
                                    <span>Benedict Belz</span>
                                </section>
                                <section>
                                    <h4>Fotografie</h4>
                                    <span>Regina Recht</span>
                                </section>
                                <section>
                                    <h4>Texte</h4>
                                    <span>Katja Schwengler</span>
                                </section>
                            </div>
                            <div id='imprintRight'>
                                <article data-name='Inhalt'>
                                    <h2>Inhalt</h2>
                                    <p>
                                        Der Autor übernimmt keine Gewähr für die Aktualität, Korrektheit und Vollständigkeit der auf diesen Seiten
                                        bereitgestellten Informationen. Grundsätzlich ausgeschlossen werden Haftungsansprüche gegen den Autor dieser
                                        Seiten, die sich auf Schäden materieller oder ideeller Art beziehen und durch die Nutzung oder Nichtnutzung der
                                        bereitgestellten Informationen bzw. falscher und unvollständiger Informationen verursacht worden sind, sofern von
                                        Seiten des Autors kein nachweisbares vorsätzliches oder grob fahrlässiges Verschulden vorliegt. Alle Angebote sind
                                        frei und unverbindlich. Der Autor behält es sich ausdrücklich vor, Teile seiner Seiten oder das gesamte Angebot
                                        ohne besondere Ankündigung zu ändern, zu ergänzen, zu entfernen oder die Veröffentlichung zeitweise oder ganz
                                        einzustellen.
                                    </p>
                                </article>
                                <article data-name='Links'>
                                    <h2>Links</h2>
                                    <p>
                                        Eine Haftungsverpflichtung bei direkten oder indirekten Verweisen auf fremde Internetseiten, die nicht innerhalb
                                        des Verantwortungsbereiches des Autors liegen, würde ausschliesslich in Kraft treten, wenn der Autor Kenntnis von
                                        den Inhalten hat und es technisch realisierbar und zumutbar wäre, die Nutzung im Falle von rechtswidrigen Inhalten
                                        zu verhindern. Hiermit wird ausdrücklich vom Autor erklärt, dass zum Zeitpunkt der Linksetzung auf den zu
                                        verlinkenden Seiten keinerlei illegale Inhalte erkennbar waren. Der Autor verfügt über keinerlei Einfluss auf das
                                        aktuelle oder zukünftige Design, die dargestellten Inhalte oder die Urheberschaft der verlinkten Seiten. Aus diesem
                                        Grund distanziert sich der Autor von jeglichen Inhalten der verlinkten Seiten, die nach der Linksetzung verändert
                                        wurden. Diese Aussage behält ihre Gültigkeit für alle innerhalb des eigenen Internetangebotes gesetzten Links und
                                        Verweise sowie für externe Einträge in vom Autor eingerichteten Gästebüchern und Mailinglisten. Für alle illegalen,
                                        falschen oder nicht vollständigen Inhalte und besonders für mögliche Schäden, die nach der Nutzung oder
                                        Nichtnutzung derlei angebotener Informationen entstehen, liegt die Haftung allein beim Anbieter der Seite, auf die
                                        verwiesen wurde.
                                    </p>
                                </article>
                                <article data-name='Urheberrecht'>
                                    <h2>Urheberrecht</h2>
                                    <p>
                                        Der Autor achtet darauf, dass in allen Veröffentlichungen die Urheberrechte der verwendeten Bilder, Sounds,
                                        Videoszenen und Texte beachtet werden, selbst erstellte Bilder, Sounds, Videoszenen und Texte genutzt werden oder
                                        dass auf lizenzfreie Bilder, Sounds, Videoszenen und Texte zurückgegriffen wird. Werden innerhalb des
                                        Internetangebotes geschützten Marken- und Warenzeichen genutzt oder ggf. durch Dritte genannt, unterliegen diese
                                        ohne Ausnahme den Bestimmungen des jeweils gültigen Kennzeichenrechts und den Besitzrechten der jeweiligen
                                        eingetragenen Eigentümer. Aufgrund der alleinigen Nennung kann nicht der Schluss gezogen werden, dass diese
                                        Markenzeichen nicht durch die Rechte Dritter geschützt werden! Das Urheberrecht für veröffentlichte und selbst
                                        erarbeitete Objekte bleibt allein beim Autor der Seite. Die Vervielfältigung und die Verwendung dieser Bilder,
                                        Sounds, Videoszenen und Texte in anderen elektronischen oder gedruckten Publikationen ist ohne die ausdrückliche
                                        Zustimmung des Autors nicht gestattet.
                                    </p>
                                </article>
                                <article data-name='Datenschutz'>
                                    <h2>Datenschutz</h2>
                                    <p>
                                        Werden innerhalb des Onlineangebotes Möglichkeiten angeboten, persönliche oder geschäftliche Daten einzugeben, so
                                        erfolgt dies ausdrücklich auf freiwilliger Basis seitens des Nutzers.
                                    </p>
                                </article>
                                <article data-name='Rechtswirksamkeit'>
                                    <h2>Rechtswirksamkeit</h2>
                                    <p>
                                        Es gilt, diesen Haftungsausschluss als einen Teil des Onlineangebotes zu betrachten, von dem aus auf diese Seiten
                                        hingewiesen wurde. Sollten einzelne Abschnitte oder Formulierungen dieses Textes nicht mehr der geltenden
                                        Rechtslage entsprechen oder nicht vollständig sein, bleiben alle anderen Teile des Dokumentes hinsichtlich ihres
                                        Inhalts und dessen Gültigkeit unberührt.
                                    </p>
                                </article>
                                <article data-name='Cookies'>
                                    <h2>Cookies</h2>
                                    <p>
                                        Die Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und
                                        enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
                                        Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert. Die meisten
                                        der von uns verwendeten Cookies sind so genannte Session-Cookies. Sie werden nach Ende Ihres Besuchs automatisch
                                        gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen. Diese Cookies ermöglichen
                                        es uns, Ihren Browser beim nächsten Besuch wiederzuerkennen. Sie können Ihren Browser so einstellen, dass Sie über
                                        das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für
                                        bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browser
                                        aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
                                    </p>
                                </article>
                                {/* <article data-name='Google Analytics'>
                                    <h2>Google Analytics</h2>
                                    <p>
                                        Diese Website benutzt Google Analytics, einen Webanalysedienst der Google Inc. Google Analytics verwendet so
                                        genannte Cookies, die eine Analyse der Benutzung der Website durch Sie ermöglicht. Die erzeugten Informationen
                                        über Ihre Benutzung diese Website wird an einen Server von Google in den USA übertragen und dort gespeichert.
                                        Google wird diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die
                                        Websiteaktivitäten für die Websitebetreiber zusammenzustellen und um weitere mit der Websitenutzung und der
                                        Internetnutzung verbundene Dienstleistungen zu erbringen. Auch wird Google diese Informationen gegebenenfalls
                                        an Dritte übertragen, sofern dies gesetzlich vorgeschrieben oder soweit Dritte diese Daten im Auftrag von
                                        Google verarbeiten. Google wird in keinem Fall Ihre IP-Adresse mit anderen Daten der Google in Verbindung
                                        bringen. Sie können die Installation der Cookies durch eine entsprechende Einstellung Ihrer Browser Software
                                        verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem Fall gegebenenfalls nicht sämtliche
                                        Funktionen dieser Website voll umfänglich nutzen können. Durch die Nutzung dieser Website erklären Sie sich
                                        mit der Bearbeitung der über Sie erhobenen Daten durch Google in der zuvor beschriebenen Art und Weise und zu
                                        dem zuvor benannten Zweck einverstanden.
                                    </p>
                                </article> */}
                            </div>
                        </div>
                    )}
                    {language === 'en' && (
                        <div id='imprintWrapper'>
                            <div id='imprintLeft'>
                                <section>
                                    <span>Ebenrieder Farmhaus GmbH</span>
                                    <span>Remnatsried 2</span>
                                    <span>87675 Stötten am Auerberg</span>
                                    <span>Deutschland</span>
                                </section>
                                <section>
                                    <h4>{getLanguage(language, 'phone')}</h4>
                                    <a className='underlineLink' href='tel:+4983499763940'>
                                        +49 8349 9763940
                                    </a>
                                </section>
                                <section>
                                    <h4>{getLanguage(language, 'email')}</h4>
                                    <a className='underlineLink' href='mailto:hallo@ebenrieder.de'>
                                        hallo@ebenrieder.de
                                    </a>
                                </section>
                                <section>
                                    <h4>UST-ID</h4>
                                    <span>DE＊＊＊＊＊＊＊＊</span>
                                </section>
                                <section>
                                    <h4>Commercial Register</h4>
                                    <span>Kempten HRB 17493</span>
                                </section>
                                <section>
                                    <h4>Responsible for Content</h4>
                                    <span>Stefan Hahn</span>
                                </section>
                                <section>
                                    <h4>Conception & Design</h4>
                                    <span>Gerwin Schmidt</span>
                                    <span>Benedict Belz</span>
                                </section>
                                <section>
                                    <h4>Photography</h4>
                                    <span>Regina Recht</span>
                                </section>
                                <section>
                                    <h4>Texts</h4>
                                    <span>Katja Schwengler</span>
                                </section>
                            </div>
                            <div id='imprintRight'>
                                <article data-name='Content'>
                                    <h2>Content</h2>
                                    <p>
                                        The author assumes no responsibility for the topicality, correctness and completeness of the information provided
                                        on these pages. Liability claims against the author of these pages, which refer to material or immaterial nature
                                        and are caused by the use or disuse of the provided information or incorrect and incomplete information, are
                                        excluded as far as the author can not prove any deliberate or grossly negligent fault is present. All offers are
                                        free and without obligation. The author expressly reserves the right to change, supplement or remove parts of his
                                        pages or the entire offer without prior notice or to discontinue the publication temporarily or completely.
                                    </p>
                                </article>
                                <article data-name='Links'>
                                    <h2>Links</h2>
                                    <p>
                                        A liability for direct or indirect links to external websites, which are not within the area of esponsibility of
                                        the author, would come into force only if the author has knowledge of the content and it would be technically
                                        feasible and reasonable to use in to prevent cases of illegal content. Hereby the author expressly declares that at
                                        the time of linking to the linked pages no illegal contents were recognizable. The author has no influence on the
                                        current or future design, the content displayed or the authorship of the linked pages. For this reason, the author
                                        dissociates itself from any content of the linked pages, which were changed after the link setting. This statement
                                        remains valid for all links and references within the own internet offer as well as for external entries in guest
                                        books and mailing lists created by the author. For all illegal, incorrect or incomplete contents and especially for
                                        possible damages, which arise after the use or disuse of such offered information, the liability lies solely with
                                        the provider of the referenced page.
                                    </p>
                                </article>
                                <article data-name='Copyright'>
                                    <h2>Copyright</h2>
                                    <p>
                                        The author makes sure that in all publications the copyrights of the used pictures, sounds, video scenes and texts
                                        are respected, self created pictures, sounds, video scenes and texts are used or that on license-free images,
                                        sounds, video scenes and texts are used. If proprietary trademarks and trademarks are used within the Internet
                                        offer or may be mentioned by third parties, these are without exception subject to the provisions of the applicable
                                        trademark law and the ownership rights of the respective registered owners. Due to the sole mention can not be
                                        concluded that these trademarks are not protected by the rights of third parties! The copyright for published and
                                        self-created objects remains solely with the author of the page. Reproduction and use of these images, sounds,
                                        video scenes and texts in other electronic or printed publications is not permitted without the explicit consent of
                                        the author.
                                    </p>
                                </article>
                                <article data-name='Data Protection'>
                                    <h2>Data Protection</h2>
                                    <p>
                                        If options are offered within the online offer to enter personal or business data, this is explicitly on a
                                        voluntary basis on the part of the user.
                                    </p>
                                </article>
                                <article data-name='Legal Validity'>
                                    <h2>Legal Validity</h2>
                                    <p>
                                        It is considered that this disclaimer as part of the online offer, from which reference was made to these pages. If
                                        individual sections or phrases of this text no longer comply with the current legal position or are not complete,
                                        all other parts of the document remain unaffected in terms of their content and validity.
                                    </p>
                                </article>
                                <article data-name='Cookies'>
                                    <h2>Cookies</h2>
                                    <p>
                                        Some of the Internet pages use so-called cookies. Cookies do not damage your computer and do not contain viruses.
                                        Cookies are used to make our website more user-friendly, effective and secure. Cookies are small text files that
                                        are stored on your computer and saved by your browser. Most of the cookies we use are so-called session cookies.
                                        They are automatically deleted at the end of your visit. Other cookies remain stored on your end device until you
                                        delete them. These cookies enable us to recognize your browser on your next visit. You can set your browser so that
                                        you are informed about the setting of cookies and only allow cookies in individual cases, exclude the acceptance of
                                        cookies for certain cases or in general and activate the automatic deletion of cookies when closing the browser. If
                                        cookies are deactivated, the functionality of this website may be restricted.
                                    </p>
                                </article>
                                {/* <article data-name='Google Analytics'>
                                    <h2>Google Analytics</h2>
                                    <p>
                                        This website uses Google Analytics, a web analytics service provided by Google Inc. Google Analytics uses
                                        cookies to help the website analyze how users use the site. The information generated about your use of this
                                        website is transmitted to a Google server in the USA and stored there. Google will use this information for
                                        the purpose of evaluating your use of the website, compiling reports on website activity for website operators
                                        and providing other services relating to website activity and internet usage. Google may also transfer this
                                        information to third parties where required to do so by law, or where such third parties process the
                                        information on Google's behalf. Google will not associate your IP address with any other data held by Google.
                                        You may refuse the use of cookies by selecting the appropriate settings on your browser, however please note
                                        that if you do this you may not be able to use the full functionality of this website. By using this website,
                                        you consent to the processing of data about you by Google in the manner and for the purposes set out above.
                                    </p>
                                </article> */}
                            </div>
                        </div>
                    )}
                </div>
                <Footer browser={this.props.browser} />
            </div>
        );
    }
}
