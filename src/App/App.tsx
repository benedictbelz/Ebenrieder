import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cookies from '../Components/Cookies/Cookies';
import Header from '../Components/Header/Header';
import Mouse from '../Components/Mouse/Mouse';
import Imprint from '../Pages/Imprint/Imprint';
import Overview from '../Pages/Overview/Overview';
import Privacy from '../Pages/Privacy/Privacy';
import { Wrapper } from '../Router/Router';
import { Browser } from '../@types/browser';
import { Language } from '../@types/language';
import './App.scss';

interface States {
    browser: Browser;
}

class App extends React.Component<{}, States> {
    private timerMount: number = new Date().getTime();
    private timerScroll: number;

    state: States = {
        browser: this.mountBrowser()
    };

    componentDidMount() {
        window.addEventListener('mousemove', this.handleMouse);
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('scroll', this.handleScroll);
        if (this.state.browser.cookies === 'Accept') {
            this.handleAcceptCookies();
        } else if (this.state.browser.cookies === 'Decline') {
            this.handleDeclineCookies();
        }
    }

    componentWillUnmount() {
        window.removeEventListener('mousemove', this.handleMouse);
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('scroll', this.handleScroll);
    }

    mountBrowser() {
        // DEFINE VARIABLES
        let cookies: Browser['cookies'],
            device: Browser['device'],
            direction: Browser['direction'],
            height: Browser['height'],
            language: Browser['language'],
            media: Browser['media'],
            mouse: Browser['mouse'],
            scroll: Browser['scroll'],
            status: Browser['status'],
            type: Browser['type'],
            variables: Browser['variables'],
            width: Browser['width'];
        // INITIALIZE COOKIES
        if (localStorage.getItem('ebenriederCookies') === 'Accept') {
            cookies = 'Accept';
        } else if (localStorage.getItem('ebenriederCookies') === 'Decline') {
            cookies = 'Decline';
        } else {
            cookies = 'Unknown';
        }
        // INITIALIZE DEVICE
        if ('ontouchstart' in window || 'onmsgesturechange' in window) {
            device = 'Mobile';
        } else {
            device = 'Desktop';
        }
        // INITIALIZE DIRECTION
        direction = 'None';
        // INITIALIZE HEIGHT AND WIDTH
        height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        // INITIALIZE LANGUAGE
        language = navigator.language.split('-').shift() === 'de' ? 'de' : 'en';
        document.documentElement.lang = navigator.language;
        // INITIALIZE VARIABLES
        const spacingHorizontal = Number(getComputedStyle(document.documentElement).getPropertyValue('--spacing-horizontal').split('px').shift());
        const spacingVerticalS = Number(getComputedStyle(document.documentElement).getPropertyValue('--spacing-vertical-s').split('px').shift());
        const spacingVerticalM = Number(getComputedStyle(document.documentElement).getPropertyValue('--spacing-vertical-m').split('px').shift());
        const spacingVerticalL = Number(getComputedStyle(document.documentElement).getPropertyValue('--spacing-vertical-l').split('px').shift());
        const spacingBoxBorizontal = Number(getComputedStyle(document.documentElement).getPropertyValue('--spacing-box-horizontal').split('px').shift());
        const spacingBoxVertical = Number(getComputedStyle(document.documentElement).getPropertyValue('--spacing-box-vertical').split('px').shift());
        const fontSizeText = Number(getComputedStyle(document.documentElement).getPropertyValue('--font-size-text').split('px').shift());
        const fontSizeDetail = Number(getComputedStyle(document.documentElement).getPropertyValue('--font-size-detail').split('px').shift());
        const fontSizeH1 = Number(getComputedStyle(document.documentElement).getPropertyValue('--font-size-h1').split('px').shift());
        const fontSizeH2 = Number(getComputedStyle(document.documentElement).getPropertyValue('--font-size-h2').split('px').shift());
        const fontSizeH3 = Number(getComputedStyle(document.documentElement).getPropertyValue('--font-size-h3').split('px').shift());
        const fontSizeH4 = Number(getComputedStyle(document.documentElement).getPropertyValue('--font-size-h4').split('px').shift());
        const mediaXS = Number(getComputedStyle(document.documentElement).getPropertyValue('--media-xs').split('px').shift());
        const mediaS = Number(getComputedStyle(document.documentElement).getPropertyValue('--media-s').split('px').shift());
        const mediaM = Number(getComputedStyle(document.documentElement).getPropertyValue('--media-m').split('px').shift());
        const mediaL = Number(getComputedStyle(document.documentElement).getPropertyValue('--media-l').split('px').shift());
        const mediaXL = Number(getComputedStyle(document.documentElement).getPropertyValue('--media-xl').split('px').shift());
        variables = {
            spacingHorizontal,
            spacingVerticalS,
            spacingVerticalM,
            spacingVerticalL,
            spacingBoxBorizontal,
            spacingBoxVertical,
            fontSizeText,
            fontSizeDetail,
            fontSizeH1,
            fontSizeH2,
            fontSizeH3,
            fontSizeH4,
            mediaXS,
            mediaS,
            mediaM,
            mediaL,
            mediaXL
        };
        // INITIALIZE MEDIA
        if (width <= mediaXS) {
            media = 'Extra Small';
        } else if (width > mediaXS && width <= mediaS) {
            media = 'Small';
        } else if (width > mediaS && width <= mediaM) {
            media = 'Medium';
        } else if (width > mediaM && width <= mediaL) {
            media = 'Large';
        } else if (width > mediaL && width <= mediaXL) {
            media = 'Extra Large';
        } else {
            media = 'Huge';
        }
        // INITIALIZE MOUSE
        mouse = {
            x: 0,
            y: 0
        };
        // INITIALIZE SCROLL
        scroll = 0;
        // INITIALIZE STATUS
        status = 'Welcome';
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
        return { cookies, device, direction, height, language, media, mouse, scroll, status, type, variables, width };
    }

