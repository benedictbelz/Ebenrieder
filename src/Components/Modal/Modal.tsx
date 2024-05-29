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
    handleResize: (height: number) => void;
    handleScroll: (scroll: number) => void;
}

interface States {
    active: boolean;
}

export default class Modal extends React.Component<Props, States> {
    private header: HTMLElement | null;
    private modal: React.RefObject<HTMLDivElement>;

    constructor(props: Props) {
        super(props);
        this.modal = React.createRef();
        this.state = {
            active: false
        };
    }

    componentDidMount() {
        this.handleOpen();
        this.header = document.getElementById('header');
        this.modal.current?.addEventListener('resize', this.handleResize);
        this.modal.current?.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        this.modal.current?.removeEventListener('resize', this.handleScroll);
        this.modal.current?.removeEventListener('scroll', this.handleScroll);
    }

    private handleOpen = () => {
        this.props.handleScroll(this.modal.current.scrollTop);
        setTimeout(() => {
            if (this.props.browser.media === 'Extra Small' || this.props.browser.media === 'Small' || this.props.browser.media === 'Medium') {
                this.header?.classList.add('hide');
            }
        });
        setTimeout(() => {
            this.setState({ active: true });
        }, 100);
    };

    private handleClose = () => {
        this.setState({ active: false });
        setTimeout(() => {
            if (this.props.browser.media === 'Extra Small' || this.props.browser.media === 'Small' || this.props.browser.media === 'Medium') {
                this.header?.classList.remove('hide');
            }
        });
        setTimeout(() => {
            this.props.handleClose();
        }, 500);
    };

    private handleResize = () => {
        if (!this.modal.current) return;
        this.props.handleResize(this.modal.current.clientHeight);
    };

    private handleScroll = () => {
        if (!this.modal.current) return;
        this.props.handleScroll(this.modal.current.scrollTop);
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
            <div className={['modal', this.state.active && 'active'].filter(x => x).join(' ')}>
                <div ref={this.modal} className={['modalForeground', this.props.className && this.props.className].filter(x => x).join(' ')}>
                    <div className='modalBack'>
                        <img src='assets/svg/arrow_small_left.svg' />
                        <p className='underlineLink' onClick={this.handleClose}>
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
