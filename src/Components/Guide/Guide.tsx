import * as React from 'react';
import './Guide.scss';

interface Props {
    type: 'Scroll';
}

export default class Guide extends React.Component<Props> {
    render() {
        return <div className={['guide', this.props.type.toLowerCase()].filter(x => x).join(' ')} />;
    }
}
