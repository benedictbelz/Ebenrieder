import * as React from 'react';
import Menu from '../../Components/Menu/Menu';
import { getLanguage } from '../../@presets/language';
import { Browser } from '../../@types/browser';
import './Imprint.scss';

interface Props {
    browser: Browser;
}

interface States {}

export default class Imprint extends React.Component<Props, States> {
    render() {
        // DEFINE VARIABLES
        const language = this.props.browser.language;
        // RETURN COMPONENT
        return (
            <div id='imprint'>
                <Menu browser={this.props.browser} behaviour={'Static'} />
                <h1>{getLanguage(this.props.browser.language, 'imprint')}</h1>
                <div id='imprintContent'>
                    <div id='imprintLeft'>
                        <section className='imprintContact'>
                            <span>Ebenrieder GmbH</span>
                            <span>Remnatsried 2</span>
                            <span>87675 Stötten am Auerberg</span>
                            <span>Deutschland</span>
                        </section>
                        <section className='imprintPhone'>
                            <h4>{getLanguage(language, 'imprintPhone')}</h4>
                            <a className='underlineLink' href='tel:+491633938055'>
                                +49 163 3938055
                            </a>
                        </section>
                        <section className='imprintEmail'>
                            <h4>{getLanguage(language, 'imprintEmail')}</h4>
                            <a className='underlineLink' href='mailto:hallo@ebenrieder.de'>
                                hallo@ebenrieder.de
                            </a>
                        </section>
                        <section className='imprintTaxIdentification'>
                            <h4>{getLanguage(language, 'imprintTaxIdentification')}</h4>
                            <span>DE11111111</span>
                        </section>
                        <section className='imprintCommercialRegister'>
                            <h4>{getLanguage(language, 'imprintCommercialRegister')}</h4>
                            <span>München HRB 111111 B</span>
                        </section>
                        <section className='imprintExecutiveBoard'>
                            <h4>{getLanguage(language, 'imprintExecutiveBoard')}</h4>
                            <span>Stefan Hahn</span>
                            <span>Jasmin Hahn</span>
                        </section>
                        <section className='imprintResponsibleForContent'>
                            <h4>{getLanguage(language, 'imprintResponsibleForContent')}</h4>
                            <span>Stefan Hahn</span>
                        </section>
                        <section className='imprintConception'>
                            <h4>{getLanguage(language, 'imprintConception')}</h4>
                            <span>Gerwin Schmidt</span>
                            <span>Benedict Belz</span>
                        </section>
                        <section className='imprintPhotography'>
                            <h4>{getLanguage(language, 'imprintPhotography')}</h4>
                            <span>Regina Recht</span>
                        </section>
                        <section className='imprintText'>
                            <h4>{getLanguage(language, 'imprintText')}</h4>
                            <span>Katja Schwengler</span>
                        </section>
                    </div>
                    <div id='imprintRight'>
                        <article data-name={getLanguage(language, 'imprintContentTitle')}>
                            <h2>{getLanguage(language, 'imprintContentTitle')}</h2>
                            <p>{getLanguage(language, 'imprintContentText')}</p>
                        </article>
                        <article data-name={getLanguage(language, 'imprintLinksTitle')}>
                            <h2>{getLanguage(language, 'imprintLinksTitle')}</h2>
                            <p>{getLanguage(language, 'imprintLinksText')}</p>
                        </article>
                        <article data-name={getLanguage(language, 'imprintCopyrightTitle')}>
                            <h2>{getLanguage(language, 'imprintCopyrightTitle')}</h2>
                            <p>{getLanguage(language, 'imprintCopyrightText')}</p>
                        </article>
                        <article data-name={getLanguage(language, 'imprintPrivacyTitle')}>
                            <h2>{getLanguage(language, 'imprintPrivacyTitle')}</h2>
                            <p>{getLanguage(language, 'imprintPrivacyText')}</p>
                        </article>
                        <article data-name={getLanguage(language, 'imprintLegalTitle')}>
                            <h2>{getLanguage(language, 'imprintLegalTitle')}</h2>
                            <p>{getLanguage(language, 'imprintLegalText')}</p>
                        </article>
                        <article data-name={getLanguage(language, 'imprintCookiesTitle')}>
                            <h2>{getLanguage(language, 'imprintCookiesTitle')}</h2>
                            <p>{getLanguage(language, 'imprintCookiesText')}</p>
                        </article>
                        <article data-name={getLanguage(language, 'imprintGoogleTitle')}>
                            <h2>{getLanguage(language, 'imprintGoogleTitle')}</h2>
                            <p>{getLanguage(language, 'imprintGoogleText')}</p>
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}
