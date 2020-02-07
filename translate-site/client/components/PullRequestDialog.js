import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import './PullRequestDialog.scss';

export const PullRequestDialog = ({ onRequestClose, onPullRequestChosen, isOpen, pullRequests }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <header className="c_pull-request-dialog__header">
        <h3>Choose a Pull Request</h3>
        <button
          type="button"
          className="c_pull-request-dialog__header__close-button"
          onClick={onRequestClose}
        >×</button>
      </header>
      <p>
        Choose a pull request to update with the new translation content, or create a new pull request.
      </p>
      <ul>
        {pullRequests.map((pr, index) => (
          <li key={index}>
            <a
              href={pr.html_url}
              target="_blank"
              rel="noopener noreferrer">#{pr.number}</a> {pr.title} (created {new Date(pr.created_at).toLocaleDateString()})
            <button type="button" onClick={() => onPullRequestChosen(pr.number)}>Choose</button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={() => onPullRequestChosen()}>
        Create new Pull Request
      </button>
    </Modal>
  );
};

PullRequestDialog.propTypes = {
  isOpen: PropTypes.bool,
  onRequestClose: PropTypes.func.isRequired,
  onPullRequestChosen: PropTypes.func.isRequired,
  pullRequests: PropTypes.arrayOf(PropTypes.shape({
    number: PropTypes.number.isRequired,
    html_url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    created_at: PropTypes.string.isRequired
  })).isRequired
};
