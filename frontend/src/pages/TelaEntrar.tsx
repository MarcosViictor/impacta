import { Header } from "@/components/Header";
import React from "react";

export const TelaEntra: React.FC = () => {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center justify-center w-screen h-screen bg-gray-100">
        <div className="w-[676px] h-[498px] border border-gray-400 rounded-[15px] flex justify-center bg-white shadow-md p-8">
          <form action="#" method="post" className="flex flex-col items-center justify-center w-full">
            <h1 className="text-4xl font-sans mb-11">Entrar</h1>

            <div className="w-full mb-5">
              <input
                type="text"
                name="nome"
                required
                placeholder="Nome"
                className="w-full h-[52px] px-4 border border-gray-300 rounded-[15px] text-lg"
              />
            </div>

            <div className="w-full mb-5">
              <input
                type="password"
                name="senha"
                required
                placeholder="Senha"
                className="w-full h-[52px] px-4 border border-gray-300 rounded-[15px] text-lg"
              />
            </div>

            <button type="submit" className="w-full h-[56px] bg-[#456983] text-white rounded-[15px] text-xl">
              Criar
            </button>

            <div className="mt-3 w-full text-left text-sm">
              <a href="#" className="text-blue-500 hover:underline">
                Esqueceu sua senha?
              </a>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};


