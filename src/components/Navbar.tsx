import React, { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
function Navbar() {
  // Creamos un estado que comienza con el valor "false".
  // menuOpen -> estado actual
  // setMenuOpen -> función que cambia el estado.
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col md:flex-row justify-between p-4 bg-purple-400 w-full">
      <div className="flex flex-row">
        <h1 className="text-white font-bold text-3xl w-full">
          Coldwell Banker
        </h1>
        {/* Botón hamburguesa */}
        <button
          className="bg-transparent md:hidden text-white text-3xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>
      {/*<ul className="flex flex-col md:flex-row md:ml-auto items-center space-y-2 md:space-y-0 md:space-x-8 w-full md:w-auto"> */}
      <ul
        className={`flex flex-col space-y-2 md:flex-row ${
          menuOpen ? "block" : "hidden"
        } md:flex`}
      >
        <li className="">
          <a
            href="/home"
            className="block w-full bg-white md:bg-transparent text-purple-600 no-underline font-bold px-4 py-2 rounded-lg md:rounded-none hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-200 transition text-center"
          >
            Home
          </a>
        </li>
        <li className="">
          <a
            href="/catalogue"
            className="block w-full bg-white md:bg-transparent text-purple-600 no-underline font-bold px-4 py-2 rounded-lg md:rounded-none hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-200 transition text-center"
          >
            Catalogue
          </a>
        </li>
        <li className="">
          <a
            href="/contact"
            className="block w-full bg-white md:bg-transparent text-purple-600 no-underline font-bold px-4 py-2 rounded-lg md:rounded-none hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-200 transition text-center"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
