import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import QRCode from 'qrcode.react';

import { FormattedMarkdownMessage } from './FormattedMarkdownMessage';

import sharksMural from '../images/sharksMural.jpg';
import cityHall from '../images/cityHall.jpg';
import muralProject from '../images/finishedMuralProject.jpg';
import sanJoseMural from '../images/newSanJoseMural.jpg';
import performingArts from '../images/performingArts.jpg';
import peopleGathering from '../images/peopleGathering.jpg';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './DetailViewContainer.scss';

const CAROUSEL_IMAGES = [
  {
    image: muralProject,
    message: (
      <FormattedMessage
        id="components.Home.carousel.messages.1"
        defaultMessage="Learn why everyone counts!"
      />
    )
  },
  {
    image: sanJoseMural,
    message: (
      <FormattedMessage
        id="components.Home.carousel.messages.2"
        defaultMessage="When you respond, we all benefit!"
      />
    )
  },
  {
    image: sharksMural,
    message: (
      <FormattedMessage
        id="components.Home.carousel.messages.3"
        defaultMessage="Answer online, by phone, or by mail!"
      />
    )
  },
  {
    image: performingArts,
    message: (
      <FormattedMessage
        id="components.Home.carousel.messages.4"
        defaultMessage="Your participation affects our congressional representation!"
      />
    )
  },
  {
    image: peopleGathering,
    message: (
      <FormattedMessage
        id="components.Home.carousel.messages.5"
        defaultMessage="Easy, quick and confidential!"
      />
    )
  },
  {
    image: cityHall,
    message: (
      <FormattedMessage
        id="components.Home.carousel.messages.6"
        defaultMessage="Be counted San Jose!"
      />
    )
  }
];

const CarouselItem = ({ img }) => (
  <div
    className="c_home__carousel-item"
  >
    <img
      className="c_home__carousel-item__image"
      src={img.image}
    />
    <div className="c_home__overlay">
      <h1 className="c_home__overlay__title">
        <FormattedMessage
          id="components.Home.carsouelItem.title"
          defaultMessage="The United States 2020 Census"
        />
      </h1>
      <h1 className="c_home__overlay__message">
        {img.message}
      </h1>
    </div>
  </div>
);

CarouselItem.propTypes = {
  img: PropTypes.shape({
    image: PropTypes.string,
    message: PropTypes.element
  }).isRequired
};

const Factoid = ({ className, message, headerMessage, headerTitle, link }) => (
  <li
    className={`c_home__factoid ${className}`}
  >
    <div className="c_home__factoid__goldHeader">
      <div className="c_home__factoid__header-text">
        <div className="c_home__factoid__title">
          {headerTitle}
        </div>
        <div className="c_home__factoid__message">
          {headerMessage}
        </div>
      </div>
    </div>
    <div className="c_home__factoid__content">
      {message}
    </div>
    {
      link
        ? (
          <footer className="c_home__factoid__footer">
            {link}
          </footer>
        )
        : null
    }
  </li>
);

Factoid.propTypes = {
  className: PropTypes.string,
  message: PropTypes.element.isRequired,
  headerTitle: PropTypes.element.isRequired,
  headerMessage: PropTypes.element.isRequired,
  headerIconUrl: PropTypes.string.isRequired,
  link: PropTypes.element
};

class YoutubeItem extends Component {
  state = {
    ready: false
  }

  containerRef = React.createRef()

  componentDidMount () {
    // force component to rerender once the DOM elements are mounted
    this.setState({
      ready: true
    });
  }

  render () {
    let opts;
    if (this.containerRef.current) {
      const parentWidth = this.containerRef.current.offsetWidth;
      // maintain a 16:9 aspect ratio based on the parent width
      const width = (parentWidth).toString();
      const height = (parentWidth * (9 / 16)).toString();
      opts = {
        height,
        width,
        playerVars: {
          autoplay: 0
        }
      };
    }

    return (
      <div
        className="c_home__content__video"
        ref={this.containerRef}
      >
        { this.containerRef.current && (
          <YouTube
            videoId="pl4RO5EisCU"
            opts={opts}
          />
        )}
      </div>
    );
  }
}

export default class DetailViewContainer extends Component {
  render () {
    return (
      <main
        className='c_home'
      >
        <Carousel
          showThumbs={false}
          showStatus={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={7000}
          transitionTime={1000}>
          { CAROUSEL_IMAGES.map(img => (
            <CarouselItem key={img} img={img} />
          ))}
        </Carousel>
        <div className="c_home__content">
          <h1 className="c_home__header">
            <FormattedMessage
              id="components.Home.header"
              defaultMessage="Participate in the census and represent San Jose"
            />
          </h1>
          <h2 className="c_home__subheader">
            <FormattedMessage
              id="components.Home.subheader"
              defaultMessage="Help California and San Jose get access to important resources"
            />
          </h2>
        </div>

        <ul
          className="c_home__factoids"
        >
          <Factoid
            className="c_home__factoid__qr-code"
            headerTitle={<FormattedMessage
              id="components.Home.factoids.qrCode.headerTitle"
              defaultMessage="Use the In a hurry, take it to go!"
            />}
            headerMessage={<FormattedMessage
              id="components.Home.factoids.qrCode.headerMessage"
              defaultMessage="Learn how to participate"
            />}
            message={
              <QRCode
                value={document.location.origin}
              />
            }
          />
          <Factoid
            className="c_home__factoid__safety"
            headerTitle={
              <FormattedMessage
                id="components.Home.factoids.safety.headerTitle."
                defaultMessage="Is it safe?"
              />
            }
            headerMessage={
              <FormattedMessage
                id="components.Home.factoids.safety.headerMessage"
                defaultMessage="Why should I be counted?"
              />
            }
            message={
              <FormattedMarkdownMessage
                id="components.Home.factoids.safety.message"
                defaultMessage="Get the answers to all your questions about why to take the census and how the information will be used."
              />
            }
            link={<Link
              className="c_home__factoid__link"
              to="/faq"
            >
              {
                <FormattedMessage
                  id="components.Home.factoids.qr-code.faqLink"
                  defaultMessage="VIEW ALL FAQs"
                />
              }
            </Link>}
          />
          <Factoid
            className="c_home__factoid__should-i-complete"
            headerTitle={
              <FormattedMessage
                id="components.Home.factoids.shouldIComplete.headerTitle"
                defaultMessage="Should I be completing the questionnaire?"
              />
            }
            headerMessage={
              <FormattedMessage
                id="components.Home.factoids.shouldIComplete.headerMessage"
                defaultMessage="What will I be asked?"
              />
            }
            message={
              <FormattedMarkdownMessage
                id="components.Home.factoids.shouldIComplete.message"
                defaultMessage="Learn more about the census questions, and who should be answering the questionnaire."
              />
            }
            link={
              <Link
                className="c_home__factoid__link"
                to="/samplecensus"
              >
                {
                  <FormattedMessage
                    id="components.Home.factoids.3.surveyLink"
                    defaultMessage="VIEW SAMPLE SURVEY"
                  />
                }
              </Link>
            }
          />
        </ul>
        <YoutubeItem />
      </main>
    );
  }
}
