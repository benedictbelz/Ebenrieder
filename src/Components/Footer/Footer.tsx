import * as React from 'react';
import { getLanguage } from '../../@presets/language';
import { Language } from '../../@types/language';
import './Footer.scss';

interface Props {
    handleBackToTop: () => void;
    language: Language;
}

interface States {}

export default class Header extends React.Component<Props, States> {
    render() {
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
                <div id='backToTop'>
                    <div onClick={this.props.handleBackToTop}>
                        <span className='underline'>{getLanguage(this.props.language, 'backToTop')}</span>
                        <img src='assets/svg/arrow_small_top.svg' />
                    </div>
                </div>
                <div id='links'>
                    © Ebenrieder
                    <span className='underline'>{getLanguage(this.props.language, 'imprint')}</span>
                    <span className='underline'>{getLanguage(this.props.language, 'privacyPolicy')}</span>
                    <span className='underline'>{getLanguage(this.props.language, 'agb')}</span>
                </div>
                <div id='social'>
                    <a href='https://www.instagram.com/ebenrieder' target='_blank' rel='noopener noreferrer'>
                        <img src='assets/svg/instagram.svg' />
                        <svg viewBox='0 0 100 100'>
                            <circle cx='50' cy='50' r='40' />
                        </svg>
                    </a>
                </div>
            </div>
        );
    }
}
