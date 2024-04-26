import * as React from 'react';
import './Header.scss';

interface Props {

}

interface States {
    language: 'DE' | 'EN';
    showMenu: boolean;
}

export default class Header extends React.Component<Props, States> {

    state: States = {
        language: 'EN',
        showMenu: false
    }

    render() {
        return (
            <>
                <div 
                    id='header'
                    className={[
                        this.state.showMenu ? 'menu' : ''
                    ].filter(x => x).join(' ')}
                >
                    <div
                        id='left'
                    >
                        <img src='assets/logo/picture.svg'/>
                        <img src='assets/logo/font.svg'/>
                    </div>
                    <div id='right'>
                        <span 
                            id='language'
                            onClick={() => this.setState({ language: this.state.language === 'DE' ? 'EN' : 'DE'})}
                        >
                            {this.state.language}
                        </span>
                    </div>
                </div>
                <div
                    id='burger'
                    className={[
                        this.state.showMenu ? 'active' : 'inactive',
                    ].filter(x => x).join(' ')}
                    onClick={() => this.setState({ showMenu: !this.state.showMenu })}
                >
                    <div id='content'>
                        <span />
                        <span />
                        <span />
                    </div>
                </div>
            </>
        )
    }
}