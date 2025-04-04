export const Footer = () => {
  return (
    <footer className="bg-white text-black py-10 px-10 flex justify-around w-full">
      <div className="container mx-auto px-4 flex flex-col">
        <h3 className="font-bold text-2xl">
          Innova
        </h3>
        <p className="text-[.9rem] text-gray-600">
          &copy; {new Date().getFullYear()} Innova. Todos os direitos reservados.
        </p>
      </div>

      <div className="flex gap-20 justify-center w-full">
          <div className="container mx-auto px-4 flex flex-col ">
            <ul className="flex flex-col gap-2 text-[.9rem]">
                <li>
                    <a href="#">
                        Plataforma
                    </a>
                </li>
                <li>
                    <a href="#">
                        Buscar ONGs
                    </a>
                </li>
                <li>
                    <a href="#">
                        Como Doar
                    </a>
                </li>
                <li>
                    <a href="#">
                        Cadastrar ONG
                    </a>
                </li>
          
            </ul>
          </div>
          <div className="container mx-auto px-4 flex flex-col">
            <ul className="flex flex-col gap-2 text-[.9rem]">
                <li>
                    <a href="#">
                        Suporte
                    </a>
                </li>
                <li>
                    <a href="#">
                        FAQ
                    </a>
                </li>
                <li>
                    <a href="#">
                        Contato
                    </a>
                </li>
                <li>
                    <a href="#">
                        Central de Ajuda
                    </a>
                </li>
            </ul>
          </div>
          <div className="container mx-auto px-4 flex flex-col">
            <ul className="flex flex-col gap-2 text-[.9rem]">
                <li>
                    <a href="#">
                        Legal
                    </a>
                </li>
                <li>
                    <a href="#">
                        Política de Privacidade
                    </a>
                </li>
                <li>
                    <a href="#">
                        Termos de Uso
                    </a>
                </li>
            </ul>
          </div>
      </div>
    </footer>
  );
};

