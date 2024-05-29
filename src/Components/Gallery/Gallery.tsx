import * as React from 'react';
import Parallax from '../Parallax/Parallax';
import { getLanguage } from '../../@presets/language';
import { Browser } from '../../@types/browser';
import './Gallery.scss';

interface Props {
    autoPlay?: boolean;
    browser: Browser;
    children: React.ReactNode;
    hideControls?: boolean;
    fullScreen?: boolean;
    loadingScreen?: boolean;
    modus: 'Expansion' | 'Variable';
    parallax?: {
        deactivate?: boolean;
        factor: number;
        height: number;
        modus: 'Simple' | 'Complex';
        scroll: number;
    };
}

interface States {
    click: number | null;
    drag: {
        start: number;
        end: number;
    } | null;
    hasError: boolean;
    hasLoaded: boolean;
    length: number;
    positionA: number;
    positionB: number;
    loadingScreen: boolean;
    status: 'A' | 'B';
    transition: boolean;
}

export default class Gallery extends React.Component<Props, States> {
    private boundary = 25;
    private interval: NodeJS.Timer;
    private galleryBullets: React.RefObject<HTMLDivElement>;
    private galleryDrag: React.RefObject<HTMLDivElement>;
    private galleryA: React.RefObject<HTMLDivElement>;
    private galleryB: React.RefObject<HTMLDivElement>;

    constructor(props: Props) {
        super(props);
        this.galleryBullets = React.createRef();
        this.galleryDrag = React.createRef();
        this.galleryA = React.createRef();
        this.galleryB = React.createRef();
        this.state = {
            click: null,
            drag: null,
            hasError: false,
            hasLoaded: false,
            length: React.Children.toArray(this.props.children).length,
            positionA: 0,
            positionB: 0,
            loadingScreen: this.props.loadingScreen || false,
            status: 'A',
            transition: false
        };
    }

    componentDidMount() {
        this.mountGallery();
        this.mountDrag();
        if (this.props.autoPlay) {
            this.interval = setInterval(() => this.handleChangeImage('Next'), 2500);
        }
    }

    componentDidUpdate(prevProps: Props, prevState: States) {
        if (this.props.browser.height !== prevProps.browser.height || this.props.browser.width !== prevProps.browser.width) {
            this.handleResetImage();
        } else if (this.props.loadingScreen && this.state.hasLoaded && !prevState.hasLoaded) {
            setTimeout(() => this.setState({ loadingScreen: false }), 500);
        } else if (this.state.hasError && !prevState.hasError) {
            this.setState({ loadingScreen: true });
        }
    }

    componentWillUnmount() {
        this.unmountDrag();
        clearInterval(this.interval);
    }

    private mountGallery = async () => {
        const gallery = this.state.status === 'A' ? this.galleryA.current : this.galleryB.current;
        const position = this.state.status === 'A' ? this.state.positionA : this.state.positionB;
        await this.waitForElement(gallery, this.getSource(position));
        this.handleBullets(position);
        this.handleResetImage();
        this.setState({ hasLoaded: true });
    };

    private mountDrag = () => {
        // IF LOCK CONTROLS RETURN
        if (this.props.hideControls) return;
        // IF DESKTOP
        else if (this.props.browser.device === 'Desktop') {
            this.galleryDrag.current?.addEventListener('mousedown', this.handleDragStart);
            this.galleryDrag.current?.addEventListener('mousemove', this.handleDragMove);
            this.galleryDrag.current?.addEventListener('mouseup', this.handleDragEnd);
            this.galleryDrag.current?.addEventListener('mouseout', this.handleDragEnd);
        }
        // IF MOBILE
        else if (this.props.browser.device === 'Mobile') {
            this.galleryDrag.current?.addEventListener('touchstart', this.handleDragStart);
            this.galleryDrag.current?.addEventListener('touchmove', this.handleDragMove);
            this.galleryDrag.current?.addEventListener('touchend', this.handleDragEnd);
        }
    };

