import * as React from 'react';
import { Browser } from '../../../@types/browser';
import { PropsWithRouter, withRouter } from '../../Router/Router';
import './Variable.scss';

interface Props extends PropsWithRouter {
    autoPlay?: boolean;
    browser: Browser;
    children: React.ReactNode;
    handlePosition: (position: number) => void;
    fullScreen: boolean;
    id: string;
    position: number;
    size: number;
}

interface States {
    bullets: HTMLElement[] | null;
    clickWidth: number | null;
    placeholder: {
        position: number;
        show: boolean;
        translate: string;
    } | null;
}

class Variable extends React.Component<Props, States> {
    private interval: NodeJS.Timer;

    state: States = {
        bullets: null,
        clickWidth: null,
        placeholder: null
    };

    componentDidMount() {
        this.initGallery();
        if (this.props.autoPlay) {
            this.interval = setInterval(() => this.handleNextImage(), 2500);
        }
    }

    componentDidUpdate(prevProps: Props) {
        if (this.props.browser.height !== prevProps.browser.height || this.props.browser.width !== prevProps.browser.width) {
            this.setImages();
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    private initGallery = () => {
        this.setState({
            bullets: (document.querySelector(`.${this.props.id} .variable .bullets`)?.children as unknown as HTMLElement[]) || null
        });
        setTimeout(() => {
            this.setBullets(this.props.position);
            this.setImages();
        }, 100);
    };

    private getOrder = (position: number | null) => {
        // IF NO POSITION RETURN
        if (typeof position !== 'number') {
            return;
        }
        // DEFINE ORDER
        let beforePrevious, previous, current, next, afterNext;
        // CURRENT IMAGE
        current = position;
        // PREVIOUS IMAGE
        if (current - 1 < 0) {
            previous = current - 1 + this.props.size;
        } else {
            previous = current - 1;
        }
        // BEFORE PREVIOUS IMAGE
        if (previous - 1 < 0) {
            beforePrevious = previous - 1 + this.props.size;
        } else {
            beforePrevious = previous - 1;
        }
        // NEXT IMAGE
        if (current + 1 >= this.props.size) {
            next = current + 1 - this.props.size;
        } else {
            next = current + 1;
        }
        // AFTER NEXT IMAGE
        if (next + 1 >= this.props.size) {
            afterNext = next + 1 - this.props.size;
        } else {
            afterNext = next + 1;
        }
        // RETURN ORDER
        return { beforePrevious, previous, current, next, afterNext };
    };

    private setBullets = (position: number) => {
        // IF AUTOPLAY IS ENABLED RETURN
        if (this.props.autoPlay) {
            return;
        }
        // DELETE CLASS NAME FOR ALL BULLETS
        for (let index = 0; index < this.props.size; index++) {
            if (index >= Math.floor(position / 10) * 10 && index < Math.floor(position / 10) * 10 + 10) {
                this.state.bullets[index].className = 'show';
            } else {
                this.state.bullets[index].className = '';
            }
        }
        // UPDATE BULLETS
        this.state.bullets[position].classList.add('current');
    };

    private setImages = () => {
        // GET ELEMENTS
        const container = (document.querySelector(`.${this.props.id} .variable .images`) as unknown as HTMLElement) || null;
        const images = (document.querySelector(`.${this.props.id} .variable .images`)?.children as unknown as HTMLImageElement[]) || null;
        // IF NO CONTAINER OR IMAGES RETURN
        if (!container || !images || images.length === 0) {
            return;
        }
        // UPDATE CLASSNAMES
        images[0].className = 'previous';
        images[1].className = 'previous';
        images[2].className = 'current';
        images[3].className = 'next';
        images[4].className = 'next';
        // UPDATE IMAGES
        setTimeout(() => {
            // CALCULATE WIDTH
            let padding = Number(getComputedStyle(document.documentElement).getPropertyValue('--spacing-horizontal').split('px').shift());
            let clickWidth = padding;
            let width = container.clientWidth - padding * 2;
            let translate = images[0].clientWidth + images[1].clientWidth;
            // IF CURRENT IMAGE IS SMALLER THAN CONTAINER
            if (!this.props.fullScreen && width !== images[2].clientWidth) {
                clickWidth = clickWidth + Math.round((width - images[2].clientWidth) / 2);
                translate = translate - Math.round((width - images[2].clientWidth) / 2);
            }
            // UPDATE TRANSLATE
            container.style.transform = !this.props.fullScreen ? `translateX(-${translate}px)` : `translateX(-200%)`;
            // UPDATE STATE
            this.setState({ clickWidth: !this.props.fullScreen ? clickWidth : null });
        });
    };

    private handlePreviousImage = () => {
        // RETURN WHEN TRANSITION IS ACTIVE
        if (this.state.placeholder) {
            return;
        }
        // GET ELEMENTS
        const container = (document.querySelector(`.${this.props.id} .variable .images`) as unknown as HTMLElement) || null;
        const images = (document.querySelector(`.${this.props.id} .variable .images`)?.children as unknown as HTMLImageElement[]) || null;
        // IF NO CONTAINER OR IMAGES RETURN
        if (!container || !images) {
            return;
        }
        // DEFINE VARIABLES
        let padding = Number(getComputedStyle(document.documentElement).getPropertyValue('--spacing-horizontal').split('px').shift());
        let width: number = container.clientWidth - padding * 2;
        let translate: number;
        let position = this.props.position - 1;
        // CHECK BOUNDARY FOR POSITION
        if (position < 0) {
            position = position + this.props.size;
        }
        // INITIALIZE PLACEHOLDER
        setTimeout(() => {
            // CALCULATE TRANSLATE
            translate = images[0].clientWidth + images[1].clientWidth;
            // IF CURRENT IMAGE IS SMALLER THAN CONTAINER
            if (!this.props.fullScreen && width !== images[2].clientWidth) {
                translate = translate - Math.round((width - images[2].clientWidth) / 2);
            }
            // UPDATE PLACEHOLDER
            this.setState({
                placeholder: {
                    position: this.props.position,
                    show: false,
                    translate: !this.props.fullScreen ? `translateX(-${translate}px)` : `translateX(-200%)`
                }
            });
        });
        // UPDATE PLACEHOLDER
        setTimeout(() => {
            // CALCULATE TRANSLATE
            translate = images[0].clientWidth;
            // IF CURRENT IMAGE IS SMALLER THAN CONTAINER
            if (!this.props.fullScreen && width !== images[1].clientWidth) {
                translate = translate - Math.round((width - images[1].clientWidth) / 2);
            }
            // UPDATE PLACEHOLDER
            this.setState({
                placeholder: {
                    ...this.state.placeholder,
                    show: true,
                    translate: `translateX(-${translate}px)` ? `translateX(-${translate}px)` : `translateX(-100%)`
                }
            });
            // UPDATE BULLETS
            this.setBullets(position);
            // HIDE PLACEHOLDER
            setTimeout(() => this.setState({ placeholder: null }), 500);
        }, 100);
        // UPDATE IMAGES
        setTimeout(() => {
            // UPDATE POSITION
            this.props.handlePosition(position);
            // UPDATE IMAGES
            setTimeout(() => this.setImages(), 100);
        }, 100);
    };

    private handleNextImage = () => {
        // RETURN WHEN TRANSITION IS ACTIVE
        if (this.state.placeholder) {
            return;
        }
        // GET ELEMENTS
        const container = (document.querySelector(`.${this.props.id} .variable .images`) as unknown as HTMLElement) || null;
        const images = (document.querySelector(`.${this.props.id} .variable .images`)?.children as unknown as HTMLImageElement[]) || null;
        // IF NO CONTAINER OR IMAGES RETURN
        if (!container || !images) {
            return;
        }
        // DEFINE VARIABLES
        let padding = Number(getComputedStyle(document.documentElement).getPropertyValue('--spacing-horizontal').split('px').shift());
        let width: number = container.clientWidth - padding * 2;
        let translate: number;
        let position = this.props.position + 1;
        // CHECK BOUNDARY FOR POSITION
        if (position >= this.props.size) {
            position = position - this.props.size;
        }
        // INITIALIZE PLACEHOLDER
        setTimeout(() => {
            // CALCULATE TRANSLATE
            translate = images[0].clientWidth + images[1].clientWidth;
            // IF CURRENT IMAGE IS SMALLER THAN CONTAINER
            if (!this.props.fullScreen && width !== images[2].clientWidth) {
                translate = translate - Math.round((width - images[2].clientWidth) / 2);
            }
            // UPDATE PLACEHOLDER
            this.setState({
                placeholder: {
                    position: this.props.position,
                    show: false,
                    translate: !this.props.fullScreen ? `translateX(-${translate}px)` : `translateX(-200%)`
                }
            });
        });
        // UPDATE PLACEHOLDER
        setTimeout(() => {
            // CALCULATE TRANSLATE
            translate = images[0].clientWidth + images[1].clientWidth + images[2].clientWidth;
            // IF CURRENT IMAGE IS SMALLER THAN CONTAINER
            if (!this.props.fullScreen && width !== images[3].clientWidth) {
                translate = translate - Math.round((width - images[3].clientWidth) / 2);
            }
            // UPDATE PLACEHOLDER
            this.setState({
                placeholder: {
                    ...this.state.placeholder,
                    show: true,
                    translate: !this.props.fullScreen ? `translateX(-${translate}px)` : `translateX(-300%)`
                }
            });
            // UPDATE BULLETS
            this.setBullets(position);
            // HIDE PLACEHOLDER
            setTimeout(() => this.setState({ placeholder: null }), 500);
        }, 100);
        // UPDATE IMAGES
        setTimeout(() => {
            // UPDATE POSITION
            this.props.handlePosition(position);
            // UPDATE IMAGES
            setTimeout(() => this.setImages(), 100);
        }, 100);
    };

    private handleClick = (event: any) => {
        const mouse = document.getElementById('mouse');
        if (mouse && mouse.className === 'cursorLeft' && !event.target.classList.contains('cursorLeft')) {
            this.handlePreviousImage();
        } else if (mouse && mouse.className === 'cursorRight' && !event.target.classList.contains('cursorRight')) {
            this.handleNextImage();
        }
    };

    render() {
        // DEFINE VARIABLES
        const children = this.props.children as React.ReactNode[];
        const images = { ...this.getOrder(this.props.position) };
        const placeholder = { ...this.getOrder(this.state.placeholder?.position) };
        // RETURN COMPONENT
        return (
            <div className={['variable', this.props.fullScreen && 'fullScreen'].filter(x => x).join(' ')} onClick={this.handleClick}>
                {!this.props.autoPlay && (
                    <div className='click'>
                        <div
                            className='left cursorLeft'
                            onClick={() => this.handlePreviousImage()}
                            style={this.state.clickWidth ? { width: `${this.state.clickWidth}px` } : {}}
                        />
                        <div
                            className='right cursorRight'
                            onClick={() => this.handleNextImage()}
                            style={this.state.clickWidth ? { width: `${this.state.clickWidth}px` } : {}}
                        />
                    </div>
                )}
                {!this.props.autoPlay && (
                    <div className={'bullets'}>
                        {[...Array(this.props.size)].map((bullet, index) => {
                            return <div key={`bullet_${index}`} data-index={index} className='bullet' />;
                        })}
                    </div>
                )}
                {this.state.placeholder && (
                    <div
                        className={['placeholder', this.state.placeholder.show && 'show'].filter(x => x).join(' ')}
                        style={{ transform: this.state.placeholder.translate }}
                    >
                        <React.Fragment key='placeholder_01'>{children[placeholder.beforePrevious]}</React.Fragment>
                        <React.Fragment key='placeholder_02'>{children[placeholder.previous]}</React.Fragment>
                        <React.Fragment key='placeholder_03'>{children[placeholder.current]}</React.Fragment>
                        <React.Fragment key='placeholder_04'>{children[placeholder.next]}</React.Fragment>
                        <React.Fragment key='placeholder_05'>{children[placeholder.afterNext]}</React.Fragment>
                    </div>
                )}
                <div className='images'>
                    <React.Fragment key='image_01'>{children[images.beforePrevious]}</React.Fragment>
                    <React.Fragment key='image_02'>{children[images.previous]}</React.Fragment>
                    <React.Fragment key='image_03'>{children[images.current]}</React.Fragment>
                    <React.Fragment key='image_04'>{children[images.next]}</React.Fragment>
                    <React.Fragment key='image_05'>{children[images.afterNext]}</React.Fragment>
                </div>
            </div>
        );
    }
}

export default withRouter(Variable);
