import { ProjectType } from "@/types/Project";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import React from "react";
import FinanceImage from "@/assets/projects/finance-controller.png";
import FintechImage from "@/assets/projects/fintech.png";
import CoffeeShopImage from "@/assets/projects/coffee-shops.png";
import DogsImage from "@/assets/projects/dogs.png";
import CellShopImage from "@/assets/projects/cell-shop.png";

const Projects = () => {
  const projects: ProjectType[] = [
    {
      id: 1,
      name: "Finance Controller",
      description:
        "Sistema de controle financeiro, com funções de adição de receita e despesa juntamente com balanço calculado em tempo real.",
      techs: ["React", "Context API", "Styled Components", "React Icons"],
      repo: "https://github.com/DavidGBbr/Sistema-de-gestao-financeira",
      site: "https://finance-controller.vercel.app/",
      image: FinanceImage,
    },
    {
      id: 2,
      name: "Fintech",
      description:
        "Dashboard de uma Fintech, que lhe permite acessar o histórico de transações dos últimos 4 meses da empresa.",
      techs: ["React", "Vite", "TypeScript", "Recharts", "React Router Dom"],
      repo: "https://github.com/DavidGBbr/fintech/tree/main",
      site: "https://fintech-lime.vercel.app/",
      image: FintechImage,
    },
    {
      id: 3,
      name: "Coffe Shops Tia Rosa",
      description:
        "Site de uma cafeteria fictícia, contando com layout 100% responsivo.",
      techs: ["NextJS", "TypeScript", "TailwindCSS", "React Icons"],
      repo: "https://github.com/DavidGBbr/coffee-shops-tia-rosa",
      site: "https://coffee-shops-khaki.vercel.app/",
      image: CoffeeShopImage,
    },
    {
      id: 4,
      name: "Dogs",
      description:
        "Rede social para pets, possui as principais funcionalidades de uma rede social sendo também integrada a uma API.",
      techs: [
        "React",
        "React Router Dom",
        "Victory",
        "Styled Components",
        "Redux",
      ],
      repo: "https://github.com/DavidGBbr/Dogs",
      site: "https://dogs-navy.vercel.app/",
      image: DogsImage,
    },
    {
      id: 5,
      name: "Cell Shop",
      description:
        "E-commerce de celulares, que lhe permite a adição de produtos ao carrinho de compras e calcula o valor total da compra juntamente com os produtos escolhidos.",
      techs: [
        "React",
        "React Router Dom",
        "React Icons",
        "Styled Components",
        "Context API",
      ],
      repo: "https://github.com/DavidGBbr/cell-shop",
      site: "https://cell-shop-xi.vercel.app/",
      image: CellShopImage,
    },
  ];

  return (
    <section id="projetos" className="min-h-screen w-full">
      <div className="max-w-screen-lg p-4 py-8 mx-auto flex flex-col justify-center w-full min-h-full">
        <div className="pb-8">
          <h3 className="text-3xl font-bold inline border-b-4 border-green-400">
            Projetos em destaque
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 mt-20">
          {projects.map(
            ({ id, name, description, techs, repo, site, image }) => (
              <div
                key={id}
                className="bg-[#171717] rounded-lg shadow-md shadow-green-700 p-4 hover:scale-95 duration-500 flex flex-col justify-between items-center"
              >
                <Image src={image} alt={name} className="rounded-md" />
                <div className="p-2 flex flex-1 flex-col justify-between items-center gap-4 mt-5">
                  <h2 className="text-3xl font-semibold">{name}</h2>
                  <p className="text-center text-gray-300 text-lg">
                    {description}
                  </p>
                  <div className="flex flex-col gap-4">
                    <h3 className="text-2xl font-semibold text-center">
                      Tecnologias usadas:
                    </h3>
                    <ul className="flex flex-wrap justify-center gap-3">
                      {techs.map((tech, id) => (
                        <li
                          key={id}
                          className="bg-[#090909] px-2 py-1 rounded-md"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-2 gap-2 justify-center items-center mt-5">
                    <a
                      href={repo}
                      target="_blank"
                      className="text-lg font-bold border-[3px] border-green-700 w-full p-5 rounded-2xl flex items-center justify-center gap-3 duration-500 hover:bg-green-400 hover:scale-95"
                    >
                      <span>Repositório</span> <FaGithub size={30} />
                    </a>
                    <a
                      href={site}
                      target="_blank"
                      className="text-lg font-bold border-[3px] border-green-700 w-full p-5 rounded-2xl flex items-center justify-center gap-3 duration-500 hover:bg-green-400 hover:scale-95"
                    >
                      Site
                    </a>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
