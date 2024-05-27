import * as React from 'react';
import { Browser } from '../../@types/browser';
import './Error.scss';

interface Props {
    browser: Browser;
}

export default class Error extends React.Component<Props> {
    render() {
        return <div id='error' className='page'></div>;
    }
}
