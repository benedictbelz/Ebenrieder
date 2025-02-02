import * as React from 'react';
import { Browser } from '../../@types/browser';
import './Watercolor.scss';

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
    hasLoadedBackground: boolean;
    hasLoadedForeground: boolean;
    position: number;
}

export default class Watercolor extends React.Component<Props, States> {
    private watercolor: React.RefObject<HTMLDivElement>;

    constructor(props: Props) {
        super(props);
        this.watercolor = React.createRef();
        this.state = {
            hasLoadedBackground: false,
            hasLoadedForeground: false,
            position: 0
        };
    }

    componentDidUpdate(prevProps: Props) {
        if (this.props.browser.scroll !== prevProps.browser.scroll || this.props.browser.width !== prevProps.browser.width) {
            this.handleTransform();
        }
    }

    private handleTransform = () => {
        // GET WATERCOLOR
        const watercolor = this.watercolor.current;
        // IF NO WATERCOLOR RETURN
        if (!watercolor) return;
        // DEFINE VARIABLES
        const scroll = this.props.browser.scroll;
        const start = watercolor.getBoundingClientRect().top + scroll - this.props.browser.height;
        const end = watercolor.getBoundingClientRect().top + scroll + watercolor.clientHeight;
        // CALCULATE POSITION
        let position;
        if (scroll < start) {
            position = -1;
        } else if (scroll >= start && scroll <= end) {
            position = Math.round(((scroll - start - (end - start) / 2) / ((end - start) / 2)) * 100) / 100;
        } else if (scroll >= end) {
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
            <div
                ref={this.watercolor}
                className={['watercolor', this.state.hasLoadedBackground && this.state.hasLoadedForeground && 'hasLoaded'].filter(x => x).join(' ')}
            >
                <div
                    className='watercolorForeground'
                    style={{ transform: `perspective(250px) translateY(${translateForeground}px) scale(${scaleForeground})` }}
                    onLoad={() => this.setState({ hasLoadedForeground: true })}
                >
                    <img src={this.props.foregroundImage} />
                </div>
                <div
                    className='watercolorBackground'
                    style={{
                        left: this.props.backgroundX || 0,
                        top: this.props.backgroundY || 0,
                        transform: `perspective(250px) translateY(${translateBackground}px) rotateX(${rotation}deg) scale(${scaleBackground})`
                    }}
                    onLoad={() => this.setState({ hasLoadedBackground: true })}
                >
                    <img src={this.props.backgroundImage} />
                </div>
            </div>
        );
    }
}
