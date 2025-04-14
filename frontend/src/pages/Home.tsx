import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/Button";

import { SearchIcon, Heart, Users } from "lucide-react";

import { Link } from "react-router-dom";



export const Home = () => {
  return (
    <>
      <Header />

      <section className="flex flex-col items-center justify-center text-center h-screen bg-gradient-to-b from-neutral-300 to-white gap-3">
        <h1 className="text-[4rem] font-extrabold tracking-tighter">
          Conectando <span className="text-black">Doadores e ONGs</span>
        </h1>

        <p className="text-lg w-[600px] text-gray-500 ">
          Uma plataforma simples e eficiente para facilitar doações e
          impulsionar causas sociais.
        </p>

        <div className="flex gap-4 mt-4">
          <Button className="bg-black text-white hover:bg-gray-800">
            Quero Doar
          </Button>
          <Button variant="light">Cadastrar ONG →</Button>
        </div>
      </section>

      <section className="py-16 px-4 text-center bg-white h-screen">
        <h2 className="text-[2.8rem] font-extrabold  tracking-tighter">Como Funciona</h2>
        <p className="text-lg text-gray-500 max-w-xl mx-auto mb-8">
          Nossa plataforma conecta doadores e ONGs de forma simples e
          transparente.
        </p>

        <div className="flex justify-center">
            <div className="flex w-[1000px]  justify-center items-stretch gap-8">
              <div className="border-2 border-gray-200 flex flex-col gap-2 items-start rounded-xl p-6 shadow-lg max-w-sm mx-auto w-[400px]">
                <SearchIcon size={40}/>
                <h3 className="text-[1.6rem] font-semibold">Encontre ONGs</h3>
                <p className="text-gray-500 text-start">
                  Busque por localização, causa ou necessidades específicas.
                </p>
                <p className="text-start my-3">
                  Nosso sistema de busca avançado permite encontrar ONGs que mais se
                  alinham com suas preferências.
                </p>
                <div className="mt-auto">
                    <Button
                        variant="light"
                        size="sm"
                        as={Link}
                        to="/search"
                    >
                        Buscar ONGS
                    </Button>
                </div>
              </div>


              <div className="border-2 border-gray-200 flex flex-col gap-2 items-start rounded-xl p-6 shadow-lg max-w-sm mx-auto w-[400px]">
                <Users size={40}/>
                <h3 className="text-[1.6rem] font-semibold text-start">Acompanhe Impactos</h3>
                <p className="text-gray-500 text-start">
                    Veja para onde sua ajuda foi e como ela está fazendo a diferença.
                </p>
                <p className="text-start my-3">
                    Divulgue campanhas, conte sua experiência e fortaleça uma rede de apoio cada vez maior.
                </p>
              </div>

              <div className="border-2 border-gray-200 flex flex-col gap-2 items-start rounded-xl p-6 shadow-lg max-w-sm mx-auto w-[400px]">
                <Heart size={40}/>
                <h3 className="text-[1.6rem] font-semibold">Faça Doações</h3>
                <p className="text-gray-500 text-start">
                    Contribua com itens, recursos ou tempo para causas importantes.
                </p>
                <p className="text-start my-3">
                    Doe de maneira rápida e segura para ONGs de sua escolha. Sua contribuição faz a diferença, seja com alimentos, financeiro ou voluntariado
                </p>
                <Button
                    variant="light"
                    size="sm"
                    as={Link}
                    to="/search"
                >
                    Doar agora
                </Button>
              </div>
            </div>
        </div>
      </section>

        <div className="flex flex-col text-center items-center justify-center gap-2 p-20">
          <h1 className="text-3xl text-[#284961] font-black">
            Segurança e transparência
          </h1>
          <p className="text-[#9B9B9B] font-extrabold">
            Todas as ONGs são verificadas e validadas para garantir a
            confiabilidade das doações.
          </p>
        </div>

        <div className="flex flex-col text-center items-center justify-center gap-2 p-20">
          <h1 className="text-3xl text-[#284961] font-black">
            Começe a fazer a diferença!
          </h1>
          <p className="text-[#9B9B9B] font-extrabold">
          Junte-se a milhares de doadores e ONGs que já estão transformando vidas através da nossa plataforma.
          </p>
          <div className="flex gap-5 mt-5">
            <button className="bg-[#456983] rounded-md w-[130px] h-[50px] text-white font-extrabold hover:bg-[#365265] transition-colors">
              Quero doar
            </button>
            <button className="bg-[#456983] rounded-md w-[130px] h-[50px] text-white font-extrabold hover:bg-[#365265] transition-colors">
              Cadastrar ONG
            </button>
          </div>
        </div>

      <Footer />
    </>
  );
};
