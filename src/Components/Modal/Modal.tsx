import * as React from 'react';
import { createPortal } from 'react-dom';
import { getLanguage } from '../../@presets/language';
import { Browser } from '../../@types/browser';
import './Modal.scss';

interface Props {
    browser: Browser;
    children: React.ReactNode;
    className?: string;
    handleClose: () => void;
}

interface States {
    show: boolean;
}

export default class Modal extends React.Component<Props, States> {
    state = {
        show: false
    };

    componentDidMount() {
        setTimeout(() => this.setState({ show: true }), 100);
    }

    handleClose = () => {
        this.setState({ show: false });
        setTimeout(() => this.props.handleClose(), 500);
    };

    render() {
        // GET VARIABLES
        const language = this.props.browser.language;
        const wrapper = document.getElementById('app');
        // IF NO WRAPPER RETURN NULL
        if (!wrapper) {
            return null;
        }
        // RETURN COMPONENT
        return createPortal(
            <div className={['modal', this.state.show && 'show'].filter(x => x).join(' ')}>
                <div className={['modalForeground', this.props.className && this.props.className].filter(x => x).join(' ')}>
                    <div className='button'>
                        <img src='assets/svg/arrow_small_left.svg' />
                        <p className='close underline' onClick={this.handleClose}>
                            {getLanguage(language, 'backToOverview')}
                        </p>
                    </div>
                    {this.props.children}
                </div>
                <div className='modalBackground' onClick={this.handleClose} />
            </div>,
            wrapper
        ) as React.ReactNode;
    }
}
