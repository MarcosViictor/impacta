import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { Button } from "@/components/Button";

import Logo from "@/static/assets/logo.svg";

import { useState, FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Camera } from "lucide-react";

import { createOng } from "@/api/userApi";
import { ongTypes } from "@/types/userTypes";

export const RegisterOng = () => {
  const [step, setStep] = useState(1); // Estado para controlar o passo do formulário
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [formData, setFormData] = useState<ongTypes>({
    name: "",
    email: "",
    password: "",
    password2: "",
    street: "",
    number: "",
    district: "",
    city: "",
    state: "",
    zip_code: "",
    phone: "",
    responsible_name: "",
    responsible_role: "",
    responsible_cpf: "",
    responsible_phone: "",
    responsible_email: "",
    user_type: "ONG",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleNext = () => {
    setStep(step + 1); // Avançar para o próximo passo
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (formData.password !== formData.password2) {
      setError("As senhas não coincidem");
      return;
    }

    try {
      const response = await createOng(formData);
      console.log("ONG cadastrada:", response);
      navigate("/login");
    } catch (error: any) {
      console.error("Erro no cadastro:", error);
      setError(error.response?.data?.message || "Erro ao cadastrar ONG");
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
                onChange={(e) => handleChange("name", e.target.value)}
                error={error}
              />
              <Input
                label="E-mail"
                type="email"
                fullWidth={true}
                onChange={(e) => handleChange("email", e.target.value)}
                error={error}
              />
              <Input
                label="Senha"
                type="password"
                fullWidth={true}
                onChange={(e) => handleChange("password", e.target.value)}
                error={error}
              />
              <Input
                label="Repetir senha"
                type="password"
                fullWidth={true}
                onChange={(e) => handleChange("password2", e.target.value)}
                error={error}
              />

              {/* <Input label="Descrição Curta" fullWidth={true} />
              <Input label="Descrição Completa" fullWidth={true} /> */}
              {/* <div className="flex gap-2 w-full">
                <Input label="Data da fundação" type="date" fullWidth={true} />
                <Input
                  label="CNPJ"
                  placeholder="XXX.XXX.XXX/XXXX-XX"
                  fullWidth={true}
                />
              </div> */}
              {/* <Input label="Missão" fullWidth={true} /> */}

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
                <Button size="sm" onClick={handleSubmit}>
                  Cadastrar
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
                Informe o endereço e contatos da sua ONG
              </p>
            </div>

            <div className="flex gap-5 flex-col w-full">
              <div className="w-full ">
                <h4 className="font-semibold text-[1.2rem]">Endereço</h4>
              </div>
              <div className="flex gap-2">
                <Input label="Rua" fullWidth={true} />
                <Input label="Número" fullWidth={true} />
              </div>
              <Input label="Descrição Curta" fullWidth={true} />
              <Input label="Descrição Completa" fullWidth={true} />
              <Input label="Complemento" fullWidth={true} />
              <Input label="Bairro" fullWidth={true} />
              <div className="flex gap-2 w-full">
                <Input label="Cidade" fullWidth={true} />
                <Input label="Estado" placeholder="SP" fullWidth={true} />
              </div>
              <Input label="CEP" placeholder="XXXXX-XXX" fullWidth={true} />

              <div className="w-full ">
                <h4 className="font-semibold text-[1.2rem]">
                  Informações de Contato
                </h4>
              </div>

              <Input label="E-mail" type="email" fullWidth={true} />
              <Input
                label="Telefone"
                placeholder="(XX) XXXXX-XXXX"
                fullWidth={true}
              />
              <Input
                label="Website"
                placeholder="www.exemplo.org.gov"
                fullWidth={true}
              />

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
              <Input label="Nome Completo" fullWidth={true} />
              <Input label="Cargo" fullWidth={true} />
              <Input
                label="CPF"
                placeholder="XXX.XXX.XXX-XX"
                fullWidth={true}
              />
              <Input
                label="Telefone"
                placeholder="(XX) XXXXX-XXXX"
                fullWidth={true}
              />
              <Input label="E-mail" type="email" fullWidth={true} />

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
              <Input label="Senha" type="password" fullWidth={true} />
              <Input label="Confirmar Senha" type="password" fullWidth={true} />

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

        <form action="">{renderStep()}</form>
      </div>
      <Footer />
    </>
  );
};
