import React from "react";
import logo from '../../images/logo.svg'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-8 bg-white rounded-lg border-t-sky-200 md:px-6 md:py-3 dark:bg-gray-800 sticky bottom-0">
      <div className="sm:flex sm:items-center sm:justify-between">
      <Link to="/" className="flex items-center">
            <img
              src={logo}
              className="mr-3 h-6 sm:h-9"
              alt="Happy Hearts Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              Happy Hearts
            </span>
          </Link>
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{' '}
        <Link to="/" className="hover:underline">
          Happy Hearts™
        </Link>
        . All Rights Reserved.
      </span>
      </div>
    </footer>
  );
};

export default Footer;