    handleAcceptCookies = () => {
        // UPDATE STATE
        localStorage.setItem('ebenriederCookies', 'Accept');
        this.setState({ browser: { ...this.state.browser, cookies: 'Accept' } });
        // ADD GOOGLE TAG MANAGER
        const scriptGoogleTagManager = document.createElement('script');
        scriptGoogleTagManager.async = true;
        scriptGoogleTagManager.src = 'https://www.googletagmanager.com/gtag/js?id=G-5MB35BGDVH';
        document.head.appendChild(scriptGoogleTagManager);
        // ADD DATA LAYER
        const scriptDataLayer = document.createElement('script');
        scriptDataLayer.textContent = `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-5MB35BGDVH');`;
        document.head.appendChild(scriptDataLayer);
    };

    handleDeclineCookies = () => {
        localStorage.setItem('ebenriederCookies', 'Decline');
        this.setState({ browser: { ...this.state.browser, cookies: 'Decline' } });
    };

    handleLanguage = (language: Language) => {
        this.setState({ browser: { ...this.state.browser, language } });
    };

    handleMouse = (event: any) => {
        // DEFINE VARIABLES
        const mouse: Browser['mouse'] = {
            x: event.clientX,
            y: event.clientY
        };
        // UPDATE CURSOR
        if (event.target?.classList.contains('cursorLeft')) {
            mouse.cursor = 'Left';
        } else if (event.target?.classList.contains('cursorRight')) {
            mouse.cursor = 'Right';
        }
        // UPDATE STATE
        this.setState({ browser: { ...this.state.browser, mouse } });
    };

    handlePage = () => {
        this.setState({ browser: { ...this.state.browser, direction: 'None' } });
    };

