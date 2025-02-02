import * as React from 'react';
import { Browser } from '../../@types/browser';
import './Container.scss';

interface Props {
    browser: Browser;
    children: React.ReactNode;
    type: 'Column' | 'Grid' | 'Row';
}

export default class Container extends React.Component<Props> {
    private children: React.RefObject<HTMLElement>[];
    private containerLeft: React.RefObject<HTMLDivElement>;
    private containerContent: React.RefObject<HTMLDivElement>;
    private containerRight: React.RefObject<HTMLDivElement>;
    private timeout: any = [];

    constructor(props: Props) {
        super(props);
        this.children = React.Children.map(this.props.children, () => React.createRef<HTMLElement>()) || [];
        this.containerLeft = React.createRef();
        this.containerContent = React.createRef();
        this.containerRight = React.createRef();
    }

    componentDidMount() {
        if (this.props.type === 'Row') {
            this.containerContent.current?.addEventListener('scroll', this.handleScroll);
        }
    }

    componentWillUnmount() {
        if (this.props.type === 'Row') {
            this.containerContent.current?.removeEventListener('scroll', this.handleScroll);
        }
    }

    componentDidUpdate(prevProps: Props) {
        // GET KEYS
        const currentKeys = React.Children.toArray(this.props.children).map(child => (React.isValidElement(child) ? child.key : null));
        const previousKeys = React.Children.toArray(prevProps.children).map(child => (React.isValidElement(child) ? child.key : null));
        // IF MEDIA OR KEYS CHANGED
        if (this.props.browser.media !== prevProps.browser.media || JSON.stringify(currentKeys) !== JSON.stringify(previousKeys)) {
            console.log('IT CHANGED!');
            this.handleAnimation();
        }
    }

    private handleAnimation = () => {
        // DEFINE VARIABELS
        let index = 0;
        let children = this.children.map(ref => ref.current).filter(element => element !== null) as HTMLElement[];
        // RESET TIMEOUT
        this.timeout.forEach((timeout: any) => clearTimeout(timeout));
        // RESET PROJECTS
        children.forEach(child => {
            child.classList.add('opacity');
            child.classList.remove('animation');
        });
        // RECURSIVE FUNCTION
        let animation = () => {
            children[index].classList.remove('opacity');
            children[index].offsetWidth;
            children[index].classList.add('animation');
            children[index].style.animationPlayState = 'paused';
            children[index].style.animationPlayState = 'running';
            index++;
            if (index < children.length) {
                this.timeout.push(setTimeout(() => animation(), 100));
            }
        };
        // ANIMATE EVENTS
        if (children.length !== 0) {
            animation();
        }
    };

    private handleClickLeft = () => {};

    private handleClickRight = () => {};

    private handleScroll = () => {};

    render() {
        return (
            <div className='container'>
                {this.props.type === 'Row' && (
                    <>
                        <div ref={this.containerLeft} className='containerLeft' onClick={this.handleClickLeft}>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 50'>
                                <polyline points='22.5 45 2.5 25 22.5 5' />
                            </svg>
                        </div>
                        <div ref={this.containerRight} className='containerRight' onClick={this.handleClickRight}>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 50'>
                                <polyline points='2.5 5 22.5 25 2.5 45' />
                            </svg>
                        </div>
                    </>
                )}
                <div
                    ref={this.containerContent}
                    className={[
                        'containerContent',
                        this.props.type === 'Column' && 'column',
                        this.props.type === 'Grid' && 'grid',
                        this.props.type === 'Row' && 'row'
                    ]
                        .filter(x => x)
                        .join(' ')}
                >
                    {React.Children.map(this.props.children, (child, index) =>
                        React.isValidElement(child) ? React.cloneElement(child as React.ReactElement<any>, { ref: this.children[index] }) : child
                    )}
                </div>
            </div>
        );
    }
}