    private unmountDrag = () => {
        // IF LOCK CONTROLS RETURN
        if (this.props.hideControls) return;
        // IF DESKTOP
        else if (this.props.browser.device === 'Desktop') {
            this.galleryDrag.current?.removeEventListener('mousedown', this.handleDragStart);
            this.galleryDrag.current?.removeEventListener('mousemove', this.handleDragMove);
            this.galleryDrag.current?.removeEventListener('mouseup', this.handleDragEnd);
            this.galleryDrag.current?.removeEventListener('mouseout', this.handleDragEnd);
        }
        // IF MOBILE
        else if (this.props.browser.device === 'Mobile') {
            this.galleryDrag.current?.removeEventListener('touchstart', this.handleDragStart);
            this.galleryDrag.current?.removeEventListener('touchmove', this.handleDragMove);
            this.galleryDrag.current?.removeEventListener('touchend', this.handleDragEnd);
        }
    };

    private getSource = (position: number) => {
        return (this.props.children as any[])[this.getPosition(position)].props.src;
    };

    private getPosition = (position: number) => {
        return (position + this.state.length) % this.state.length;
    };

    private getTranslate = (status: States['status'], direction: 'Previous' | 'Current' | 'Next', updateClick?: boolean) => {
        // IF NO GALLERY RETURN
        if (!this.galleryA.current || !this.galleryB.current) return { number: 0, string: '' };
        // GET ELEMENTS
        const gallery = status === 'A' ? this.galleryA.current : this.galleryB.current;
        const images = gallery.children;
        // IF NO GALLERY OR IMAGES RETURN
        if (!gallery || !images || images.length === 0) return;
        // GET PADDING AND WIDTH
        const padding = this.props.browser.variables.spacingHorizontal;
        const width = gallery.clientWidth - padding * 2;
        // GET POSITION
        let position;
        if (direction === 'Previous') {
            position = 2;
        } else if (direction === 'Current') {
            position = 3;
        } else if (direction === 'Next') {
            position = 4;
        }
        // DEFINE VARIABLES
        let click = padding;
        let translate = Array.from(images)
            .slice(0, position)
            .reduce((sum, image) => sum + image.clientWidth, 0);
        // IF CURRENT IMAGE IS SMALLER THAN CONTAINER
        if (this.props.modus === 'Variable' && width !== images[position].clientWidth) {
            click = click + Math.round((width - images[position].clientWidth) / 2);
            translate = translate - Math.round((width - images[position].clientWidth) / 2);
        }
        // IF UPDATE IS TRUE
        if (updateClick) {
            this.setState({ click: this.props.modus === 'Variable' ? click : null });
        }
        // RETURN TRANSLATE
        return {
            number: translate,
            string: this.props.modus === 'Variable' ? `translateX(${-translate}px)` : `translateX(-${position * 100}%)`
        };
    };

    private handleBullets = (position: number) => {
        // GET BULLETS
        const bullets = this.galleryBullets.current;
        // IF LOCK CONTROLS RETURN
        if (this.props.hideControls || !bullets || !this.state.hasLoaded || this.state.hasError) return;
        // DELETE CLASS NAME FOR ALL BULLETS
        for (let index = 0; index < this.state.length; index++) {
            if (index >= Math.floor(position / 10) * 10 && index < Math.floor(position / 10) * 10 + 10) {
                bullets.children[index].className = 'active';
            } else {
                bullets.children[index].className = '';
            }
        }
        // UPDATE BULLETS
        bullets.children[position].classList.add('current');
    };

    private handleResetImage = () => {
        // RETURN WHEN TRANSITION IS ACTIVE
        if (this.state.transition || this.state.hasError) return;
        // GET GALLERY
        const gallery = this.state.status === 'A' ? this.galleryA.current : this.galleryB.current;
        // IF NO GALLERY RETURN
        if (!gallery) return;
        // TRANSFORM GALLERY
        gallery.style.transform = this.getTranslate(this.state.status, 'Current', true).string;
    };

