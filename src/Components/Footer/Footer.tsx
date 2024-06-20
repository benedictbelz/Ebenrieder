import * as React from 'react';
import { Link } from 'react-router-dom';
import { getLanguage } from '../../@presets/language';
import { Browser } from '../../@types/browser';
import './Footer.scss';

interface Props {
    browser: Browser;
}

export default class Header extends React.Component<Props> {
    render() {
        // DEFINE VARIABLES
        const language = this.props.browser.language;
        // RETURN COMPONENT
        return (
            <div id='footer'>
                <div id='footerInformation'>
                    <a className='underlineLink' href='mailto:hallo@ebenrieder.de'>
                        hallo@ebenrieder.de
                    </a>
                    <a className='underlineLink' href='tel:+4983499763940'>
                        +49 8349 9763940
                    </a>
                    <div id='footerAddress'>
                        <span>Remnatsried 2</span>
                        <span>87675 Stötten am Auerberg</span>
                        <span>Deutschland</span>
                    </div>
                    <a
                        className='underlineLink'
                        href='https://www.google.com/maps/place/Remnatsried+2,+87675+Stötten+am+Auerberg/@47.7539935,10.7318328,17z/data=!3m1!4b1!4m6!3m5!1s0x479c433d28fe3943:0x3f621e63b971648d!8m2!3d47.7539899!4d10.7344077!16s%2Fg%2F11h_f7q8gc?entry=ttu'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        Google Maps
                    </a>
                </div>
                <div id='footerScroll'>
                    <div onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <span className='underlineLink'>{getLanguage(language, 'backToTop')}</span>
                        <img src='assets/svg/arrow_small_top.svg' />
                    </div>
                </div>
                <div id='footerLinks'>
                    <span id='footerCopyright'>© Ebenrieder</span>
                    <Link to={language === 'de' ? '/impressum' : '/imprint'} className='underlineLink'>
                        {getLanguage(language, 'imprint')}
                    </Link>
                    <Link to={language === 'de' ? '/datenschutz' : '/privacy'} className='underlineLink'>
                        {getLanguage(language, 'privacy')}
                    </Link>
                    {/* <Link to={language === 'de' ? 'agb' : '/conditions'} className='underlineLink'>
                        {getLanguage(language, 'conditions')}
                    </Link> */}
                </div>
                <div id='footerSocial'>
                    <a href='https://www.instagram.com/ebenrieder' target='_blank' rel='noopener noreferrer'>
                        <img src='assets/svg/instagram.svg' />
                        <svg viewBox='0 0 100 100'>
                            <circle className='rotate' cx='50' cy='50' r='40' />
                            <circle className='static' cx='50' cy='50' r='40' />
                        </svg>
                    </a>
                </div>
            </div>
        );
    }
}
