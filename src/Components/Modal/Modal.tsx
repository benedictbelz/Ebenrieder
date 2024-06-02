import * as React from 'react';
import { createPortal } from 'react-dom';
import { getLanguage } from '../../@presets/language';
import { Browser } from '../../@types/browser';
import './Modal.scss';

interface Props {
    browser: Browser;
    className?: string;
    children(height: number, scroll: number): React.ReactNode;
    handleClose: () => void;
}

interface States {
    active: boolean;
    height: number;
    scroll: number;
}

export default class Modal extends React.Component<Props, States> {
    private header: HTMLElement | null;
    private modal: React.RefObject<HTMLDivElement>;

    constructor(props: Props) {
        super(props);
        this.modal = React.createRef();
        this.state = {
            active: false,
            height: this.modal.current?.clientHeight || 0,
            scroll: this.modal.current?.scrollTop || 0
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
        // HIDE HEADER
        setTimeout(() => {
            if (this.props.browser.width <= this.props.browser.variables.mediaM) {
                this.header?.classList.add('hide');
            }
        });
        // OPEN MODAL
        setTimeout(() => {
            this.setState({ active: true });
            document.documentElement.style.overflow = 'hidden';
            document.documentElement.style.touchAction = 'none';
        }, 100);
    };

    private handleClose = () => {
        // UPDATE STATE
        this.setState({ active: false });
        // SHOW HEADER
        setTimeout(() => {
            if (this.props.browser.width <= this.props.browser.variables.mediaM) {
                this.header?.classList.remove('hide');
            }
        });
        // CLOSE MODAL
        setTimeout(() => {
            this.props.handleClose();
            document.documentElement.style.overflow = 'visible';
            document.documentElement.style.touchAction = 'auto';
        }, 500);
    };

    private handleResize = () => {
        if (!this.modal.current) return;
        this.setState({ height: this.modal.current.clientHeight });
    };

    private handleScroll = () => {
        if (!this.modal.current) return;
        this.setState({ scroll: this.modal.current.scrollTop });
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
                    {this.props.children(this.state.height, this.state.scroll)}
                </div>
                <div className='modalBackground' onClick={this.handleClose} />
            </div>,
            wrapper
        ) as React.ReactNode;
    }
}
