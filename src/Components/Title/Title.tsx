import * as React from 'react';
import { Browser } from '../../@types/browser';
import './Title.scss';

interface Props {
    browser: Browser;
    backgroundImage: string;
    backgroundX?: number;
    backgroundY?: number;
    backgroundScale?: number;
    foregroundImage: string;
    foregroundScale?: number;
}

interface States {
    position: number;
}

export default class Title extends React.Component<Props, States> {
    private element: React.RefObject<HTMLDivElement>;

    constructor(props: Props) {
        super(props);
        this.element = React.createRef();
        this.state = {
            position: 0
        };
    }

    componentDidUpdate(prevProps: Props) {
        if (
            this.props.browser.mouse.x !== prevProps.browser.mouse.x ||
            this.props.browser.mouse.y !== prevProps.browser.mouse.y ||
            this.props.browser.scroll !== prevProps.browser.scroll
        ) {
            this.handleTransform();
        }
    }

    private handleTransform = () => {
        // DEFINE VARIABLES
        const scroll = this.props.browser.scroll;
        const elementStart = this.element.current.getBoundingClientRect().top + scroll - this.props.browser.height;
        const elementEnd = this.element.current.getBoundingClientRect().top + scroll + this.element.current.clientHeight;
        // CALCULATE POSITION
        let position;
        if (scroll < elementStart) {
            position = -1;
        } else if (scroll >= elementStart && scroll <= elementEnd) {
            position = Math.round(((scroll - elementStart - (elementEnd - elementStart) / 2) / ((elementEnd - elementStart) / 2)) * 100) / 100;
        } else if (scroll >= elementEnd) {
            position = 1;
        }
        // UPDATE STATE
        this.setState({ position });
    };

    render() {
        // DEFINE VARIABLES
        let media = this.props.browser.media;
        let rotation = 2.5 * this.state.position;
        let translateForeground = -25 * this.state.position;
        let translateBackground = -5 * this.state.position;
        let scaleForeground = this.props.foregroundScale ? this.props.foregroundScale : 1;
        let scaleBackground = this.props.backgroundScale ? this.props.backgroundScale : 1;
        // MEDIA SMALL
        if (media === 'Small') {
            translateForeground = -20 * this.state.position;
            translateBackground = -5 * this.state.position;
        }
        // MEDIA EXTRA SMALL
        if (media === 'Extra Small') {
            translateForeground = -15 * this.state.position;
            translateBackground = -5 * this.state.position;
        }
        // RETURN COMPONENT
        return (
            <div className='title' ref={this.element}>
                <div
                    className='foregroundImage'
                    style={{ transform: `perspective(250px) translateY(${translateForeground}px) scale(${scaleForeground})` }}
                >
                    <img src={this.props.foregroundImage} />
                </div>
                <div
                    className='backgroundImage'
                    style={{
                        left: this.props.backgroundX || 0,
                        top: this.props.backgroundY || 0,
                        transform: `perspective(250px) translateY(${translateBackground}px) rotateX(${rotation}deg) scale(${scaleBackground})`
                    }}
                >
                    <img src={this.props.backgroundImage} />
                </div>
            </div>
        );
    }
}