    private handleChangeImage = (direction: 'Previous' | 'Next') => {
        // RETURN WHEN TRANSITION IS ACTIVE
        if (this.state.transition || !this.state.hasLoaded || this.state.hasError) return;
        // UPDATE STATE
        this.setState({ transition: true });
        // DEFINE VARIABLES
        const statusActive = this.state.status === 'A' ? 'A' : 'B';
        const statusInactive = this.state.status === 'B' ? 'A' : 'B';
        const galleryActive = this.state.status === 'A' ? this.galleryA.current : this.galleryB.current;
        const galleryInactive = this.state.status === 'B' ? this.galleryA.current : this.galleryB.current;
        const position = this.getPosition((this.state.status === 'A' ? this.state.positionA : this.state.positionB) + (direction === 'Previous' ? -1 : 1));
        // IF NO GALLERY RETURN
        if (!galleryActive || !galleryInactive) return;
        // BEFORE TRANSITION
        setTimeout(async () => {
            // UPDATE ACTIVE GALLERY
            galleryActive.classList.add('transition');
            galleryActive.style.transform = this.getTranslate(statusActive, direction).string;
            // UPDATE BULLETS
            this.handleBullets(position);
            // UPDATE POSITION
            if (this.state.status === 'A') {
                this.setState({ positionB: position }, async () => {
                    await this.waitForElement(galleryInactive, this.getSource(position));
                    galleryInactive.style.transform = this.getTranslate(statusInactive, 'Current', true).string;
                });
            } else {
                this.setState({ positionA: position }, async () => {
                    await this.waitForElement(galleryInactive, this.getSource(position));
                    galleryInactive.style.transform = this.getTranslate(statusInactive, 'Current', true).string;
                });
            }
        });
        // AFTER TRANSITION
        setTimeout(() => {
            // UPDATE ACTIVE GALLERY
            galleryActive.classList.remove('transition');
            // UPDATE POSITION
            if (this.state.status === 'A') {
                this.setState({ positionA: position });
            } else {
                this.setState({ positionB: position });
            }
            // UPDATE STATE
            this.setState({ status: statusInactive, transition: false });
        }, 500);
    };

    private handleClick = (event: any) => {
        if (this.props.browser.mouse.cursor === 'Left' && !event.target.classList.contains('cursorLeft')) {
            this.handleChangeImage('Previous');
        } else if (this.props.browser.mouse.cursor === 'Right' && !event.target.classList.contains('cursorRight')) {
            this.handleChangeImage('Next');
        }
    };

    private handleDragStart = (event: any) => {
        // PREVENT DEFAULT
        if (!this.props.fullScreen && this.props.browser.height > this.props.browser.variables.mediaXS) {
            event.preventDefault();
        }
        // IF TRANSITION RETURN
        if (
            this.state.drag ||
            this.state.transition ||
            !this.state.hasLoaded ||
            this.state.hasError ||
            this.props.browser.mouse.cursor === 'Left' ||
            this.props.browser.mouse.cursor === 'Right'
        ) {
            return;
        }
        // GET POSITION
        const position = this.props.browser.device === 'Desktop' ? event.clientX : event.touches[0].clientX;
        // UPDATE STATE
        this.setState({
            drag: {
                start: position,
                end: 0
            },
            transition: true
        });
    };

    private handleDragMove = (event: any) => {
        // PREVENT DEFAULT
        if (this.state.drag && !this.props.fullScreen && this.props.browser.height > this.props.browser.variables.mediaXS) {
            event.preventDefault();
        }
        // IF FALSE RETURN
        if (
            !this.state.drag ||
            !this.state.transition ||
            !this.state.hasLoaded ||
            this.state.hasError ||
            this.props.browser.mouse.cursor === 'Left' ||
            this.props.browser.mouse.cursor === 'Right'
        ) {
            return;
        }
        // DEFINE VARIABLES
        const position = this.props.browser.device === 'Desktop' ? event.clientX : event.touches[0].clientX;
        const gallery = this.state.status === 'A' ? this.galleryA.current : this.galleryB.current;
        const end = position - this.state.drag.start;
        // IF NO GALLERY RETURN
        if (!gallery) return;
        // UPDATE GALLERY
        gallery.style.transform = `translateX(${-this.getTranslate(this.state.status, 'Current', false).number + end}px)`;
        // UPDATE STATE
        this.setState({ drag: { ...this.state.drag, end } });
    };

