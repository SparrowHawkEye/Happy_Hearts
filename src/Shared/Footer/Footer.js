import React from "react";
import logo from '../../images/logo.svg'
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" w-full p-4 bg-white rounded-lg shadow md:px-6 md:py-3 dark:bg-gray-800 sticky bottom-0">
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
        <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <Link to="#" className="mr-4 hover:underline md:mr-6 ">
              About
            </Link>
          </li>
          <li>
            <Link to="#" className="mr-4 hover:underline md:mr-6">
              Privacy Policy
            </Link>
          </li>
          <li>
            <Link to="#" className="mr-4 hover:underline md:mr-6 ">
              Licensing
            </Link>
          </li>
          <li>
            <Link to="#" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:mt-3" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{' '}
        <Link to="https://flowbite.com" className="hover:underline">
          Happy Hearts™
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
