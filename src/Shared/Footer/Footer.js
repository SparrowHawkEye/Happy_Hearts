import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className=" w-full p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
      <div className="sm:flex sm:items-center sm:justify-between">
        <Link
          to="https://flowbite.com"
          className="flex items-center mb-4 sm:mb-0"
        >
          <img
            src="/docs/images/logo.svg"
            className="mr-3 h-8"
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
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
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © 2022{" "}
        <Link to="https://flowbite.com" className="hover:underline">
          Flowbite™
        </Link>
        . All Rights Reserved.
      </span>
    </footer>
  );
};

export default Footer;
