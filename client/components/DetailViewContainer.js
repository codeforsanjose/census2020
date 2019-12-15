import React, { Component } from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import { Carousel } from 'react-responsive-carousel';
import QRCode from 'qrcode.react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

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

const REASONS = [
  <FormattedMessage
    id="components.DetailViewContainer.top_reasons.item.1"
    defaultMessage="Determines the number of seats in the House of Representatives">
  </FormattedMessage>,
  <FormattedMessage
    id="components.DetailViewContainer.top_reasons.item.2"
    defaultMessage="Redraw district boundaries">
  </FormattedMessage>,
  <FormattedMessage
    id="components.DetailViewContainer.top_reasons.item.3"
    defaultMessage="Allocates funds to the state and localities">
  </FormattedMessage>,
  <FormattedMessage
    id="components.DetailViewContainer.top_reasons.item.4"
    defaultMessage="Infrastructure planning">
  </FormattedMessage>,
  <FormattedMessage
    id="Compnents.DetailViewContainer.top_reasons.item.4"
    defaultMessage="Emergency response planning">
  </FormattedMessage>
];

const TopReasons = () => {
  let screen_width = window.innerWidth;
  let size;
  if (screen_width < 1200) {
    size = (screen_width < 800) ? 'small' : 'medium';
  } else {
    size = 'large';
  }
  let top_reasons_class = 'c_home__top-reasons';

  return (
    <ol
      className={classnames(
        top_reasons_class,
        `${top_reasons_class}__${size}`
      )}>
      <h2>
        <FormattedMessage
          id="components.DetailViewContainer.top_reasons.title"
          defaultMessage="Top 5 Reasons to take the census">
        </FormattedMessage>
      </h2>
      { REASONS.map((item, index) => (
        <li
          key={index}>
          <p>
            {item}
          </p>
        </li>
      ))}
    </ol>
  );
};

const Factoid = ({ title, message, headerMessage, headerTitle, link }) => {
  let factoid_size = (window.innerWidth < 800) ? 'mobile' : 'desktop';
  let factoid_class = 'c_home__factoid';

  return (
    <li
      className={classnames(
        factoid_class,
        `${factoid_class}__${factoid_size}`
      )}
    >
      <div className="c_home__factoid__goldHeader">
        <div className="c_home__factoid__title">
          {headerTitle}
        </div>
        <div className="c_home__factoid__message">
          {headerMessage}
        </div>
      </div>
      <h3>
        {title}
      </h3>
      <div className="c_home__factoid__content">
        {message}
      </div>
      <div className="c_home__factoid__line"></div>
      {link}
    </li>
  );
};

Factoid.propTypes = {
  title: PropTypes.element.isRequired,
  message: PropTypes.element.isRequired,
  headerTitle: PropTypes.element.isRequired,
  headerMessage: PropTypes.element.isRequired,
  link: PropTypes.element.isRequired
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

export default class DetailViewContainer extends Component {
  render () {
    let screen_width = window.innerWidth;
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
          <h4
            className="c_home__content__title"
          >
            <FormattedMessage
              id="components.DetailViewContainer.header"
              defaultMessage="Participate in the census and represent San Jose"
              description="Home page title"
            />
          </h4>
          <p
            className="c_home__content__text"
          >
            <FormattedMessage
              id="components.DetailViewContainer.message.1"
              defaultMessage="Help California and San Jose get access to important resources"
              description="Home page message"
            />
          </p>
        </div>
        <ul
          className="c_home__factoids"
        >
          <Factoid
            title={<FormattedMessage
              id="components.Home.factoids.readyToTakeCensus.title"
              defaultMessage="Should I be completing the questionnaire?"
            />}
            message={<FormattedMessage
              id="components.Home.factoids.readyToTakeCensus.message"
              defaultMessage=""
            />}
            headerTitle={<FormattedMessage
              id="components.Home.factoids.readyToTakeCensus.headerTitle"
              defaultMessage="Census starts in 2020"
            />}
            headerMessage={<FormattedMessage
              id="components.Home.factoids.readyToTakeCensus.headerMessage"
              defaultMessage="Learn how to participate"
            />}
            link={<Link
              className="c_home__factoid__link"
              to="/contact"
            >
              {
                <FormattedMessage
                  id="components.Home.factoids.readyToTakeCensus.contactLink"
                  defaultMessage="GET INVOLVED"
                />
              }
            </Link>}
          />
          <Factoid
            title={
              <FormattedMessage
                id="components.Home.factoids.qr-code.title"
                defaultMessage="Learn About the Census From Your Phone"
              />
            }
            message={
              <QRCode value={document.location.origin} />
            }
            headerTitle={
              <FormattedMessage
                id="components.Home.factoids.qr-code.headerTitle."
                defaultMessage="Your data is secure"
              />
            }
            headerMessage={
              <FormattedMessage
                id="components.Home.factoids.qr-code.headerMessage."
                defaultMessage="Learn more about privacy"
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
            title={
              <FormattedMessage
                id="components.Home.factoids.3.title"
                defaultMessage="Title 3"
              />
            }
            message={
              <FormattedMessage
                id="components.Home.factoids.3.message"
                defaultMessage="more text will go here"
              />
            }
            headerTitle={
              <FormattedMessage
                id="components.Home.factoids.3.headerTitle"
                defaultMessage="See all census questions"
              />
            }
            headerMessage={
              <FormattedMessage
                id="components.Home.factoids.3.headerMessage"
                defaultMessage="Learn why it's important..."
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
          { screen_width < 800 && (
            <YoutubeItem
              opts={{
                height: (screen_width * 0.8 * 9 / 16).toString(),
                width: (screen_width * 0.8).toString(),
                playerVars: {
                  autoplay: 0
                }
              }}>
            </YoutubeItem>
          )}
          { screen_width < 1280 && (
            <TopReasons />
          )}
        </ul>
        { screen_width > 800 && screen_width < 1280 && (
          <YoutubeItem
            opts={{
              height: (screen_width * 0.8 * 9 / 16).toString(),
              width: (screen_width * 0.8).toString(),
              playerVars: {
                autoplay: 0
              }
            }}>
          </YoutubeItem>
        )}
        { screen_width > 1280 && (
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
      </main>
    );
  }
}
