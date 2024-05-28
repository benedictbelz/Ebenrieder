import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
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
            height: Browser['height'],
            language: Browser['language'],
            media: Browser['media'],
            mouse: Browser['mouse'],
            scroll: Browser['scroll'],
            status: Browser['status'],
            type: Browser['type'],
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
        // INITIALIZE HEIGHT AND WIDTH
        height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        // INITIALIZE LANGUAGE
        language = navigator.language.split('-').shift() === 'de' ? 'de' : 'en';
        document.documentElement.lang = navigator.language;
        // INITIALIZE MEDIA
        const xs = Number(getComputedStyle(document.documentElement).getPropertyValue('--media-xs').split('px').shift());
        const s = Number(getComputedStyle(document.documentElement).getPropertyValue('--media-s').split('px').shift());
        const m = Number(getComputedStyle(document.documentElement).getPropertyValue('--media-m').split('px').shift());
        const l = Number(getComputedStyle(document.documentElement).getPropertyValue('--media-l').split('px').shift());
        const xl = Number(getComputedStyle(document.documentElement).getPropertyValue('--media-xl').split('px').shift());
        if (width <= xs) {
            media = 'Extra Small';
        } else if (width > xs && width <= s) {
            media = 'Small';
        } else if (width > s && width <= m) {
            media = 'Medium';
        } else if (width > m && width <= l) {
            media = 'Large';
        } else if (width > l && width <= xl) {
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
        return { cookies, device, height, language, media, mouse, scroll, status, type, width };
    }

    handleAcceptCookies = () => {
        localStorage.setItem('ebenriederCookies', 'Accept');
        this.setState({ browser: { ...this.state.browser, cookies: 'Accept' } });
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

    handleResize = () => {
        // DEFINE VARIABLES
        let media = this.state.browser.media;
        let height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        let width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        // INITIALIZE MEDIA
        const xs = Number(getComputedStyle(document.documentElement).getPropertyValue('--media-xs').split('px').shift());
        const s = Number(getComputedStyle(document.documentElement).getPropertyValue('--media-s').split('px').shift());
        const m = Number(getComputedStyle(document.documentElement).getPropertyValue('--media-m').split('px').shift());
        const l = Number(getComputedStyle(document.documentElement).getPropertyValue('--media-l').split('px').shift());
        const xl = Number(getComputedStyle(document.documentElement).getPropertyValue('--media-xl').split('px').shift());
        // UPDATE MEDIA
        if (width <= xs) {
            media = 'Extra Small';
        } else if (width > xs && width <= s) {
            media = 'Small';
        } else if (width > s && width <= m) {
            media = 'Medium';
        } else if (width > m && width <= l) {
            media = 'Large';
        } else if (width > l && width <= xl) {
            media = 'Extra Large';
        } else {
            media = 'Huge';
        }
        // UPDATE STATE
        this.setState({ browser: { ...this.state.browser, media, height, width, mouse: { x: 0, y: 0 } } });
    };

    handleScroll = (event: any) => {
        // DEFINE VARIABLES
        let modal = document.querySelector('.modal');
        let scroll = document.documentElement.scrollTop;
        let direction: 'Up' | 'Down' = 'Down';
        // IF MODAL
        if (modal) {
            event.preventDefault();
            event.stopPropagation();
            document.documentElement.scrollTop = this.state.browser.scroll;
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
        this.setState({ browser: { ...this.state.browser, scroll } });
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
                    <Wrapper browser={this.state.browser}>
                        <Routes>
                            <Route path='/' element={<Overview browser={this.state.browser} />} />
                            <Route path='/imprint' element={<Imprint browser={this.state.browser} />} />
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
