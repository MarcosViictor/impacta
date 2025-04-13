import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

import Logo from "@/static/assets/logo.svg";

import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <>
      <Header />
      <div className="justify-center flex items-center flex-1 flex-col gap-5 my-15">
        <div className="flex flex-col items-center gap-3 w-[580px]">
          <figure className="w-14 ">
            <img src={Logo} alt="" />
          </figure>
          <h1 className="text-center font-semibold text-3xl">Entrar</h1>
          <p className="text-gray-600 text-[.9rem]">
            Acesse sua conta para continuar
          </p>
        </div>
        <div className="rounded-lg p-8 flex flex-col items-center justify-center border-3 border-beige-100 w-[580px]  gap-6 shadow-lg">
          <div className="flex flex-col w-full items-start">
            <h1 className="text-center font-semibold text-3xl">Login</h1>
            <p className="text-gray-600 text-[.9rem]">
              Entre com seu e-mail e senha
            </p>
          </div>

          <form className="flex gap-5 flex-col w-full">
            <Input
              label="E-mail"
              placeholder="mail@mail.com"
              fullWidth={true}
            />
            <Input
              label="Senha"
              placeholder="********"
              fullWidth={true}
              type="password"
            />
            <Button 
            as={Link}
            to={'/search'}
            size="lg">Entrar</Button>

            <p className="flex gap-1 text-gray-600 text-[.9rem]">
              Não tem uma conta?
              <Link to={"/register"}>
                <span className="font-bold underline text-black">
                  Criar conta
                </span>
              </Link>
            </p>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
