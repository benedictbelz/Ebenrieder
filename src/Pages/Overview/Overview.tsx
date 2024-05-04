import * as React from 'react';
import Gallery from '../../Components/Gallery/Gallery';
import Guide from '../../Components/Guide/Guide';
import { Browser } from '../../@types/browser';
import './Overview.scss';
import { PropsWithRouter, withRouter } from '../../Components/Router/Router';

interface Props extends PropsWithRouter {
    browser: Browser;
}

interface States {
    status: 'Welcome' | 'None';
}

class Overview extends React.Component<Props, States> {
    private timerInit: number = new Date().getTime();
    private timerScroll: number;

    state: States = {
        status: this.props.router.location.pathname === '/' ? 'Welcome' : 'None'
    };

    componentDidMount() {
        if (this.state.status === 'Welcome') {
            document.getElementById('header').className = 'welcome';
        }
    }

    componentDidUpdate(prevProps: Props) {
        if (this.state.status === 'Welcome' && this.props.browser.scroll !== prevProps.browser.scroll) {
            // DEFINE VARIABLES
            let direction: 'Up' | 'Down' = 'Down';
            // GET DIRECTION
            if (this.props.browser.scroll < prevProps.browser.scroll) {
                direction = 'Up';
            }
            // HIDE WELCOME
            if (this.state.status === 'Welcome' && direction === 'Down' && this.props.browser.scroll > 0 && !this.timerScroll) {
                this.timerScroll = new Date().getTime();
                if (this.timerScroll - this.timerInit >= 1000) {
                    document.getElementById('header').className = '';
                    this.setState({ status: 'None' });
                } else {
                    setTimeout(
                        () => {
                            document.getElementById('header').className = '';
                            this.setState({ status: 'None' });
                        },
                        1050 - (this.timerScroll - this.timerInit)
                    );
                }
            }
        }
    }

    handleWelcome = () => {};

    render() {
        return (
            <div id='overview' className={[this.state.status === 'Welcome' && 'welcome'].filter(x => x).join(' ')}>
                <div id='welcome'>
                    <Guide type='Scroll' />
                    <video src='assets/media/montage.mov' autoPlay loop muted playsInline />
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
                        <Gallery browser={this.props.browser}>
                            <img src='assets/media/ort_01.png' />
                            <img src='assets/media/ort_02.png' />
                            <img src='assets/media/ort_03.png' />
                            <img src='assets/media/ort_04.png' />
                            <img src='assets/media/ort_05.png' />
                        </Gallery>
                    </section>
                </div>
            </div>
        );
    }
}

export default withRouter(Overview);