    handleResize = () => {
        // DEFINE VARIABLES
        let media = this.state.browser.media;
        let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        // INITIALIZE VARIABLES
        const spacingHorizontal = Number(getComputedStyle(document.documentElement).getPropertyValue('--spacing-horizontal').split('px').shift());
        const spacingVerticalS = Number(getComputedStyle(document.documentElement).getPropertyValue('--spacing-vertical-s').split('px').shift());
        const spacingVerticalM = Number(getComputedStyle(document.documentElement).getPropertyValue('--spacing-vertical-m').split('px').shift());
        const spacingVerticalL = Number(getComputedStyle(document.documentElement).getPropertyValue('--spacing-vertical-l').split('px').shift());
        const spacingBoxBorizontal = Number(getComputedStyle(document.documentElement).getPropertyValue('--spacing-box-horizontal').split('px').shift());
        const spacingBoxVertical = Number(getComputedStyle(document.documentElement).getPropertyValue('--spacing-box-vertical').split('px').shift());
        const fontSizeText = Number(getComputedStyle(document.documentElement).getPropertyValue('--font-size-text').split('px').shift());
        const fontSizeDetail = Number(getComputedStyle(document.documentElement).getPropertyValue('--font-size-detail').split('px').shift());
        const fontSizeH1 = Number(getComputedStyle(document.documentElement).getPropertyValue('--font-size-h1').split('px').shift());
        const fontSizeH2 = Number(getComputedStyle(document.documentElement).getPropertyValue('--font-size-h2').split('px').shift());
        const fontSizeH3 = Number(getComputedStyle(document.documentElement).getPropertyValue('--font-size-h3').split('px').shift());
        const fontSizeH4 = Number(getComputedStyle(document.documentElement).getPropertyValue('--font-size-h4').split('px').shift());
        const mediaXS = Number(getComputedStyle(document.documentElement).getPropertyValue('--media-xs').split('px').shift());
        const mediaS = Number(getComputedStyle(document.documentElement).getPropertyValue('--media-s').split('px').shift());
        const mediaM = Number(getComputedStyle(document.documentElement).getPropertyValue('--media-m').split('px').shift());
        const mediaL = Number(getComputedStyle(document.documentElement).getPropertyValue('--media-l').split('px').shift());
        const mediaXL = Number(getComputedStyle(document.documentElement).getPropertyValue('--media-xl').split('px').shift());
        // UPDATE VARIABELS
        const variables = {
            spacingHorizontal,
            spacingVerticalS,
            spacingVerticalM,
            spacingVerticalL,
            spacingBoxBorizontal,
            spacingBoxVertical,
            fontSizeText,
            fontSizeDetail,
            fontSizeH1,
            fontSizeH2,
            fontSizeH3,
            fontSizeH4,
            mediaXS,
            mediaS,
            mediaM,
            mediaL,
            mediaXL
        };
        // UPDATE MEDIA
        if (width <= mediaXS) {
            media = 'Extra Small';
        } else if (width > mediaXS && width <= mediaS) {
            media = 'Small';
        } else if (width > mediaS && width <= mediaM) {
            media = 'Medium';
        } else if (width > mediaM && width <= mediaL) {
            media = 'Large';
        } else if (width > mediaL && width <= mediaXL) {
            media = 'Extra Large';
        } else {
            media = 'Huge';
        }
        // UPDATE STATE
        this.setState({ browser: { ...this.state.browser, mouse: { x: 0, y: 0 }, media, height, width, variables } });
    };

    handleScroll = (event: any) => {
        // DEFINE VARIABLES
        let modal = document.querySelector('.modal');
        let scroll = document.documentElement.scrollTop;
        let direction: Browser['direction'] = 'Down';
        // IF MODAL
        if (modal) {
            event.preventDefault();
            event.stopPropagation();
            window.scrollTo(0, this.state.browser.scroll);
            return;
        }
        // GET DIRECTION
        if (scroll < this.state.browser.scroll) {
            direction = 'Up';
        }
        // CHANGE STATUS
        if (this.state.browser.status === 'Welcome' && direction === 'Down' && scroll > 0 && !this.timerScroll) {
            this.timerScroll = new Date().getTime();
            if (this.timerScroll - this.timerMount >= 1000) {
                setTimeout(() => this.setState({ browser: { ...this.state.browser, status: 'None' } }));
            } else {
                setTimeout(() => this.setState({ browser: { ...this.state.browser, status: 'None' } }), 1050 - (this.timerScroll - this.timerMount));
            }
        }
        // UPDATE STATE
        this.setState({ browser: { ...this.state.browser, direction, scroll } });
    };

    render() {
        return (
            <div
                id='app'
                className={[this.state.browser.device === 'Desktop' && 'desktop', this.state.browser.device === 'Mobile' && 'mobile']
                    .filter(x => x)
                    .join(' ')}
            >
                <Router>
                    {this.state.browser.cookies === 'Unknown' && (
                        <Cookies browser={this.state.browser} handleAccept={this.handleAcceptCookies} handleDecline={this.handleDeclineCookies} />
                    )}
                    <Header browser={this.state.browser} handleLanguage={this.handleLanguage} />
                    <Mouse browser={this.state.browser} />
                    <Wrapper browser={this.state.browser} handlePage={this.handlePage}>
                        <Routes>
                            <Route path='/' element={<Overview browser={this.state.browser} />} />
                            <Route path='/impressum' element={<Imprint browser={this.state.browser} />} />
                            <Route path='/imprint' element={<Imprint browser={this.state.browser} />} />
                            <Route path='/datenschutz' element={<Privacy browser={this.state.browser} />} />
                            <Route path='/privacy' element={<Privacy browser={this.state.browser} />} />
                            <Route path='*' element={<Overview browser={this.state.browser} />} />
                        </Routes>
                    </Wrapper>
                </Router>
            </div>
        );
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
