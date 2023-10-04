import React from 'react'
import Modal from './Modal';
import Dropdown from './Dropdown'


const Header = () => {
  return (
    <header>
      <nav className="flex justify-between items-center w-[92%]  mx-auto">
        <div>
          <a href="/">
            <img
              className=" w-16  top-1 transform transation-all hover:scale-125"
              src="images/logo.png"
              height="30px"
              width="20px"
              alt=""
            />
          </a>
        </div>
        <div className="nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto  w-full flex items-center px-5">
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <div>
                <button
                  id="dropdownHoverButton"
                  data-dropdown-toggle="dropdownHover1"
                  data-dropdown-trigger="hover"
                  className="capitalize
                  inline-block
                  text-md
                  text-black
                  font-bold
                  relative
                  cursor-pointer
                  transition-all
                  duration-500
                  before:content-['']
                  before:absolute
                  before:-bottom-2
                  before:left-1/2
                  before:-translate-x-1/2
                  before:w-0
                  before:h-1.5
                  before:rounded-full
                  before:opacity-0
                  before:transition-all
                  before:duration-500
                  before:bg-gradient-to-r
                  before:from-gray-600
                  before:via-slate-400
                  before:to-zinc-500
                  hover:before:w-[50px]
                  hover:before:opacity-100"
                  type="button"
                >
                  <a href="BIKES.html">BIKE</a>
                </button>
                <Dropdown />
              </div>
            </li>
            <li>
              <div>
                <button
                  id="dropdownHoverButton"
                  data-dropdown-toggle="dropdownHoverframes"
                  data-dropdown-trigger="hover"
                  className="capitalize
                  inline-block
                  text-md
                  text-black
                  font-bold
                  relative
                  cursor-pointer
                  transition-all
                  duration-500
                  before:content-['']
                  before:absolute
                  before:-bottom-2
                  before:left-1/2
                  before:-translate-x-1/2
                  before:w-0
                  before:h-1.5
                  before:rounded-full
                  before:opacity-0
                  before:transition-all
                  before:duration-500
                  before:bg-gradient-to-r
                  before:from-gray-600
                  before:via-slate-400
                  before:to-zinc-500
                  hover:before:w-[50px]
                  hover:before:opacity-100"
                  type="button"
                >
                  <a href="FRAMES.html">FRAMES</a>
                </button>
                {/* <!--Dropdown menu --> */}
                <div
                  id="dropdownHoverframes"
                  className="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-black"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownHoverButton"
                  >
                    <li>
                      <a
                        href="FRAMES.html"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        S-Works Epic Frameset
                      </a>
                    </li>
                    <li>
                      <a
                        href="FRAMES.html"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Stumpjumper EVO Alloy 29 - Frameset
                      </a>
                    </li>
                    <li>
                      <a
                        href="FRAMES.html"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        S-Works Epic Frameset – Troy Lee Designs LTD
                      </a>
                    </li>
                    <li>
                      <a
                        href="FRAMES.html"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        S-Works Stumpjumper EVO Frame
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div>
                <button
                  id="dropdownHoverButton"
                  data-dropdown-toggle="dropdownHovertires"
                  data-dropdown-trigger="hover"
                  className="capitalize
                  inline-block
                  text-md
                  text-black
                  font-bold
                  relative
                  cursor-pointer
                  transition-all
                  duration-500
                  before:content-['']
                  before:absolute
                  before:-bottom-2
                  before:left-1/2
                  before:-translate-x-1/2
                  before:w-0
                  before:h-1.5
                  before:rounded-full
                  before:opacity-0
                  before:transition-all
                  before:duration-500
                  before:bg-gradient-to-r
                  before:from-gray-600
                  before:via-slate-400
                  before:to-zinc-500
                  hover:before:w-[50px]
                  hover:before:opacity-100"
                  type="button"
                >
                  <a href="TIRES.html">TIRES</a>
                </button>
                {/* <!--Dropdown menu --> */}
                <div
                  id="dropdownHovertires"
                  className="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-black"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownHoverButton"
                  >
                    <li>
                      <a
                        href="TIRES.html"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Maxxis Minion DHF 3C/EXO
                      </a>
                    </li>
                    <li>
                      <a
                        href="TIRES.html"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Vittoria Mazza
                      </a>
                    </li>
                    <li>
                      <a
                        href="TIRES.html"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Continental Kryptotal Rear 2.4
                      </a>
                    </li>
                    <li>
                      <a
                        href="TIRES.html"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Specialized Butcher GRID Trail T9
                      </a>
                    </li>
                    <li>
                      <a
                        href="TIRES.html"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Continental Kryptotal Front 2.4
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div>
                <button
                  id="dropdownHoverButton"
                  data-dropdown-toggle="dropdownHoveraccessories"
                  data-dropdown-trigger="hover"
                  className="capitalize
                  inline-block
                  text-md
                  text-black
                  font-bold
                  relative
                  cursor-pointer
                  transition-all
                  duration-500
                  before:content-['']
                  before:absolute
                  before:-bottom-2
                  before:left-1/2
                  before:-translate-x-1/2
                  before:w-0
                  before:h-1.5
                  before:rounded-full
                  before:opacity-0
                  before:transition-all
                  before:duration-500
                  before:bg-gradient-to-r
                  before:from-gray-600
                  before:via-slate-400
                  before:to-zinc-500
                  hover:before:w-[120px]
                  hover:before:opacity-100"
                  type="button"
                >
                  <a href="ACCESSORIES.html">ACCESSORIES</a>
                </button>
                {/* <!--Dropdown menu--> */}
                <div
                  id="dropdownHoveraccessories"
                  className="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-black"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownHoverButton"
                  >
                    <li>
                      <a
                        href="ACCESSORIES.html"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Bicycle Forkt
                      </a>
                    </li>
                    <li>
                      <a
                        href="ACCESSORIES.html"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Helmet
                      </a>
                    </li>
                    <li>
                      <a
                        href="ACCESSORIES.html"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Bike Gears
                      </a>
                    </li>
                    <li>
                      <a
                        href="ACCESSORIES.html"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Fenders
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div>
                <button
                  id="dropdownHoverButton"
                  data-dropdown-toggle="dropdownHoverSUPPORT"
                  data-dropdown-trigger="hover"
                  className="capitalize
                  inline-block
                  text-md
                  text-black
                  font-bold
                  relative
                  cursor-pointer
                  transition-all
                  duration-500
                  before:content-['']
                  before:absolute
                  before:-bottom-2
                  before:left-1/2
                  before:-translate-x-1/2
                  before:w-0
                  before:h-1.5
                  before:rounded-full
                  before:opacity-0
                  before:transition-all
                  before:duration-500
                  before:bg-gradient-to-r
                  before:from-gray-600
                  before:via-slate-400
                  before:to-zinc-500
                  hover:before:w-[90px]
                  hover:before:opacity-100"
                  type="button"
                >
                  <a href="#footer">SUPPORT</a>
                </button>
                {/* <!---- Dropdown menu ---> */}
                <div
                  id="dropdownHoverSUPPORT"
                  className="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-black"
                >
                  <ul
                    className="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownHoverButton"
                  >
                    <li>
                      <a
                        href="#footer"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Free Maintenance Check
                      </a>
                    </li>
                    <li>
                      <a
                        href="#footer"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Shipping Info
                      </a>
                    </li>
                    <li>
                      <a
                        href="#footer"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Become our DEALER
                      </a>
                    </li>
                    <li>
                      <a
                        href="#footer"
                        className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                      >
                        Customer Support
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div>
                <button
                  id="addtocartButton"
                  className="inline-block
                  relative
                  cursor-pointer
                  transition-all
                  duration-500
                  before:content-['']
                  before:absolute
                  before:-bottom-2
                  before:left-1/2
                  before:-translate-x-1/2
                  before:w-0
                  before:h-1.5
                  before:rounded-full
                  before:opacity-0
                  before:transition-all
                  before:duration-500
                  before:bg-gradient-to-r
                  before:from-gray-600
                  before:via-slate-400
                  before:to-zinc-500
                  hover:before:w-[20px]
                  hover:before:opacity-100"
                  type="button"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="34"
                    viewBox="0 -960 960 960"
                    width="34"
                  >
                    <path d="M280-80q-33 0-56.5-23.5T200-160q0-33 23.5-56.5T280-240q33 0 56.5 23.5T360-160q0 33-23.5 56.5T280-80Zm400 0q-33 0-56.5-23.5T600-160q0-33 23.5-56.5T680-240q33 0 56.5 23.5T760-160q0 33-23.5 56.5T680-80ZM246-720l96 200h280l110-200H246Zm-38-80h590q23 0 35 20.5t1 41.5L692-482q-11 20-29.5 31T622-440H324l-44 80h480v80H280q-45 0-68-39.5t-2-78.5l54-98-144-304H40v-80h130l38 80Zm134 280h280-280Z" />
                  </svg>
                </button>
              </div>
            </li>
          </ul>
        </div>
        <div>
          <Modal />
        </div>
      </nav>
    </header>
  );
}

export default Header