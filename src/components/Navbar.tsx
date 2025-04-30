import React from "react";

function Navbar() {
  return (
    <div className="flex flex-col md:flex-row justify-between p-4 bg-purple-400 w-full">
      <h1 className="text-white font-bold text-3xl w-full">Coldwell Banker</h1>
      <ul className="flex flex-col md:flex-row md:ml-auto items-center space-y-2 md:space-y-0 md:space-x-8 w-full md:w-auto">
        <li className="">
          <a
            href="/home"
            className="block w-full bg-white md:bg-transparent text-black no-underline font-bold px-4 py-2 rounded-lg md:rounded-none hover:bg-gray-100 md:hover:bg-transparent transition text-center"
          >
            Home
          </a>
        </li>
        <li className="">
          <a
            href="/catalogue"
            className="block w-full bg-white md:bg-transparent text-black no-underline font-bold px-4 py-2 rounded-lg md:rounded-none hover:bg-gray-100 md:hover:bg-transparent transition text-center"
          >
            Catalogue
          </a>
        </li>
        <li className="">
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
