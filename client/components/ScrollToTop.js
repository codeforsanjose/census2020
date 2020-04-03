import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

class ScrollToTop extends React.Component {
  componentDidUpdate (prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      let e = document.getElementById('scroll-placeholder');
      e.scrollIntoView();
    }
  }

  render () {
    return <div id="scroll-placeholder"></div>;
  }
}

ScrollToTop.propTypes = {
	location: PropTypes.shape({
      pathname: PropTypes.string.isRequired
    }),
}

export default withRouter(ScrollToTop);