    private handleDragEnd = (event: any) => {
        // PREVENT DEFAULT
        if (this.state.drag && !this.props.fullScreen && this.props.browser.height > this.props.browser.variables.mediaXS) {
            event.preventDefault();
        }
        // IF FALSE RETURN
        if (
            !this.state.drag ||
            !this.state.transition ||
            !this.state.hasLoaded ||
            this.state.hasError ||
            this.props.browser.mouse.cursor === 'Left' ||
            this.props.browser.mouse.cursor === 'Right'
        ) {
            return;
        }
        // DEFINE VARIABLES
        const statusActive = this.state.status === 'A' ? 'A' : 'B';
        const statusInactive = this.state.status === 'B' ? 'A' : 'B';
        const galleryActive = this.state.status === 'A' ? this.galleryA.current : this.galleryB.current;
        const galleryInactive = this.state.status === 'B' ? this.galleryA.current : this.galleryB.current;
        // IF NO GALLERY RETURN
        if (!galleryInactive || !galleryActive) return;
        // GET POSITION
        let position = this.state.status === 'A' ? this.state.positionA : this.state.positionB;
        let direction: 'Previous' | 'Current' | 'Next' = 'Current';
        // IF PREVIOUS IMAGE
        if (this.state.drag.end >= this.boundary) {
            direction = 'Previous';
            position = this.getPosition(position - 1);
        }
        // IF NEXT IMAGE
        else if (this.state.drag.end <= -this.boundary) {
            direction = 'Next';
            position = this.getPosition(position + 1);
        }
        // UPDATE STATE
        this.setState({ drag: null });
        // BEFORE TRANSITION
        setTimeout(async () => {
            // UPDATE ACTIVE GALLERY
            galleryActive.classList.add('transition');
            galleryActive.style.transform = this.getTranslate(statusActive, direction).string;
            // IF CURRENT IMAGE
            if (direction === 'Current') return;
            // UPDATE BULLETS
            this.handleBullets(position);
            // UPDATE POSITION
            if (this.state.status === 'A') {
                this.setState({ positionB: position }, async () => {
                    await this.waitForElement(galleryInactive, this.getSource(position));
                    galleryInactive.style.transform = this.getTranslate(statusInactive, 'Current', true).string;
                });
            } else {
                this.setState({ positionA: position }, async () => {
                    await this.waitForElement(galleryInactive, this.getSource(position));
                    galleryInactive.style.transform = this.getTranslate(statusInactive, 'Current', true).string;
                });
            }
        });
        // AFTER TRANSITION
        setTimeout(() => {
            // UPDATE ACTIVE GALLERY
            galleryActive.classList.remove('transition');
            // UPDATE STATE
            this.setState({ transition: false });
            // IF CURRENT IMAGE
            if (direction === 'Current') return;
            // UPDATE POSITION
            if (this.state.status === 'A') {
                this.setState({ positionA: position, status: statusInactive });
            } else {
                this.setState({ positionB: position, status: statusInactive });
            }
        }, 500);
    };

