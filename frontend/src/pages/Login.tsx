import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { LoadingScreen } from "@/components/LoadingScreen";

import Logo from "@/static/assets/logo.svg";
import { Login as LoginApi } from "@/api/userApi";
import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { getUserType } from "@/utils/auth";

export const Login = () => {
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setError("")
  };

  const handleLogin = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    if (!formData.email || !formData.password) {
      setError("Preencha todos os campos");
      setIsLoading(false);
      return;
    }

    try {
      const data = await LoginApi(formData);
      if (data && data.access) {
        console.log("Login bem sucedido", data);
      }
      const userType = getUserType()
      
      // Aguarda um pouco para mostrar o loading
      setTimeout(() => {
        setIsLoading(false);
        if(userType === 'ONG') {
          window.location.href = "/dashboard";
        } else if (userType === 'DONOR') {
          window.location.href = "/search";
        }
      }, 2000);

    } catch (error: any) {
      console.error("Erro no login:", error);
      setIsLoading(false);
      if (error.response?.status === 401) {
        setError("Email ou senha incorretos");
      } else {
        setError("Erro ao fazer login. Tente novamente.");
      }
    }
  };

  return (
    <>
      {isLoading && <LoadingScreen message="Fazendo login..." />}
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

          <form className="flex gap-5 flex-col w-full" onSubmit={handleLogin}>
            <Input
              label="E-mail"
              placeholder="mail@mail.com"
              fullWidth={true}
              onChange={(e) => handleChange("email", e.target.value)}
              error={error}
            />
            <Input
              label="Senha"
              placeholder="********"
              fullWidth={true}
              type="password"
              onChange={(e) => handleChange("password", e.target.value)}
              error={error}
            />
            <Button size="lg" type="submit">
              Entrar
            </Button>

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
