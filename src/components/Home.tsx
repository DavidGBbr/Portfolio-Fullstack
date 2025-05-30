import React from "react";
import Image from "next/image";
import ProfileImage from "@/assets/profileImage.png";
import { AiOutlineDownload } from "react-icons/ai";

const Home = () => {
  return (
    <section
      id="home"
      className="h-screen w-full bg-gradient-to-b from-[#171717] to-[#0a0a0a]"
    >
      <div className="max-w-screen-lg mx-auto pt-0 h-full px-4 flex flex-col md:flex-row items-center justify-center gap-10">
        <div className="flex flex-col items-center justify-center text-center md:text-left md:items-start p-2">
          <h2 className="text-4xl lg:text-6xl font-bold">
            <span className="text-green-400">Olá!</span> Me chamo David. Seu
            desenvolvedor Full Stack.
          </h2>
          <p className="text-gray-300 py-4 max-w-md">
            Com mais de {new Date().getFullYear() - 2021} anos de experiência em
            tecnologias de ponta. Possuo foco em criar sites responsivos,
            dinâmicos e seguros, sempre priorizando a qualidade e as melhores
            práticas do mercado.
          </p>
          <div>
            <a
              href="https://drive.google.com/file/d/1YEmk_OD7OGDfagDsCBcv3f8b-PV2x3J0/view?usp=drive_link"
              type="application/pdf"
              className="text-2xl font-bold mt-5 border-[3px] border-green-700 w-80 py-5 px-10 rounded-2xl flex items-center justify-center gap-3 duration-500 hover:bg-green-400 hover:scale-105"
            >
              <span>Meu currículo</span> <AiOutlineDownload size={30} />
            </a>
          </div>
        </div>
        <div className="hidden md:block">
          <Image
            src={ProfileImage}
            alt="David Brigido image"
            placeholder="blur"
            unoptimized
            className="rounded-full max-w-[260px] md:max-w-[350px]"
          />
        </div>
      </div>
    </section>
  );
};

export default Home;
