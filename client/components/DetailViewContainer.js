import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FormattedMessage, defineMessages } from 'react-intl';
import QRCode from 'qrcode.react';

import { CensusLink } from './Navigation';

import sharksMural from '../images/sharksMural.jpg';
import cityHall from '../images/cityHall.jpg';
import muralProject from '../images/finishedMuralProject.jpg';
import sanJoseMural from '../images/newSanJoseMural.jpg';
import performingArts from '../images/performingArts.jpg';
import peopleGathering from '../images/peopleGathering.jpg';

import './DetailViewContainer.scss';

defineMessages({
  carouselMessage1: {
    id: 'components.Home.carousel.messages.1',
    defaultMessage: 'Learn why everyone counts!',
    description: 'Message for first carousel card'
  },
  carouselMessage2: {
    id: 'components.Home.carousel.messages.2',
    defaultMessage: 'When you respond, we all benefit!',
    description: 'Message for second carousel card'
  },
  carouselMessage3: {
    id: 'components.Home.carousel.messages.3',
    defaultMessage: 'Answer online, by phone, or by mail!',
    description: 'Message for third carousel card'
  },
  carouselMessage4: {
    id: 'components.Home.carousel.messages.4',
    defaultMessage: 'Your participation affects our congressional representation!',
    description: 'Message for fourth carousel card'
  },
  carouselMessage5: {
    id: 'components.Home.carousel.messages.5',
    defaultMessage: 'Easy, quick and confidential!',
    description: 'Message for fifth carousel card'
  },
  carouselMessage6: {
    id: 'components.Home.carousel.messages.6',
    defaultMessage: '  Be counted San Jose!',
    description: 'Message for sixth carousel card'
  }
});

