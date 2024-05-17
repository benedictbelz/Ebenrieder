import * as React from 'react';
import './Input.scss';

interface Props {
    handleChange: (value: Props['value']) => void;
    items?: {
        disabled?: boolean;
        label: string;
        value: Props['value'];
    }[];
    type: 'Select';
    value: number | string;
}

export default class Input extends React.Component<Props> {
    render() {
        const value = this.props.items.find(item => item.value === this.props.value);
        return (
            <div className={['input', this.props.type.toLowerCase()].filter(x => x).join(' ')}>
                {this.props.type === 'Select' && this.props.items && (
                    <>
                        <p>{value?.label}</p>
                        <select onChange={event => this.props.handleChange(Number(event.target.value))} value={this.props.value}>
                            {this.props.items.map((item, index) => {
                                if (item.disabled) {
                                    return null;
                                } else {
                                    return (
                                        <option key={`option_${index}`} value={item.value}>
                                            {item.label}
                                        </option>
                                    );
                                }
                            })}
                        </select>
                    </>
                )}
            </div>
        );
    }
}
