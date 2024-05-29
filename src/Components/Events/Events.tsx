import * as React from 'react';
import queryString from 'query-string';
import Gallery from '../Gallery/Gallery';
import Input from '../Input/Input';
import Modal from '../Modal/Modal';
import Parallax from '../Parallax/Parallax';
import { PropsWithRouter, withRouter } from '../../Router/Router';
import { getEvents } from '../../@presets/event';
import { getFilter, getLocal, getLanguage } from '../../@presets/language';
import { Event, Filter, availableFilters } from '../../@types/event';
import { Browser } from '../../@types/browser';
import './Events.scss';

interface Props extends PropsWithRouter {
    browser: Browser;
}

interface States {
    event: Event | null;
    filters: Filter[];
    modal: {
        height: number;
        scroll: number;
    };
    month: number;
    year: number;
}

class Events extends React.Component<Props, States> {
    private events: React.RefObject<HTMLDivElement>;
    private timeout: any = [];
    private month = new Date().getMonth();
    private year = new Date().getFullYear();

    constructor(props: Props) {
        super(props);
        this.events = React.createRef();
        this.state = {
            event: null,
            filters: [],
            modal: {
                height: 0,
                scroll: 0
            },
            month: this.month,
            year: this.year
        };
    }

    componentDidMount() {
        // CHECK QUERY PARAMS
        let params = queryString.parse(this.props.router.location.search);
        let event = params.event ? getEvents().find(item => item.link === params.event) : null;
        // IF EVENT
        if (event && this.events.current) {
            const scroll = Math.round(this.events.current.getBoundingClientRect().top) + this.props.browser.scroll;
            setTimeout(() => (document.documentElement.scrollTop = scroll), 25);
            setTimeout(() => this.setState({ event }), 50);
        }
    }

    componentDidUpdate(prevProps: Props, prevState: States) {
        if (this.state.month !== prevState.month || this.state.year !== prevState.year || this.props.browser.media !== prevProps.browser.media) {
            this.animateEvents();
        } else if (this.state.event && !prevState.event) {
            document.documentElement.style.overflow = 'hidden';
        } else if (!this.state.event && prevState.event) {
            document.documentElement.style.overflow = 'visible';
        }
    }

    private animateEvents = () => {
        // DEFINE VARIABELS
        let index = 0;
        let events = document.querySelectorAll('.event') as unknown as HTMLElement[];
        // RESET TIMEOUT
        this.timeout.forEach((timeout: any) => clearTimeout(timeout));
        // RESET PROJECTS
        events.forEach(event => {
            event.classList.add('opacity');
            event.classList.remove('animation');
        });
        // RECURSIVE FUNCTION
        let animation = () => {
            events[index].classList.remove('opacity');
            events[index].offsetWidth;
            events[index].classList.add('animation');
            events[index].style.animationPlayState = 'paused';
            events[index].style.animationPlayState = 'running';
            index++;
            if (index < events.length) {
                this.timeout.push(setTimeout(() => animation(), 100));
            }
        };
        // ANIMATE EVENTS
        if (events.length !== 0) {
            animation();
        }
    };

    private handleChangeDate = (value: number) => {
        // DEFINE VARIABLES
        let month, year;
        // IF VALUE IS OF CURRENT YEAR
        if (value + this.month < 12) {
            month = value + this.month;
            year = this.year;
        }
        // IF VALUE IS OF NEXT YEAR
        else {
            month = value + this.month - 12;
            year = this.year + 1;
        }
        // UPDATE STATE
        this.setState({ month, year });
    };

    private handleChangeFilter = (filter: Filter) => {
        // GET FILTERS
        let filters = this.state.filters;
        // IF FILTER IS AVAILABLE
        if (filters.includes(filter)) {
            filters = filters.filter(item => item !== filter);
        }
        // IF FILTER IS UNAVAILABLE
        else {
            filters = [...filters, filter];
        }
        // UPDATE STATE
        this.setState({ filters });
        // ANIMATE EVENTS
        const previousEvents = getEvents()
            .sort((a, b) => (a.date instanceof Date ? a.date : a.date.start).getTime() - (b.date instanceof Date ? b.date : b.date.start).getTime())
            .filter(item => this.state.filters.length === 0 || item.type.find(filter => this.state.filters.includes(filter)))
            .filter(item =>
                item.date instanceof Date
                    ? item.date.getMonth() === this.state.month && item.date.getFullYear() === this.state.year
                    : item.date.start.getMonth() === this.state.month && item.date.start.getFullYear() === this.state.year
            );
        const nextEvents = getEvents()
            .sort((a, b) => (a.date instanceof Date ? a.date : a.date.start).getTime() - (b.date instanceof Date ? b.date : b.date.start).getTime())
            .filter(item => filters.length === 0 || item.type.find(filter => filters.includes(filter)))
            .filter(item =>
                item.date instanceof Date
                    ? item.date.getMonth() === this.state.month && item.date.getFullYear() === this.state.year
                    : item.date.start.getMonth() === this.state.month && item.date.start.getFullYear() === this.state.year
            );
        if (previousEvents.length !== nextEvents.length || JSON.stringify(previousEvents) !== JSON.stringify(nextEvents)) {
            setTimeout(() => this.animateEvents());
        }
    };

