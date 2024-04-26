import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from '../Header/Header';
import Welcome from '../Overview/Welcome';
import { Browser } from '../../@types/browser';
import { Device } from '../../@types/device';
import '../../General/General.scss';
import './Main.scss';

interface States {
	currentBrowser: Browser | null;
	currentDevice: Device | null;
	scroll: number;
	welcome: boolean;
}

class Main extends React.Component<{}, States> {

	state: States = {
		currentBrowser: null,
		currentDevice: null,
		scroll: 0,
		welcome: true
	}

	componentDidMount() {
		this.initBrowser();
		this.initDevice();
		this.initScroll();
	}

	initBrowser() {
		if (navigator.userAgent.indexOf('Chrome') > -1) {
			this.setState({ currentBrowser: 'Chrome' });
		}
		if (navigator.userAgent.indexOf('Firefox') > -1) {
			this.setState({ currentBrowser: 'Firefox' });
		}
		if (navigator.userAgent.indexOf('MSIE') > -1) {
			this.setState({ currentBrowser: 'Microsoft' });
		}
		if (navigator.userAgent.toLowerCase().indexOf('op') > -1) {
			this.setState({ currentBrowser: 'Opera' });
		}
		if (navigator.userAgent.indexOf('Safari') > -1) {
			this.setState({ currentBrowser: 'Safari' });
		}
	}

	initDevice() {
		if ('ontouchstart' in window || 'onmsgesturechange' in window) {
			this.setState({ currentDevice: 'Mobile' });
		} else {
			this.setState({ currentDevice: 'Desktop' });
		}
	}

	initScroll() {
		window.addEventListener('scroll', event => {
			// DEFINE VARIABLES
			let scroll = document.documentElement.scrollTop;
			let direction: 'Up' | 'Down' = 'Down';
			// GET DIRECTION
			if (scroll < this.state.scroll) {
				direction = 'Up'
			}
			// HIDE WELCOME
			if (this.state.welcome && direction === 'Down' && scroll > 0) {
				this.setState({ welcome: false });
			}
			// SET STATE
			this.setState({ scroll });
		});
	}


	render() {
		return (
			<div 
				id='main'
				className={[
					this.state.currentDevice === 'Desktop' ? 'desktop' : 'mobile',
					this.state.welcome ? 'welcome' : ''
				].filter(x => x).join(' ')}
			>
				<Header />
				<Welcome />
			</div>
		);
	}
}

ReactDOM.render(<Main />, document.getElementById('root'));
