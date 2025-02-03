import * as React from 'react';
import queryString from 'query-string';
import Container from '../Container/Container';
import Gallery from '../Gallery/Gallery';
import Input from '../Input/Input';
import Modal from '../Modal/Modal';
import Parallax from '../Parallax/Parallax';
import { PropsWithRouter, withRouter } from '../../Router/Router';
import { getEvents } from '../../@presets/events';
import { getFilter, getLocal, getLanguage } from '../../@presets/language';
import { EmailCustom, EmailDefault, Event, FilterEvent, availableFilters } from '../../@types/events';
import { Browser } from '../../@types/browser';
import './Events.scss';

interface Props extends PropsWithRouter {
    browser: Browser;
    type: 'Calendar' | 'Standard';
}

interface States {
    event: Event | null;
    filters: FilterEvent[];
    month: number;
    year: number;
}

class Events extends React.Component<Props, States> {
    private events: React.RefObject<HTMLDivElement>;
    private date = new Date();
    private month = this.date.getMonth();
    private year = this.date.getFullYear();

    constructor(props: Props) {
        super(props);
        this.events = React.createRef();
        this.state = {
            event: null,
            filters: [],
            month: this.findFirstEvent(),
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
            setTimeout(() => (document.documentElement.scrollTop = scroll));
            setTimeout(() => this.setState({ event }), 500);
        }
    }

    componentDidUpdate(prevProps: Props, prevState: States) {
        // IF EVENT IS ACTIVE AND CHANGES
        if (this.state.event && this.state.event !== prevState.event) {
            window.history.replaceState(null, null, `?event=${this.state.event.link}`);
        }
        // IF EVENT IS INACTIVE AND CHANGES
        if (!this.state.event && this.state.event !== prevState.event) {
            window.history.replaceState(null, null, this.props.router.location.pathname);
        }
    }

