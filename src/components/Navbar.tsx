import React from "react";

function Navbar() {
  return (
    <div className="flex flex-col m-x-auto text-center md:flex-row justify-between items-center p-4 bg-purple-400 w-screen">
      <h1 className="text-white font-bold text-3xl">Coldwell Banker</h1>
      <ul className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8 w-full">
        <li className="w-full">
          <a
            href="/home"
            className="block w-full bg-white md:bg-transparent text-black no-underline font-bold px-4 py-2 rounded-lg md:rounded-none hover:bg-gray-100 md:hover:bg-transparent transition text-center"
          >
            Home
          </a>
        </li>
        <li className="w-full">
          <a
            href="/catalogue"
            className="block w-full bg-white md:bg-transparent text-black no-underline font-bold px-4 py-2 rounded-lg md:rounded-none hover:bg-gray-100 md:hover:bg-transparent transition text-center"
          >
            Catalogue
          </a>
        </li>
        <li className="w-full ">
          <a
            href="/contact"
            className="block w-full bg-white md:bg-transparent text-black no-underline font-bold px-4 py-2 rounded-lg md:rounded-none hover:bg-gray-100 md:hover:bg-transparent transition text-center"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
