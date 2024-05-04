import * as React from 'react';
import { Browser } from '../../../@types/browser';
import './Static.scss';

interface Props {
    autoPlay?: boolean;
    browser: Browser;
    handlePosition: (position: number) => void;
    id: string;
    position: number;
    size: number;
}

interface States {
    bullets: HTMLElement[] | null;
    images: HTMLImageElement[] | null;
    transition: boolean;
}

export default class Static extends React.Component<Props, States> {
    private interval: NodeJS.Timer;

    state: States = {
        bullets: null,
        images: null,
        transition: false
    };

    componentDidMount() {
        this.initGallery();
        if (this.props.autoPlay) {
            this.interval = setInterval(() => this.handleNextImage(), 2500);
        }
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    private initGallery = () => {
        this.setState({
            bullets: (document.querySelector(`.${this.props.id} .static .bullets`)?.children as unknown as HTMLElement[]) || null,
            images: (document.querySelector(`.${this.props.id} .static .images`)?.children as unknown as HTMLImageElement[]) || null
        });
        setTimeout(() => {
            this.initDrag();
            this.setBullets();
            this.setImages();
        });
    };

    private initDrag = () => {
        // IF AUTOPLAY IS ENABLED RETURN
        if (this.props.autoPlay) {
            return;
        }
        // GET DRAG ELEMENT
        const drag = document.querySelector(`.${this.props.id} .static .drag`) as unknown as HTMLElement;
        // DEFINE POSITION
        let origin: number;
        let destination: number;
        // DEFINE ACTIVE
        let isActive = false;
        // DEFINE START
        const start = (position: number) => {
            if (this.state.transition) {
                return;
            }
            isActive = true;
            origin = position;
            destination = 0;
        };
        // DEFINE MOVE
        const move = (position: number) => {
            if (!isActive || this.state.transition) {
                return;
            }
            destination = position - origin;
            const { current, next, previous } = this.getOrder();
            this.state.images[previous].style.left = 'calc(-100% + ' + destination + 'px)';
            this.state.images[current].style.left = destination + 'px';
            this.state.images[next].style.left = 'calc(100% + ' + destination + 'px)';
        };
        // DEFINE END
        const end = () => {
            if (!isActive || this.state.transition) {
                return;
            }
            isActive = false;
            if (destination >= 50) {
                this.handlePreviousImage();
            } else if (destination <= -50) {
                this.handleNextImage();
            } else {
                this.handleCurrentImage();
            }
        };
        // IF DESKTOP
        if (this.props.browser.device === 'Desktop') {
            drag.addEventListener('mousedown', event => start(event.clientX));
            drag.addEventListener('mousemove', event => move(event.clientX));
            drag.addEventListener('mouseup', () => end());
            drag.addEventListener('mouseout', () => end());
        }
        // IF MOBILE
        if (this.props.browser.device === 'Mobile') {
            drag.addEventListener('touchstart', event => start(event.touches[0].clientX));
            drag.addEventListener('touchmove', event => move(event.touches[0].clientX));
            drag.addEventListener('touchend', () => end());
        }
    };

    private getOrder = () => {
        // DEFINE ORDER
        let current, next, previous;
        // CURRENT IMAGE
        current = this.props.position;
        // PREVIOUS IMAGE
        if (current - 1 < 0) {
            previous = current - 1 + this.props.size;
        } else {
            previous = current - 1;
        }
        // NEXT IMAGE
        if (current + 1 >= this.props.size) {
            next = current + 1 - this.props.size;
        } else {
            next = current + 1;
        }
        // RETURN ORDER
        return { current, next, previous };
    };

    private setBullets = () => {
        // IF AUTOPLAY IS ENABLED RETURN
        if (this.props.autoPlay) {
            return;
        }
        // DELETE CLASSNAME FOR ALL BULLETS
        for (let index = 0; index < this.props.size; index++) {
            if (index >= Math.floor(this.props.position / 10) * 10 && index < Math.floor(this.props.position / 10) * 10 + 10) {
                this.state.bullets[index].className = 'show';
            } else {
                this.state.bullets[index].className = '';
            }
        }
        // UPDATE BULLETS
        this.state.bullets[this.props.position].classList.add('current');
    };

    private setImages = () => {
        // GET ORDER
        const { current, next, previous } = this.getOrder();
        // DELETE CLASSNAME FOR ALL IMAGES
        for (let index = 0; index < this.props.size; index++) {
            this.state.images[index].className = '';
        }
        // CHANGE IMAGES
        this.state.images[previous].className = 'show';
        this.state.images[previous].style.left = '-100%';
        this.state.images[current].className = 'show';
        this.state.images[current].style.left = '0%';
        this.state.images[next].className = 'show';
        this.state.images[next].style.left = '100%';
    };

    private handlePreviousImage = () => {
        // RETURN WHEN TRANSITION IS ACTIVE
        if (this.state.transition) {
            return;
        }
        // ACTIVATE TRANSITION
        this.setState({ transition: true });
        // GET ORDER
        let { current, next, previous } = this.getOrder();
        // CHANGE IMAGES
        this.state.images[previous].style.left = '0%';
        this.state.images[current].style.left = '100%';
        this.state.images[next].style.left = '200%';
        // DECREMENT POSITION
        let position = this.props.position - 1;
        // CHECK BOUNDARY
        if (position < 0) {
            position = position + this.props.size;
        }
        // UPDATE POSITION
        this.props.handlePosition(position);
        // UPDATE BULLETS
        setTimeout(() => {
            this.setBullets();
        }, 250);
        // UPDATE IMAGES & DEACTIVATE TRANSITION
        setTimeout(() => {
            this.setImages();
            this.setState({ transition: false });
        }, 500);
    };

    private handleCurrentImage() {
        // RETURN WHEN TRANSITION IS ACTIVE
        if (this.state.transition) {
            return;
        }
        // ACTIVATE TRANSITION
        this.setState({ transition: true });
        // GET ORDER
        let { current, next, previous } = this.getOrder();
        // CHANGE IMAGES
        this.state.images[previous].style.left = '-100%';
        this.state.images[current].style.left = '0%';
        this.state.images[next].style.left = '100%';
        // DEACTIVATE TRANSITION
        setTimeout(() => this.setState({ transition: false }), 500);
    }

    private handleNextImage = () => {
        // RETURN WHEN TRANSITION IS ACTIVE
        if (this.state.transition) {
            return;
        }
        // ACTIVATE TRANSITION
        this.setState({ transition: true });
        // GET ORDER
        let { current, next, previous } = this.getOrder();
        // CHANGE IMAGES
        this.state.images[previous].style.left = '-200%';
        this.state.images[current].style.left = '-100%';
        this.state.images[next].style.left = '0%';
        // INCREMENT POSITION
        let position = this.props.position + 1;
        // CHECK BOUNDARY
        if (position >= this.props.size) {
            position = position - this.props.size;
        }
        // UPDATE POSITION
        this.props.handlePosition(position);
        // UPDATE BULLETS
        setTimeout(() => {
            this.setBullets();
        }, 250);
        // UPDATE IMAGES & DEACTIVATE TRANSITION
        setTimeout(() => {
            this.setImages();
            this.setState({ transition: false });
        }, 500);
    };

    render() {
        return (
            <div className={['static', this.state.transition && 'transition'].filter(x => x).join(' ')}>
                {!this.props.autoPlay && <div className='drag' />}
                {!this.props.autoPlay && this.props.browser.device === 'Desktop' && (
                    <div className='click'>
                        <div className='left' onClick={() => this.handlePreviousImage()} />
                        <div className='right' onClick={() => this.handleNextImage()} />
                    </div>
                )}
                {!this.props.autoPlay && (
                    <div className={'bullets'}>
                        {[...Array(this.props.size)].map((bullet, index) => {
                            return <div key={index} data-index={index} className='bullet' />;
                        })}
                    </div>
                )}
                <div className='images'>{this.props.children}</div>
                <div className='placeholder'>{React.Children.toArray(this.props.children)[0]}</div>
            </div>
        );
    }
}
