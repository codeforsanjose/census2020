import React, { useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

var ScrollToTop = ({ location }) => {
  useEffect(
    () => {
      let e = document.getElementById('scroll-placeholder');
      e.scrollIntoView();
    },
    [ location.pathname ]
  );

  return (
    <div id="scroll-placeholder"></div>
  );
};

ScrollToTop.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired
  })
};

export default withRouter(ScrollToTop);
