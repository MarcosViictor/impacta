import {Header} from '@/components/Header'

export const ProfileEdit: React.FC = () => {
  return (

    <>
    <Header />
        <div className="flex items-center justify-center w-full h-[1117px] border border-blue">
      <div className="flex">
        <div className="flex justify-between w-[156px] h-[30px] mr-[234px]">
          <img src="img/ft.png" alt="" />
          <p>Minha Conta</p>
        </div>

        <div className="w-[950px] h-[715px] border border-[#456983] rounded-[15px] flex">
          <form action="#" method="post" className="w-full">
            <div className="flex items-start text-[40px] ml-[55px] mt-[75px]">
              <h3>Meu Perfil</h3>
            </div>

            <div className="flex">
              <div className="ml-[79px] mt-[79px]">
                <div className="flex items-start mb-8">
                  <label className="text-lg">Nome de usuário</label>
                  <input
                    type="text"
                    name="nome"
                    required
                    placeholder="Nome_usuario"
                    className="ml-2 border border-gray-300 px-2 py-1"
                  />
                  <button type="submit" className="ml-2 border px-4 py-1 bg-gray-200">
                    Editar
                  </button>
                </div>

                <div className="flex items-center mb-8">
                  <label className="text-lg">Nome da ONG</label>
                  <input
                    type="text"
                    name="Nome da ONG"
                    required
                    placeholder="Nome da ONG"
                    className="ml-5 border border-[#E3DEC1] w-[323px] h-[52px] px-2"
                  />
                </div>

                <div className="w-[458px] h-[254px] border border-[#E3DEC1] text-[40px]">
                  CNPJ
                </div>
              </div>

              <div className="flex flex-col justify-between items-center w-[228px] h-[308px] ml-[125px]">
                <img src="./img/foto.png" width={164} height={232} alt="" />
                <h3 className="flex items-center justify-center w-[228px] h-[60px] border border-[#E3DEC1] text-[24px]">
                  Escolha a imagem
                </h3>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
    
  );
};

