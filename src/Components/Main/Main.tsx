import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Gallery from '../Gallery/Gallery';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Browser } from '../../@types/browser';
import { Language } from '../../@types/language';
import '../../General/General.scss';
import './Main.scss';

interface States {
    browser: Browser;
    language: Language;
    status: 'Start' | 'None';
}

class Main extends React.Component<{}, States> {
    private timeMount: number = new Date().getTime();
    private timeScroll: number;

    state: States = {
        browser: this.initBrowser(),
        language: 'de',
        status: 'Start'
    };

    componentDidMount() {
        window.addEventListener('mousemove', this.handleMouse);
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('scroll', this.handleScroll);

        console.log('LANGUAGE', navigator.language);
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouse);
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('scroll', this.handleScroll);
    }

    initBrowser() {
        // DEFINE VARIABLES
        let device: Browser['device'],
            height: Browser['height'],
            mouse: Browser['mouse'],
            scroll: Browser['scroll'],
            type: Browser['type'],
            width: Browser['width'];
        // INITIALIZE DEVICE
        if ('ontouchstart' in window || 'onmsgesturechange' in window) {
            device = 'Mobile';
        } else {
            device = 'Desktop';
        }
        // INITIALIZE HEIGHT AND WIDTH
        height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        // INITIALIZE MOUSE
        mouse = {
            x: 0,
            y: 0
        };
        // INITIALIZE SCROLL
        scroll = 0;
        // INITIALIZE TYPE
        if (navigator.userAgent.indexOf('Chrome') > -1) {
            type = 'Chrome';
        } else if (navigator.userAgent.indexOf('Firefox') > -1) {
            type = 'Firefox';
        } else if (navigator.userAgent.indexOf('MSIE') > -1) {
            type = 'Microsoft';
        } else if (navigator.userAgent.toLowerCase().indexOf('op') > -1) {
            type = 'Opera';
        } else if (navigator.userAgent.indexOf('Safari') > -1) {
            type = 'Safari';
        } else {
            type = 'Unknown';
        }
        // RETURN VARIABLES
        return { device, height, mouse, scroll, type, width };
    }

    handleMouse = (event: any) => {
        // DEFINE VARIABLES
        const mouse: Browser['mouse'] = {
            x: event.clientX,
            y: event.clientY
        };
        // UPDATE CURSOR
        if (event.target.className === 'left') {
            mouse.cursor = 'Left';
        } else if (event.target.className === 'right') {
            mouse.cursor = 'Right';
        }
        // UPDATE STATE
        this.setState({ browser: { ...this.state.browser, mouse } });
    };

    handleScroll = () => {
        // DEFINE VARIABLES
        let scroll = document.documentElement.scrollTop;
        let direction: 'Up' | 'Down' = 'Down';
        // GET DIRECTION
        if (scroll < this.state.browser.scroll) {
            direction = 'Up';
        }
        // HIDE WELCOME
        if (this.state.status === 'Start' && direction === 'Down' && scroll > 0 && !this.timeScroll) {
            this.timeScroll = new Date().getTime();
            if (this.timeScroll - this.timeMount >= 1000) {
                this.setState({ status: 'None' });
            } else {
                setTimeout(() => this.setState({ status: 'None' }), 1050 - (this.timeScroll - this.timeMount));
            }
        }
        // UPDATE STATE
        this.setState({ browser: { ...this.state.browser, scroll } });
    };

    handleResize = () => {
        const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.setState({ browser: { ...this.state.browser, height, width } });
    };

    handleBackToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    handleLanguage = (language: Language) => {
        this.setState({ language });
    };

    render() {
        return (
            <div
                id='main'
                className={[
                    this.state.browser.device === 'Desktop' && 'desktop',
                    this.state.browser.device === 'Mobile' && 'mobile',
                    this.state.status === 'Start' && 'start'
                ]
                    .filter(x => x)
                    .join(' ')}
            >
                <Header handleLanguage={this.handleLanguage} language={this.state.language} />
                <div
                    id='mouse'
                    className={[this.state.browser.mouse.cursor === 'Left' && 'left', this.state.browser.mouse.cursor === 'Right' && 'right']
                        .filter(x => x)
                        .join(' ')}
                    style={{ left: `${this.state.browser.mouse.x}px`, top: `${this.state.browser.mouse.y}px` }}
                />
                <div id='welcome'>
                    <div id='scrollHint' />
                    <video src='assets/montage.mov' autoPlay loop muted playsInline />
                </div>
                <div id='content'>
                    <section>
                        <header>Ort</header>
                        <main>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                            duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                            erat, sed diam voluptua.
                        </main>
                        <Gallery browser={this.state.browser}>
                            <img src='assets/pictures/ort_01.png' />
                            <img src='assets/pictures/ort_02.png' />
                            <img src='assets/pictures/ort_03.png' />
                            <img src='assets/pictures/ort_04.png' />
                            <img src='assets/pictures/ort_05.png' />
                        </Gallery>
                    </section>
                </div>
                <Footer handleBackToTop={this.handleBackToTop} language={this.state.language} />
            </div>
        );
    }
}

ReactDOM.render(<Main />, document.getElementById('root'));
