import * as React from 'react';
import { PropsWithRouter, withRouter } from '../../Components/Router/Router';
import './Privacy.scss';

interface Props extends PropsWithRouter {}

interface States {}

class Privacy extends React.Component<Props, States> {
    render() {
        return <div id='privacy'>Hello Privacy</div>;
    }
}

export default withRouter(Privacy);
