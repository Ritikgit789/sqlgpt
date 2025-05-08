import React, { useState } from 'react';
import {About} from './'
import {ThemeBtn} from './'
function Navbar() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const openModal = () => {
    setIsModalVisible(true);
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };
  return (

<nav class="bg-white dark:bg-gray-800 transition-colors duration-300 shadow-sm">

  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

    <a href="" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://www.svgrepo.com/show/499816/database.svg" class="h-14" alt="Logo" />
        <span class="self-center text-2xl font-satoshi font-semibold whitespace-nowrap text-white-500 dark:text-white">SqlGPT</span>
    </a>
    <button data-collapse-toggle="navbar-default" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>

    <div class="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border  rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700">
        <li>
          <a href="#" class="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500" aria-current="page">Home</a>
        </li>
        <li>
          <About />
        </li>
        <li>
          <ThemeBtn />
        </li>
        
      </ul>
    </div>
  </div>
</nav>

  )
}

export default Navbar