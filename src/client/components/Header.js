import React from 'react';
import '../pages/LaunchesListPages.css'

const Header = () => {
  const headerText = "SpaceX Launch Programs";
  return (
    <div className="header" tabIndex="0" aria-label={headerText}>{headerText}</div>
  );
};

export default Header;