    private handleClickNextMonth = () => {
        // IF MONTH IS NOT LAST MONTH
        if (this.state.month < 11) {
            this.setState({ month: this.state.month + 1 });
        }
        // IF MONTH IS LAST MONTH
        else {
            this.setState({ month: 0, year: this.state.year + 1 });
        }
    };

    private handleClickPreviousMonth = () => {
        // IF MONTH IS NOT FIRST MONTH
        if (this.state.month > 0) {
            this.setState({ month: this.state.month - 1 });
        }
        // IF MONTH IS FIRST MONTH
        else {
            this.setState({ month: 11, year: this.state.year - 1 });
        }
    };

    private handleClickEvent = (event: Event) => {
        this.setState({ event });
    };

    private renderModal = () => {
        // GET WRAPPER
        const wrapper = document.getElementById('app');
        // IF NO EVENT OR WRAPPER
        if (!this.state.event || !wrapper) {
            return null;
        }
        // DEFINE VARIABLES
        const language = this.props.browser.language;
        const media = this.props.browser.media;
        const event = this.state.event;
        const description = event.descriptionLong;
        const details = event.details;
        const price = event.price;
        const title = event.title;
        const subtitle = event.subtitle;
        const date =
            event.date instanceof Date
                ? `${event.date.toLocaleString(getLocal(language), { day: '2-digit', month: '2-digit', year: 'numeric' })}`
                : `${event.date.start.toLocaleString(getLocal(language), { day: '2-digit' })} - ${event.date.end.toLocaleString(getLocal(language), { day: '2-digit', month: '2-digit', year: 'numeric' })}`;
        // DEFINE EMAIL
        const emailDate =
            event.date instanceof Date
                ? `${event.date.toLocaleString(getLocal(language), { day: '2-digit', month: 'long', year: 'numeric' })}`
                : `${event.date.start.toLocaleString(getLocal(language), { day: '2-digit' })} - ${event.date.end.toLocaleString(getLocal(language), { day: '2-digit', month: 'long', year: 'numeric' })}`;
        const emailSubject = `${getLanguage(language, 'emailSubject')} ${title[language]}`;
        const emailBody =
            `${getLanguage(language, 'emailGreeting')},${'%0D%0A'}${'%0D%0A'}` +
            `${getLanguage(language, 'emailText')}:${'%0D%0A'}${'%0D%0A'}` +
            `${getLanguage(language, 'emailEvent')}: ${title[language]}${'%0D%0A'}` +
            `${getLanguage(language, 'emailDate')}: ${emailDate}${'%0D%0A'}` +
            `${getLanguage(language, 'emailName')}: (${getLanguage(language, 'emailPlaceholder')})${'%0D%0A'}` +
            `${getLanguage(language, 'emailQuantity')}: (${getLanguage(language, 'emailPlaceholder')})${'%0D%0A'}` +
            (event.type.includes('Accomodation')
                ? `${getLanguage(language, 'emailAccomodation')}: (${getLanguage(language, 'emailYesNo')})${'%0D%0A'}${'%0D%0A'}`
                : `${'%0D%0A'}`) +
            `${getLanguage(language, 'emailGoodbye')}`;
        // RETURN MODAL
        return (
            <Modal
                className='modalEvent'
                browser={this.props.browser}
                handleClose={() => this.setState({ event: null })}
                handleScroll={(scroll: number) => {
                    this.setState({ modal: { ...this.state.modal, scroll } });
                }}
                handleResize={(height: number) => {
                    this.setState({ modal: { ...this.state.modal, height } });
                }}
            >
                <Gallery
                    browser={this.props.browser}
                    loadingScreen={true}
                    modus={media === 'Extra Small' || media === 'Small' || media === 'Medium' ? 'Expansion' : 'Variable'}
                    parallax={{
                        ...this.state.modal,
                        factor: this.props.browser.media === 'Extra Small' ? 15 : 20,
                        modus: 'Simple'
                    }}
                >
                    {event.gallery.map((item, index) => (
                        <img key={index} src={item} />
                    ))}
                </Gallery>
                <div className='modalContent'>
                    <div className='modalLeft'>
                        <div className='modalTitle'>
                            <h1>{title[language]}</h1>
                            <div className='modalSubtitle'>
                                <span>{date}</span>
                                <span>•</span>
                                {subtitle &&
                                    subtitle.map((item, index) => (
                                        <React.Fragment key={`subtitle_${index}`}>
                                            <span>{item[language]}</span>
                                            <span>•</span>
                                        </React.Fragment>
                                    ))}
                                <span>{`${price} EUR`}</span>
                            </div>
                        </div>
                        <div className='modalDescription'>{description[language]}</div>
                        <div className='modalButton underlineLink'>
                            <a href={`mailto:hallo@ebenrieder.de?subject=${emailSubject}&body=${emailBody}`}>{getLanguage(language, 'eventBook')}</a>
                        </div>
                    </div>
                    <div className='modalRight'>
                        {details.length !== 0 && (
                            <div className='modalDetails'>
                                {details.map((item, index) => (
                                    <React.Fragment key={`subtitle_${index}`}>
                                        <span className='line' />
                                        <p>
                                            {item.title && <strong>{item.title[language]}</strong>}
                                            {item.content && item.content[language]}
                                        </p>
                                    </React.Fragment>
                                ))}
                                <span className='line' />
                            </div>
                        )}
                    </div>
                </div>
            </Modal>
        );
    };

