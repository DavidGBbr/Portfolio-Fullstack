import React from "react";

const Contact = () => {
  return (
    <section id="contato" className="min-h-screen w-full">
      <div className="max-w-screen-lg p-4 py-8 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h3 className="text-3xl sm:text-4xl font-bold inline border-b-4 border-green-400">
            Entre em contato
          </h3>
        </div>

        <div className="flex justify-center items-center mt-20">
          <form
            action="https://getform.io/f/4e113f32-6531-48b0-aa23-90c798a629d3"
            method="POST"
            className="flex flex-col w-full md:grid md:grid-cols-2 md:gap-4"
          >
            <input
              type="text"
              name="name"
              placeholder="Digite seu nome"
              className="p-2 bg-transparent border-2 border-green-400 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Digite seu e-mail"
              className="my-4 md:my-0 p-2 bg-transparent border-2 border-green-400 rounded-md text-white focus:outline-none"
            />
            <textarea
              name="mensagem"
              placeholder="Escreva sua mensagem"
              rows={10}
              className="p-2 bg-transparent border-2 border-green-400 rounded-md text-white focus:outline-none md:col-span-2"
            ></textarea>

            <div className="md:col-span-2 sm:mx-auto">
              <button className="md:flex md:flex-1 md:justify-center px-12 py-6 mt-8 min-w-full sm:w-96 uppercase font-bold border-[3px] border-green-400 rounded-2xl duration-500 hover:bg-green-400 hover:scale-110">
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
