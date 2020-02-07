import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { FormattedMessage, defineMessages } from 'react-intl';
import QRCode from 'qrcode.react';

import { FormattedMarkdownMessage } from './FormattedMarkdownMessage';
import { CensusLink } from './Navigation';

import sharksMural from '../images/sharksMural.jpg';
import cityHall from '../images/cityHall.jpg';
import muralProject from '../images/finishedMuralProject.jpg';
import sanJoseMural from '../images/newSanJoseMural.jpg';
import performingArts from '../images/performingArts.jpg';
import peopleGathering from '../images/peopleGathering.jpg';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './DetailViewContainer.scss';

const CAROUSEL_MESSAGES = defineMessages({
  carouselMessage1: {
    id: "components.Home.carousel.messages.1",
    defaultMessage: 'Learn why everyone counts!',
    description: 'Message for first carousel card'
  },
  carouselMessage2: {
    id: "components.Home.carousel.messages.2",
    defaultMessage: 'When you respond, we all benefit!',
    description: 'Message for second carousel card'
  },
  carouselMessage3: {
    id: "components.Home.carousel.messages.3",
    defaultMessage: 'Answer online, by phone, or by mail!',
    description: 'Message for third carousel card'
  },
  carouselMessage4: {
    id: "components.Home.carousel.messages.4",
    defaultMessage: 'Your participation affects our congressional representation!',
    description: 'Message for fourth carousel card'
  },
  carouselMessage5: {
    id: "components.Home.carousel.messages.5",
    defaultMessage: 'Easy, quick and confidential!',
    description: 'Message for fifth carousel card'
  },
  carouselMessage5: {
    id: "components.Home.carousel.messages.6",
    defaultMessage: '  Be counted San Jose!',
    description: 'Message for sixth carousel card'
  },
})

const CAROUSEL_ITEMS = [
  {
    image: muralProject,
    message: "components.Home.carousel.messages.1",
  },
  {
    image: sanJoseMural,
    message: "components.Home.carousel.messages.2",

  },
  {
    image: sharksMural,
    message: "components.Home.carousel.messages.3",

  },
  {
    image: performingArts,
    message: "components.Home.carousel.messages.4",

  },
  {
    image: peopleGathering,
    message: "components.Home.carousel.messages.5",
  },
  {
    image: cityHall,
    message: "components.Home.carousel.messages.6"
  }
];

const CarouselItem = ({ item }) => (
  <div
    className="c_home__carousel-item"
  >
    <img
      className="c_home__carousel-item__image"
      src={item.image}
    />
    <div className="c_home__overlay">
      <h1 className="c_home__overlay__title">
        <FormattedMessage
          id="components.Home.carsouelItem.title"
          defaultMessage="The United States 2020 Census"
        />
      </h1>
      { window.innerWidth >= 800 && (
        <h1 className="c_home__overlay__message">
          <FormattedMessage id={item.message} />
        </h1>
      )}
      { window.innerWidth < 800 && (
        <CensusLink />
      )}
    </div>
  </div>
);

CarouselItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    message: PropTypes.string,
  }).isRequired
};

const REASON_MESSAGES = {
  title: {
    id: "components.Home.top_reasons.title",
    defaultMessage: 'Top 5 Reasons to take the census',
    description: 'Top reasons to take the census testing'
  },
  reason1: {
    id: "components.Home.top_reasons.item.1",
    defaultMessage: "Determines the number of seats in the House of Representatives",
    description: 'Reasons to take the census 1 testing'
  },
  reason2: {
    id: "components.Home.top_reasons.item.2",
    defaultMessage: "Redraw district boundaries",
    description: 'Reasons to take the census 2'
  },
  reason3: {
    id: "components.Home.top_reasons.item.3",
    defaultMessage: "Allocates funds to the state and localities",
    description: 'Reasons to take the census 3'
  },
  reason4: {
    id: "components.Home.top_reasons.item.4",
    defaultMessage: "Infrastructure planning",
    description: 'Reasons to take the census 4'
  },
  reason5: {
    id: "components.Home.top_reasons.item.5",
    defaultMessage: "Emergency response planning",
    description: 'Reasons to take the census 5'
  },
}

