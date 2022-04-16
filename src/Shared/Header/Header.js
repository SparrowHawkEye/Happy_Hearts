import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <img src="" alt="" />
        <ul>
          <Link to='/home'>Home</Link>
          <Link to='/blogs'>Blogs</Link>
          <Link to='/about'>About</Link>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Sign Up</Link>
        </ul>
      </nav>
    </header>
  );
};

export default Header;