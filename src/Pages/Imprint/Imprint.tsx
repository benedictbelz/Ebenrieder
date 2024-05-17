import * as React from 'react';
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
                <h1>{getLanguage(this.props.browser.language, 'imprint')}</h1>
                <div id='content'>
                    <div id='left'>
                        <article className='contact'>
                            <span>Ebenrieder GmbH</span>
                            <span>Remnatsried 2</span>
                            <span>87675 Stötten am Auerberg</span>
                            <span>Deutschland</span>
                        </article>
                        <article className='phone'>
                            <h4>{getLanguage(language, 'phone')}</h4>
                            <a className='underline' href='tel:+491633938055'>
                                +49 163 3938055
                            </a>
                        </article>
                        <article className='email'>
                            <h4>{getLanguage(language, 'email')}</h4>
                            <a className='underline' href='mailto:hallo@ebenrieder.de'>
                                hallo@ebenrieder.de
                            </a>
                        </article>
                        <article className='taxIdentification'>
                            <h4>{getLanguage(language, 'taxIdentification')}</h4>
                            <span>DE11111111</span>
                        </article>
                        <article className='commercialRegister'>
                            <h4>{getLanguage(language, 'commercialRegister')}</h4>
                            <span>München HRB 111111 B</span>
                        </article>
                        <article className='executiveBoard'>
                            <h4>{getLanguage(language, 'executiveBoard')}</h4>
                            <span>Stefan Hahn</span>
                            <span>Jasmin Hahn</span>
                        </article>
                        <article className='responsibleForContent'>
                            <h4>{getLanguage(language, 'responsibleForContent')}</h4>
                            <span>Stefan Hahn</span>
                        </article>
                        <article className='conception'>
                            <h4>{getLanguage(language, 'conception')}</h4>
                            <span>Gerwin Schmidt</span>
                            <span>Benedict Belz</span>
                        </article>
                        <article className='photography'>
                            <h4>{getLanguage(language, 'photography')}</h4>
                            <span>Regina Recht</span>
                        </article>
                    </div>
                    <div id='right'>
                        <article>
                            <h2>{getLanguage(language, 'imprint_content_title')}</h2>
                            <p>{getLanguage(language, 'imprint_content_text')}</p>
                        </article>
                        <article>
                            <h2>{getLanguage(language, 'imprint_links_title')}</h2>
                            <p>{getLanguage(language, 'imprint_links_text')}</p>
                        </article>
                        <article>
                            <h2>{getLanguage(language, 'imprint_copyright_title')}</h2>
                            <p>{getLanguage(language, 'imprint_copyright_text')}</p>
                        </article>
                        <article>
                            <h2>{getLanguage(language, 'imprint_privacy_title')}</h2>
                            <p>{getLanguage(language, 'imprint_privacy_text')}</p>
                        </article>
                        <article>
                            <h2>{getLanguage(language, 'imprint_legal_title')}</h2>
                            <p>{getLanguage(language, 'imprint_legal_text')}</p>
                        </article>
                        <article>
                            <h2>{getLanguage(language, 'imprint_cookies_title')}</h2>
                            <p>{getLanguage(language, 'imprint_cookies_text')}</p>
                        </article>
                        <article>
                            <h2>{getLanguage(language, 'imprint_google_title')}</h2>
                            <p>{getLanguage(language, 'imprint_google_text')}</p>
                        </article>
                    </div>
                </div>
            </div>
        );
    }
}
