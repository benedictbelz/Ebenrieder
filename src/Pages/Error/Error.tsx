import * as React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../Components/Logo/Logo';
import { getLanguage } from '../../@presets/language';
import { Browser } from '../../@types/browser';
import './Error.scss';

interface Props {
    browser: Browser;
    children: React.ReactNode;
}

interface States {
    error: boolean;
}

export default class Error extends React.Component<Props, States> {
    state = {
        error: false
    };

    componentDidCatch() {
        this.setState({ error: true });
    }

    componentDidUpdate(prevProps: Props, prevState: States) {
        const header = document.getElementById('header');
        if (header && this.state.error && !prevState.error) {
            header.style.visibility = 'hidden';
        } else if (header && !this.state.error && prevState.error) {
            header.style.visibility = 'visible';
        }
    }

    render() {
        // DEFINE VARIABLES
        const language = this.props.browser.language;
        // IF ERROR IS TRUE
        if (this.state.error) {
            return (
                <div id='error' className='page'>
                    <Logo noAnimation={true} />
                    <div id='errorMessage'>
                        {`${getLanguage(language, 'errorMessage')} `}
                        <Link to={'/'} className='underlineLink' onClick={() => this.setState({ error: false })}>
                            {getLanguage(language, 'errorLink')}
                        </Link>
                        {` ...`}
                    </div>
                </div>
            );
        }
        // RETURN COMPONENT
        return this.props.children;
    }
}
