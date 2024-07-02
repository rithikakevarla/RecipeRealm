import React from 'react';
import './Header.css'; // Ensure this file contains the updated styles

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="reciperealm.png" alt="logo"/>
      </div>
      <h1>Recipe Realm</h1>
      <nav> 
        <ul>
          <li><a href="/Home">Home</a></li>
          <li><a href="/Search">Search</a></li>
          <li><a href="/Generate">Generate</a></li>
          <li><a href="/AboutUs">AboutUs</a></li>
          
        </ul>
      </nav>
    </header>
  );
}

export default Header;