    private waitForElement = (element: HTMLElement, srcUpdated: string) => {
        // IF NO ELEMENT RETURN
        if (!element) return;
        // RETURN PROMISE
        return new Promise<void>(resolve => {
            // DEFINE VARIABELS
            let counter = 0;
            let images = Array.from(element.children);
            let numberImages = images.length;
            let numberImagesResolved = 0;
            let numberImagesFailed = 0;
            // SET INTERVAL
            let interval = setInterval(() => {
                counter++;
                const srcCurrent = (Array.from(element.children) as any[])[3].src.replace(`${window.location.origin}${window.location.pathname}`, '');
                if (Array.from(element.children).length === 7 && srcCurrent === srcUpdated) {
                    clearInterval(interval);
                    checkImages();
                } else if (counter > 1000) {
                    clearInterval(interval);
                    this.setState({ hasError: true });
                    resolve();
                }
            }, 10);
            // HANDLE IMAGE LOADED
            const handleImageLoaded = () => {
                numberImagesResolved++;
                if (numberImagesResolved === numberImages) {
                    resolve();
                }
            };
            // HANDLE IMAGE FAILED
            const handleImageFailed = () => {
                numberImagesResolved++;
                numberImagesFailed++;
                if (numberImagesResolved === numberImages) {
                    this.setState({ hasError: true });
                    resolve();
                }
            };
            // CHECK IMAGES
            const checkImages = () => {
                images.forEach((image: any) => {
                    if (image.complete && image.naturalWidth > 0) {
                        handleImageLoaded();
                    } else if (image.complete && image.naturalWidth <= 0) {
                        handleImageFailed();
                    } else {
                        let loadImage = (event: any) => {
                            event.target.removeEventListener('load', loadImage);
                            event.target.removeEventListener('error', errorImage);
                            handleImageLoaded();
                        };
                        let errorImage = (event: any) => {
                            event.target.removeEventListener('load', loadImage);
                            event.target.removeEventListener('error', errorImage);
                            handleImageFailed();
                        };
                        image.addEventListener('load', loadImage);
                        image.addEventListener('error', errorImage);
                    }
                });
            };
        });
    };

