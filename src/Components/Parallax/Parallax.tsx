import React = require('react');
import './Parallax.scss';

interface Props {
    children: React.ReactNode;
    factor: number;
    height: number;
    scroll: number;
    modus: 'Complex' | 'Simple';
}

interface States {
    transform: number;
}

export default class Parallax extends React.Component<Props, States> {
    private parallax: React.RefObject<HTMLDivElement>;

    constructor(props: Props) {
        super(props);
        this.parallax = React.createRef();
        this.state = {
            transform: 0
        };
    }

    componentDidMount() {
        this.handleTransform();
    }

    componentDidUpdate(prevProps: Props) {
        if (this.props.scroll !== prevProps.scroll) {
            this.handleTransform();
        }
    }

    private handleTransform = () => {
        // DEFINE VARIABLES
        const scroll = this.props.scroll;
        const elementStart = this.parallax.current.getBoundingClientRect().top + scroll - this.props.height;
        const elementEnd = this.parallax.current.getBoundingClientRect().top + scroll + this.parallax.current.clientHeight;
        // CALCULATE POSITION
        let transform;
        // IF MODUS IS SIMPLE
        if (this.props.modus === 'Simple') {
            transform = Math.round((scroll / elementEnd) * 100) / 100;
        }
        // IF MODUS IS COMPLEX
        else if (this.props.modus === 'Complex') {
            if (scroll < elementStart) {
                transform = -1;
            } else if (scroll >= elementStart && scroll <= elementEnd) {
                transform = Math.round(((scroll - elementStart - (elementEnd - elementStart) / 2) / ((elementEnd - elementStart) / 2)) * 100) / 100;
            } else if (scroll >= elementEnd) {
                transform = 1;
            }
        }
        // UPDATE STATE
        this.setState({ transform });
    };

    render() {
        // DEFINE VARIABLES
        let height;
        let transform;
        // IF MODUS IS SIMPLE
        if (this.props.modus === 'Simple') {
            height = 0;
            transform = this.props.factor * this.state.transform;
        } else if (this.props.modus === 'Complex') {
            height = Math.abs(this.props.factor) * 2;
            transform = this.props.factor * this.state.transform - this.props.factor;
        }
        return (
            <div ref={this.parallax} className='parallaxContainer'>
                <div className='parallaxContent' style={{ height: `calc(100% + ${height}px)`, transform: `translateY(${transform}px)` }}>
                    {this.props.children}
                </div>
            </div>
        );
    }
}
