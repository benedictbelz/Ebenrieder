import * as React from 'react';
import Static from './Static/Static';
import Variable from './Variable/Variable';
import { Browser } from '../../@types/browser';
import { PropsWithRouter, withRouter } from '../Router/Router';
import './Gallery.scss';

interface Props extends PropsWithRouter {
    autoPlay?: boolean;
    children: React.ReactNode;
    fullScreen?: boolean;
    browser: Browser;
}

interface States {
    id: string;
    position: number;
    size: number;
}

class Gallery extends React.Component<Props, States> {
    state: States = {
        id: `gly${Math.random().toString(36).slice(2)}`,
        position: 0,
        size: React.Children.toArray(this.props.children).length
    };

    private handlePosition = (position: number) => {
        this.setState({ position });
    };

    render() {
        // DEFINE VARIABLES
        const media = this.props.browser.media;
        // RETURN COMPONENT
        return (
            <div className={['gallery', this.state.id].filter(x => x).join(' ')} style={this.props.fullScreen ? { height: '100vh' } : {}}>
                {(this.props.browser.device === 'Mobile' || this.props.fullScreen) && (
                    <Static
                        autoPlay={this.props.autoPlay}
                        browser={this.props.browser}
                        handlePosition={this.handlePosition}
                        id={this.state.id}
                        position={this.state.position}
                        size={this.state.size}
                    >
                        {this.props.children}
                    </Static>
                )}
                {this.props.browser.device === 'Desktop' && !this.props.fullScreen && (
                    <Variable
                        autoPlay={this.props.autoPlay}
                        browser={this.props.browser}
                        handlePosition={this.handlePosition}
                        fullScreen={this.props.fullScreen}
                        id={this.state.id}
                        position={this.state.position}
                        size={this.state.size}
                    >
                        {this.props.children}
                    </Variable>
                )}
            </div>
        );
    }
}

export default withRouter(Gallery);
