import * as React from 'react';
import Gallery from '../../Components/Gallery/Gallery';
import Guide from '../../Components/Guide/Guide';
import Title from '../../Components/Title/Title';
import { Browser } from '../../@types/browser';
import { PropsWithRouter, withRouter } from '../../Components/Router/Router';
import './Overview.scss';

interface Props extends PropsWithRouter {
    browser: Browser;
}

interface States {}

class Overview extends React.Component<Props, States> {
    render() {
        const language = this.props.browser.language;
        return (
            <div id='overview' className={[].filter(x => x).join(' ')}>
                <div id='welcome'>
                    <Guide type='Scroll' />
                    <video src='assets/media/montage.mov' autoPlay loop muted playsInline />
                </div>
                <div id='content'>
                    <article>
                        <Title 
                            browser={this.props.browser}
                            imageBackground={'assets/media/watercolor_01.jpg'}
                            imageTitle={`assets/svg/place_${language}.svg`}
                            backgroundX={-25}
                            backgroundY={0}
                        />
                        <p>
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
                            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
                            sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
                            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
                            duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum
                            dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
                            erat, sed diam voluptua.
                        </p>
                        <Gallery browser={this.props.browser}>
                            <img src='assets/media/ort_01.png' />
                            <img src='assets/media/ort_02.png' />
                            <img src='assets/media/ort_03.png' />
                            <img src='assets/media/ort_04.png' />
                            <img src='assets/media/ort_05.png' />
                        </Gallery>
                    </article>
                </div>
            </div>
        );
    }
}

export default withRouter(Overview);
