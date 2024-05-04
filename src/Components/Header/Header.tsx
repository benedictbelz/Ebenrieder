import * as React from 'react';
import { Link } from 'react-router-dom';
import { Language } from '../../@types/language';
import './Header.scss';

interface Props {
    handleLanguage: (language: Language) => void;
    language: Language;
}

export default class Header extends React.Component<Props, {}> {
    render() {
        return (
            <div id='header'>
                <div id='left'>
                    <Link to='/'>
                        <img className='logo' src='assets/svg/logo_picture.svg' />
                    </Link>
                </div>
                <div id='right'>
                    <span id='language' onClick={() => this.props.handleLanguage(this.props.language === 'de' ? 'en' : 'de')}>
                        {this.props.language === 'de' ? 'EN' : 'DE'}
                    </span>
                </div>
            </div>
        );
    }
}
