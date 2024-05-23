import * as React from 'react';
import Events from '../../Components/Events/Events';
import Gallery from '../../Components/Gallery/Gallery';
import Information from '../../Components/Information/Information';
import Parallax from '../../Components/Parallax/Parallax';
import Title from '../../Components/Title/Title';
import { Browser } from '../../@types/browser';
import { PropsWithRouter, withRouter } from '../../@functions/router';
import './Overview.scss';

interface Props extends PropsWithRouter {
    browser: Browser;
}

interface States {}

class Overview extends React.Component<Props, States> {
    render() {
        // DEFINE VARIABLES
        const language = this.props.browser.language;
        const media = this.props.browser.media;
        // RETURN COMPONENT
        return (
            <div id='overview' className={[].filter(x => x).join(' ')}>
                <div id='welcome'>
                    <Information type='Scroll' />
                    <Parallax height={this.props.browser.height} scroll={this.props.browser.scroll} factor={200} modus={'Simple'}>
                        <video
                            src='assets/media/gallery/montage.mov'
                            autoPlay
                            loop
                            muted
                            playsInline
                            onLoadedData={event => (event.currentTarget.style.opacity = '1')}
                        />
                    </Parallax>
                </div>
                <div id='content'>
                    <article>
                        <Title
                            browser={this.props.browser}
                            backgroundX={media === 'Extra Small' || media === 'Small' ? -10 : -25}
                            backgroundY={0}
                            backgroundImage={'assets/media/watercolor/watercolor_01.jpg'}
                            foregroundImage={`assets/svg/place_${language}.svg`}
                        />
                        <div>
                            <p className='text'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
                                et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                                sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                                dolore magna aliquyam erat, sed diam voluptua.
                            </p>
                        </div>
                        <Gallery browser={this.props.browser} fullScreen={media === 'Extra Small' || media === 'Small' || media === 'Medium'}>
                            <img src='assets/media/gallery/ort_01.png' />
                            <img src='assets/media/gallery/ort_02.png' />
                            <img src='assets/media/gallery/ort_03.png' />
                            <img src='assets/media/gallery/ort_04.png' />
                            <img src='assets/media/gallery/ort_05.png' />
                        </Gallery>
                    </article>
                    <article>
                        <Title
                            browser={this.props.browser}
                            backgroundX={media === 'Extra Small' || media === 'Small' ? 10 : 15}
                            backgroundY={0}
                            backgroundImage={'assets/media/watercolor/watercolor_02.jpg'}
                            foregroundImage={`assets/svg/dates_${language}.svg`}
                            foregroundScale={0.9}
                        />
                        <div>
                            <p className='text'>
                                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                                magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd
                                gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing
                                elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos
                                et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor
                                sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
                                dolore magna aliquyam erat, sed diam voluptua.
                            </p>
                            <Events browser={this.props.browser} />
                        </div>
                    </article>
                </div>
            </div>
        );
    }
}

export default withRouter(Overview);