    render() {
        // DEFINE VARIABLES
        const language = this.props.browser.language;
        const children = this.props.children as React.ReactNode[];
        const positionA = this.state.positionA;
        const positionB = this.state.positionB;
        // RETURN COMPONENT
        return (
            <div
                className={[
                    'gallery',
                    this.props.modus === 'Expansion' && 'expansion',
                    this.props.fullScreen && 'fullScreen',
                    this.props.loadingScreen && 'loadingScreen',
                    this.state.hasError && 'hasError',
                    this.state.hasLoaded && 'hasLoaded'
                ]
                    .filter(x => x)
                    .join(' ')}
                onClick={this.handleClick}
            >
                {!this.props.hideControls && <div ref={this.galleryDrag} className='galleryDrag' />}
                {!this.props.hideControls && !this.state.drag && this.props.browser.device === 'Desktop' && (
                    <div className='galleryClick'>
                        <div
                            className='galleryLeft cursorLeft'
                            onClick={() => this.handleChangeImage('Previous')}
                            style={this.state.click ? { width: `${this.state.click}px` } : {}}
                        />
                        <div
                            className='galleryRight cursorRight'
                            onClick={() => this.handleChangeImage('Next')}
                            style={this.state.click ? { width: `${this.state.click}px` } : {}}
                        />
                    </div>
                )}
                {!this.props.hideControls && (
                    <div ref={this.galleryBullets} className={'galleryBullets'}>
                        {Array.from(Array(this.state.length).keys(), index => {
                            return <div key={`galleryBullet_${index}`} data-index={index} />;
                        })}
                    </div>
                )}
                <Parallax
                    deactivate={this.props.parallax ? this.props.parallax.deactivate : false}
                    factor={this.props.parallax ? this.props.parallax.factor : this.props.browser.media === 'Extra Small' ? 15 : 20}
                    modus={this.props.parallax ? this.props.parallax.modus : 'Complex'}
                    height={this.props.parallax ? this.props.parallax.height : this.props.browser.height}
                    scroll={this.props.parallax ? this.props.parallax.scroll : this.props.browser.scroll}
                >
                    <div ref={this.galleryA} className={['galleryA', this.state.status === 'A' && 'active'].filter(x => x).join(' ')}>
                        <React.Fragment key='galleryA_01'>{children[this.getPosition(positionA - 3)]}</React.Fragment>
                        <React.Fragment key='galleryA_02'>{children[this.getPosition(positionA - 2)]}</React.Fragment>
                        <React.Fragment key='galleryA_03'>{children[this.getPosition(positionA - 1)]}</React.Fragment>
                        <React.Fragment key='galleryA_04'>{children[positionA]}</React.Fragment>
                        <React.Fragment key='galleryA_05'>{children[this.getPosition(positionA + 1)]}</React.Fragment>
                        <React.Fragment key='galleryA_06'>{children[this.getPosition(positionA + 2)]}</React.Fragment>
                        <React.Fragment key='galleryA_07'>{children[this.getPosition(positionA + 3)]}</React.Fragment>
                    </div>
                    <div ref={this.galleryB} className={['galleryB', this.state.status === 'B' && 'active'].filter(x => x).join(' ')}>
                        <React.Fragment key='galleryB_01'>{children[this.getPosition(positionB - 3)]}</React.Fragment>
                        <React.Fragment key='galleryB_02'>{children[this.getPosition(positionB - 2)]}</React.Fragment>
                        <React.Fragment key='galleryB_03'>{children[this.getPosition(positionB - 1)]}</React.Fragment>
                        <React.Fragment key='galleryB_04'>{children[positionB]}</React.Fragment>
                        <React.Fragment key='galleryB_05'>{children[this.getPosition(positionB + 1)]}</React.Fragment>
                        <React.Fragment key='galleryB_06'>{children[this.getPosition(positionB + 2)]}</React.Fragment>
                        <React.Fragment key='galleryB_07'>{children[this.getPosition(positionB + 3)]}</React.Fragment>
                    </div>
                </Parallax>
                {this.state.loadingScreen && (
                    <div className='galleryMessage'>
                        <svg id='galleryLogo' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 200 250'>
                            <defs>
                                <clipPath id='clipPath_01'>
                                    <path d='m169.98,154.22c1.12.1,1.72-1.24,2.18-2.21,2.36-4.92,5.21-9.52,8.26-14.03,5.37-7.95,10.83-15.82,16.28-23.71,1.79-2.6,3.17-5.45,3.28-8.75.3-8.37-4.14-13.93-13.15-16.06v-.02c-8.24-1.95-16.53-1.16-24.77.18-2.38.39-4.74.84-7.1,1.27,5.18-3.44,10.57-6.23,16.13-8.67,3.9-1.71,7.77-3.49,11.36-5.84,2.58-1.69,2.85-4,.87-6.41-1.05-1.28-2.35-2.25-3.93-2.6-3.42-.75-6.88-1.12-10.39-.9-12.8.8-25.32,3.47-37.91,5.75-2.36.43-4.76,1.2-7.32.46.69-1.63,1.66-2.8,2.63-3.96,3.53-4.25,7.75-7.76,11.87-11.35,4.44-3.87,9.07-7.54,13.13-11.85,1.27-1.35,2.61-2.83,1.9-4.97-.91-2.71-2.52-4.79-5.31-5.7-2.19-.72-4.43-.74-6.67-.62-15.37.86-29.17,6.17-41.48,15.66-1,.77-2.02,1.5-3.09,2.17-.31.2-.88.31-1.17.15-.65-.35-.1-.85.02-1.3,1.48-5.28,4.08-10.02,7.48-14.12,8.38-10.09,16.89-20.09,27.64-27.68,1.62-1.14,3.21-2.51,2.8-4.77-.44-2.43-2.47-3.29-4.55-3.82-.72-.18-1.48-.16-2.23-.25-4.15-.52-8.29-.2-12.44.04-9.94.6-19.8,2.24-28.83,6.44-22.72,10.55-39.75,27.39-48.99,51.51-4.88,12.76-5.21,26.32.39,39.03,2.18,4.94,9.92,1.55,8.42-2.34-1.07-2.8-.88-2.86-1.42-4.87-1.91-7.19-1.74-14.41-.2-21.6,3.54-16.56,12.46-29.62,24.71-40.63,10.3-9.26,21.74-15.96,35.29-18.5,4.97-.93,9.98-1.57,15.65-1.91-2.96,3.25-5.52,6.1-8.12,8.91-4.88,5.27-9.74,10.56-14.13,16.28-3.76,4.9-6.62,10.24-7.65,16.51-1.07,6.49,4.8,11.85,10.87,9.88,2.09-.68,3.96-1.8,5.69-3.14,9.76-7.61,21.22-10.7,32.89-13.23.61-.13,1.28-.02,1.21-.02-3.25,3.65-6.73,7.76-10.42,11.65-3.31,3.5-7.04,6.56-9.83,10.55-3.07,4.4-3.03,7.02-.15,11.22,1.56,2.27,3.78,2.93,6.28,3.05,5.94.28,11.73-1.02,17.57-1.8,7.16-.95,14.31-1.95,21.47-2.93.35.14.8.08.98.56-5.41,3.18-11.12,5.81-16.29,9.43-2.39,1.67-4.98,3.54-4.07,6.95.89,3.33,3.61,5,6.88,5.5,4.1.63,8.1-.4,12.1-1.05,7.76-1.25,15.5-1.92,23.27-.25.65.14,1.29.31,1.92.52,3.48,1.19,4.22,2.76,2.7,6.16h.02c-2.66,5.98-6.85,10.92-10.52,16.2-4.31,6.2-8.88,12.17-12.79,18.69-.43.72-1.19,2.36-1.89,2.17-1.97-.54.33,14.77,2.66,14.97Z' />
                                </clipPath>
                                <clipPath id='clipPath_02'>
                                    <path d='m167.32,139.25c-.76-.23-1.2-.56-2.23-1.78-4.53-5.42-10.12-9.36-16.21-12.62-13.01-6.97-26.69-12.2-40.59-16.91-9.22-3.12-18.28-6.76-27.8-8.91-7.47-1.68-15.09-2.33-22.64-3.48-3.44-.52-10.48-1.84-12.97-1.7-3.12.18-5.01,2.9-8.32,2.75-2.77-.13-9.57-.94-14.51-2.41-4.8-1.44-9.78-1.9-14.75-2.26-.64-.04-1.44-.13-1.8.59-.42.82.36,1.23.8,1.68,1.73,1.73,3.53,3.38,5.23,5.14,3.76,3.89,8.29,6.87,11.94,10.91,1.3,1.43,1.09,2.03-.36,3.04-5.65,3.93-11.1,8.16-17.3,11.18-1.11.54-2.12,1.35-3.06,2.19-.83.74-1.13,1.76-.26,2.71,2.36,2.57,4.71,4.91,8.63,4.86,6.42-.08,15.58-1.5,20.04-1.89,0,0,0,0,0,0,2.68.38-.44,4.16,4.1,14.58,2.93,6.71,10.02,22.09,11.53,34.18h0c.81,6.53,2.26,13.01,1.95,19.64-.41,8.87-2.28,17.51-5.25,25.78-2.44,6.8-7.37,11.76-13.45,15.34-1.37.81-1.82,1.28-3.77,1.73-3.14.73-3.44,6.42.51,6.42s13.6-3.18,18.63-8.57c11.79-12.64,15.4-28.26,14.59-45.21-.54-11.36-3.25-22.36-6.99-33.01-3.08-8.76-7.31-19.08-10.2-25.94-2.9-6.86-4.99-11-12.45-10.88-2.57.04-6.73.38-10.22.68,3.16-2.05,9.71-6.28,11.09-7.17-.54.35,1.93-1.08,2.99-1,2.54.19,5.28-2.64,1.15-4.45-3.29-1.44-5.71-6.31-8.29-9.09-1.37-1.48-2.88-2.83-4.69-4.6,1.73-.18,3.02.67,4.4.96,3.83.8,8.2,1.08,11.59,1.49,3.4.41,8.49,1.04,10.73,1.24,2.25.2,4.38.4,5.05.4,2.37.03,4.75-.05,4.38,3.64-.09.85.41,1.83.82,2.66,1.47,2.98,3.8,3.66,6.63,1.99,1.94-1.14,3.39-2.78,4.23-4.9.56-1.43,1.31-1.91,2.86-1.52,3.71.93,7.47,1.59,11.19,2.48,10.87,2.6,21.12,7.16,31.66,10.79,11.69,4.03,22.95,9.06,33.78,15.1,7.38,4.12,14.42,8.62,17.86,17.14.4,1.01,1.36,1.98,2.37,1.99,2.23.02.4-14.05-2.66-14.97ZM31.45,119.77s-.06.04-.08.05c.18-.12.23-.15.08-.05Z' />
                                </clipPath>
                                <clipPath id='clipPath_03'>
                                    <path d='m26.29,243.57c-3.65.92-6.89-.28-10.45-4.42-4.5-5.23-6.21-11.54-6.42-18.22-.48-15.65,3.23-30.4,10.33-44.17,4.88-9.44,9.85-18.83,14.63-28.34.19-.37.6-1.04,1.08-1.89s4.33-9.93,6.46-15.97,3.24-13.62,4.34-20.55c.31-1.94.8-4.13,1.01-5.21.65-3.37-6.86-4.53-7.19-1.2-.08.83-.21,1.41-.39,1.94-.85,2.5-1.72,5.01-2.26,7.59,0,0-.77,3.44-1.41,5.56-.31,1.02-.88,2.59-1.21,3.8-.22.79-.47,1.12-.93,3.03s-2.31,7.43-3.1,9.58-6.88,14.43-11.05,21.74c-8.99,15.71-17.13,31.72-19.1,50.31-.88,8.28-1.2,16.41,1.73,24.33,3.95,10.7,14.73,18.51,24.46,18.51,3.8,0,2.67-7.22-.51-6.42Z' />
                                </clipPath>
                            </defs>
                            <path
                                id='galleryLogo_01'
                                clipPath='url(#clipPath_01)'
                                d='m41.89,99.61c-9.14-22.49-3.89-48.61,16.11-68.61S101.54,1.07,123.5,3.5c16.83,1.86-40.94,32.51-29,52,3.11,6.15,26.14-22.65,51-16,13.04,2.83-32,26-24,35,4.7,5.28,52-9,55-3,3.49,6.99-32.08,15.1-25,21,6,5,38-8,44.4,5.73,4.37,9.38-20.71,33.22-28.18,51.55'
                            />
                            <path
                                id='galleryLogo_02'
                                clipPath='url(#clipPath_02)'
                                d='m169.77,147.03c-5.28-6.2-7.59-12.59-26.27-21.53-21.39-10.23-49.48-19.5-65.48-22.5-15.04-2.82-23.53-1.84-36.52-2.5-12.15-.62-36.93-9.09-27-2,7,5,12.94,9.82,13.28,14.95.41,6.05-23.83,11.86-18.4,15.22,5.98,3.7,23.23-3.04,25.52,3.46,3.78,10.76,19.53,39.1,19.6,64.37.06,23.09-9.94,50-29,50'
                            />
                            <path
                                id='galleryLogo_03'
                                clipPath='url(#clipPath_03)'
                                d='m25.5,246.5c-18.44,0-22.84-21.65-20.42-37.75,2.68-17.78,15.42-44.25,24.42-60.25s11.88-34.22,14.32-46.53'
                            />
                        </svg>
                        <p>{this.state.hasError ? getLanguage(language, 'galleryError') : getLanguage(language, 'galleryLoading')}</p>
                    </div>
                )}
            </div>
        );
    }
}
