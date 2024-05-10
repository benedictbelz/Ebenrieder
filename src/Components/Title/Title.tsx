import * as React from 'react';
import { Browser } from '../../@types/browser';
import './Title.scss';

interface Props {
    browser: Browser;
    imageBackground: string;
    imageTitle: string;
    backgroundX?: number;
    backgroundY?: number;
}

interface States {
    position: number;
    rotation: number;
}

export default class Title extends React.Component<Props, States> {

    private element: HTMLDivElement;

    state: States = {
        position: 0,
        rotation: 0,
    }

    componentDidUpdate(prevProps: Props) {
        if (this.props.browser.mouse.x !== prevProps.browser.mouse.x || this.props.browser.mouse.y !== prevProps.browser.mouse.y || this.props.browser.scroll !== prevProps.browser.scroll) {
            this.handleTransform();
        }
    }

    private handleTransform = () => {
        // IF NO ELEMENT RETURN
        if (!this.element) {
            return;
        }
        // DEFINE VARIABLES
        const scroll = this.props.browser.scroll;
        const width = this.props.browser.width;
        const elementStart = this.element.getBoundingClientRect().top + scroll - this.props.browser.height;
        const elementEnd = this.element.getBoundingClientRect().top + scroll + this.element.clientHeight;
        // CALCULATE ROTATION
        let rotation = (Math.round(((this.props.browser.mouse.x - (width / 2)) / (width / 2)) * 10) / 10);
        // CALCULATE POSITION FROM -1 TO 1
        let position;
        if (scroll < elementStart) {
            position = -1;
        } else if (scroll >= elementStart && scroll <= elementEnd) {
            position = Math.round(((scroll - elementStart) - ((elementEnd - elementStart) / 2)) / ((elementEnd - elementStart) / 2) * 100) / 100;
        } else if (scroll >= elementEnd) {
            position = 1;
        }
        // CALCULATE POSITION FROM 0 TO 1
        // let position;
        // if (scroll < elementStart) {
        //     position = 0;
        // } else if (scroll >= elementStart && scroll <= elementEnd) {
        //     position = Math.round(((scroll - elementStart) / (elementEnd - elementStart)) * 100) / 100
        // } else if (scroll >= elementEnd) {
        //     position = 1;
        // }
        // UPDATE STATE
        this.setState({ position, rotation });
    }

    render() {
        const translateImage = -25 * this.state.position;
        const translateBackground = 5 * this.state.position - 10;
        const rotateHorizontal = 0 // 2.5 * this.state.rotation;
        const rotateVertical = 5 * this.state.position;
        return (
            <div className='title' ref={(element) => this.element = element}>
                <div className='imageTitle' style={{ transform: `perspective(250px) translateY(${translateImage}px)` }}>
                    <img src={this.props.imageTitle} style={{ transform: `perspective(250px) translateX(${rotateHorizontal}px)` }} />
                </div>
                <div className='imageBackground' style={{ left: this.props.backgroundX || 0, top: this.props.backgroundY || 0, transform: `perspective(250px) translateY(${translateBackground}px) rotateX(${rotateVertical}deg)` }}>
                    <img src={this.props.imageBackground} style={{ transform: `perspective(250px) rotateY(${rotateHorizontal}deg)` }} />
                </div>
            </div>
        );
    }
}