const CAROUSEL_ITEMS = [
  {
    image: muralProject,
    message: 'components.Home.carousel.messages.1'
  },
  {
    image: sanJoseMural,
    message: 'components.Home.carousel.messages.2'

  },
  {
    image: sharksMural,
    message: 'components.Home.carousel.messages.3'

  },
  {
    image: performingArts,
    message: 'components.Home.carousel.messages.4'

  },
  {
    image: peopleGathering,
    message: 'components.Home.carousel.messages.5'
  },
  {
    image: cityHall,
    message: 'components.Home.carousel.messages.6'
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
      <h2 className="c_home__overlay__message">
        <FormattedMessage id={item.message} />
      </h2>
      { window.innerWidth < 800 && (
        <CensusLink />
      )}
    </div>
  </div>
);

CarouselItem.propTypes = {
  item: PropTypes.shape({
    image: PropTypes.string,
    message: PropTypes.string
  }).isRequired
};

defineMessages({
  title: {
    id: 'components.Home.top_reasons.title',
    defaultMessage: 'Top 5 Reasons to take the census',
    description: 'Top reasons to take the census testing'
  },
  reason1: {
    id: 'components.Home.top_reasons.item.1',
    defaultMessage: 'Determines the number of seats in the House of Representatives',
    description: 'Reasons to take the census 1 testing'
  },
  reason2: {
    id: 'components.Home.top_reasons.item.2',
    defaultMessage: 'Redraw district boundaries',
    description: 'Reasons to take the census 2'
  },
  reason3: {
    id: 'components.Home.top_reasons.item.3',
    defaultMessage: 'Allocates funds to the state and localities',
    description: 'Reasons to take the census 3'
  },
  reason4: {
    id: 'components.Home.top_reasons.item.4',
    defaultMessage: 'Infrastructure planning',
    description: 'Reasons to take the census 4'
  },
  reason5: {
    id: 'components.Home.top_reasons.item.5',
    defaultMessage: 'Emergency response planning',
    description: 'Reasons to take the census 5'
  }
});

const REASONS = [
  'components.Home.top_reasons.item.1',
  'components.Home.top_reasons.item.2',
  'components.Home.top_reasons.item.3',
  'components.Home.top_reasons.item.4',
  'components.Home.top_reasons.item.5'
];

const TopReasons = () => {
  return (
    <ol
      className="c_home__top-reasons">
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

defineMessages({
  factoidTitle1: {
    id: 'components.Home.factoids.1.title',
    defaultMessage: 'Is it safe?',
    description: 'First census factoid title'
  },
  factoidTitle2: {
    id: 'components.Home.factoids.2.title',
    defaultMessage: 'Do I take the census?',
    description: 'Second census factoid title'
  },
  factoidTitle3: {
    id: 'components.Home.factoids.3.title',
    defaultMessage: 'In a hurry, take it to go!',
    description: 'Third census factoid title'
  },
  factoidSubtitle1: {
    id: 'components.Home.factoids.1.subtitle',
    defaultMessage: 'Why should I be counted?',
    description: 'First factoid subtitle'
  },
  factoidSubtitle2: {
    id: 'components.Home.factoids.2.subtitle',
    defaultMessage: 'What will I be asked?',
    description: 'Second factoid subtitle'
  },
  factoidSubtitle3: {
    id: 'components.Home.factoids.3.subtitle',
    defaultMessage: 'Take a photo of the image below to learn more',
    description: 'Third factoid subtitle'
  },
  factoidText1: {
    id: 'components.Home.factoids.1.text',
    defaultMessage: 'Get the answers to all your questions about why to take the census and how the information will be used.',
    description: 'First factoid text'
  },
  factoidText2: {
    id: 'components.Home.factoids.2.text',
    defaultMessage: 'Learn more about the census questions, and who should be answering the questionnaire.',
    description: 'Second factoid text'
  },
  factoidCTA1: {
    id: 'components.Home.factoids.1.cta',
    defaultMessage: 'VIEW ALL FAQs',
    description: 'First factoid cta text'
  },
  factoidCTA2: {
    id: 'components.Home.factoids.2.cta',
    defaultMessage: 'VIEW SAMPLE SURVEY',
    description: 'Second factoid cta text'
  }
});

const FACTOIDS = [
  {
    className: 'c_home__factoid__safety',
    title: 'components.Home.factoids.1.title',
    subtitle: 'components.Home.factoids.1.subtitle',
    text: 'components.Home.factoids.1.text',
    cta: 'components.Home.factoids.1.cta',
    link: '/faq'
  },
  {
    className: 'c_home__factoid__should-i-complete',
    title: 'components.Home.factoids.2.title',
    subtitle: 'components.Home.factoids.2.subtitle',
    text: 'components.Home.factoids.2.text',
    cta: 'components.Home.factoids.2.cta',
    link: '/samplecensus'
  },
  {
    className: 'c_home__factoid__qr-code',
    title: 'components.Home.factoids.3.title',
    subtitle: 'components.Home.factoids.3.subtitle',
    qrcode: document.location.origin
  }
];

const Factoid = ({ item }) => {
  return (
    <li className={classnames(
      'c_home__factoid',
      item.className)}
    >
      <div className="c_home__factoid__goldHeader">
        <div className="c_home__factoid__header-text">
          <div className="c_home__factoid__title">
            <FormattedMessage id={item.title} />
          </div>
          <div className="c_home__factoid__message">
            <FormattedMessage id={item.subtitle} />
          </div>
        </div>
      </div>
      { item.text && (
        <div className="c_home__factoid__content">
          <FormattedMessage id={item.text} />
        </div>
      )}
      { item.cta && (
        <footer className="c_home__factoid__footer">
          <Link className="c_home__factoid__link"
            to={item.link}>
            <FormattedMessage id={item.cta} />
          </Link>
        </footer>
      )}
      { item.qrcode && (
        <div className="c_home__factoid__content">
          <QRCode value={item.qrcode} />
        </div>
      )}
    </li>
  );
};

Factoid.propTypes = {
  item: PropTypes.shape({
    className: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    text: PropTypes.string,
    cta: PropTypes.string,
    link: PropTypes.string,
    qrcode: PropTypes.string
  }).isRequired
};

const YoutubeItem = () => {
  let screenWidth = window.innerWidth;

  let opts = {
    height: (Math.min(720, screenWidth) * 0.8 * 9 / 16).toString(),
    width: (Math.min(720, screenWidth) * 0.8).toString(),
    playerVars: {
      autoplay: 0
    }
  };

  return (
    <div className="c_home__content__video">
      <YouTube
        videoId="pl4RO5EisCU"
        opts={opts}
      />
    </div>
  );
};

export default class DetailViewContainer extends Component {
  render () {
    return (
      <main className='c_home'>
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
            { FACTOIDS.map((item, index) => (
              <Factoid
                key={index}
                item={item}
              />
            ))}
            <YoutubeItem>
            </YoutubeItem>
            <TopReasons />
          </ul>
        </div>
      </main>
    );
  }
}
