import React from 'react';
import githubIcon from '../images/github.png';
import './AuthenticationScreen.scss';

export const AuthenticationScreen = () => {
  const url = new URL(document.location.href);
  let pathname = url.pathname;
  if (!pathname.endsWith('/')) {
    pathname += '/';
  }
  pathname += 'auth';
  url.pathname = pathname;
  return (
    <div className="c_auth-screen">
      <a href={url} className="c_auth-screen__auth-link">
        <img src={githubIcon} />
        Log in with Github
      </a>
      <p className="c_auth-screen__explanation">
        Logging in with you Github account will allow
        you to create pull requests for translation or
        copy changes without having to download the
        changed files and give them to someone with Github
        access to manually update and submit.
      </p>
    </div>
  );
};
