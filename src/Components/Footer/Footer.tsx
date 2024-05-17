import * as React from 'react';
import { Link } from 'react-router-dom';
import { getLanguage } from '../../@presets/language';
import { Browser } from '../../@types/browser';
import './Footer.scss';

interface Props {
    browser: Browser;
}

interface States {}

export default class Header extends React.Component<Props, States> {
    handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    render() {
        // DEFINE VARIABLES
        const language = this.props.browser.language;
        // RETURN COMPONENT
        return (
            <div id='footer'>
                <div id='information'>
                    <a className='underline' href='mailto:hallo@ebenrieder.de'>
                        hallo@ebenrieder.de
                    </a>
                    <a className='underline' href='tel:+491633938055'>
                        +49 163 3938055
                    </a>
                    <div id='address'>
                        <span>Remnatsried 2</span>
                        <span>87675 Stötten am Auerberg</span>
                        <span>Deutschland</span>
                    </div>
                </div>
                <div id='scrollToTop'>
                    <div onClick={this.handleScrollToTop}>
                        <span className='underline'>{getLanguage(language, 'backToTop')}</span>
                        <img src='assets/svg/arrow_small_top.svg' />
                    </div>
                </div>
                <div id='links'>
                    <span className='copyright'>© Ebenrieder</span>
                    <Link to={'/imprint'} className='underline'>
                        {getLanguage(language, 'imprint')}
                    </Link>
                    <Link to={'/privacy'} className='underline'>
                        {getLanguage(language, 'privacy')}
                    </Link>
                    <Link to={'/conditions'} className='underline'>
                        {getLanguage(language, 'conditions')}
                    </Link>
                </div>
                <div id='social'>
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
