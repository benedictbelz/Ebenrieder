import * as React from 'react';
import './Information.scss';

interface Props {
    type: 'Scroll';
}

export default class Information extends React.Component<Props> {
    render() {
        return <div className={['information', this.props.type.toLowerCase()].filter(x => x).join(' ')} />;
    }
}
