import { Header } from "@/components/Header";

 export function TelaCadastro() {
  return (
    <>
      <Header />
      <section className="flex justify-center items-center w-full h-screen bg-white overflow-hidden">
        <div className="w-[676px] h-[731px] border border-[#7f7f7f] rounded-[20px] flex flex-col items-center mt-[63px]">
          <form action="#" method="post" className="flex flex-col items-center w-[450px] mt-[65px]">
            <h1 className="text-5xl text-center">Cadastrar</h1>

            <div className="flex justify-between items-center gap-2 w-[450px] h-[52px] border border-[#7f7f7f] rounded-[15px] mt-[65px]">
              <input
                type="text"
                id="doador"
                name="Doador"
                required
                placeholder="Doador"
                className="w-[215px] h-[44px] pl-4 text-center bg-[#E3DEC1] text-black text-xs rounded-[11px] border-none"
              />
              <input
                type="text"
                id="onge"
                name="ONG"
                required
                placeholder="ONG"
                className="w-[215px] h-[44px] pl-4 text-center bg-[#7E4746] text-black text-xs rounded-[11px] border-none"
              />
            </div>

            <div className="w-full mt-[20px]">
              <input
                type="text"
                id="nome"
                name="nome"
                required
                placeholder="nome"
                className="w-full h-[52px] p-5 bg-white border border-[#7f7f7f] rounded-[15px] text-xs font-light mt-[20px]"
              />
            </div>

            <div className="w-full mt-[20px]">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="email"
                className="w-full h-[52px] p-5 bg-white border border-[#7f7f7f] rounded-[15px] text-xs font-light mt-[20px]"
              />
            </div>

            <div className="w-full mt-[20px]">
              <input
                type="tel"
                id="telefone"
                name="telefone"
                required
                placeholder="telefone"
                className="w-full h-[52px] p-5 bg-white border border-[#7f7f7f] rounded-[15px] text-xs font-light mt-[20px]"
              />
            </div>

            <div className="flex justify-between items-center gap-2 w-full mt-[15px]">
              <input
                type="text"
                id="cidade"
                name="cidade"
                required
                placeholder="cidade"
                className="w-[220px] h-[52px] p-5 bg-white border border-[#7f7f7f] rounded-[15px] text-xs font-light"
              />
              <input
                type="text"
                id="estado"
                name="estado"
                required
                placeholder="estado"
                className="w-[220px] h-[52px] p-5 bg-white border border-[#7f7f7f] rounded-[15px] text-xs font-light"
              />
            </div>

            <div className="w-full mt-[20px]">
              <input
                type="password"
                id="senha"
                name="senha"
                required
                placeholder="senha"
                className="w-full h-[52px] p-5 bg-white border border-[#7f7f7f] rounded-[15px] text-xs font-light"
              />
            </div>

            <button type="submit" className="w-full h-[52px] p-5 bg-[#456983] rounded-[15px] text-white text-xs font-light mt-[15px] border border-[#7f7f7f]">
              Criar
            </button>

            <div className="mt-4 text-center text-xs text-gray-500">Alguma dúvida?</div>
          </form>
        </div>
      </section>
    </>
  );
}


