import React from "react";

function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 bg-purple-400 w-screen">
      <h1 className="text-white font-bold text-xl">Coldwell Banker</h1>
      <ul className="flex space-x-8">
        <li className="text-amber-50">
          <a
            href="/home"
            className="text-white"
            style={{ color: "black", textDecoration: "none" }}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="/catalogue"
            className="text-white no-underline visited:text-white hover:text-gray-300"
          >
            Catalogue
          </a>
        </li>
        <li>
          <a
            href="/contact"
            className="text-white no-underline visited:text-white hover:text-gray-300"
          >
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
