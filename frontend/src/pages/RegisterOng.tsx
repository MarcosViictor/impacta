import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";
import { LoadingScreen } from "@/components/LoadingScreen";
import { Select } from "@/components/Select";

import Logo from "@/static/assets/logo.svg";

import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";

import { createOng } from "@/api/userApi";
import { OngTypes } from "@/types/userTypes";
import { setCookie } from "@/utils/cookies";
import { formatCEP, removeCEPMask } from "@/utils/masks";
import { getStates, getCitiesByState, City } from "@/data/statesAndCities";

export const RegisterOng = () => {
  const [step, setStep] = useState(1); // Estado para controlar o passo do formulário
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [availableCities, setAvailableCities] = useState<City[]>([]);
  const navigate = useNavigate();

  const [formData, setFormData] = useState<OngTypes>({
    email: '',
    username: '',
    first_name: '',
    last_name:'',
    ong_name:'',
    password: '',
    password2: '',
    ong_description: '',
    address:'', 
    city: '',
    state: '',
    postal_code:'',
    user_type: 'ONG',
  });

  const handleChange = (field: string, value: string) => {
    let formattedValue = value;
    
    // Aplica máscaras específicas
    if (field === 'postal_code') {
      formattedValue = formatCEP(value);
    }
    
    // Se o estado mudou, atualiza as cidades disponíveis
    if (field === 'state') {
      const cities = getCitiesByState(value);
      setAvailableCities(cities);
      // Limpa a cidade selecionada quando o estado muda
      setFormData((prev) => ({
        ...prev,
        state: formattedValue,
        city: '',
      }));
      return;
    }
    
    setFormData((prev) => ({
      ...prev,
      [field]: formattedValue,
    }));
  };

  // Opções para os selects
  const stateOptions = getStates().map(state => ({
    value: state.abbreviation,
    label: `${state.name} (${state.abbreviation})`
  }));

  const cityOptions = availableCities.map(city => ({
    value: city.name,
    label: city.name
  }));

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    setStep(step - 1);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Validações
    if (!formData.email || !formData.username || !formData.password || !formData.password2) {
      setError("Preencha todos os campos obrigatórios");
      setIsLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Email inválido");
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.password2) {
      setError("As senhas não coincidem");
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 8) {
      setError("A senha deve ter pelo menos 8 caracteres");
      setIsLoading(false);
      return;
    }

    try {
      // Remove máscara do CEP antes de enviar
      const dataToSend = {
        ...formData,
        postal_code: removeCEPMask(formData.postal_code || '')
      };
      
      const response = await createOng(dataToSend);
      console.log("ONG cadastrada:", response);
      setCookie('user_type', response.user_type)
      
      // Aguarda um pouco para mostrar o loading
      setTimeout(() => {
        setIsLoading(false);
        navigate("/login");
      }, 2000);
    } catch (error: any) {
      console.error("Erro no cadastro:", error);
      setIsLoading(false);
      if (error.response?.data?.email) {
        setError("Este email já está em uso");
      } else if (error.response?.data?.username) {
        setError("Este nome de usuário já está em uso");
      } else {
        setError("Erro ao cadastrar ONG. Tente novamente.");
      }
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="rounded-lg p-8 flex flex-col items-center justify-center border-3 border-beige-100 w-[580px]  gap-6 shadow-lg">
            <div className="flex flex-col w-full items-start">
              <h1 className="text-center font-semibold text-3xl">
                Informações Básicas
              </h1>
              <p className="text-gray-600 text-[.8rem]">
                Informe o endereço e contatos da sua ONG
              </p>
            </div>

            <div className="flex gap-5 flex-col w-full">
              <Input
                label="Nome da ONG"
                fullWidth={true}
                value={formData.ong_name}
                onChange={(e) => handleChange("ong_name", e.target.value)}
                error={error}
              />
              <Input
                label="E-mail"
                type="email"
                placeholder="ong@mail.com"
                fullWidth={true}
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                error={error}
              />
              <Input
                label="Username"
                type="text"
                placeholder="@ong"
                fullWidth={true}
                value={formData.username}
                onChange={(e) => handleChange("username", e.target.value)}
                error={error}
              />
        
              <Input 
                label="Descrição da ONG" 
                fullWidth={true} 
                placeholder="Descreva sobre o que é a ONG..."
                value={formData.ong_description}
                onChange={(e) => handleChange("ong_description", e.target.value)}
                error={error}  
              />

              {/* <div className="flex flex-col gap-2">
                <p>Imagem de Perfil (Logo)</p>
                <div className="flex items-center gap-4">
                  <div className="bg-gray-300 w-20 h-20 rounded-[50%]"></div>
                  <Button icon={<Camera />} variant="light" size="sm">
                    <span className="text-[.9rem]">Escolher Logo</span>
                  </Button>
                </div>

                <p className="text-[.8rem] text-gray-700">
                  Recomendado: imagem quadrada com pelo menos 200x200 pixels
                </p>
              </div> */}

              <div className="w-full flex justify-end">
                <Button 
                  size="sm" 
                  onClick={handleNext}
                  type="button"
                >
                  Próximo
                </Button>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="rounded-lg p-8 flex flex-col items-center justify-center border-3 border-beige-100 w-[580px]  gap-4 shadow-lg">
            <div className="flex flex-col w-full items-start">
              <h1 className="text-center font-semibold text-3xl">
                Endereço de contato
              </h1>
              <p className="text-gray-600 text-[.8rem]">
                Informe o endereço da ONG
              </p>
            </div>

            <div className="flex gap-5 flex-col w-full">
              <div className="w-full ">
                <h4 className="font-semibold text-[1.2rem]">Endereço</h4>
              </div>
                <Input 
                  label="Rua" 
                  fullWidth={true}
                  value={formData.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  error={error}/>
                <Input 
                  label="CEP" 
                  placeholder="XXXXX-XXX" 
                  fullWidth={true}
                  value={formData.postal_code}
                  onChange={(e) => handleChange("postal_code", e.target.value)}
                  error={error} />
              <div className="flex gap-2 w-full">
                <Select
                  label="Estado"
                  options={stateOptions}
                  fullWidth={true}
                  value={formData.state}
                  onChange={(e) => handleChange("state", e.target.value)}
                  placeholder="Selecione o estado"
                />
                <Select
                  label="Cidade"
                  options={cityOptions}
                  fullWidth={true}
                  value={formData.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                  placeholder="Selecione a cidade"
                  disabled={!formData.state}
                />
              </div>

              <div className="w-full flex justify-between">
                <Button 
                  size="sm" 
                  variant="light" 
                  onClick={handleBack}
                  type="button"
                >
                  Voltar
                </Button>
                <Button 
                  size="sm" 
                  onClick={handleNext}
                  type="button"
                >
                  Próximo
                </Button>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="rounded-lg p-8 flex flex-col items-center justify-center border-3 border-beige-100 w-[580px]  gap-4 shadow-lg">
            <div className="flex flex-col w-full items-start">
              <h1 className="text-center font-semibold text-3xl">
                Responsável Legal
              </h1>
              <p className="text-gray-600 text-[.8rem]">
                Dados do responsável legal pela ONG
              </p>
            </div>

            <div className="flex gap-5 flex-col w-full">
              <Input 
                label="Nome" 
                fullWidth={true}
                value={formData.first_name}
                onChange={(e) => handleChange("first_name", e.target.value)}
                error={error}/>
              <Input 
                label="Sobrenome" 
                fullWidth={true}
                value={formData.last_name}
                onChange={(e) => handleChange("last_name", e.target.value)}
                error={error}/>
              

              <div className="w-full flex justify-between">
                <Button size="sm" variant="light" onClick={handleBack}>
                  Voltar
                </Button>
                <Button size="sm" onClick={handleNext}>
                  Próximo
                </Button>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="rounded-lg p-8 flex flex-col items-center justify-center border-3 border-beige-100 w-[580px]  gap-2 shadow-lg">
            <div className="flex flex-col w-full items-start">
              <h1 className="text-center font-semibold text-3xl">
                Finalização
              </h1>
            </div>

            <div className="w-full ">
              <h4 className="font-semibold text-[1.1rem]">Crie sua senha</h4>
            </div>

            <div className="flex gap-5 flex-col w-full">
              <Input 
                label="Senha" 
                type="password" 
                fullWidth={true}
                value={formData.password}
                onChange={(e) => handleChange("password", e.target.value)}
                error={error}/>
              <Input 
                label="Confirmar Senha" 
                type="password" 
                fullWidth={true}
                value={formData.password2}
                onChange={(e) => handleChange("password2", e.target.value)}
                error={error}/>

              <div className="w-full ">
                <h4 className="font-semibold text-[1.1rem]">Termos e Condições</h4>
              </div>

              <div className="flex  flex-col w-full items-start">
                <div className="flex justify-start items-center gap-1 text-[.9rem]">
                  <Input type="checkbox" />
                  <p>Aceito os Termos de Uso</p>
                </div>
                <div className="flex justify-start items-center gap-1 text-[.9rem]">
                  <Input type="checkbox" />
                  <p>Aceito a Política de Privacidade</p>
                </div>
              </div>
              <div className="w-full flex justify-between">
                <Button size="sm" variant="light" onClick={handleBack}>
                  Voltar
                </Button>
                <Button size="sm" onClick={handleSubmit}>
                  Finalizar Cadastro
                </Button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {isLoading && <LoadingScreen message="Cadastrando ONG..." />}
      <Header />
      <div className="justify-center flex items-center flex-1 flex-col gap-3 my-15">
        <div className="flex flex-col items-center gap-3 w-[580px]">
          <figure className="w-14 ">
            <img src={Logo} alt="" />
          </figure>
          <h1 className="text-center font-semibold text-3xl">
            Cadastro de ONG
          </h1>
          <p className="text-gray-600 text-[.9rem]">
            Preencha o formulário abaixo para cadastrar sua ONG na plataforma
          </p>
        </div>

        <form onSubmit={handleSubmit}>{renderStep()}</form>
      </div>
      <Footer />
    </>
  );
};
