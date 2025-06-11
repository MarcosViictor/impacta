import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { NavigationTab } from "@/components/NavigationTab";
import { LoadingScreen } from "@/components/LoadingScreen";
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import { FormEvent, useState } from "react";

import Logo from "@/static/assets/logo.svg";
import { User } from "@/types/userTypes";
import { createUser } from "@/api/userApi";
import { setCookie } from "@/utils/cookies";

export const Register = () => {
  const [activeTab, setActiveTab] = useState("Doador");
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false);
  const userType = 'DONOR'

   const [formData, setFormData] = useState<User>({
    email: '',
    username: '',
    password: '',
    password2: '',
    user_type: userType,
    address: 'Rua',
    city: 'Trindas',
    state: 'PE',
    postal_code: '123123'
  });
  const navigate = useNavigate();

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

    const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
    setError("")
  };

  const handleRegister = async (e: FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Email inválido');
      setIsLoading(false);
      return;
    }

    // Validação de nome de usuário
    if (formData.username.length < 3) {
      setError('Nome deve ter pelo menos 3 caracteres');
      setIsLoading(false);
      return;
    }

    // Validação de senha
    if (formData.password.length < 8) {
      setError('Senha deve ter pelo menos 8 caracteres');
      setIsLoading(false);
      return;
    }

    // Validação de confirmação de senha
    if (formData.password !== formData.password2) {
      setError('As senhas não coincidem');
      setIsLoading(false);
      return;
    }

    try {
      const response = await createUser(formData);
      console.log('Usuário criado:', response);
      setCookie('user_type', response.user_type)
      
      // Aguarda um pouco para mostrar o loading
      setTimeout(() => {
        setIsLoading(false);
        navigate('/search');
      }, 2000);
    } catch (error: any) {
      console.error('Erro no cadastro:', error);
      setIsLoading(false);
      if (error.response?.data?.email) {
        setError('Este email já está em uso');
      } else if (error.response?.data?.username) {
        setError('Este nome de usuário já está em uso');
      } else if (error.response?.data?.password) {
        setError(error.response.data.password);
      } else {
        setError('Erro ao criar conta. Tente novamente.');
      }
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Doador":
        return (
          <form className="flex gap-5 flex-col w-full" onSubmit={handleRegister}>
            <Input
              label="Nome Completo"
              placeholder="Anakin Skywalker"
              fullWidth={true}
              onChange={(e) => handleChange("username", e.target.value)}
              error={error}
            />
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
            <Input
              label="Confirmar senha"
              placeholder="********"
              fullWidth={true}
              type="password"
              onChange={(e) => handleChange("password2", e.target.value)}
              error={error}
            />
            <Button 
            size="lg"
            type="submit"
            >
              Criar conta
            </Button>

            <p className="flex gap-1 text-gray-600 text-[.9rem]">
              Já tem uma conta?
              <Link to={"/login"}>
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

            <Button
                as={Link}
                to="/register/ong"
            >
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
      {isLoading && <LoadingScreen message="Criando conta..." />}
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
          

          {renderTabContent()}

        </div>
      </div>
      <Footer />
    </>
  );
};
