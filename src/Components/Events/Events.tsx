import * as React from 'react';
import Gallery from '../Gallery/Gallery';
import Input from '../Input/Input';
import Modal from '../Modal/Modal';
import { translateLanguage } from '../../@functions/translateLanguage';
import { getEvents } from '../../@presets/event';
import { getLanguage } from '../../@presets/language';
import { Event } from '../../@types/event';
import { Browser } from '../../@types/browser';
import './Events.scss';

interface Props {
    browser: Browser;
}

interface States {
    event: Event | null;
    month: number;
    year: number;
}

export default class Events extends React.Component<Props, States> {
    private month = new Date().getMonth();
    private year = new Date().getFullYear();
    private timeout: any = [];

    state: States = {
        event: null,
        month: this.month,
        year: this.year
    };

    componentDidUpdate(prevProps: Props, prevState: States) {
        if (this.state.month !== prevState.month || this.state.year !== prevState.year || this.props.browser.media !== prevProps.browser.media) {
            this.animateEvents();
        } else if (this.state.event && !prevState.event) {
            document.documentElement.style.overflow = 'hidden';
        } else if (!this.state.event && prevState.event) {
            document.documentElement.style.overflow = 'visible';
        }
    }

    animateEvents = () => {
        // DEFINE VARIABELS
        let index = 0;
        let events = document.querySelectorAll('.event') as unknown as HTMLElement[];
        // RESET TIMEOUT
        this.timeout.forEach((timeout: any) => clearTimeout(timeout));
        // RESET PROJECTS
        events.forEach(event => {
            event.classList.add('opacity');
            event.classList.remove('animate');
        });
        // RECURSIVE FUNCTION
        let animate = () => {
            events[index].classList.remove('opacity');
            events[index].offsetWidth;
            events[index].classList.add('animate');
            events[index].style.animationPlayState = 'paused';
            events[index].style.animationPlayState = 'running';
            index++;
            if (index < events.length) {
                this.timeout.push(setTimeout(() => animate(), 100));
            }
        };
        // ANIMATE EVENTS
        if (events.length !== 0) {
            animate();
        }
    };

    handleChangeMonth = (value: number) => {
        this.setState({ month: value });
    };

    handleChangeYear = (value: number) => {
        // DEFINE MONTH
        let month = this.state.month;
        // IF MONTH IS NOT IN TIME FRAME OF ONE YEAR
        if ((month < this.month && value === this.year) || (month > this.month && value === this.year + 1)) {
            month = this.month;
        }
        // UPDATE STATE
        this.setState({ month, year: value });
    };

    handleClickNextMonth = () => {
        // IF MONTH IS NOT LAST MONTH
        if (this.state.month < 11) {
            this.setState({ month: this.state.month + 1 });
        }
        // IF MONTH IS LAST MONTH
        else {
            this.setState({ month: 0, year: this.state.year + 1 });
        }
    };

    handleClickPreviousMonth = () => {
        // IF MONTH IS NOT FIRST MONTH
        if (this.state.month > 0) {
            this.setState({ month: this.state.month - 1 });
        }
        // IF MONTH IS FIRST MONTH
        else {
            this.setState({ month: 11, year: this.state.year - 1 });
        }
    };

    handleClickEvent = (event: Event) => {
        this.setState({ event });
    };

    renderModal = () => {
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
        const price = event.price;
        const title = event.title;
        const description = event.descriptionLong;
        const date =
            event.date instanceof Date
                ? `${event.date.toLocaleString(translateLanguage(language), { day: '2-digit', month: '2-digit', year: 'numeric' })}`
                : `${event.date.start.toLocaleString(translateLanguage(language), { day: '2-digit' })} - ${event.date.end.toLocaleString(translateLanguage(language), { day: '2-digit', month: '2-digit', year: 'numeric' })}`;
        // RETURN MODAL
        return (
            <Modal className='event' browser={this.props.browser} handleClose={() => this.setState({ event: null })}>
                <Gallery browser={this.props.browser} fullScreen={media === 'Extra Small' || media === 'Small' || media === 'Medium'}>
                    {event.gallery.map((item, index) => (
                        <img key={index} src={item} />
                    ))}
                </Gallery>
                <div className='modalContent'>
                    <div className='modalTitle'>
                        <h1>{title[language]}</h1>
                        <p>{`${date} • ${price} EUR`}</p>
                    </div>
                    <div className='modalDescription'>{description[language]}</div>
                    <div className='modalButton underline'>{getLanguage(language, 'book')}</div>
                </div>
            </Modal>
        );
    };

