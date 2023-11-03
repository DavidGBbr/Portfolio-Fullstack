import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";

const SocialLinks = () => {
  const links: SocialLinkType[] = [
    {
      id: 1,
      child: (
        <>
          Linkedin <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/david-brigido/",
      style: "rounded-tr-md",
      target: true,
    },
    {
      id: 2,
      child: (
        <>
          GitHub <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/DavidGBbr",
      target: true,
    },
    {
      id: 3,
      child: (
        <>
          Currículo <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "https://drive.google.com/uc?export=download&id=1KNxhQ-K7B_i3C_oml2JVq5IbLWZU2F1g",
      style: "rounded-br-md",
      download: true,
      type: "application/pdf",
      target: false,
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download, type, target }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}
          >
            <a
              href={href}
              download={download}
              target={target ? "_blank" : "_self"}
              className="flex justify-between items-center w-full text-white"
              type={type}
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
