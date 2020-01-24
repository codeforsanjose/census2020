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
      <a href={url}>
        <img src={githubIcon} />
        Log in with Github
      </a>
    </div>
  );
};