    render() {
        // DEFINE VARIABLES
        const language = this.props.browser.language;
        const media = this.props.browser.media;
        const months = [
            getLanguage(language, 'january'),
            getLanguage(language, 'february'),
            getLanguage(language, 'march'),
            getLanguage(language, 'april'),
            getLanguage(language, 'may'),
            getLanguage(language, 'june'),
            getLanguage(language, 'july'),
            getLanguage(language, 'august'),
            getLanguage(language, 'september'),
            getLanguage(language, 'october'),
            getLanguage(language, 'november'),
            getLanguage(language, 'december')
        ];
        // GET CURRENT EVENTS
        const currentEvents = getEvents()
            .sort((a, b) => (a.date instanceof Date ? a.date : a.date.start).getTime() - (b.date instanceof Date ? b.date : b.date.start).getTime())
            .filter(item =>
                item.date instanceof Date
                    ? item.date.getMonth() === this.state.month && item.date.getFullYear() === this.state.year
                    : item.date.start.getMonth() === this.state.month && item.date.start.getFullYear() === this.state.year
            );
        // GET UPCOMING EVENTS
        const upcompingEvents = getEvents()
            .sort((a, b) => (a.date instanceof Date ? a.date : a.date.start).getTime() - (b.date instanceof Date ? b.date : b.date.start).getTime())
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
        // RETURN COMPONENT
        return (
            <div id='events'>
                {this.state.event && this.renderModal()}
                <div id='selection'>
                    <div
                        id='left'
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
                    <div id='center'>
                        <Input
                            handleChange={value => this.handleChangeMonth(value as number)}
                            items={months.map((month, index) => ({
                                label: month,
                                value: index,
                                disabled:
                                    (index < this.month && this.state.year === this.year) || (index > this.month && this.state.year === this.year + 1)
                            }))}
                            type='Select'
                            value={this.state.month}
                        />
                        <Input
                            handleChange={value => this.handleChangeYear(value as number)}
                            items={[...Array(2).keys()].map(x => ({ label: `${this.year + x}`, value: this.year + x }))}
                            type='Select'
                            value={this.state.year}
                        />
                    </div>
                    <div
                        id='right'
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
                {currentEvents.length !== 0 ? (
                    <div id='grid'>
                        {currentEvents.map((event: Event, index: number) => {
                            const title = event.title;
                            const price = event.price;
                            const description = event.descriptionShort;
                            const previewImage = event.previewImage;
                            const date =
                                event.date instanceof Date
                                    ? `${event.date.toLocaleString(translateLanguage(language), { day: '2-digit', month: '2-digit', year: 'numeric' })}`
                                    : `${event.date.start.toLocaleString(translateLanguage(language), { day: '2-digit' })} - ${event.date.end.toLocaleString(translateLanguage(language), { day: '2-digit', month: '2-digit', year: 'numeric' })}`;
                            return (
                                <div className='event' key={`event_${index}`}>
                                    <div className='eventImage'>
                                        <img src={previewImage} />
                                    </div>
                                    <div className='eventContent'>
                                        <div className='eventTitle'>
                                            <h3>{title[language]}</h3>
                                            <span>{`${date} • ${price} EUR`}</span>
                                        </div>
                                        <div className='eventDescription'>{description[language]}</div>
                                        <div className='eventButton underline' onClick={() => this.handleClickEvent(event)}>
                                            {getLanguage(language, 'learnMore')}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <div id='message'>
                        {upcompingEvents.length === 0 ? (
                            <p>{`${getLanguage(language, 'noEvents')} ...`}</p>
                        ) : (
                            <p>
                                {`${getLanguage(language, 'noEvents')}, ${getLanguage(language, 'upcomingEvents')} `}
                                <span
                                    onClick={() => {
                                        const date =
                                            upcompingEvents[0].date instanceof Date ? upcompingEvents[0].date : upcompingEvents[0].date.start;
                                        this.setState({ month: date.getMonth(), year: date.getFullYear() });
                                    }}
                                    className='underline'
                                >
                                    {
                                        months[
                                            (upcompingEvents[0].date instanceof Date
                                                ? upcompingEvents[0].date
                                                : upcompingEvents[0].date.start
                                            ).getMonth()
                                        ]
                                    }
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