    private findFirstEvent = () => {
        const events = getEvents()
            .sort((a, b) => (a.date instanceof Date ? a.date : a.date.start).getTime() - (b.date instanceof Date ? b.date : b.date.start).getTime())
            .filter(item => (item.date instanceof Date ? item.date : item.date.start).getTime() >= this.date.getTime());
        if (events && events.length !== 0) {
            return events[0].date instanceof Date ? events[0].date.getMonth() : events[0].date.start.getMonth();
        } else {
            return this.month;
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

    private handleChangeFilter = (filter: FilterEvent) => {
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
        // DEFINE EVENT
        const attachements = event.attachements;
        const booking = event.booking;
        const date =
            event.date instanceof Date
                ? `${event.date.toLocaleString(getLocal(language), { day: '2-digit', month: '2-digit', year: 'numeric' })}`
                : `${event.date.start.getMonth() === event.date.end.getMonth() ? `${event.date.start.toLocaleString(getLocal(language), { day: '2-digit' })}.` : event.date.start.toLocaleString(getLocal(language), { day: '2-digit', month: '2-digit' })} - ${event.date.end.toLocaleString(getLocal(language), { day: '2-digit', month: '2-digit', year: 'numeric' })}`;
        const descriptionLong = event.descriptionLong;
        const descriptionDetails = event.descriptionDetails;
        const descriptionProgram = event.descriptionProgram;
        const link = event.link;
        const price = event.price;
        const subtitle = event.subtitle;
        const title = event.title;
        // DEFINE SHARE
        const shareSubject = `Ebenrieder | ${title[language]}`;
        const shareBody = `https://ebenrieder.de/?event=${link}`;
        // RETURN MODAL
        return (
            <Modal className='modalEvent' browser={this.props.browser} handleClose={() => this.setState({ event: null })}>
                {(height, scroll) => (
                    <>
                        <Gallery
                            browser={this.props.browser}
                            loadingScreen={true}
                            modus={this.props.browser.width <= this.props.browser.variables.mediaM ? 'Expansion' : 'Variable'}
                            parallax={{
                                height,
                                scroll,
                                factor: media === 'Extra Small' ? 15 : 20,
                                modus: 'Simple'
                            }}
                        >
                            {event.imageGallery.map((item, index) => (
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
                                                    <span
                                                        dangerouslySetInnerHTML={{
                                                            __html: item[language]
                                                                .replace(/(\([^)]+\))/g, '<i>$1</i>')
                                                                .replace(/<%br%>/g, '<br>')
                                                                .replace('<%price%>', typeof price === 'number' ? `${price}` : '')
                                                                .replace('<%event%>', typeof price !== 'number' && price.event ? `${price.event}` : '')
                                                                .replace('<%singleRoom%>', typeof price !== 'number' ? `${price.singleRoom}` : '')
                                                                .replace('<%doubleRoom%>', typeof price !== 'number' ? `${price.doubleRoom}` : '')
                                                                .replace('<%singleRoomPrivate%>', typeof price !== 'number' ? `${price.singleRoomPrivate}` : '')
                                                                .replace('<%doubleRoomPrivate%>', typeof price !== 'number' ? `${price.doubleRoomPrivate}` : '')
                                                                .replace('<%singleRoomShared%>', typeof price !== 'number' ? `${price.singleRoomShared}` : '')
                                                                .replace('<%doubleRoomShared%>', typeof price !== 'number' ? `${price.doubleRoomShared}` : '')
                                                        }}
                                                    />
                                                    {index !== subtitle.length - 1 && <span>•</span>}
                                                </React.Fragment>
                                            ))}
                                        {typeof price === 'number' && (
                                            <>
                                                <span>•</span>
                                                <span>{`${price} EUR`}</span>
                                            </>
                                        )}
                                    </div>
                                </div>
                                <div
                                    className='modalDescription'
                                    dangerouslySetInnerHTML={{
                                        __html: descriptionLong[language]
                                            .replace(/(\([^)]+\))/g, '<i>$1</i>')
                                            .replace(/<%br%>/g, '<br>')
                                            .replace(/<%b%>/g, '<strong>')
                                            .replace(/<%\/b%>/g, '</strong>')
                                    }}
                                />
                                {attachements && (
                                    <div className='modalAttachements'>
                                        {attachements.map((item, index) => (
                                            <div
                                                key={`attachement_${index}`}
                                                className='attachement'
                                                dangerouslySetInnerHTML={{
                                                    __html: item.label[language]
                                                        .replace(
                                                            /<%a%>/g,
                                                            `<a class='underlineLink' href='${item.link}' target='_blank' rel='noopener noreferrer'>`
                                                        )
                                                        .replace(/<%\/a%>/g, '</a>')
                                                }}
                                            />
                                        ))}
                                    </div>
                                )}
                                <div className='modalButtons'>
                                    <a className='underlineLink' href={`mailto:?subject=${shareSubject}&body=${shareBody}`}>
                                        {getLanguage(language, 'share')}
                                    </a>
                                    {booking.length !== 0 && (
                                        <>
                                            {booking.map((item, index) => {
                                                const emailType: 'Custom' | 'Default' =
                                                    item.email &&
                                                    (item.email as EmailCustom).subject !== undefined &&
                                                    (item.email as EmailCustom).body !== undefined
                                                        ? 'Custom'
                                                        : 'Default';
                                                const emailDate = date;
                                                const emailSubject =
                                                    emailType === 'Custom'
                                                        ? (item.email as EmailCustom).subject[language]
                                                        : `${getLanguage(language, 'bookingSubject')} ${title[language]}`;
                                                const emailBody =
                                                    emailType === 'Custom'
                                                        ? (item.email as EmailCustom).body[language]
                                                        : `${getLanguage(language, 'bookingGreeting')},${'%0D%0A'}${'%0D%0A'}` +
                                                          ((item.email as EmailDefault)?.text && (item.email as EmailDefault).text === 'Room'
                                                              ? `${getLanguage(language, 'bookingTextRoom')}:${'%0D%0A'}${'%0D%0A'}`
                                                              : `${getLanguage(language, 'bookingTextEvent')}:${'%0D%0A'}${'%0D%0A'}`) +
                                                          `${Object.keys((item.email as EmailDefault) || [])
                                                              .map((key: keyof EmailDefault) => {
                                                                  if (key === 'accomodation') {
                                                                      return `${getLanguage(language, 'bookingAccomodation')}: (${getLanguage(language, 'bookingYesNo')})${'%0D%0A'}`;
                                                                  } else if (key === 'address') {
                                                                      return `${getLanguage(language, 'bookingAddress')}: (${getLanguage(language, 'bookingPleaseComplete')})${'%0D%0A'}`;
                                                                  } else if (key === 'date' && (item.email as EmailDefault)[key] === 'Standard') {
                                                                      return `${getLanguage(language, 'bookingDate')}: ${emailDate}${'%0D%0A'}`;
                                                                  } else if (key === 'date' && (item.email as EmailDefault)[key] === 'Fill') {
                                                                      return `${getLanguage(language, 'bookingDate')}: (${getLanguage(language, 'bookingPleaseComplete')})${'%0D%0A'}`;
                                                                  } else if (key === 'event') {
                                                                      return `${getLanguage(language, 'bookingEvent')}: ${title[language]}${'%0D%0A'}`;
                                                                  } else if (key === 'foodIntolerance') {
                                                                      return `${getLanguage(language, 'bookingFoodIntolerance')}: (${getLanguage(language, 'bookingPleaseComplete')})${'%0D%0A'}`;
                                                                  } else if (key === 'name') {
                                                                      return `${getLanguage(language, 'bookingName')}: (${getLanguage(language, 'bookingPleaseComplete')})${'%0D%0A'}`;
                                                                  } else if (key === 'quantityNights') {
                                                                      return `${getLanguage(language, 'bookingQuantityNights')}: (${getLanguage(language, 'bookingPleaseComplete')})${'%0D%0A'}`;
                                                                  } else if (key === 'quantityPeople') {
                                                                      return `${getLanguage(language, 'bookingQuantityPeople')}: (${getLanguage(language, 'bookingPleaseComplete')})${'%0D%0A'}`;
                                                                  } else if (key === 'room' && (item.email as EmailDefault)[key] === 'Standard') {
                                                                      return `${getLanguage(language, 'bookingRoomType')}: (${getLanguage(language, 'bookingSingleDoubleRoom')})${'%0D%0A'}`;
                                                                  } else if (key === 'room' && (item.email as EmailDefault)[key] === 'Select') {
                                                                      return (
                                                                          `${getLanguage(language, 'bookingRoomType')}: (${getLanguage(language, 'bookingPleaseSelect')})${'%0D%0A'}` +
                                                                          `  ( ) ${getLanguage(language, 'bookingSingleRoomPrivate')}` +
                                                                          `${typeof price !== 'number' && price.singleRoomPrivate ? `: ${price.singleRoomPrivate}€/${getLanguage(language, 'bookingNight')}${'%0D%0A'}` : `${'%0D%0A'}`}` +
                                                                          `  ( ) ${getLanguage(language, 'bookingDoubleRoomPrivate')}` +
                                                                          `${typeof price !== 'number' && price.doubleRoomPrivate ? `: ${price.doubleRoomPrivate}€/${getLanguage(language, 'bookingNight')}${'%0D%0A'}` : `${'%0D%0A'}`}` +
                                                                          `  ( ) ${getLanguage(language, 'bookingSingleRoomShared')}` +
                                                                          `${typeof price !== 'number' && price.singleRoomShared ? `: ${price.singleRoomShared}€/${getLanguage(language, 'bookingNight')}${'%0D%0A'}` : `${'%0D%0A'}`}` +
                                                                          `  ( ) ${getLanguage(language, 'bookingDoubleRoomShared')}` +
                                                                          `${typeof price !== 'number' && price.doubleRoomShared ? `: ${price.doubleRoomShared}€/${getLanguage(language, 'bookingNight')}${'%0D%0A'}` : `${'%0D%0A'}`}`
                                                                      );
                                                                  } else {
                                                                      return '';
                                                                  }
                                                              })
                                                              .join('')}` +
                                                          `${'%0D%0A'}${getLanguage(language, 'bookingGoodbye')}`;
                                                const label = item.label ? item.label[language] : getLanguage(language, 'bookEvent');
                                                const link = item.link ? item.link : `mailto:hallo@ebenrieder.de?subject=${emailSubject}&body=${emailBody}`;
                                                return (
                                                    <a className='underlineLink' key={`booking_${index}`} href={link} target='_blank' rel='noopener noreferrer'>
                                                        {label}
                                                    </a>
                                                );
                                            })}
                                        </>
                                    )}
                                </div>
                            </div>
                            <div className='modalRight'>
                                <div className='modalDetails'>
                                    {descriptionDetails.map((item, index) => (
                                        <React.Fragment key={`subtitle_${index}`}>
                                            <span className='line' />
                                            <span className='detail'>
                                                {item.title && <strong>{item.title[language]}</strong>}
                                                <span
                                                    dangerouslySetInnerHTML={{
                                                        __html: item.content[language]
                                                            .replace(/(\([^)]+\))/g, '<i>$1</i>')
                                                            .replace(/<%br%>/g, '<br>')
                                                            .replace('<%price%>', typeof price === 'number' ? `${price}` : '')
                                                            .replace('<%event%>', typeof price !== 'number' && price.event ? `${price.event}` : '')
                                                            .replace('<%singleRoom%>', typeof price !== 'number' ? `${price.singleRoom}` : '')
                                                            .replace('<%doubleRoom%>', typeof price !== 'number' ? `${price.doubleRoom}` : '')
                                                            .replace('<%singleRoomPrivate%>', typeof price !== 'number' ? `${price.singleRoomPrivate}` : '')
                                                            .replace('<%doubleRoomPrivate%>', typeof price !== 'number' ? `${price.doubleRoomPrivate}` : '')
                                                            .replace('<%singleRoomShared%>', typeof price !== 'number' ? `${price.singleRoomShared}` : '')
                                                            .replace('<%doubleRoomShared%>', typeof price !== 'number' ? `${price.doubleRoomShared}` : '')
                                                    }}
                                                />
                                            </span>
                                        </React.Fragment>
                                    ))}
                                    <span className='line' />
                                </div>
                                {descriptionProgram && (
                                    <div className='modalProgram'>
                                        {descriptionProgram.map((item, indexProgram) => {
                                            const day = item.day;
                                            const small = descriptionProgram
                                                ? descriptionProgram.every(item => item.activities.every(activity => activity.time.length <= 5))
                                                : false;
                                            return (
                                                <div className='day' key={`program_${indexProgram}`}>
                                                    {day && <p>{day[language]}</p>}
                                                    {item.activities.map((activity, indexActivity) => {
                                                        return (
                                                            <div className='activity' key={`program_${indexProgram}_${indexActivity}`}>
                                                                <span className='time' style={{ minWidth: small ? 75 : 125 }}>
                                                                    {activity.time}
                                                                </span>
                                                                <span className='description'>{activity.description[language]}</span>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>
                        <div className='modalFooter'>
                            <div>
                                <img id='headerLogo' src='assets/svg/logo_picture.svg' />
                            </div>
                            <div>
                                <span>Ebenrieder</span>
                                <span>Remnatsried 2</span>
                                <span>87675 Stötten am Auerberg</span>
                                <span>Deutschland</span>
                                <a className='underlineLink' href='tel:+4983499763940'>
                                    +49 8349 9763940
                                </a>
                            </div>
                        </div>
                    </>
                )}
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
            .filter(item => this.state.filters.length === 0 || this.state.filters.includes(item.type))
            .filter(item =>
                this.props.type === 'Calendar'
                    ? item.date instanceof Date
                        ? item.date.getMonth() === this.state.month && item.date.getFullYear() === this.state.year
                        : item.date.start.getMonth() === this.state.month && item.date.start.getFullYear() === this.state.year
                    : item.date instanceof Date
                      ? (item.date.getMonth() >= this.month && item.date.getFullYear() === this.year) ||
                        (item.date.getMonth() <= this.month && item.date.getFullYear() === this.year + 1)
                      : (item.date.start.getMonth() >= this.month && item.date.start.getFullYear() === this.year) ||
                        (item.date.start.getMonth() <= this.month && item.date.start.getFullYear() === this.year + 1)
            )
            .map(item => ({
                ...item,
                status: (item.date instanceof Date ? item.date : item.date.start).getTime() < this.date.getTime() ? 'Expired' : item.status
            }));
        // GET UPCOMING EVENTS
        const upcompingEvents = getEvents()
            .sort((a, b) => (a.date instanceof Date ? a.date : a.date.start).getTime() - (b.date instanceof Date ? b.date : b.date.start).getTime())
            .filter(item => this.state.filters.length === 0 || this.state.filters.includes(item.type))
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
                {this.props.type === 'Calendar' && (
                    <div id='eventsSelection'>
                        <div
                            id='eventsLeft'
                            className={[this.state.month === this.month && this.state.year === this.year && 'disabled'].filter(x => x).join(' ')}
                            onClick={() => this.handleClickPreviousMonth()}
                        >
                            {this.props.browser.width <= this.props.browser.variables.mediaS ? (
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
                            {this.props.browser.width <= this.props.browser.variables.mediaS ? (
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
                )}
                <div id='eventsFilters'>
                    {filters.map((item, index) => (
                        <div
                            key={`filter_${index}`}
                            className={['filter', this.state.filters.includes(item.value) && 'active'].filter(x => x).join(' ')}
                            onClick={() => this.handleChangeFilter(item.value)}
                        >
                            {item.label}
                        </div>
                    ))}
                </div>
                {currentEvents.length !== 0 ? (
                    <Container browser={this.props.browser} type='Grid'>
                        {currentEvents.map((event: Event) => {
                            const title = event.title;
                            const price = event.price;
                            const description = event.descriptionShort;
                            const previewImage = event.imagePreview;
                            const date =
                                event.date instanceof Date
                                    ? `${event.date.toLocaleString(getLocal(language), { day: '2-digit', month: '2-digit', year: 'numeric' })}`
                                    : `${event.date.start.getMonth() === event.date.end.getMonth() ? `${event.date.start.toLocaleString(getLocal(language), { day: '2-digit' })}.` : event.date.start.toLocaleString(getLocal(language), { day: '2-digit', month: '2-digit' })} - ${event.date.end.toLocaleString(getLocal(language), { day: '2-digit', month: '2-digit', year: 'numeric' })}`;
                            return (
                                <div className='event' key={`event_${event.link}`}>
                                    <div className='eventImage'>
                                        {event.status !== 'Available' && (
                                            <span className='eventNotification'>
                                                {event.status === 'Booked' ? getLanguage(language, 'eventBooked') : getLanguage(language, 'eventExpired')}
                                            </span>
                                        )}
                                        <Parallax
                                            height={this.props.browser.height}
                                            scroll={this.props.browser.scroll}
                                            factor={media === 'Extra Small' ? 15 : 20}
                                            modus={'Complex'}
                                        >
                                            <img src={previewImage} onLoad={event => (event.currentTarget.style.opacity = '1')} />
                                        </Parallax>
                                    </div>
                                    <div className='eventContent'>
                                        <div className='eventTitle'>
                                            <h3>{title[language]}</h3>
                                            <div className='eventSubtitle'>
                                                <span>{date}</span>
                                                {typeof price === 'number' && (
                                                    <>
                                                        <span>•</span>
                                                        <span>{`${price} EUR`}</span>
                                                    </>
                                                )}
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
                    </Container>
                ) : (
                    <div id='eventsMessage'>
                        {upcompingEvents.length === 0 || this.props.type === 'Standard' ? (
                            <p>{`${getLanguage(language, 'eventUnavailable').split('<%split%>')[0]} ...`}</p>
                        ) : (
                            <p>
                                {`${getLanguage(language, 'eventUnavailable').replace('<%split%>', '')} `}
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
