import * as React from 'react';
import './Icon.scss';

interface Props {
    type: 'Scroll';
}

export default class Icon extends React.Component<Props> {
    render() {
        return <div className={['icon', this.props.type.toLowerCase()].filter(x => x).join(' ')} />;
    }
}
