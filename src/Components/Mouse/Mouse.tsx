import * as React from 'react';
import { Browser } from '../../@types/browser';
import './Mouse.scss';

interface Props {
    browser: Browser;
}

export default class Mouse extends React.Component<Props> {
    componentDidUpdate(prevProps: Props) {
        // GET ELEMENT
        const app = document.getElementById('app');
        // HIDE CURSOR
        if (app && this.props.browser.mouse.cursor && !prevProps.browser.mouse.cursor) {
            app.classList.add('hideCursor');
        }
        // SHOW CURSOR
        else if (app && !this.props.browser.mouse.cursor && prevProps.browser.mouse.cursor) {
            app.classList.remove('hideCursor');
        }
    }

    render() {
        // DEFINE VARIABLES
        const cursor = this.props.browser.mouse.cursor;
        const left = this.props.browser.mouse.x;
        const top = this.props.browser.mouse.y;
        // IF NO CURSOR RETURN NULL
        if (!cursor) {
            return null;
        }
        // RETURN COMPONENT
        return (
            <div
                id='mouse'
                className={[cursor === 'Left' && 'cursorLeft', cursor === 'Right' && 'cursorRight'].filter(x => x).join(' ')}
                style={{ left: `${left}px`, top: `${top}px` }}
            />
        );
    }
}
