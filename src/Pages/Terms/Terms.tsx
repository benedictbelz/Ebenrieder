import * as React from 'react';
import Footer from '../../Components/Footer/Footer';
import Menu from '../../Components/Menu/Menu';
import { PropsWithRouter, withRouter } from '../../Router/Router';
import { getLanguage } from '../../@presets/language';
import { Browser } from '../../@types/browser';
import './Terms.scss';

interface Props extends PropsWithRouter {
    browser: Browser;
}

class Terms extends React.Component<Props> {
    componentDidUpdate(prevProps: Props) {
        if (this.props.browser.language !== prevProps.browser.language) {
            this.props.router.navigate(
                {
                    ...location,
                    pathname: `/${this.props.browser.language === 'de' ? 'agb' : 'gtc'}`
                },
                { replace: true }
            );
        }
    }

    render() {
        // DEFINE VARIABLES
        const language = this.props.browser.language;
        // RETURN COMPONENT
        return (
            <div id='privacy' className='page'>
                <Menu browser={this.props.browser} behaviour={'Static'} />
                <div id='privacyContent'>
                    <h1>{getLanguage(this.props.browser.language, 'termsLong')}</h1>
                    {language === 'de' && (
                        <div id='termsWrapper'>
                            <article data-name='Nutzungszweck'>
                                <h2>1. Geltungsbereich und Nutzungszweck</h2>
                                <p>
                                    <strong>1.1.</strong> Diese Geschäftsbedingungen gelten für Verträge über die mietweise Überlassung von Ferienwohnungen,
                                    Zimmern, sowie ggfs. weiterer Räumlichkeiten zur Beherbergung und Durchführung von Veranstaltungen, sowie alle in diesem
                                    Zusammenhang für den Kunden erbrachten weiteren Leistungen und Lieferungen des folgenden Beherbergungsbetriebs:
                                </p>
                                <ul>
                                    <li>
                                        Ebenrieder Farmhaus GmbH, Remnatsried 2 in 87675 Stötten am Auerberg (nachfolgend ≫Beherbergungsbetrieb≪ genannt),
                                        vertreten durch den Geschäftsführer Stefan Hahn mit der Umsatzsteuer-Identifikationsnummer DE36853529
                                    </li>
                                    <li>Die Bezeichnung ≫Kunde≪ erfolgt einheitlich für Besteller, Gast, Mieter, Veranstalter, etc.</li>
                                </ul>
                                <p>
                                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Webseite zu gewährleisten. Andere Daten können zur
                                    Analyse Ihres Nutzerverhaltens verwendet werden.
                                </p>
                                <p>
                                    <strong>1.2.</strong> Das Mietobjekt wird dem Kunden für die Vertragsdauer ausschließlich zur Nutzung für
                                    Beherbergungszwecke überlassen. Das Mietobjekt darf nur mit der bei der Buchung angegebenen Personenanzahl belegt werden.
                                    Die Unter- oder Weitervermietung ist nicht gestattet. Die Nutzung zu einem anderen Zweck als dem der Beherbergung bedarf der
                                    vorherigen Einwilligung.
                                </p>
                            </article>
                            <article data-name='Vertragsabschluss'>
                                <h2>2. Vertragsabschluss</h2>
                                <p>
                                    <strong>2.1.</strong> Buchungen des Kunden können durch persönliche Kontaktaufnahme (E-Mail, Telefon, schriftlich) erfolgen,
                                    sowie über das Buchungssystem der Webseite{' '}
                                    <a className='underlineLink' href='https://www.ebenrieder.de' target='_blank' rel='noopener noreferrer'>
                                        www.ebenrieder.de
                                    </a>{' '}
                                    mit den dort möglichen Zahlungsarten.
                                </p>
                                <p>
                                    <strong>2.2.</strong> Der Beherbungsvertrag ist verbindlich geschlossen, sobald die vereinbarte Zahlung geleistet wurde oder
                                    das Angebot des Beherbergungsbetriebs an den Kunden von diesem schriftlich bestätigt wurde. Der Kunde erkennt mit der
                                    Buchung diese AGBs an.
                                </p>
                            </article>
                            <article data-name='Leistungen'>
                                <h2>3. Preise und Leistungen</h2>
                                <p>
                                    <strong>3.1.</strong> Die im Mietpreis angegebenen Preise sind Endpreise und enthalten alle Nebenkosten (Strom, Wasser,
                                    Heizung), sowie die Kosten für die Nutzung von Bettwäsche und Handtüchern. Bei Webbuchungen von Ferienwohnungen sind die
                                    Kosten für die Endreinigung bereits inkludiert. Siehe <strong>5.2.</strong>
                                </p>
                                <p>
                                    <strong>3.2.</strong> Gesondert anfallen und ausgewiesen sein können Kurtaxe oder Fremdenverkehrsangaben sowie Entgelte für
                                    Leistungen, bei denen eine verbrauchsabhängige Abrechnung in der Buchungsgrundlage angegeben oder gesondert vereinbart ist
                                    sowie für Wahl- und Zusatzleistungen.
                                </p>
                                <p>
                                    <strong>3.3.</strong> Alle Preise schließen die gesetzliche Mehrwertsteuer zum Zeitpunkt der Leistungserbringung mit ein.
                                </p>
                                <p>
                                    <strong>3.4.</strong> Für Gruppenbuchungen gelten immer die im individuellen Angebot angegebenen Leistungen und Zahlungs-,
                                    sowie Stornobedinungen.
                                </p>
                            </article>
                            <article data-name='Zahlungsweise'>
                                <h2>4. Zahlungsweise und Fälligkeit</h2>
                                <p>
                                    <strong>4.1.</strong> Der Kunde ist verpflichtet, die für die Zimmerüberlassung und die von ihm in Anspruch genommenen
                                    weiteren Leistungen vereinbarten bzw. geltenden Preise an den Beherbergungsbetrieb zu zahlen. Dies gilt auch für vom Kunden
                                    direkt oder über den Beherbergungsbetrieb beauftragte Leistungen, die durch Dritte erbracht und vom Hotel verauslagt werden.
                                </p>
                                <p>
                                    <strong>4.2.</strong> Der Beherbergungsbetrieb ist berechtigt, bei Vertragsschluss vom Kunden eine angemessene Vorauszahlung
                                    oder Sicherheitsleistung, zum Beispiel in Form einer Kreditkartensicherheit, zu verlangen. Die Höhe der Vorauszahlung und
                                    die Zahlungstermine können im Vertrag in Textform vereinbart werden. Bei Zahlungsverzug des Kunden gelten die gesetzlichen
                                    Regelungen.
                                </p>
                                <p>
                                    <strong>4.3.</strong> Für Buchungen von Ferienwohnungen über die Website gelten die dort angegebenen Zahlungsbedingungen und
                                    Zahlungsmöglichkeiten.
                                </p>
                                <p>
                                    <strong>4.4.</strong> Bei Gruppenbuchungen für das ganze Haus ist eine Anzahlung von 10% des angebotenen Gesamtbetrages
                                    erforderlich, um den gewünschten Zeitraum zu reservieren. 8 Wochen vor Veranstaltungsbegin sind weitere 40% des
                                    Gesamtbetrages fällig und 4 Wochen vor Anreise werden die restlichen 50% des Gesamtbetrages fällig. Bis dahin muss auch die
                                    Teilnehmerzahl verbindlich mitgeteilt werden. Sollte die Teilnehmerzahl geringer ausfallen, erfolgt keine Erstattung auf
                                    Übernachtungsleistungen. Die bevorzugte Zahlungsmethode bei Gruppenveranstaltungen ist die Banküberweisung.
                                </p>
                            </article>
                            <article data-name='An- & Abreise'>
                                <h2>5. Zeitpunkte der An- und Abreise</h2>
                                <p>
                                    <strong>5.1.</strong> Gebuchte Ferienwohnungen, Zimmer oder andere Räumlichkeiten stehen dem Kunden ab 15:00 Uhr am Tag der
                                    Anreise zur Verfügung. Der Kunde hat keinen Anspruch auf eine frühere Bereitstellung. Sollte die Anreise nach 18:00 Uhr
                                    erfolgen, so muss der Mieter dies dem Beherbergungsbetrieb mitteilen.
                                </p>
                                <p>
                                    <strong>5.2.</strong> Die ordnungsgemäße Rückgabe des Mietobjekts hat am Abreisetag bis spätestens 11.00 Uhr zu erfolgen.
                                    Bei einer Verlängerung des Aufenthalts bis max. 18h werden 50% des Zimmerpreises pro Nacht berechnet. Dies ist nur nach
                                    Rücksprache möglich.Das Mietobjekt ist in einem besenreinen und ordentlichen Zustand (Geschirr gespült, Spülmaschine leer,
                                    etc.) zu übergeben. Der Beherbergungsbetrieb behält sich vor, eine zusätzliche Endreinigungsgebühr zu ergeben, sollte das
                                    Mietobjekt in einem Zustand übergeben werden, der einen erhöhten Reinigungsaufwand verlangt.
                                </p>
                                <p>
                                    <strong>5.3.</strong> Abweichende An- und Abreisezeiten können in Ausnahmefällen individuell vereinbart werden.
                                </p>
                            </article>
                            <article data-name='Kundenstornierung'>
                                <h2>6. Rücktritt, Stornierung seitens des Kunden</h2>
                                <p>
                                    <strong>6.1.</strong> Ein gesetzliches Widerrufsrecht besteht gemäß § 312g Abs. 2 Nr. 9 nicht.
                                </p>
                                <p>
                                    <strong>6.2.</strong> Der Abschluss des Vertrages verpflichtet beide Vertragspartner zur Erfüllung des Vertrages,
                                    gleichgültig, für welche Dauer der Vertrag abgeschlossen ist. Ein einseitiger, kostenfreier Rücktritt seitens des Kunden von
                                    einer verbindlichen Buchung besteht nur in dem in <strong>6.3.</strong> angegebenen Zeitrahmen.
                                </p>
                                <p>
                                    <strong>6.3.</strong> Bei Individualbuchungen gelten folgende Stornierungsbedingungen:
                                </p>
                                <ul>
                                    <li>Bis 30 Tage vor Anreise ist die Stornierung kostenfrei möglich</li>
                                    <li>Bei einer Stornierung weniger als 30 Tage vor Reiseantritt werden 50% der vereinbarten Leistungen fällig</li>
                                    <li>
                                        Ab 3 Tage vor Anreise oder bei Nichtanreise ohne jegliche schriftliche Absage werden 100% der vereinbarten Leistungen
                                        fällig
                                    </li>
                                </ul>
                                <p>
                                    <strong>6.4.</strong> Bei Buchungen im Rahmen einer Gruppenveranstaltung gelten folgende Stornierungsbedingungen:
                                </p>
                                <ul>
                                    <li>Bis 60 Tage vor Anreise betragen die Stornierungskosten 150€. Der Restbetrag der Anzahlung wird zurück überwiesen</li>
                                    <li>Bei einer Stornierung zwischen 59 und 30 Tage vor Reiseantritt werden 50% der vereinbarten Leistungen fällig</li>
                                    <li>Bei einer Stornierung weniger als 29 Tage vor Veranstaltungsbeginn werden 100% der vereinbarten Leistungen fällig</li>
                                </ul>
                                <p>
                                    <strong>6.5.</strong> Gelingt es dem Beherbergungsbetrieb, das ursprünglich gebuchte Mietobjekt an Dritte weiterzuvermieten,
                                    so hat der Kunde in jedem Fall eine Pauschale von 30% des Mietpreises als Aufwendungsersatz zu zahlen.
                                </p>
                                <p>
                                    <strong>6.6.</strong> Es steht dem Kunden frei nachzuweisen, dass dem Beherbergungsbetrieb kein oder ein geringerer Schaden
                                    entstanden ist.
                                </p>
                                <p>
                                    <strong>6.7.</strong> Geleistete Zahlungen wird der Beherbergungsbetrieb unter Anrechnung des geschuldeten Mietpreises und
                                    ggfs. angefallener Gebühren von Zahlungsdienstleistern umgehend an den Kunden zurückerstatten.
                                </p>
                                <p>
                                    <strong>6.8.</strong> Es wird empfohlen eine Reiserücktritts- bzw. Reiseabbruchversicherung abzuschließen.
                                </p>
                            </article>
                            <article data-name='Berherbergungsstornierung'>
                                <h2>7. Rücktritt, Stornierung seitens des Beherbergungs&shy;betriebes</h2>
                                <p>
                                    <strong>7.1.</strong> Sofern vereinbart wurde, dass der Kunde innerhalb einer bestimmten Frist kostenfrei vom Vertrag
                                    zurücktreten kann, ist der Beherbergungsbetrieb in diesem Zeitraum seinerseits berechtigt, vom Vertrag zurückzutreten, wenn
                                    Anfragen anderer Kunden nach den vertraglich gebuchten Zimmern vorliegen und der Kunde auf Rückfrage des Hotels mit
                                    angemessener Fristsetzung auf sein Recht zum Rücktritt nicht verzichtet.
                                </p>
                                <p>
                                    <strong>7.2.</strong> Wird eine gemäß Ziffer <strong>4.2.</strong> vereinbarte oder verlangte Vorauszahlung oder
                                    Sicherheitsleistung auch nach Verstreichen einer vom Hotel gesetzten angemessenen Nachfrist nicht geleistet, so ist der
                                    Beherbergungsbetrieb ebenfalls zum Rücktritt vom Vertrag berechtigt.
                                </p>
                                <p>
                                    <strong>7.3.</strong> Ferner ist der Beherbergungsbetrieb berechtigt, aus sachlich gerechtfertigtem Grund vom Vertrag
                                    außerordentlich zurückzutreten, insbesondere falls:
                                </p>
                                <ul>
                                    <li>
                                        Höhere Gewalt oder andere vom Beherbergungsbetrieb nicht zu vertretende Umstände die Erfüllung des Vertrages unmöglich
                                        machen
                                    </li>
                                    <li>
                                        Zimmer oder Räume schuldhaft unter irreführender oder falscher Angabe oder Verschweigen wesentlicher Tatsachen gebucht
                                        werden; wesentlich kann dabei die Identität des Kunden, die Zahlungsfähigkeit oder der Aufenthaltszweck sein
                                    </li>
                                    <li>
                                        Der Beherbergungsbetrieb begründeten Anlass zu der Annahme hat, dass die Inanspruchnahme der Leistung den reibungslosen
                                        Geschäftsbetrieb, die Sicherheit oder das Ansehen des Beherbergungsbetriebes in der Öffentlichkeit gefährden kann, ohne
                                        dass dies dem Herrschafts- bzw. Organisationsbereich des Hotels zuzurechnen ist
                                    </li>
                                    <li>
                                        Der Zweck bzw. der Anlass des Aufenthaltes gesetzwidrig ist oder ein Verstoß gegen oben genannte Ziffer{' '}
                                        <strong>1.2.</strong> vorliegt
                                    </li>
                                </ul>
                                <p>
                                    <strong>7.4.</strong> Der berechtigte Rücktritt des Hotels begründet keinen Anspruch des Kunden auf Schadensersatz.
                                </p>
                            </article>
                            <article data-name='Nutzungsbedingungen'>
                                <h2>8. Pflichten des Gastes, Nutzungs&shy;bedingungen im Einzelnen</h2>
                                <p>
                                    <strong>8.1.</strong> Der Gast verpflichtet sich, die Nutzungsbedingungen von des Beherbergungsbetriebes einzuhalten und das
                                    Mietobjekt nebst Inventar während seines Aufenthaltes mit größter Sorgfalt zu behandeln.
                                </p>
                                <p>
                                    <strong>8.2.</strong> Aus haftungsrechtlichen Gründen ist der Zutritt für Dritte (Nichtgäste) untersagt.
                                </p>
                                <p>
                                    <strong>8.3.</strong> Ein Aufenthalt mit Kindern ist erst ab einem Alter von 12 Jahren möglich.
                                </p>
                                <p>
                                    <strong>8.4.</strong> Der Gast haftet gegenüber dem Beherbergungsbetrieb für die schuldhafte Beschädigung von Inventar,
                                    Einrichtungsgegenständen, Mieträumen, Böden, des Gebäudes sowie der Außenanlagen (z.B. Terrasse, Garten, Außenmöbel). Der
                                    Gast hat sicherzustellen, dass Fenster, Türen sowie Dachfenster beim Verlassen des Mietobjekts geschlossen sind.
                                    Reparaturkosten, die wegen Schäden aufgrund offen stehender Türen und Fenster entstanden sind, hat der Gast zu tragen.
                                </p>
                                <p>
                                    <strong>8.5.</strong> Schäden hat der Gast unverzüglich dem Beherbergungsbetrieb anzuzeigen. Für die durch nicht rechtzeitig
                                    gemeldete Schäden entstandenen Folgeschäden ist der Gast ersatzpflichtig.
                                </p>
                                <p>
                                    <strong>8.6.</strong> Eine Mitnahme und Unterbringung von Haustieren auf dem Gelände und in die Gebäude des
                                    Beherbergungsbetriebs ist nur nach Rücksprache erlaubt.
                                </p>
                                <p>
                                    <strong>8.7.</strong> Rauchen ist innerhalb der Gebäude nicht erlaubt. Der Beherbergungsbetrieb ist berechtigt, bei
                                    Zuwiderhandlungen eine vollständige Grundreinigung auf Kosten des Gastes durchzuführen. Beim Rauchen im Außenbereich hat der
                                    Gast darauf zu achten, dass Dritte nicht beeinträchtigt werden.
                                </p>
                                <p>
                                    <strong>8.8.</strong> Offenes Feuer und die Benutzung von pyrotechnischen Artikeln sind auf dem gesamten Gelände untersagt.
                                    Ebenso ist es untersagt das Gebäude mit selbst mitgebrachten Materialien zu dekorieren.
                                </p>
                                <p>
                                    <strong>8.9.</strong> Das Gebäude grenzt an Wohnbebauung. Der Gast hat deshalb und auf Rücksicht auf die anderen anwesenden
                                    Gäste die allgemeinen Ruhezeiten zu Mittag sowie an Sonn- und Feiertagen zu beachten. Die allgemeine Nachtruhe beginnt um
                                    22:00 Uhr.
                                </p>
                                <p>
                                    <strong>8.10.</strong> Der Gast hat sicherzustellen, dass er über eine Haftpflichtversicherung verfügt.
                                </p>
                            </article>
                            <article data-name='Kündigungsrecht'>
                                <h2>9. Außer&shy;ordentliches Kündigungs&shy;recht</h2>
                                <p>
                                    Der Beherbergungsbetrieb behält sich vor, bei einer schuldhaften Verletzung einer der vorstehend in Ziffer{' '}
                                    <strong>8</strong> genannten Pflichten durch den Gast oder durch mitreisende Personen das Vertragsverhältnis aus wichtigem
                                    Grund außerordentlich ohne Frist zu kündigen.
                                </p>
                            </article>
                            <article data-name='Haftungsbeschränkung'>
                                <h2>10. Haftungs&shy;beschränkung</h2>
                                <p>
                                    Die Haftung des Beherbergungsbetriebs ist beschränkt auf die schuldhafte Verletzung des Lebens, des Körpers oder der
                                    Gesundheit sowie auf sonstige Schäden, die auf einer vorsätzlichen oder grob fahrlässigen Pflichtverletzung des
                                    Beherbergungsbetriebs beruhen. Die Haftungsbeschränkung gilt nicht bei der Verletzung von vertragstypischen Pflichten. Der
                                    Beherbergungsbetrieb haftet nicht für Schäden oder das Abhandenkommen von Fahrzeugen oder im Außenbereich abgestellten
                                    Fahrrädern.
                                </p>
                            </article>
                            <article data-name='Schlussbestimmung'>
                                <h2>11. Schluss&shy;bestimmung</h2>
                                <p>
                                    <strong>11.1.</strong> Änderungen und Ergänzungen des Vertrages, der Antragsannahme oder dieser Allgemeinen
                                    Geschäftsbedingungen sollen in Textform erfolgen. Einseitige Änderungen oder Ergänzungen durch den Kunden sind unwirksam.
                                </p>
                                <p>
                                    <strong>11.2.</strong> Erfüllungsort und Gerichtsstand ist der Sitz von des Beherbergungsbetriebes. Es gilt deutsches Recht.
                                    Die Anwendung des UN Kaufrechts und des Kollisionsrechts ist ausgeschlossen.
                                </p>
                                <p>
                                    <strong>11.3.</strong> Sollten einzelne Bestimmungen dieser Allgemeinen Geschäftsbedingungen unwirksam oder nichtig sein
                                    oder werden, so wird dadurch die Wirksamkeit der übrigen Bestimmungen nicht berührt. Im Übrigen gelten die gesetzlichen
                                    Vorschriften.
                                </p>
                            </article>
                        </div>
                    )}
                    {language === 'en' && (
                        <div id='termsWrapper'>
                            <article data-name='Purpose'>
                                <h2>1. Scope and purpose of use</h2>
                                <p>
                                    <strong>1.1.</strong> These terms and conditions apply to contracts for the rental of holiday apartments, rooms and, if
                                    applicable, other rooms for accommodation and holding events, as well as all other services and deliveries provided to the
                                    customer in this context by the following accommodation provider:
                                </p>
                                <ul>
                                    <li>
                                        Ebenrieder Farmhaus GmbH, Remnatsried 2 in 87675 Stötten am Auerberg (hereinafter referred to as the ≫accommodation
                                        provider≪), legally represented by General Manager Stefan Hahn with the VAT-ID DE36853529
                                    </li>
                                    <li>The term ≫customer≪ is used uniformly for the purchaser, guest, tenant, organizer, etc.</li>
                                </ul>
                                <p>
                                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Webseite zu gewährleisten. Andere Daten können zur
                                    Analyse Ihres Nutzerverhaltens verwendet werden.
                                </p>
                                <p>
                                    <strong>1.2.</strong> The rental property is made available to the customer for the duration of the contract exclusively for
                                    use for accommodation purposes. The rental property may only be occupied by the number of people specified when booking.
                                    Subletting or further letting is not permitted. Use for any purpose other than accommodation requires prior consent.
                                </p>
                            </article>
                            <article data-name='Contract'>
                                <h2>2. Conclusion of contract</h2>
                                <p>
                                    <strong>2.1.</strong> Customers can make bookings by contacting us personally (email, telephone, in writing), as well as via
                                    the booking system on the website{' '}
                                    <a className='underlineLink' href='https://www.ebenrieder.de' target='_blank' rel='noopener noreferrer'>
                                        www.ebenrieder.de
                                    </a>{' '}
                                    with the payment methods available there.
                                </p>
                                <p>
                                    <strong>2.2.</strong> The accommodation contract is binding as soon as the agreed payment has been made or the accommodation
                                    provider's offer to the customer has been confirmed in writing by the customer. By booking, the customer accepts these terms
                                    and conditions.
                                </p>
                            </article>
                            <article data-name='Services'>
                                <h2>3. Prices and services</h2>
                                <p>
                                    <strong>3.1.</strong> The prices stated in the rental price are final prices and include all additional costs (electricity,
                                    water, heating), as well as the costs for the use of bed linen and towels. When booking holiday apartments online, the costs
                                    for the final cleaning are already included. See <strong>5.2.</strong>
                                </p>
                                <p>
                                    <strong>3.2.</strong> Tourist tax or tourist information as well as fees for services for which consumption-based billing is
                                    specified in the booking basis or agreed separately as well as for optional and additional services may be incurred and
                                    shown separately.
                                </p>
                                <p>
                                    <strong>3.3.</strong> All prices include statutory VAT at the time the service is provided.
                                </p>
                                <p>
                                    <strong>3.4.</strong> For group bookings, the services and payment and cancellation conditions specified in the individual
                                    offer always apply.
                                </p>
                            </article>
                            <article data-name='Payment'>
                                <h2>4. Method of payment and due date</h2>
                                <p>
                                    <strong>4.1.</strong> The customer is obliged to pay the agreed or applicable prices to the accommodation provider for the
                                    provision of the room and the other services used by him. This also applies to services ordered by the customer directly or
                                    through the accommodation provider, which are provided by third parties and paid for by the hotel.
                                </p>
                                <p>
                                    <strong>4.2.</strong> The accommodation provider is entitled to demand an appropriate advance payment or security from the
                                    customer upon conclusion of the contract, for example in the form of a credit card security. The amount of the advance
                                    payment and the payment dates can be agreed in writing in the contract. If the customer defaults on payment, the statutory
                                    regulations apply.
                                </p>
                                <p>
                                    <strong>4.3.</strong> For bookings of holiday apartments via the website, the payment conditions and payment options
                                    specified there apply.
                                </p>
                                <p>
                                    <strong>4.4.</strong> For group bookings, a deposit of 10% of the total amount offered is required in order to reserve the
                                    desired period. 8 weeks before the start of the event, a further 40% of the total amount is due and 4 weeks before arrival,
                                    the remaining 50% of the total amount is due. The number of participants must also be communicated by then. If the number of
                                    participants is lower, no refund will be made. The preferred payment method for group events is bank transfer.
                                </p>
                            </article>
                            <article data-name='Arrival & Departure'>
                                <h2>5. Arrival and departure times</h2>
                                <p>
                                    <strong>5.1.</strong> Booked holiday apartments, rooms or other rooms are available to the customer from 3:00 p.m. on the
                                    day of arrival. The customer is not entitled to earlier availability. If the arrival is after 6:00 p.m., the tenant must
                                    inform the accommodation provider.
                                </p>
                                <p>
                                    <strong>5.2.</strong> The rental property must be returned in good condition by 11:00 a.m. on the day of departure at the
                                    latest. If the stay is extended to a maximum of 6 p.m., 50% of the room price per night will be charged. This is only
                                    possible after consultation. The rental property must be handed over in a clean and tidy condition (dishes washed,
                                    dishwasher empty, etc.). The accommodation provider reserves the right to charge an additional final cleaning fee if the
                                    rental property is handed over in a condition that requires increased cleaning effort.
                                </p>
                                <p>
                                    <strong>5.3.</strong> Different arrival and departure times can be agreed individually in exceptional cases.
                                </p>
                            </article>
                            <article data-name='Cancellation By Customer'>
                                <h2>6. Withdrawal, cancellation by the customer</h2>
                                <p>
                                    <strong>6.1.</strong> There is no statutory right of withdrawal according to BGB Section 312g Paragraph 2 No. 9.
                                </p>
                                <p>
                                    <strong>6.2.</strong> The conclusion of the contract obliges both contracting parties to fulfill the contract, regardless of
                                    the duration for which the contract is concluded. A unilateral, free withdrawal. The customer may only withdraw from a
                                    binding booking within the time frame specified in <strong>6.3.</strong>
                                </p>
                                <p>
                                    <strong>6.3.</strong> The following cancellation conditions apply to individual bookings:
                                </p>
                                <ul>
                                    <li>Cancellation is possible free of charge up to 30 days before arrival</li>
                                    <li>If you cancel less than 30 days before the start of the trip, 50% of the agreed services will be due</li>
                                    <li>
                                        From 3 days before arrival or in the event of a no-show without any written cancellation, 100% of the agreed services
                                        will be due
                                    </li>
                                </ul>
                                <p>
                                    <strong>6.4.</strong> The following cancellation conditions apply to bookings as part of a group event:
                                </p>
                                <ul>
                                    <li>Up to 60 days before arrival, the cancellation fee is €150. The remaining deposit will be refunded</li>
                                    <li>If you cancel between 59 and 30 days before the start of the event, 50% of the agreed services will be due</li>
                                    <li>If you cancel less than 29 days before the start of the event, 100% of the agreed services will be due</li>
                                </ul>
                                <p>
                                    <strong>6.5.</strong> If the accommodation provider succeeds in subletting the originally booked rental property to a third
                                    party, the customer must in any case pay a flat rate of 30% of the rental price as reimbursement of expenses.
                                </p>
                                <p>
                                    <strong>6.6.</strong> The customer is free to prove that the accommodation provider has suffered no or less damage.
                                </p>
                                <p>
                                    <strong>6.7.</strong> The accommodation provider will immediately refund any payments made to the customer, taking into
                                    account the rental price owed and any fees incurred by payment service providers.
                                </p>
                                <p>
                                    <strong>6.8.</strong> It is recommended to have a travel-cancellation or trip-interruption insurance.
                                </p>
                            </article>
                            <article data-name='Cancellation By Accommodation'>
                                <h2>7. Withdrawal, cancellation by the accommodation provider</h2>
                                <p>
                                    <strong>7.1.</strong> If it has been agreed that the customer can withdraw from the contract free of charge within a certain
                                    period of time, the accommodation provider is entitled to withdraw from the contract during this period if other customers
                                    request the contractually booked rooms and the customer does not waive his right to withdraw when asked by the hotel within
                                    a reasonable period of time.
                                </p>
                                <p>
                                    <strong>7.2.</strong> If an advance payment or security agreed or required in accordance with section <strong>4.2.</strong>{' '}
                                    is not made even after the expiry of a reasonable grace period set by the hotel, the accommodation provider is also entitled
                                    to withdraw from the contract.
                                </p>
                                <p>
                                    <strong>7.3.</strong> Furthermore, the accommodation provider is entitled to withdraw from the contract for good cause for
                                    objectively justified reasons, in particular if:
                                </p>
                                <ul>
                                    <li>
                                        Force majeure or other circumstances beyond the control of the accommodation provider make fulfilment of the contract
                                        impossible
                                    </li>
                                    <li>
                                        Rooms or spaces are culpably booked using misleading or false information or by concealing essential facts; the identity
                                        of the customer, their ability to pay or the purpose of their stay can be important factors
                                    </li>
                                    <li>
                                        The accommodation provider has reasonable grounds to believe that the use of the service could endanger the smooth
                                        running of the business, the security or the public reputation of the accommodation provider, without this being
                                        attributable to the hotel's sphere of control or organisation
                                    </li>
                                    <li>
                                        The purpose or reason for the stay is illegal or there is a violation of section <strong>1.2.</strong> above
                                    </li>
                                </ul>
                                <p>
                                    <strong>7.4.</strong> The justified withdrawal of the hotel does not give the customer any right to compensation.
                                </p>
                            </article>
                            <article data-name='Terms Of Use'>
                                <h2>8. Obligations of the guest, terms of use in detail</h2>
                                <p>
                                    <strong>8.1.</strong> The guest undertakes to comply with the terms of use of the accommodation provider and to treat the
                                    rental property and its inventory with the utmost care during their stay.
                                </p>
                                <p>
                                    <strong>8.2.</strong> For liability reasons, access for third parties (non-guests) is prohibited.
                                </p>
                                <p>
                                    <strong>8.3.</strong> A stay with children is only possible from the age of 12.
                                </p>
                                <p>
                                    <strong>8.4.</strong> The guest is liable to the accommodation provider for any culpable damage to inventory, furnishings,
                                    rented rooms, floors, the building and the outdoor facilities (e.g. terrace, garden, outdoor furniture). The guest must
                                    ensure that windows, doors and skylights are closed when leaving the rental property. Repair costs resulting from damage
                                    caused by doors and windows being left open must be borne by the guest.
                                </p>
                                <p>
                                    <strong>8.5.</strong> The guest must report any damage to the accommodation provider immediately. The guest is liable for
                                    any consequential damage caused by damage not reported in time.
                                </p>
                                <p>
                                    <strong>8.6.</strong> Pets may only be brought onto and kept on the premises and in the buildings of the accommodation
                                    provider after consultation.
                                </p>
                                <p>
                                    <strong>8.7.</strong> Smoking is not permitted inside the buildings. In the event of violations, the accommodation provider
                                    is entitled to carry out a complete basic cleaning at the guest's expense. When smoking outside, the guest must ensure that
                                    third parties are not disturbed.
                                </p>
                                <p>
                                    <strong>8.8.</strong> Open fires and the use of pyrotechnic items are prohibited on the entire site.
                                </p>
                                <p>
                                    <strong>8.9.</strong> The building borders residential buildings. The guest must therefore, and out of consideration for the
                                    other guests present, observe the general quiet times at midday and on Sundays and public holidays. The general night-time
                                    quiet period begins at 10 p.m.
                                </p>
                                <p>
                                    <strong>8.10.</strong> The guest must ensure that he has liability insurance.
                                </p>
                            </article>
                            <article data-name='Right Of Termination'>
                                <h2>9. Extraordinary right of termination</h2>
                                <p>
                                    The accommodation provider reserves the right to terminate the contractual relationship for good cause without notice in the
                                    event of a culpable breach of one of the obligations mentioned in section <strong>8</strong> above by the guest or by
                                    accompanying persons.
                                </p>
                            </article>
                            <article data-name='Limitation Of Liability'>
                                <h2>10. Limitation of liability</h2>
                                <p>
                                    The liability of the accommodation provider is limited to culpable injury to life, body or health as well as to other
                                    damages that are based on an intentional or grossly negligent breach of duty by the accommodation provider. The limitation
                                    of liability does not apply in the event of a breach of typical contractual obligations. The accommodation provider is not
                                    liable for damage or the loss of vehicles or bicycles parked outside.
                                </p>
                            </article>
                            <article data-name='Final Provision'>
                                <h2>11. Final provision</h2>
                                <p>
                                    <strong>11.1.</strong> Changes and additions to the contract, the acceptance of the application or these general terms and
                                    conditions must be made in writing. Unilateral changes or additions by the customer are invalid.
                                </p>
                                <p>
                                    <strong>11.2.</strong> The place of performance and jurisdiction is the registered office of the accommodation provider.
                                    German law applies. The application of the UN Convention on Contracts for the International Sale of Goods and the conflict
                                    of laws is excluded.
                                </p>
                                <p>
                                    <strong>11.3.</strong> Should individual provisions of these general terms and conditions be or become invalid or void, this
                                    will not affect the validity of the remaining provisions. Otherwise, the statutory provisions apply.
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

export default withRouter(Terms);
