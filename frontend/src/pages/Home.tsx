import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export const Home = () => {
  return (
    <>
      <Header />

      <div className="flex flex-col justify-center">
        <div className="flex flex-col text-center items-center justify-center gap-2 p-20">
          <h1 className="text-3xl text-[#284961] font-black">
            Conectando doadores e ONGs
          </h1>
          <p className="text-[#9B9B9B] font-extrabold">
            Uma plataforma simples e eficiente para facilitar doações e
            impulsionar causas sociais.
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

        <div className="flex flex-col text-center items-center justify-center gap-2 p-20">
          <h1 className="text-3xl text-[#284961] font-black">Como Funciona</h1>
          <p className="text-[#9B9B9B] font-extrabold">
            Nossa plataforma conecta doadores e ONGs de forma simples e
            transparente.
          </p>

          <div className="flex flex-row justify-center items-center gap-5 mt-5">
            <div className="flex flex-col border-2 border-[#456983] rounded-lg p-5 mt-5 w-[200px] h-[230px] justify-center gap-[10px]">
              <h2 className="text-[#284961] font-extrabold text-2xl">
                Encontre ONGs
              </h2>
              <p className="text-sm text-[#9B9B9B] font-extrabold">
                Nosso sistema de busca avançado permite encontrar ONGs que mais
                se alinham com suas preferências.
              </p>
            </div>
            <div className="flex flex-col border-2 border-[#456983] rounded-lg p-5 mt-5 w-[200px] h-[230px] justify-center gap-[20px]">
              <h2 className="text-[#284961] font-extrabold text-2xl">
                Faça Doações
              </h2>
              <p className="text-sm text-[#9B9B9B] font-extrabold">
                Sistema de carrinho de doações para facilitar o processo de
                contribuição para múltiplas ONGs.
              </p>
            </div>
            <div className="flex flex-col border-2 border-[#456983] rounded-lg p-5 mt-5 w-[200px] h-[230px] justify-center gap-[20px]">
              <h2 className="text-[#284961] font-extrabold text-2xl">
                Conecte-se
              </h2>
              <p className="text-sm text-[#9B9B9B] font-extrabold">
                Chat em tempo real, notificações e sistema de feedback para
                manter a comunicação transparente.
              </p>
            </div>
          </div>
        </div>

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
      </div>

      <Footer />
    </>
  );
};
