import * as React from 'react';
import { Browser } from '../../@types/browser';
import './Menu.scss';

interface Props {
    browser: Browser;
    behaviour: 'Dynamic' | 'Static';
}

interface States {
    appearance: 'Narrow' | 'Wide';
    focus: {
        item: number | null;
        hover: number | null;
    };
    items: {
        name: string;
        element: HTMLElement;
    }[];
    modus: 'Top' | 'Bottom' | 'Flow';
    position: number | null;
    transform: number | null;
}

export default class Menu extends React.Component<Props, States> {
    private boundary = 50;
    private menu: React.RefObject<HTMLDivElement>;
    private menuLeft: React.RefObject<HTMLDivElement>;
    private menuContent: React.RefObject<HTMLDivElement>;
    private menuRight: React.RefObject<HTMLDivElement>;

    constructor(props: Props) {
        super(props);
        this.menu = React.createRef();
        this.menuLeft = React.createRef();
        this.menuContent = React.createRef();
        this.menuRight = React.createRef();
        this.state = {
            appearance: this.props.browser.width <= this.props.browser.variables.mediaS ? 'Narrow' : 'Wide',
            focus: {
                item: null,
                hover: null
            },
            items: [],
            modus: 'Top',
            position: null,
            transform: null
        };
    }

    componentDidMount() {
        // HANDLE LOAD
        this.handleLoad();
        // IF APPEARANCE IS NARROW ADD EVENT LISTENER
        if (this.state.appearance === 'Narrow') {
            setTimeout(() => {
                this.menuContent.current?.addEventListener('scroll', this.narrowScrollContent);
                this.narrowScrollContent();
            });
        }
    }

    componentDidUpdate(prevProps: Props, prevState: States) {
        // IF LANGUAGE CHANGED
        if (this.props.browser.language !== prevProps.browser.language) {
            this.handleLoad();
        }
        // IF SCROLL CHANGED
        else if (this.props.browser.scroll !== prevProps.browser.scroll) {
            // IF POSITION IS NULL
            if (this.state.position === null) {
                this.handleScroll();
            }
            // IF SCROLL IS POSITION
            else if (this.props.browser.scroll === this.state.position) {
                this.setState({ position: null });
            }
        }
        // IF WIDTH CHANGED
        else if (this.props.browser.width !== prevProps.browser.width && this.props.browser.media === prevProps.browser.media) {
            // HANDLE SCROLL
            this.handleScroll();
            // IF NARROW APPEARANCE
            if (this.state.appearance === 'Narrow') {
                this.narrowScrollContent();
            }
        }
        // IF MEDIA CHANGED
        else if (this.props.browser.media !== prevProps.browser.media) {
            // UPDATE APPEARANCE
            this.setState({ appearance: this.props.browser.width <= this.props.browser.variables.mediaS ? 'Narrow' : 'Wide' });
            // SET TIMEOUT
            setTimeout(() => {
                // HANDLE SCROLL
                this.handleScroll();
                // IF NARROW APPEARANCE
                if (this.state.appearance === 'Narrow') {
                    this.menuContent.current?.addEventListener('scroll', this.narrowScrollContent);
                    this.narrowScrollContent();
                }
                // IF WIDE APPEARANCE
                else {
                    this.menuContent.current?.removeEventListener('scroll', this.narrowScrollContent);
                }
            });
        }
    }

    componentWillUnmount() {
        // IF APPEARANCE IS NARROW REMOVE EVENT LISTENER
        if (this.state.appearance === 'Narrow') {
            this.menuContent.current?.removeEventListener('scroll', this.narrowScrollContent);
        }
    }

    private handleLoad = () => {
        // GET ARTICLES
        const articles = document.querySelectorAll('article');
        // IF NO ARTICLES RETURN
        if (!articles) return;
        // GET ITEMS
        const items = Array.from(articles).map(item => {
            return {
                name: item.getAttribute('data-name'),
                element: item
            };
        });
        // UPDATE STATE
        this.setState({ items });
        // HANDLE SCROLL
        setTimeout(() => this.handleScroll());
    };

