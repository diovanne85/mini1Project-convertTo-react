import React from 'react'

function Dropdown() {
  return (
    <div
      id="dropdownHover1"
      className="z-50 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-black"
    >
      <ul
        className="py-2 text-sm text-black dark:text-gray-200"
        aria-labelledby="dropdownHoverButton"
      >
        <li>
          <a
            href="BIKES.html"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Mountain Bike
          </a>
        </li>
        <li>
          <a
            href="BIKES.html"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            FatBike
          </a>
        </li>
        <li>
          <a
            href="BIKES.html"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            E-Scooter
          </a>
        </li>
        <li>
          <a
            href="BIKES.html"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Vintage bike
          </a>
        </li>
        <li>
          <a
            href="BIKES.html"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Japanese City Bike
          </a>
        </li>
        <li>
          <a
            href="/"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            E-Cart
          </a>
        </li>
        <li>
          <a
            href="/"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            E-MTB
          </a>
        </li>
        <li>
          <a
            href="/"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Folding bike
          </a>
        </li>
        <li>
          <a
            href="/"
            className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
          >
            Road Bike
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown