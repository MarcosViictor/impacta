import { Header } from '@/components/Header';
import React from 'react';

export const CadastroOng: React.FC = () => {
  return (
    <>
      <Header />

      <section className="flex justify-center items-center w-full h-screen border border-[#7f7f7f]">
        <div className="w-[676px] h-[632px] border border-[#7f7f7f] rounded-lg flex flex-col items-center">
          <h1 className="font-sans text-5xl text-[#612928] mt-8">Cadastrar</h1>

          <form action="#" method="post" className="flex flex-col items-center w-[460px] mt-10 space-y-6">
            <div className="flex justify-between items-center gap-5 w-full h-[55px] border border-[#7f7f7f] rounded-lg mb-3">
              <input
                type="text"
                id="doador"
                name="Doador"
                required
                placeholder="Doador"
                className="w-[215px] h-[44px] pl-4 text-center text-base font-sans rounded-lg bg-white text-black"
              />
              <input
                type="text"
                id="onge"
                name="ONG"
                required
                placeholder="ONG"
                className="w-[215px] h-[44px] pl-4 text-center text-base font-sans rounded-lg bg-[#e3dec1] text-black"
              />
            </div>

            <div className="flex flex-col items-center justify-center w-[455px] h-[265.6px] text-base border border-[#7f7f7f] rounded-lg">
              <div className="flex flex-col items-center justify-center text-center space-y-5 w-[362px] h-[120.91px] font-sans">
                <h2 className="text-2xl font-semibold">Cadastro ONG</h2>
                <p className="text-xl leading-relaxed">
                  Para cadastrar sua ONG, siga o processo completo.
                </p>
                <p className="text-xl leading-relaxed">
                  O cadastro de ONGs requer informações adicionais e verificação de documentos.
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
