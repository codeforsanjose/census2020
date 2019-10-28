import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import { FormattedMessage } from 'react-intl';
import { Carousel } from 'react-responsive-carousel';
import QRCode from 'qrcode.react';

import lifeAbundant from '../images/lifeAbundant.jpg';
import sanJoseMural from '../images/sanJoseMural.jpg';
import muralProject from '../images/muralProject.jpg';
import sharksMural from '../images/sharksMural.jpg';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './DetailViewContainer.scss';

const CarouselItem = ({ img }) => (
  <div
    className="c_home__carousel-item"
  >
    <img
      className="c_home__carousel-item__image"
      src={img}
    />
  </div>
);

CarouselItem.propTypes = {
  img: PropTypes.string.isRequired
};

const Factoid = ({ title, message }) => (
  <li
    className="c_home__factoid"
  >
    <h3>
      {title}
    </h3>
    <p className="c_home__factoid__content">
      {message}
    </p>
  </li>
);

Factoid.propTypes = {
  title: PropTypes.element.isRequired,
  message: PropTypes.element.isRequired
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
          { [lifeAbundant, sanJoseMural, muralProject, sharksMural].map(img => (
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
              id="components.DetailViewContainer.message"
              defaultMessage={`Ea irure pariatur aliqua minim cillum consectetur consequat reprehenderit sit aliqua sit eiusmod proident. Commodo ea pariatur in exercitation voluptate proident anim nisi minim. Nisi aliqua ipsum non elit nulla pariatur elit exercitation enim mollit commodo incididunt incididunt. Excepteur amet esse sunt velit ut nulla ipsum ea.
Adipisicing ullamco laboris cillum dolor eiusmod nulla Lorem sit quis velit fugiat dolor ullamco aute. Cupidatat cupidatat ullamco ullamco ea quis. Tempor laborum eu ea consequat.`}
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
          />
          <Factoid
            title={<FormattedMessage
              id="components.Home.factoids.qr-code.title"
              defaultMessage="Learn About the Census From Your Phone"
            />}
            message={
              <QRCode value={document.location.origin} />
            }
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
          />
        </ul>
      </main>
    );
  }
}
