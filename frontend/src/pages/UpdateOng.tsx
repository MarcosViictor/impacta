import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { NavigationTab } from "@/components/NavigationTab";
import { useState } from "react";

export const UpdateOng = () => {
  const [name, setName] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [longDescription, setLongDescription] = useState("");
  const [foundationDate, setFoundationDate] = useState("");
  const [cnpj, setCnpj] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");
  const [neighborhood, setNeighborhood] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [cep, setCep] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebSite] = useState("");
  const [activeTab, setActiveTab] = useState("Informações");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Informações":
        return (
          <div className="flex gap-8 w-full justify-center">
            <div className="flex flex-col gap-7 justify-center flex-2">
              <div className="border border-gray-300 rounded-md p-4 ">
                <h2 className="text-2xl font-bold mb-1">Informações Básicas</h2>
                <p className="text-gray-500 text-sm mb-4">
                  Dados principais da sua ONG
                </p>
                <div className="flex flex-col gap-4">
                  <Input
                    label="Nome"
                    placeholder="Nome da ONG"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                  />
                  <Input
                    label="Descrição curta"
                    placeholder="Descrição curta da ONG"
                    value={shortDescription}
                    onChange={(e) => setShortDescription(e.target.value)}
                    type="text"
                  />
                  <Input
                    label="Descrição completa"
                    placeholder="Descrição completa da ONG"
                    value={longDescription}
                    onChange={(e) => setLongDescription(e.target.value)}
                    type="text"
                  />
                  <div className="flex w-full gap-4">
                    <Input
                      label="Data da fundação"
                      placeholder="Data da fundação da ONG"
                      value={foundationDate}
                      onChange={(e) => setFoundationDate(e.target.value)}
                      type="date"
                      isFlex1
                    />
                    <Input
                      label="CNPJ"
                      placeholder="CNPJ da ONG"
                      value={cnpj}
                      onChange={(e) => setCnpj(e.target.value)}
                      type="number"
                      isFlex1
                    />
                  </div>
                </div>
              </div>

              <div className=" border border-gray-300 rounded-md p-4">
                <h2 className="text-2xl font-bold mb-1">Endereço</h2>
                <p className="text-gray-500 text-sm mb-4">
                  Localização da sua ONG
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4">
                    <Input
                      label="CEP"
                      placeholder="01234-567"
                      value={cep}
                      onChange={(e) => setCep(e.target.value)}
                      type="text"
                    />

                    <Input
                      label="Rua"
                      placeholder="Rua dos Animais"
                      value={street}
                      onChange={(e) => setStreet(e.target.value)}
                      type="text"
                      isFlex1
                    />

                    <Input
                      label="Número"
                      placeholder="123"
                      value={number}
                      onChange={(e) => setNumber(e.target.value)}
                      type="text"
                    />
                  </div>
                  <Input
                    label="Bairro"
                    placeholder="Jardim Esperança"
                    value={neighborhood}
                    onChange={(e) => setNeighborhood(e.target.value)}
                    type="text"
                  />
                  <div className="flex w-full gap-4">
                    <div className="flex w-full">
                      <Input
                        label="Cidade"
                        placeholder="São Paulo"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        type="text"
                        isFlex1
                      />
                    </div>
                    <div className="flex w-full">
                      <Input
                        label="Estado"
                        placeholder="SP"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        type="text"
                        isFlex1
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 flex-1">
              <div className="border border-gray-300 rounded-md p-4">
                <h2 className="text-2xl font-bold mb-1">
                  Informações de Contato
                </h2>
                <p className="text-gray-500 text-sm mb-4">
                  Dados de contato da sua ONG
                </p>
                <div className="flex flex-col gap-4">
                  <Input
                    label="Email"
                    placeholder="Email da ONG"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                  />
                  <Input
                    label="Telefone"
                    placeholder="Telefone da ONG"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    type="text"
                  />
                  <Input
                    label="Website"
                    placeholder="Website da ONG"
                    value={website}
                    onChange={(e) => setWebSite(e.target.value)}
                    type="text"
                  />
                </div>
              </div>
            </div>
          </div>
        );
    }
  };

  //definir types depois

  return (
    <>
      <Header />

      <div className="h-[200px] bg-gray-300 mb-8">
                
      </div>

      <section className="container px-14 flex flex-col gap-8 justify-center items-center mb-8 w-full">
        <div className="w-full">
          <NavigationTab
            activeTab={activeTab}
            content={["Informações", "Necessidades", "Equipe", "Galeria"]}
            handleTabClick={handleTabClick}
          />
        </div>
        {renderContent()}
      </section>
    </>
  );
};
