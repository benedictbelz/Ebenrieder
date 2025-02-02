import * as React from 'react';
import { Link } from 'react-router-dom';
import { APIProvider, Map as GoogleMap, AdvancedMarker, InfoWindow } from '@vis.gl/react-google-maps';
import { getLanguage } from '../../@presets/language';
import { getSecrets } from '../../@presets/secrets';
import { Browser } from '../../@types/browser';
import './Maps.scss';

interface Props {
    browser: Browser;
    handleAccept: () => void;
    handleDecline: () => void;
}

interface States {
    showInfo: boolean;
}

export default class Maps extends React.Component<Props, States> {
    state = {
        showInfo: false
    };

    render() {
        // DEFINE VARIABLES
        const language = this.props.browser.language;
        // RETURN COMPONENT
        return (
            <div className={['maps', this.props.browser.cookies !== 'Accept' && 'cookies'].filter(x => x).join(' ')}>
                {this.props.browser.cookies === 'Accept' ? (
                    <APIProvider apiKey={getSecrets().google}>
                        <GoogleMap
                            defaultZoom={18}
                            defaultCenter={{ lat: 47.753984021129355, lng: 10.73440969585985 }}
                            onCameraChanged={() => {}}
                            mapId={'7b5bbd099c306a03'}
                            mapTypeId='roadmap'
                            disableDefaultUI
                            clickableIcons={false}
                        >
                            <AdvancedMarker
                                position={{ lat: 47.753984021129355, lng: 10.73440969585985 }}
                                clickable={true}
                                onClick={(event: any) => {
                                    if (event.domEvent.target.className === 'mapsCross') {
                                        this.setState({ showInfo: false });
                                    } else {
                                        this.setState({ showInfo: true });
                                    }
                                }}
                                onTouchEnd={(event: any) => {
                                    if (event.domEvent.target.className === 'mapsCross') {
                                        this.setState({ showInfo: false });
                                    } else {
                                        this.setState({ showInfo: true });
                                    }
                                }}
                            >
                                <div
                                    className='mapsPin'
                                    style={{
                                        cursor: 'pointer',
                                        width: 16,
                                        height: 16,
                                        position: 'absolute',
                                        background: '#32468a',
                                        border: '2px solid #fff',
                                        borderRadius: '50%',
                                        transform: 'translate(-50%, -50%)'
                                    }}
                                >
                                    <h3
                                        className='mapsLabel'
                                        style={{
                                            fontFamily: `'Futura' sans-serif`,
                                            transform: 'translate(-48px, -35px)',
                                            textShadow:
                                                '-1px -1px 0 #fff, 0 -1px 0 #fff, 1px -1px 0 #fff, 1px 0 0 #fff, 1px 1px 0 #fff, 0 1px 0 #fff, -1px 1px 0 #fff, -1px 0 0 #fff'
                                        }}
                                    >
                                        Ebenrieder
                                    </h3>
                                </div>
                                {this.state.showInfo && (
                                    <div
                                        className='mapsInfo'
                                        style={{
                                            cursor: 'auto',
                                            boxSizing: 'border-box',
                                            position: 'absolute',
                                            width: '250px',
                                            padding: '25px 45px 25px 25px',
                                            background: '#fff',
                                            borderRadius: '10px',
                                            border: '2px solid #32468a',
                                            transform: 'translate(-125px, 35px)'
                                        }}
                                    >
                                        <div
                                            className='mapsArrow'
                                            style={{
                                                position: 'absolute',
                                                top: 0,
                                                left: '50%',
                                                height: 0,
                                                width: 0,
                                                borderLeft: '20px solid transparent',
                                                borderRight: '20px solid transparent',
                                                borderBottom: '20px solid #32468a',
                                                transform: 'translate(-50%, -20px)'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    height: 0,
                                                    width: 0,
                                                    borderLeft: '20px solid transparent',
                                                    borderRight: '20px solid transparent',
                                                    borderBottom: '20px solid #fff',
                                                    transform: 'translate(-50%, 3px)'
                                                }}
                                            />
                                        </div>
                                        <div
                                            className='mapsCross'
                                            style={{
                                                cursor: 'pointer',
                                                position: 'absolute',
                                                top: '15px',
                                                right: '15px',
                                                height: '20px',
                                                width: '20px',
                                                background: '#fff'
                                            }}
                                        >
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    height: '2px',
                                                    width: '20px',
                                                    transform: 'rotate(45deg)',
                                                    background: '#32468a',
                                                    marginTop: '9px'
                                                }}
                                            />
                                            <div
                                                style={{
                                                    position: 'absolute',
                                                    top: 0,
                                                    left: 0,
                                                    height: '2px',
                                                    width: '20px',
                                                    transform: 'rotate(-45deg)',
                                                    background: '#32468a',
                                                    marginTop: '9px'
                                                }}
                                            />
                                        </div>
                                        <div
                                            className='mapsText'
                                            style={{
                                                display: 'flex',
                                                flexDirection: 'column',
                                                gap: '20px',
                                                fontFamily: `'Futura' sans-serif`,
                                                fontSize: `${this.props.browser.variables.fontSizeText}px`
                                            }}
                                        >
                                            <div
                                                className='mapsAddress'
                                                style={{
                                                    display: 'flex',
                                                    flexDirection: 'column',
                                                    justifyContent: 'flex-start',
                                                    alignItems: 'flex-start'
                                                }}
                                            >
                                                <span>Ebenrieder</span>
                                                <span>Remnatsried 2</span>
                                                <span>87675 Stötten am Auerberg</span>
                                            </div>
                                            <div
                                                className='underlineLink'
                                                onClick={() =>
                                                    window
                                                        .open(
                                                            'https://www.google.com/maps/place/Ebenrieder/@47.7539874,10.7318329,17z/data=!3m1!4b1!4m6!3m5!1s0x479c4366c8a2bb81:0x299af5a643d2c4f2!8m2!3d47.7539838!4d10.7344078!16s%2Fg%2F11w3tjjxty?entry=ttu',
                                                            '_blank'
                                                        )
                                                        .focus()
                                                }
                                                onTouchEnd={() =>
                                                    window
                                                        .open(
                                                            'https://www.google.com/maps/place/Ebenrieder/@47.7539874,10.7318329,17z/data=!3m1!4b1!4m6!3m5!1s0x479c4366c8a2bb81:0x299af5a643d2c4f2!8m2!3d47.7539838!4d10.7344078!16s%2Fg%2F11w3tjjxty?entry=ttu',
                                                            '_blank'
                                                        )
                                                        .focus()
                                                }
                                            >
                                                {getLanguage(language, 'mapsDirections')}
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </AdvancedMarker>
                        </GoogleMap>
                    </APIProvider>
                ) : (
                    <div className='mapsCookies'>
                        <div className='mapsText'>
                            {`${getLanguage(language, 'mapsCookies').split('<%a%>')[0]}`}
                            <Link to={language === 'de' ? '/datenschutz' : '/privacy'} className='underlineLink'>
                                {`${getLanguage(language, 'mapsCookies').split('<%a%>')[1].split('<%/a%>')[0]}`}
                            </Link>
                            {`${getLanguage(language, 'mapsCookies').split('<%/a%>')[1].split('<%a%>')[0]}`}
                            <a
                                className='underlineLink'
                                href='https://www.google.com/maps/place/Ebenrieder/@47.7539874,10.7318329,17z/data=!3m1!4b1!4m6!3m5!1s0x479c4366c8a2bb81:0x299af5a643d2c4f2!8m2!3d47.7539838!4d10.7344078!16s%2Fg%2F11w3tjjxty?entry=ttu'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                {`${getLanguage(language, 'mapsCookies').split('<%a%>')[2].split('<%/a%>')[0]}`}
                            </a>
                            {`${getLanguage(language, 'mapsCookies').split('<%/a%>')[2]}`}
                        </div>
                        <div className='mapsButtons'>
                            <div className='underlineLink' onClick={this.props.handleAccept}>
                                {getLanguage(language, 'mapsAccept')}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