    render() {
        // DEFINE VARIABLES
        const language = this.props.browser.language;
        const media = this.props.browser.media;
        // GET CURRENT EVENTS
        const currentEvents = getEvents()
            .sort((a, b) => (a.date instanceof Date ? a.date : a.date.start).getTime() - (b.date instanceof Date ? b.date : b.date.start).getTime())
            .filter(item => this.state.filters.length === 0 || item.type.find(filter => this.state.filters.includes(filter)))
            .filter(item =>
                item.date instanceof Date
                    ? item.date.getMonth() === this.state.month && item.date.getFullYear() === this.state.year
                    : item.date.start.getMonth() === this.state.month && item.date.start.getFullYear() === this.state.year
            );
        // GET UPCOMING EVENTS
        const upcompingEvents = getEvents()
            .sort((a, b) => (a.date instanceof Date ? a.date : a.date.start).getTime() - (b.date instanceof Date ? b.date : b.date.start).getTime())
            .filter(item => this.state.filters.length === 0 || item.type.find(filter => this.state.filters.includes(filter)))
            .filter(item =>
                item.date instanceof Date
                    ? (item.date.getMonth() >= this.month && item.date.getFullYear() === this.year) ||
                      (item.date.getMonth() <= this.month && item.date.getFullYear() === this.year + 1)
                    : (item.date.start.getMonth() >= this.month && item.date.start.getFullYear() === this.year) ||
                      (item.date.start.getMonth() <= this.month && item.date.start.getFullYear() === this.year + 1)
            )
            .filter(item =>
                item.date instanceof Date
                    ? (item.date.getMonth() > this.state.month && item.date.getFullYear() === this.state.year) ||
                      item.date.getFullYear() === this.state.year + 1
                    : (item.date.start.getMonth() > this.state.month && item.date.start.getFullYear() >= this.state.year) ||
                      item.date.start.getFullYear() === this.state.year + 1
            );
        // GET ANNUAL EVENTS
        const annualEvents = getEvents().filter(item =>
            item.date instanceof Date
                ? (item.date.getMonth() >= this.month && item.date.getFullYear() === this.year) ||
                  (item.date.getMonth() <= this.month && item.date.getFullYear() === this.year + 1)
                : (item.date.start.getMonth() >= this.month && item.date.start.getFullYear() === this.year) ||
                  (item.date.start.getMonth() <= this.month && item.date.start.getFullYear() === this.year + 1)
        );
        // GET FILTERS
        const filters = availableFilters
            .filter(item => annualEvents.find(event => event.type.includes(item)))
            .map(item => ({
                label: getFilter(language, item),
                value: item
            }));
        // RETURN COMPONENT
        return (
            <div ref={this.events} id='events'>
                {this.state.event && this.renderModal()}
                <div id='eventsSelection'>
                    <div
                        id='eventsLeft'
                        className={[this.state.month === this.month && this.state.year === this.year && 'disabled'].filter(x => x).join(' ')}
                        onClick={() => this.handleClickPreviousMonth()}
                    >
                        {media === 'Extra Small' || media === 'Small' ? (
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 50'>
                                <polyline points='22.5 45 2.5 25 22.5 5' />
                            </svg>
                        ) : (
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 75 50'>
                                <line x1='75' y1='25' x2='3' y2='25' />
                                <polyline points='22.5 45 2.5 25 22.5 5' />
                            </svg>
                        )}
                    </div>
                    <div id='eventsCenter'>
                        <Input
                            handleChange={value => this.handleChangeDate(value as number)}
                            items={Array.from(Array(13).keys(), index => {
                                const month = index + this.month < 12 ? index + this.month : index + this.month - 12;
                                const date = new Date(this.year, month).toLocaleString(getLocal(language), { month: 'long' });
                                return {
                                    label: `${date} ${index + this.month < 12 ? this.year : this.year + 1}`,
                                    value: index
                                };
                            })}
                            type='Select'
                            value={this.state.year === this.year ? this.state.month - this.month : this.state.month - this.month + 12}
                        />
                    </div>
                    <div
                        id='eventsRight'
                        className={[this.state.month === this.month && this.state.year === this.year + 1 && 'disabled'].filter(x => x).join(' ')}
                        onClick={() => this.handleClickNextMonth()}
                    >
                        {media === 'Extra Small' || media === 'Small' ? (
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 50'>
                                <polyline points='2.5 5 22.5 25 2.5 45' />
                            </svg>
                        ) : (
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 75 50'>
                                <line x1='0' y1='25' x2='72' y2='25' />
                                <polyline points='52.5 5 72.5 25 52.5 45' />
                            </svg>
                        )}
                    </div>
                </div>
                <div id='eventsFilters'>
                    {filters.map((item, index) => (
                        <div
                            key={`filter_${index}`}
                            className={['filter', this.state.filters.includes(item.value) && 'active'].filter(x => x).join(' ')}
                            onClick={() => this.handleChangeFilter(item.value)}
                        >
                            {item.label}
                            <span className='borderTop' />
                            <span className='borderBottom' />
                            <span className='borderLeft' />
                            <span className='borderRight' />
                        </div>
                    ))}
                </div>
                {currentEvents.length !== 0 ? (
                    <div id='eventsGrid'>
                        {currentEvents.map((event: Event, index: number) => {
                            const title = event.title;
                            const price = event.price;
                            const description = event.descriptionShort;
                            const previewImage = event.previewImage;
                            const date =
                                event.date instanceof Date
                                    ? `${event.date.toLocaleString(getLocal(language), { day: '2-digit', month: '2-digit', year: 'numeric' })}`
                                    : `${event.date.start.toLocaleString(getLocal(language), { day: '2-digit' })} - ${event.date.end.toLocaleString(getLocal(language), { day: '2-digit', month: '2-digit', year: 'numeric' })}`;
                            return (
                                <div className='event' key={`event_${index}`}>
                                    <div className='eventImage'>
                                        <Parallax
                                            height={this.props.browser.height}
                                            scroll={this.props.browser.scroll}
                                            factor={this.props.browser.media === 'Extra Small' ? 15 : 20}
                                            modus={'Complex'}
                                        >
                                            <img src={previewImage} />
                                        </Parallax>
                                    </div>
                                    <div className='eventContent'>
                                        <div className='eventTitle'>
                                            <h3>{title[language]}</h3>
                                            <div className='eventSubtitle'>
                                                <span>{date}</span>
                                                <span>•</span>
                                                <span>{`${price} EUR`}</span>
                                            </div>
                                        </div>
                                        <div className='eventDescription'>{description[language]}</div>
                                        <div className='eventButton underlineLink' onClick={() => this.handleClickEvent(event)}>
                                            {getLanguage(language, 'learnMore')}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div id='eventsMessage'>
                        {upcompingEvents.length === 0 ? (
                            <p>{`${getLanguage(language, 'eventUnavailable')} ...`}</p>
                        ) : (
                            <p>
                                {`${getLanguage(language, 'eventUnavailable')}, ${getLanguage(language, 'eventUpcoming')} `}
                                <span
                                    onClick={() => {
                                        const date = upcompingEvents[0].date instanceof Date ? upcompingEvents[0].date : upcompingEvents[0].date.start;
                                        this.setState({ month: date.getMonth(), year: date.getFullYear() });
                                    }}
                                    className='underlineLink'
                                >
                                    {upcompingEvents[0].date instanceof Date
                                        ? upcompingEvents[0].date.toLocaleString(getLocal(language), { month: 'long' })
                                        : upcompingEvents[0].date.start.toLocaleString(getLocal(language), { month: 'long' })}
                                </span>
                                {` ...`}
                            </p>
                        )}
                    </div>
                )}
            </div>
        );
    }
}

export default withRouter(Events);
