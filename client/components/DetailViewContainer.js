import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import { FormattedMessage } from 'react-intl';
import { Carousel } from 'react-responsive-carousel';
import QRCode from 'qrcode.react';
import { Link } from 'react-router-dom';

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
      <h1 className="c_home__overlay__tittle">
        <FormattedMessage
          id="components.Home.carsouelItem.tittle"
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

const Factoid = ({ title, message, headerMessage, headerTittle, link }) => (
  <li
    className="c_home__factoid"
  >
    <div className="c_home__factoid__goldHeader">
      <p className="c_home__factoid__tittle">
        {headerTittle}
      </p>
      <p className="c_home__factoid__message">
        {headerMessage}
      </p>
    </div>
    <h3>
      {title}
    </h3>
    <p className="c_home__factoid__content">
      {message}
    </p>
    <div className="c_home__factoid__line"></div>
    {link}
  </li>
);

Factoid.propTypes = {
  title: PropTypes.element.isRequired,
  message: PropTypes.element.isRequired,
  headerTittle: PropTypes.element.isRequired,
  headerMessage: PropTypes.element.isRequired,
  link: PropTypes.element.isRequired
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
          <YoutubeItem />
          <h4
            className="c_home__content__title"
          >
            <FormattedMessage
              id="components.DetailViewContainer.header"
              defaultMessage="Everyone matters"
              description="Home page title">
            </FormattedMessage>
          </h4>
          <p
            className="c_home__content__text"
          >
            <FormattedMessage
              id="components.DetailViewContainer.message.1"
              defaultMessage={`The 2020 Census is here. Your participation helps ensure our community will have access to housing, healthcare, schools, community programs, better transportation, and government representation.`}
              description="Home page message">
            </FormattedMessage>
          </p>
          <p
            className="c_home__content__text"
          >
            <FormattedMessage
              id="components.DetailViewContainer.message.2"
              defaultMessage={`Every 10 years, the U.S. Census Bureau sets out to count every person living in the United States — regardless of age, citizenship status, and gender. Getting the 2020 Census right is important for all our communities — particularly those most likely to be undercounted. A 2020 Census undercount could put billions of federal dollars and congressional representation for California at risk!`}
              description="Home page message">
            </FormattedMessage>
          </p>
          <p
            className="c_home__content__text"
          >
            <FormattedMessage
              id="components.DetailViewContainer.message.3"
              defaultMessage={`Complete the census survey online, by phone or mail. The process is easy, quick and confidential! All you need is the ID code mailed to you by the U.S. Census Bureau, or your mailing address. Remember, to include everyone living and sleeping in your house. That means babies, children, teens, roommates, etc. Click the "Take the Census Now" button to get started!`}
              description="Home page message">
            </FormattedMessage>
          </p>
        </div>

        <ul
          className="c_home__factoids"
        >
          <Factoid
            title={<FormattedMessage
              id="components.Home.factoids.readyToTakeCensus.title"
              defaultMessage="Ready to take the census?"
            />}
            message={<FormattedMessage
              id="components.Home.factoids.readyToTakeCensus.message"
              defaultMessage="a whole bunch of text and things here"
            />}
            headerTittle={<FormattedMessage
              id="components.Home.factoids.readyToTakeCensus.headerTittle"
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
              {<FormattedMessage
                id="components.Home.factoids.readyToTakeCensus.contactLink"
                defaultMessage="GET INVOLVED"
              />
              }
            </Link>}
          />
          <Factoid
            title={<FormattedMessage
              id="components.Home.factoids.qr-code.title"
              defaultMessage="Learn About the Census From Your Phone"
            />}
            message={
              <QRCode value={document.location.origin} />
            }
            headerTittle={<FormattedMessage
              id="components.Home.factoids.qr-code.headerTittle."
              defaultMessage="Your data is secure"
            />}
            headerMessage={<FormattedMessage
              id="components.Home.factoids.qr-code.headerMessage."
              defaultMessage="Learn more about privacy"
            />}
            link={<Link
              className="c_home__factoid__link"
              to="/faq"
            >
              {<FormattedMessage
                id="components.Home.factoids.qr-code.faqLink"
                defaultMessage="VIEW ALL FAQs"
              />
              }
            </Link>}
          />
          <Factoid
            title={<FormattedMessage
              id="components.Home.factoids.3.title"
              defaultMessage="Title 3"
            />}
            message={<FormattedMessage
              id="components.Home.factoids.3.message"
              defaultMessage="more text will go here"
            />}
            headerTittle={<FormattedMessage
              id="components.Home.factoids.3.headerTittle"
              defaultMessage="See all census questions"
            />}
            headerMessage={<FormattedMessage
              id="components.Home.factoids.3.headerMessage"
              defaultMessage="Learn why it's important..."
            />}
            link={<Link
              className="c_home__factoid__link"
              to="/samplecensus"
            >
              {<FormattedMessage
                id="components.Home.factoids.3.surveyLink"
                defaultMessage="VIEW SAMPLE SURVEY"
              />
              }
            </Link>}
          />
        </ul>
      </main>
    );
  }
}
