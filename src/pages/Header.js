import React from 'react';

const Header = () => (
  <header>
    <div className="boll-image">
      <img src="/images/soccer-ball-png.png" alt="boll-image" height="100" width="100" />
      <img src="/images/soccer-ball-png.png" alt="boll-image" height="80" width="70" />
      <img src="/images/soccer-ball-png.png" alt="boll-image" height="60" width="50" />
    </div>
    <div className="logo-container">
      <a href="/">
        <h1>FotbollZ</h1>
        <img src="/images/fotbollz.png" alt="FotbollZ Logo" />
      </a>
    </div>
  </header>
);

export default Header;