const REASONS = [
    "components.Home.top_reasons.item.1",
    "components.Home.top_reasons.item.2",
    "components.Home.top_reasons.item.3",
    "components.Home.top_reasons.item.4",
    "components.Home.top_reasons.item.5",
]

const TopReasons = () => {
  const screenWidth = window.innerWidth;
  let size;
  if (screenWidth < 1200) {
    size = (screenWidth < 800) ? 'small' : 'medium';
  } else {
    size = 'large';
  }
  const topReasonsClass = 'c_home__top-reasons';

  return (
    <ol
      className={classnames(
        topReasonsClass,
        `${topReasonsClass}__${size}`
      )}>
      <h2>
        <FormattedMessage
          id="components.Home.top_reasons.title"
        />
      </h2>
      { REASONS.map((id, index) => (
        <li
          key={index}>
          <p>
            <FormattedMessage id={id} />
          </p>
        </li>
      ))}
    </ol>
  );
};

const Factoid = ({ className, message, headerMessage, headerTitle, link }) => {
  const factoidSize = (window.innerWidth < 800) ? 'mobile' : 'desktop';
  const factoidClass = 'c_home__factoid';

  return (
    <li
      className={classnames(
        factoidClass,
        `${factoidClass}__${factoidSize}`,
        className
      )}
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
};

Factoid.propTypes = {
  className: PropTypes.string,
  message: PropTypes.element.isRequired,
  headerTitle: PropTypes.element.isRequired,
  headerMessage: PropTypes.element.isRequired,
  headerIconUrl: PropTypes.string.isRequired,
  link: PropTypes.element
};

const YoutubeItem = ({ opts }) => (
  <div
    className="c_home__content__video"
  >
    <YouTube
      videoId="pl4RO5EisCU"
      opts={opts}
    />
  </div>
);

YoutubeItem.propTypes = {
  opts: PropTypes.object
};

export default class DetailViewContainer extends Component {
  render () {
    const screenWidth = window.innerWidth;
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
          { CAROUSEL_ITEMS.map(item => (
            <CarouselItem key={item} item={item} />
          ))}
        </Carousel>
        <div className="c_home__content">
          <ul
            className="c_home__factoids">
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
                to="/faq">
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
                  defaultMessage="Do I take the census?"
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
            <Factoid
              className="c_home__factoid__qr-code"
              headerTitle={<FormattedMessage
                id="components.Home.factoids.qrCode.headerTitle"
                defaultMessage="In a hurry, take it to go!"
              />}
              headerMessage={<FormattedMessage
                id="components.Home.factoids.qrCode.headerMessage"
                defaultMessage="Take a photo of the image to learn more"
              />}
              message={
                <QRCode
                  value={document.location.origin}
                />
              }
            />
            { screenWidth < 800 && (
              <YoutubeItem
                opts={{
                  height: (screenWidth * 0.8 * 9 / 16).toString(),
                  width: (screenWidth * 0.8).toString(),
                  playerVars: {
                    autoplay: 0
                  }
                }}>
              </YoutubeItem>
            )}
            { screenWidth < 1280 && (
              <TopReasons />
            )}
          </ul>
          { screenWidth > 800 && screenWidth < 1280 && (
            <YoutubeItem
              style={{ alignSelf: 'center' }}
              opts={{
                height: (screenWidth * 0.8 * 9 / 16).toString(),
                width: (screenWidth * 0.8).toString(),
                playerVars: {
                  autoplay: 0
                }
              }}>
            </YoutubeItem>
          )}
          { screenWidth > 1280 && (
            <div
              className="c_home__video-container">
              <YoutubeItem
                opts={{
                  height: (600 * 9 / 16).toString(),
                  width: (600).toString(),
                  playerVars: {
                    autoplay: 0
                  }
                }}>
              </YoutubeItem>
              <TopReasons />
            </div>
          )}
        </div>
      </main>
    );
  }
}
