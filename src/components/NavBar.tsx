import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {
  const [menu, setMenu] = useState(false);

  const links = [
    { id: 1, section: "sobre" },
    { id: 2, section: "skills" },
    { id: 3, section: "projetos" },
    { id: 4, section: "contato" },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 fixed">
      <div>
        <h1 className="text-3xl text-green-400 font-bold italic ml-2">
          David Brigido
        </h1>
      </div>

      <ul className="hidden md:flex">
        {links.map(({ id, section }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 hover:text-green-400 duration-200"
          >
            {section}
          </li>
        ))}
      </ul>

      <div
        onClick={() => setMenu(!menu)}
        className="cursor-pointer mr-4 z-10 text-gray-300 md:hidden"
      >
        {menu ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {menu && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-[#171717] to-zinc-800 text-gray-500">
          {links.map(({ id, section }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl text-gray-300 hover:text-green-400 duration-200"
            >
              {section}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
