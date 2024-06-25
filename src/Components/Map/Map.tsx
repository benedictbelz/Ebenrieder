import * as React from 'react';
import { APIProvider, Map as GoogleMap, AdvancedMarker, Pin, Marker, InfoWindow } from '@vis.gl/react-google-maps';
import { Browser } from '../../@types/browser';
import './Map.scss';
import { getLanguage } from '../../@presets/language';
import { Link } from 'react-router-dom';

interface Props {
    browser: Browser;
    handleAccept: () => void;
    handleDecline: () => void;
}

export default class Map extends React.Component<Props> {
    render() {
        // DEFINE VARIABLES
        const language = this.props.browser.language;
        // RETURN COMPONENT
        return (
            <div className={['map', this.props.browser.cookies !== 'Accept' && 'cookies'].filter(x => x).join(' ')}>
                {this.props.browser.cookies === 'Accept' ? (
                    <APIProvider apiKey={'AIzaSyCzHucli3z27tOQe8wP6lxttFGKXT9bLxc'} onLoad={() => console.log('Maps API has loaded.')}>
                        <GoogleMap
                            defaultZoom={18}
                            defaultCenter={{ lat: 47.753984021129355, lng: 10.73440969585985 }}
                            onCameraChanged={() => {}}
                            mapId={'7b5bbd099c306a03'}
                            mapTypeId='roadmap'
                            disableDefaultUI
                        >
                            <AdvancedMarker position={{ lat: 47.753984021129355, lng: 10.73440969585985 }} title={'Ebenrieder'}>
                                <div
                                    style={{
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
                                        style={{
                                            padding: 12,
                                            fontFamily: `'Futura' sans-serif`,
                                            //fontWeight: 400,
                                            transform: 'translate(-60px, -50px)',
                                            textShadow:
                                                '-1px -1px 0 #fff, 0 -1px 0 #fff, 1px -1px 0 #fff, 1px 0 0 #fff, 1px 1px 0 #fff, 0 1px 0 #fff, -1px 1px 0 #fff, -1px 0 0 #fff'
                                        }}
                                    >
                                        Ebenrieder
                                    </h3>
                                </div>
                            </AdvancedMarker>
                        </GoogleMap>
                    </APIProvider>
                ) : (
                    <div className='mapCookies'>
                        <div className='mapText'>
                            {`${getLanguage(language, 'mapCookies').split('<%privacy%>')[0]} `}
                            <Link to={language === 'de' ? '/datenschutz' : '/privacy'} className='underlineLink'>
                                {getLanguage(language, 'privacy')}
                            </Link>
                            {`${getLanguage(language, 'mapCookies').split('<%privacy%>')[1].split('<%link%>')[0]} `}
                            <a
                                className='underlineLink'
                                href='https://www.google.com/maps/place/Remnatsried+2,+87675+Stötten+am+Auerberg/@47.7539935,10.7318328,17z/data=!3m1!4b1!4m6!3m5!1s0x479c433d28fe3943:0x3f621e63b971648d!8m2!3d47.7539899!4d10.7344077!16s%2Fg%2F11h_f7q8gc?entry=ttu'
                                target='_blank'
                                rel='noopener noreferrer'
                            >
                                {getLanguage(language, 'mapLink')}
                            </a>
                            {`${getLanguage(language, 'mapCookies').split('<%privacy%>')[1].split('<%link%>')[1]}`}
                        </div>
                        <div className='mapButtons'>
                            <div className='underlineLink' onClick={this.props.handleAccept}>
                                {getLanguage(language, 'mapAccept')}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        );
    }
}
