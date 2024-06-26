import * as React from 'react';
import { Link } from 'react-router-dom';
import { getLanguage } from '../../@presets/language';
import { Browser } from '../../@types/browser';
import './Cookies.scss';

interface Props {
    browser: Browser;
    handleAccept: () => void;
    handleDecline: () => void;
}

export default class Cookies extends React.Component<Props> {
    private handleAccept = () => {
        this.setState({ active: false });
        this.props.handleAccept();
    };

    private handleDecline = () => {
        this.setState({ active: false });
        this.props.handleDecline();
    };

    render() {
        const language = this.props.browser.language;
        return (
            <div id='cookies'>
                <div id='cookiesText'>
                    {`${getLanguage(language, 'cookiesText')} `}
                    <Link to={'/privacy'} className='underlineLink'>
                        {getLanguage(language, 'cookiesPrivacy')}
                    </Link>
                    {'.'}
                </div>
                <div id='cookiesButtons'>
                    <div className='underlineLink' onClick={this.handleAccept}>
                        {getLanguage(language, 'cookiesAccept')}
                    </div>
                    <div className='underlineLink' onClick={this.handleDecline}>
                        {getLanguage(language, 'cookiesDecline')}
                    </div>
                </div>
            </div>
        );
    }
}
