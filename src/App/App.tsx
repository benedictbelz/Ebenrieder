import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';
import Mouse from '../Components/Mouse/Mouse';
import Conditions from '../Pages/Conditions/Conditions';
import Imprint from '../Pages/Imprint/Imprint';
import Overview from '../Pages/Overview/Overview';
import Privacy from '../Pages/Privacy/Privacy';
import { Browser } from '../@types/browser';
import { Language } from '../@types/language';
import './App.scss';

interface States {
    browser: Browser;
    language: Language;
}

class App extends React.Component<{}, States> {
    state: States = {
        browser: this.initBrowser(),
        language: navigator.language.split('-').shift() === 'de' ? 'de' : 'en'
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

    handleLanguage = (language: Language) => {
        this.setState({ language });
    };

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

    handleResize = () => {
        const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
        const width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.setState({ browser: { ...this.state.browser, height, width } });
    };

    handleScroll = () => {
        let scroll = document.documentElement.scrollTop;
        this.setState({ browser: { ...this.state.browser, scroll } });
    };

    render() {
        return (
            <div
                id='main'
                className={[this.state.browser.device === 'Desktop' && 'desktop', this.state.browser.device === 'Mobile' && 'mobile']
                    .filter(x => x)
                    .join(' ')}
            >
                <Router>
                    <Header handleLanguage={this.handleLanguage} language={this.state.language} />
                    <Mouse browser={this.state.browser} />
                    <Routes>
                        <Route path='/' element={<Overview browser={this.state.browser} />} />
                        <Route path='/conditions' element={<Conditions />} />
                        <Route path='/imprint' element={<Imprint />} />
                        <Route path='/privacy' element={<Privacy />} />
                        <Route path='*' element={<Overview browser={this.state.browser} />} />
                    </Routes>
                    <Footer language={this.state.language} />
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
