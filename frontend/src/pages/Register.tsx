import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NavigationTab } from "@/components/NavigationTab";

import { Link } from "react-router-dom";
import { useState } from "react";

import Logo from "@/static/assets/logo.svg";

export const Register = () => {
  const [activeTab, setActiveTab] = useState("Doador");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Doador":
        return (
          <form className="flex gap-5 flex-col w-full">
            <Input
              label="Nome Completo"
              placeholder="Anakin Skywalker"
              fullWidth={true}
            />
            <Input
              label="E-mail"
              placeholder="mail@mail.com"
              fullWidth={true}
            />
            <Input
              label="Telefone"
              placeholder="(DDD) 91111-1111"
              fullWidth={true}
            />
            <div className="flex gap-2 w-full">
              <Input
                label="Cidade"
                placeholder="mail@mail.com"
                fullWidth={true}
              />
              <Input
                label="Estado"
                placeholder="mail@mail.com"
                fullWidth={true}
              />
            </div>
            <Input
              label="Senha"
              placeholder="********"
              fullWidth={true}
              type="password"
            />
            <Input
              label="Confirmar senha"
              placeholder="********"
              fullWidth={true}
              type="password"
            />
            <Button size="lg">Entrar</Button>

            <p className="flex gap-1 text-gray-600 text-[.9rem]">
              Já tem uma conta?
              <Link to={"/register"}>
                <span className="font-bold underline text-black">
                  Entrar
                </span>
              </Link>
            </p>
          </form>
        );
      case "ONG":
        return (
          <div className="flex flex-col items-center gap-5">
            <p className="text-center text-[1.1rem]">
              O cadastro de ONGs requer informações adicionais e verificação de
              documentos.
            </p>

            <Button>
              <span>Iniciar Cadastro de ONG</span>
            </Button>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      <Header />
      <div className="justify-center flex items-center flex-1 flex-col gap-3 my-15">
        <div className="flex flex-col items-center gap-3 w-[580px]">
          <figure className="w-14 ">
            <img src={Logo} alt="" />
          </figure>
          <h1 className="text-center font-semibold text-3xl">Crie sua conta</h1>
          <p className="text-gray-600 text-[.9rem]">
            Junte-se à nossa comunidade e comece a fazer a diferença
          </p>

          <div className="w-full mt-5">
            <NavigationTab
              content={["Doador", "ONG"]}
              handleTabClick={handleTabClick}
              activeTab={activeTab}
            />
          </div>
        </div>
        <div className="rounded-lg p-8 flex flex-col items-center justify-center border-3 border-beige-100 w-[580px]  gap-6 shadow-lg">
          <div className="flex flex-col w-full items-start">
            <h1 className="text-center font-semibold text-3xl">
              Cadastro de Doador
            </h1>
            <p className="text-gray-600 text-[.8rem]">
              Crie sua conta para começar a doar e ajudar ONGs
            </p>
          </div>

          {renderTabContent()}

        </div>
      </div>
      <Footer />
    </>
  );
};
