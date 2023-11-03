import React from "react";

const About = () => {
  return (
    <section id="sobre" className="min-h-screen w-full">
      <div className="max-w-screen-lg p-4 py-8 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h3 className="text-3xl sm:text-4xl font-bold inline border-b-4 border-green-400">
            Sobre mim
          </h3>
        </div>

        <p className="text-xl text-gray-300 mt-20">
          Como Desenvolvedor Full Stack, possuo mais de 2 anos de experiência em
          tecnologias de ponta. Ao trabalhar em diversos projetos, aprimorei
          minhas habilidades na construção e manutenção de softwares escaláveis
          e de alto desempenho. Sou ágil, sempre estou em busca de novos
          conhecimentos e consistentemente aprimoro minhas habilidades.
        </p>
        <br />
        <p className="text-xl text-gray-300">
          Tenho grande capacidade de adaptação para lidar com mudanças e superar
          desafios, mesmo sob pressão. Em resumo, sou bastante otimista,
          prestativo e esforçado. Atualmente estou aberto para contribuir em
          projetos desafiadores, colaborar em equipe e apoiar colegas sempre que
          necessário. Se você busca um desenvolvedor Full Stack dedicado, com
          habilidades técnicas e uma mentalidade colaborativa, estou à
          disposição para conversarmos!
        </p>
      </div>
    </section>
  );
};

export default About;
