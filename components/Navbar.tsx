import Image from 'next/image';
import { useState } from 'react';

const Navbar = () => {
  return (
    <nav className=" navbar navbar-expand-lg navbar-light relative flex flex-wrap items-center justify-end bg-gray-100 py-4 text-gray-500 shadow-lg hover:text-gray-700 focus:text-gray-700">
      <div className="container-fluid flex flex-wrap items-center justify-between px-6">
        <button
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          className="navbar-toggler border-0 bg-transparent py-2 px-2.5 text-gray-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0"
          data-bs-target="#navbarSupportedContent"
          data-bs-toggle="collapse"
          type="button">
          <svg
            aria-hidden="true"
            className="w-6"
            data-icon="bars"
            data-prefix="fas"
            focusable="false"
            role="img"
            viewBox="0 0 448 512"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
              fill="currentColor"></path>
          </svg>
        </button>
        <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
          {/* <!-- Left links --> */}
          <ul className="list-style-none navbar-nav mr-auto flex flex-col pl-0">
            <li className="nav-item p-2">
              <a className="nav-link p-0 text-gray-500 hover:text-gray-700 focus:text-gray-700" href="/">
                Home
              </a>
            </li>
            <li className="nav-item p-2">
              <a className="nav-link p-0 text-gray-500 hover:text-gray-700 focus:text-gray-700" href="Portfolio">
                Portfolio
              </a>
            </li>
            <li className="nav-item p-2">
              <a className="nav-link p-0 text-gray-500 hover:text-gray-700 focus:text-gray-700" href="Technology">
                Technology
              </a>
            </li>
            <li className="nav-item p-2">
              <a className="nav-link p-0 text-gray-500 hover:text-gray-700 focus:text-gray-700" href="LifeScience">
                Life Science
              </a>
            </li>
          </ul>
          {/* <!-- Left links --> */}
        </div>
        {/* <!-- Collapsible wrapper --> */}
      </div>
    </nav>
  );
};

export default Navbar;
