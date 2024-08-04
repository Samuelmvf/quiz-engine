import React from 'react';
import './header.scss';

function Header() {
  return (
    <header className="header">
      <img
        className="header__logo"
        src="/favicon.png"
        alt="quiz-engine logo"
      />
      <h1 className="header__title">Quiz Engine</h1>
      <p className="header__subtitle">
        Welcome to our Quiz Engine, a powerful tool built with React and CSS/SCSS for rendering quiz questions dynamically based on a JSON structure.
        Designed for versatility, it supports various question types, allowing for interactive and engaging assessments.
      </p>
    </header>
  );
}

export default Header;
