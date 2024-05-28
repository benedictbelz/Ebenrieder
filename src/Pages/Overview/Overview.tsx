import * as React from 'react';
import Logo from '../../Components/Logo/Logo';
import Events from '../../Components/Events/Events';
import Footer from '../../Components/Footer/Footer';
import Gallery from '../../Components/Gallery/Gallery';
import Information from '../../Components/Information/Information';
import Menu from '../../Components/Menu/Menu';
import Parallax from '../../Components/Parallax/Parallax';
import Title from '../../Components/Title/Title';
import { PropsWithRouter, withRouter } from '../../Router/Router';
import { getLanguage } from '../../@presets/language';
import { Browser } from '../../@types/browser';
import './Overview.scss';

interface Props extends PropsWithRouter {
    browser: Browser;
}

class Overview extends React.Component<Props> {
    render() {
        // DEFINE VARIABLES
        const language = this.props.browser.language;
        const media = this.props.browser.media;
        // RETURN COMPONENT
        return (
            <div id='overview' className='page'>
                <Menu browser={this.props.browser} behaviour={'Dynamic'} />
                <div id='overviewWelcome' className={[this.props.browser.status === 'Welcome' && 'active'].filter(x => x).join(' ')}>
                    <Information type='Scroll' />
                    <Logo fullScreen={true} />
                    <Gallery
                        autoPlay={true}
                        browser={this.props.browser}
                        fullScreen={true}
                        lockControls={true}
                        modus={'Expansion'}
                        parallax={{
                            deactivate:
                                this.props.browser.device === 'Mobile' &&
                                (this.props.browser.media === 'Extra Small' || this.props.browser.media === 'Small'),
                            factor: 200,
                            modus: 'Simple',
                            height: this.props.browser.height,
                            scroll: this.props.browser.scroll
                        }}
                    >
                        <img src='assets/media/gallery/ort_01.png' />
                        <img src='assets/media/gallery/ort_02.png' />
                        <img src='assets/media/gallery/ort_03.png' />
                        <img src='assets/media/gallery/ort_04.png' />
                        <img src='assets/media/gallery/ort_05.png' />
                    </Gallery>
                    {/* <Parallax height={this.props.browser.height} scroll={this.props.browser.scroll} factor={200} modus={'Simple'}>
                        <video
                            src='assets/media/gallery/montage.mov'
                            autoPlay
                            loop
                            muted
                            playsInline
                            onLoadedData={event => (event.currentTarget.style.opacity = '1')}
                        />
                    </Parallax> */}
                </div>
                <div id='overviewContent'>
                    <article data-name={getLanguage(language, 'titlePlace')}>
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
                        <Gallery
                            browser={this.props.browser}
                            modus={media === 'Extra Small' || media === 'Small' || media === 'Medium' ? 'Expansion' : 'Variable'}
                        >
                            <img src='assets/media/gallery/ort_01.png' />
                            <img src='assets/media/gallery/ort_02.png' />
                            <img src='assets/media/gallery/ort_03.png' />
                            <img src='assets/media/gallery/ort_04.png' />
                            <img src='assets/media/gallery/ort_05.png' />
                        </Gallery>
                    </article>
                    <article data-name={getLanguage(language, 'titleDates')}>
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
                    <article data-name={getLanguage(language, 'titleUsage')}>
                        <Title
                            browser={this.props.browser}
                            backgroundX={0}
                            backgroundY={0}
                            backgroundImage={'assets/media/watercolor/watercolor_03.jpg'}
                            foregroundImage={`assets/svg/usage_${language}.svg`}
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
                        </div>
                        <Gallery
                            browser={this.props.browser}
                            modus={media === 'Extra Small' || media === 'Small' || media === 'Medium' ? 'Expansion' : 'Variable'}
                        >
                            <img src='assets/media/gallery/ort_01.png' />
                            <img src='assets/media/gallery/ort_02.png' />
                            <img src='assets/media/gallery/ort_03.png' />
                            <img src='assets/media/gallery/ort_04.png' />
                            <img src='assets/media/gallery/ort_05.png' />
                        </Gallery>
                    </article>
                </div>
                <Footer browser={this.props.browser} />
            </div>
        );
    }
}

export default withRouter(Overview);