    private handleScroll = () => {
        // IF NO ITEMS RETURN
        if (this.state.items.length === 0 || !this.menuContent.current) return;
        // DEFINE VARIABLES
        const items = this.state.items;
        const height = this.props.browser.height;
        const scroll = this.props.browser.scroll;
        const padding = this.props.browser.variables.spacingVerticalL;
        // DEFINE FOCUS AND MODUS
        let focus = 0;
        let modus: States['modus'] = 'Flow';
        // IF FOCUS IS ITEM
        for (let i = 0; i < items.length; i++) {
            const position =
                this.state.appearance === 'Narrow'
                    ? Math.round(items[i].element.getBoundingClientRect().top) + scroll - padding
                    : Math.round(items[i].element.getBoundingClientRect().top) + scroll - padding - height / 4;
            if (scroll >= position) {
                focus = i;
            }
        }
        // DEFINE TOP AND BOTTOM
        const top = Math.round(items[0].element.getBoundingClientRect().top) + scroll - padding;
        const bottom = Math.round(items[items.length - 1].element.getBoundingClientRect().bottom) + scroll - height;
        // CHANGE MODUS
        if (this.state.appearance === 'Narrow' && scroll <= this.menuContent.current?.clientHeight) {
            modus = 'Top';
        } else if (this.state.appearance === 'Wide' && scroll <= top) {
            modus = 'Top';
        } else if (scroll >= bottom) {
            modus = 'Bottom';
        }
        // OVERWRITE MODUS
        if (this.props.behaviour === 'Static' && this.state.appearance === 'Wide') {
            modus = 'Flow';
        }
        // UPDATE STATE
        this.setState({ focus: { ...this.state.focus, item: focus }, modus });
        // IF FOCUS CHANGED
        if (focus !== this.state.focus.item) {
            setTimeout(() => this.narrowChangeContent());
        }
    };

    private handleClick = async (item: { name: string; element: HTMLElement }) => {
        // DEFINE VARIABLES
        const padding = this.props.browser.variables.spacingVerticalL;
        const position = Math.round(item.element.getBoundingClientRect().top) + this.props.browser.scroll - padding;
        const index = this.state.items.findIndex(element => element.name === item.name);
        // IF NO INDEX RETURN
        if (index < 0) return;
        // UPDATE STATE
        this.setState({ position, focus: { ...this.state.focus, item: index } });
        // SCROLL TO POSITION
        window.scrollTo({ top: position, behavior: 'smooth' });
    };

    private narrowClickLeft = () => {
        // DEFINE POSITION
        let position = this.menuContent.current?.scrollLeft - 250;
        // IF POSITION IS LESS THAN BOUNDARY
        if (position < this.boundary) {
            position = 0;
        }
        // SCROLL TO POSITION
        this.menuContent.current?.scrollTo({ left: position, behavior: 'smooth' });
    };

    private narrowClickRight = () => {
        // DEFINE WIDTH
        const width = this.menuContent.current?.scrollWidth - this.menuContent.current?.clientWidth;
        // DEFINE POSITION
        let position = this.menuContent.current?.scrollLeft + 250;
        // IF POSITION IS BIGGER THAN BOUNDARY
        if (position > width - this.boundary) {
            position = width;
        }
        // SCROLL TO POSITION
        this.menuContent.current?.scrollTo({ left: position, behavior: 'smooth' });
    };

    private narrowChangeContent = () => {
        // IF APPEARANCE IS NOT NARROW RETURN
        if (this.state.appearance !== 'Narrow') return;
        // DEFINE VARIABLES
        const item = document.querySelector('#menu #menuContent .menuName.active');
        const content = document.querySelector('#menu #menuContent');
        const padding = Number(window.getComputedStyle(content).getPropertyValue('padding-left').split('px').shift());
        // IF NO ITEM OR CONTENT OR PADDING RETURN
        if (!item || !content) return;
        // GET POSITION
        let position = Math.round(item.getBoundingClientRect().left) + content.scrollLeft - padding;
        // IF POSITION IS BIGGER THAN BOUNDARY
        if (position >= this.boundary) {
            position -= this.boundary;
        }
        // SCROLL TO POSITION WITH BOUNDARY
        if (position >= this.boundary) {
            content.scrollTo({ left: position, behavior: 'smooth' });
        }
        // SCROLL TO POSITION WITHOUT BOUNDARY
        else {
            content.scrollTo({ left: 0, behavior: 'smooth' });
        }
    };

