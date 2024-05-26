import * as React from 'react';
import Parallax from '../Parallax/Parallax';
import { Browser } from '../../@types/browser';
import './Gallery.scss';

interface Props {
    autoPlay?: boolean;
    lockControls?: boolean;
    fullScreen?: boolean;
    browser: Browser;
    children: React.ReactNode;
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
    isLoaded: boolean;
    length: number;
    positionA: number;
    positionB: number;
    status: 'A' | 'B';
    transition: boolean;
}

export default class Gallery extends React.Component<Props, States> {
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
            isLoaded: false,
            length: React.Children.toArray(this.props.children).length,
            positionA: 0,
            positionB: 0,
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

    componentDidUpdate(prevProps: Props) {
        if (this.props.browser.height !== prevProps.browser.height || this.props.browser.width !== prevProps.browser.width) {
            this.handleResetImage();
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
        this.setState({ isLoaded: true });
    };

    private mountDrag = () => {
        // IF LOCK CONTROLS RETURN
        if (this.props.lockControls) return;
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
        if (this.props.lockControls) return;
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
    }

    private getSource = (position: number) => {
        return (this.props.children as any[])[this.getPosition(position)].props.src;
    };

    private getPosition = (position: number) => {
        return (position + this.state.length) % this.state.length;
    };

    private getTranslate = (status: States['status'], direction: 'Previous' | 'Current' | 'Next', updateClick?: boolean) => {
        // GET ELEMENTS
        const gallery = status === 'A' ? this.galleryA.current : this.galleryB.current;
        const images = gallery.children;
        // IF NO GALLERY OR IMAGES RETURN
        if (!gallery || !images || images.length === 0) return;
        // GET PADDING AND WIDTH
        const padding = Number(getComputedStyle(document.documentElement).getPropertyValue('--spacing-horizontal').split('px').shift());
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
        if (this.props.lockControls || !bullets) return;
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
        if (this.state.transition) return;
        // GET GALLERY
        const gallery = this.state.status === 'A' ? this.galleryA.current : this.galleryB.current;
        // IF NO GALLERY RETURN
        if (!gallery) return;
        // TRANSFORM GALLERY
        gallery.style.transform = this.getTranslate(this.state.status, 'Current', true).string;
    }

    private handleChangeImage = (direction: 'Previous' | 'Next') => {
        // RETURN WHEN TRANSITION IS ACTIVE
        if (this.state.transition) return;
        // UPDATE STATE
        this.setState({ transition: true });
        // DEFINE VARIABLES
        const statusActive = this.state.status === 'A' ? 'A' : 'B';
        const statusInactive = this.state.status === 'B' ? 'A' : 'B';
        const galleryActive = this.state.status === 'A' ? this.galleryA.current : this.galleryB.current;
        const galleryInactive = this.state.status === 'B' ? this.galleryA.current : this.galleryB.current;
        const position = this.getPosition(
            (this.state.status === 'A' ? this.state.positionA : this.state.positionB) + (direction === 'Previous' ? -1 : 1)
        );
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
        // IF TRANSITION RETURN
        if (
            this.state.drag ||
            this.state.transition ||
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
    }

    private handleDragMove = (event: any) => {
        // PREVENT DEFAULT
        if (this.state.drag && !this.props.fullScreen) {
            event.preventDefault();
        }
        // IF FALSE RETURN
        if (
            !this.state.drag ||
            !this.state.transition ||
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
    }

    private handleDragEnd = (event: any) => {
        // IF FALSE RETURN
        if (
            !this.state.drag ||
            !this.state.transition ||
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
        if (this.state.drag.end >= 100) {
            direction = 'Previous';
            position = this.getPosition(position - 1);
        }
        // IF NEXT IMAGE
        else if (this.state.drag.end <= -100) {
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
    }

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
                const srcCurrent = (Array.from(element.children) as any[])[3].src.replace(`${window.location.origin}/`, '');
                if (Array.from(element.children).length === 7 && srcCurrent === srcUpdated) {
                    clearInterval(interval);
                    checkImages();
                } else if (counter > 500) {
                    clearInterval(interval);
                    resolve();
                }
            }, 10);
            // HANDLE IMAGE LOADED
            const handleImageLoaded = () => {
                numberImagesResolved++;
                if (numberImagesResolved === numberImages) {
                    setTimeout(() => resolve(), 50);
                }
            };
            // HANDLE IMAGE FAILED
            const handleImageFailed = () => {
                numberImagesResolved++;
                numberImagesFailed++;
                if (numberImagesResolved === numberImages) {
                    setTimeout(() => resolve(), 50);
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
                    this.state.isLoaded && 'isLoaded'
                ]
                    .filter(x => x)
                    .join(' ')}
                onClick={this.handleClick}
            >
                {!this.props.lockControls && <div ref={this.galleryDrag} className='galleryDrag' />}
                {!this.props.lockControls && !this.state.drag && this.props.browser.device === 'Desktop' && (
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
                {!this.props.lockControls && (
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
            </div>
        );
    }
}
