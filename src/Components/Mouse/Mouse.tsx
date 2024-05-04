import * as React from 'react';
import { Browser } from '../../@types/browser';
import './Mouse.scss';

interface Props {
    browser: Browser;
}

export default class Mouse extends React.Component<Props> {
    render() {
        const cursor = this.props.browser.mouse.cursor;
        const left = this.props.browser.mouse.x;
        const top = this.props.browser.mouse.y;
        return (
            <div
                id='mouse'
                className={[cursor === 'Left' && 'left', cursor === 'Right' && 'right'].filter(x => x).join(' ')}
                style={{ left: `${left}px`, top: `${top}px` }}
            />
        );
    }
}