    private narrowScrollContent = () => {
        // IF NO ELEMENT RETURN
        if (!this.menuContent.current || !this.menuLeft.current || !this.menuRight.current) return;
        // GET VARIABLES
        const scroll = this.menuContent.current.scrollLeft;
        const width = this.menuContent.current.scrollWidth - this.menuContent.current.clientWidth;
        // IF SCROLL WIDTH IS LESS THAN CLIENT WIDTH
        if (this.menuContent.current.scrollWidth <= this.menuContent.current.clientWidth) {
            this.menuContent.current.style.justifyContent = 'center';
            this.menuLeft.current.classList.remove('active');
            this.menuRight.current.classList.remove('active');
        }
        // IF SCROLL IS LESS THAN BOUNDARY
        else if (scroll <= this.boundary) {
            this.menuContent.current.style.justifyContent = 'flex-start';
            this.menuLeft.current.classList.remove('active');
            this.menuRight.current.classList.add('active');
        }
        // IF SCROLL IS IN BETWEEN BOUNDARY
        else if (scroll > this.boundary && scroll < width - this.boundary) {
            this.menuContent.current.style.justifyContent = 'flex-start';
            this.menuLeft.current.classList.add('active');
        }
        // IF SCROLL IS BIGGER THAN BOUNDARY
        else {
            this.menuContent.current.style.justifyContent = 'flex-start';
            this.menuRight.current.classList.remove('active');
        }
    };

    render() {
        // IF NO ITEMS RETURN NULL
        if (this.state.items.length === 0) {
            return null;
        }
        // DEFINE NAME
        let name = '';
        // CHANGE NAME
        if (this.state.focus.hover !== null) {
            name = this.state.items[this.state.focus.hover].name;
        } else if (this.state.focus.item !== null) {
            name = this.state.items[this.state.focus.item].name;
        }
        // RETURN COMPONENT
        return (
            <div
                ref={this.menu}
                id='menu'
                className={[
                    this.state.appearance === 'Narrow' ? 'narrow' : 'wide',
                    this.state.modus === 'Top' && 'top',
                    this.state.modus === 'Flow' && 'flow',
                    this.state.modus === 'Bottom' && 'bottom'
                ]
                    .filter(x => x)
                    .join(' ')}
            >
                {this.state.appearance === 'Narrow' ? (
                    <>
                        <div ref={this.menuLeft} id='menuLeft' onClick={this.narrowClickLeft}>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 50'>
                                <polyline points='22.5 45 2.5 25 22.5 5' />
                            </svg>
                        </div>
                        <div ref={this.menuContent} id='menuContent'>
                            {this.state.items.map((item, index) => (
                                <span
                                    key={item.name}
                                    className={['menuName', 'underlineMenu', this.state.focus.item === index && 'active'].filter(x => x).join(' ')}
                                    onClick={() => this.handleClick(item)}
                                >
                                    {item.name}
                                </span>
                            ))}
                        </div>
                        <div ref={this.menuRight} id='menuRight' onClick={this.narrowClickRight}>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 50'>
                                <polyline points='2.5 5 22.5 25 2.5 45' />
                            </svg>
                        </div>
                    </>
                ) : (
                    <div ref={this.menuContent} id='menuContent'>
                        <div id='menuName'>{name}</div>
                        {this.state.items.map((item, index) => (
                            <span
                                key={item.name}
                                className={['menuDot', this.state.focus.item === index && 'active'].filter(x => x).join(' ')}
                                onClick={() => this.handleClick(item)}
                                onMouseEnter={() => this.setState({ focus: { ...this.state.focus, hover: index } })}
                                onMouseLeave={() => this.setState({ focus: { ...this.state.focus, hover: null } })}
                            />
                        ))}
                    </div>
                )}
            </div>
        );
    }
}
