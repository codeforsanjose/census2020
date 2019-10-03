import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';

import styles from 'react-responsive-carousel/lib/styles/carousel.min.css'

import { Carousel } from 'react-responsive-carousel';

// import '../messages/DetailViewContainer';


const CarouselItem = ({imgString}) => (
  <div style={{display: 'flex', justifyContent: 'center', width: '100%', height: '60vh', overflow: 'hidden' }}>
    <img src={require(imgString)} style={{flex: 'none'}} />
  </div>
)


const carousel = (
  <Carousel
    showThumbs={false}
    showStatus={false}>
    <div style={{width: '100%', height: '60vh', overflow: 'hidden', position: 'relative' }}>
      <img src={require('../images/lifeAbundant.jpg')} style={{
        position: 'absolute',
        top: '-9999px',
        right: '-9999px',
        bottom: '-9999px',
        left: '-9999px',
        margin: 'auto'
    }} />
    </div>
    <div style={{width: '100%', height: '60vh', overflow: 'hidden', position: 'relative' }}>
      <img src={require('../images/sanJoseMural.jpg')} style={{
        position: 'absolute',
        top: '-9999px',
        right: '-9999px',
        bottom: '-9999px',
        left: '-9999px',
        margin: 'auto'
    }} />
    </div>
    <div style={{width: '100%', height: '60vh', overflow: 'hidden', position: 'relative' }}>
      <img src={require('../images/muralProject.jpg')} style={{
        position: 'absolute',
        top: '-9999px',
        right: '-9999px',
        bottom: '-9999px',
        left: '-9999px',
        margin: 'auto'
    }} />
    </div>
    <div style={{width: '100%', height: '60vh', overflow: 'hidden', position: 'relative' }}>
      <img src={require('../images/sharksMural.jpg')} style={{
        position: 'absolute',
        top: '-9999px',
        right: '-9999px',
        bottom: '-9999px',
        left: '-9999px',
        margin: 'auto'
    }} />
    </div>
  </Carousel>
)


export default class DetailViewContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      show_component: true,
    }
  }

  render () {
    let messageString = `Ea irure pariatur aliqua minim cillum consectetur consequat reprehenderit sit aliqua sit eiusmod proident. Commodo ea pariatur in exercitation voluptate proident anim nisi minim. Nisi aliqua ipsum non elit nulla pariatur elit exercitation enim mollit commodo incididunt incididunt. Excepteur amet esse sunt velit ut nulla ipsum ea.
Adipisicing ullamco laboris cillum dolor eiusmod nulla Lorem sit quis velit fugiat dolor ullamco aute. Cupidatat cupidatat ullamco ullamco ea quis. Tempor laborum eu ea consequat.`


    return (
      <div 
        className='main-container'
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}>

        { carousel }

        <ul
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: '100%',
            padding: '2% 5% 2% 5%',
          }}>

          <li
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '50%',
                marginRight: '30px',
            }}>

            <h4
              style={{
                fontFamily: 'Roboto',
                fontSize: '48px',
                fontWeight: 'bold',
                fontStyle: 'normal',
                fontStrech: 'normal',
                letterSpacing: 'normal',
              }}>
              <FormattedMessage
                id="components.DetailViewContainer.header"
                defaultMessage="Everyone matters"
                description="Home page title">
              </FormattedMessage>
            </h4>

            <h5
              style={{
                fontFamily: 'Roboto',
                fontSize: '18px',
                fontWeight: 'normal',
                fontStyle: 'normal',
                fontStrech: 'normal',
                lineHeight: '1.56',
                letterSpacing: 'normal'
              }}>
              <FormattedMessage
                id="components.DetailViewContainer.message"
                defaultMessage={messageString}
                description="Home page message">
              </FormattedMessage>
            </h5>
          </li>

          <li
            style={{
              width: '50%',
              backgroundColor: '#c4c4c4',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
            }}>
            VIDEO / TESTIMONIALS
          </li>
        </ul>

        <ul
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            width: '100%',
            padding: '0 5% 5% 5%',
          }}>
          <li
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
              width: '30vw',
              height: '30vw',
              backgroundColor: '#c4c4c4',
              margin: '10px',
            }}>
            FACTOID
          </li>
          <li
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
              width: '30vw',
              height: '30vw',
              backgroundColor: '#c4c4c4',
              margin: '10px',
            }}>
            FACTOID
          </li>
          <li
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontWeight: 'bold',
              width: '30vw',
              height: '30vw',
              backgroundColor: '#c4c4c4',
              margin: '10px',
            }}>
            FACTOID
          </li>
        </ul>

      </div>
    );
  }
}
