import * as React from 'react';
import Footer from '../../Components/Footer/Footer';
import { Browser } from '../../@types/browser';
import './Conditions.scss';

interface Props {
    browser: Browser;
}

export default class Conditions extends React.Component<Props> {
    render() {
        return (
            <div id='conditions' className='page'>
                Conditions
                <Footer browser={this.props.browser} />
            </div>
        );
    }
}
