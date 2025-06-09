import { Header } from "@/components/Header";
import { Input } from "@/components/Input";
import { OngCardEdit } from "@/components/OngCardEdit";
import { NavigationTab } from "@/components/NavigationTab";
import {  useEffect, useState } from "react";
import { createItemOng, getItemsOng } from "@/api/createItemOng";

import { StarIcon, MapPin, Plus, Upload } from 'lucide-react'
import FAQ from "@/components/FAQ";
import { Button } from "@/components/Button";
import { ItemOngTypes, OngItemsResponseTypes, OngNecessitiesResponseTypes, OngNecessitiesTypes } from "@/types/OngTypes";
import { createNecessityOng, getNecessityOng } from "@/api/necessityOngApi";

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
  const [itemData, setItemData] = useState<ItemOngTypes>({
    name: "",
    category: "",
    quantity: 0,
  });
  const [necessityData, setNecessityData] = useState<OngNecessitiesTypes>({
    item: 0,
    quantity: 0,
    urgency: "baixa" as "baixa" | "media" | "alta",
    status: "pendente",
  });
  const [necessity, setNecessity] = useState<OngNecessitiesResponseTypes[]>([]);
  const [items, setItems] = useState<OngItemsResponseTypes[]>([]);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const fetchItems = async () => {
    const items = await getItemsOng();
    setItems(items);
    console.log("Fetched items:", items);
  }

  const fetchNecessities = async () => {
    try {
      const necessities = await getNecessityOng();
      console.log("Fetched necessities:", necessities);
      setNecessity(necessities);
    } catch (error) {
      console.error("Error fetching necessities:", error);
    }
  }

  const handleCreateItem = async () => {
    try {
      const response = await createItemOng(itemData);
      console.log("Item created successfully:", response);
      setItemData({ name: "", category: "", quantity: 0 }); // Reset item data after creation
      fetchItems();
    } catch (error) {
      console.error("Error creating item:", error);
    }
  };

  const handleCreateNecessity = async () => {
    try {
      const response = await createNecessityOng(necessityData);
      console.log("Necessity created successfully:", response);
      setNecessityData({ item: 0, quantity: 0, urgency: "baixa", status: "pendente" }); // Reset necessity data after creation
      fetchNecessities()
    } catch (error) {
      console.error("Error creating necessity:", error);
    }
  };

  useEffect(() => {
  
        
      fetchItems();
      fetchNecessities();
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case "Informações":
        return (
          <div className="flex justify-center w-full">
            <div className="flex flex-col lg:flex-row gap-8 w-full max-w-7xl">
              <div className="flex flex-col gap-7 lg:w-2/3">
                <div className="border border-gray-300 rounded-md p-4">
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
                    <div className="flex flex-col sm:flex-row w-full gap-4">
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

                <div className="border border-gray-300 rounded-md p-4">
                  <h2 className="text-2xl font-bold mb-1">Endereço</h2>
                  <p className="text-gray-500 text-sm mb-4">
                    Localização da sua ONG
                  </p>
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-col sm:flex-row gap-4">
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
                    <div className="flex flex-col sm:flex-row w-full gap-4">
                      <Input
                        label="Cidade"
                        placeholder="São Paulo"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        type="text"
                        isFlex1
                      />
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
              <div className="flex flex-col gap-4 lg:w-1/3">
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
          </div>
        );
      case "FAQ":
        return (
          <div className="flex justify-center w-full">
            <div className="w-full max-w-7xl">
              <FAQ />
            </div>
          </div>
        );
      case "Necessidades":
        return (
          <div className="flex justify-center  w-full flex-col gap-4">
            <div className="w-full">
              <h2 className="text-[1.3rem] pb-2 text-start">Itens</h2>
              <div className="grid grid-cols-4 gap-6.5">
                {items.map((item) => (
                  <OngCardEdit
                    key={item.id}
                    id={item.id}
                    name={item.name}
                    quantity={item.quantity.toString()}
                  />
                ))}
              </div>
            </div>
            <div className="w-full">
              <h2 className="text-[1.3rem] pb-2 text-start">Necessidades</h2>
              <div className="grid grid-cols-4 gap-6.5">
                {necessity.map((item) => (
                  <OngCardEdit
                    key={item.id}
                    id={item.id}
                    name={item.item_name || ''}
                    quantity={(item.quantity || 0).toString()}
                    priority={
                      item.urgency === "baixa" ? "Baixa" :
                      item.urgency === "media" ? "Média" :
                      item.urgency === "alta" ? "Alta" : "Baixa"
                    }
                  />
                ))}
              </div>
            </div>

            <div className="border border-gray-300 rounded-md p-4 w-full">
              <h3 className="text-[1.3rem] font-bold mb-1">
                Adicionar novo item
              </h3>

              <div className="flex gap-3 w-full justify-between">
                  <Input 
                      label="Nome do Item"
                      isFlex1={true}
                      type="text"
                      value={itemData.name}
                      onChange={(e) => setItemData({ ...itemData, name: e.target.value })}
                                            
                  />
                  <Input 
                      label="Categoria"
                      type="text"
                      isFlex1={true}
                      value={itemData.category}
                      onChange={(e) => setItemData({ ...itemData, category: e.target.value })}

                  />
                  <Input 
                      label="Quantidade"
                      type="number"
                      value={itemData.quantity.toString()}
                      onChange={(e) => setItemData({ ...itemData, quantity: Number(e.target.value) })}
                  />

              </div>

              <div className="mt-4">
                <Button size="sm" icon={<Plus />} type="submit" onClick={handleCreateItem}>
                  Adicionar
                </Button>
              </div>
            </div>
            <div className="border border-gray-300 rounded-md p-4 w-full">
              <h3 className="text-[1.3rem] font-bold mb-1">
                Adicionar nova necessidade
              </h3>

              <div className="flex gap-3 w-full justify-between">
                  <Input 
                      label="ID do Item"
                      isFlex1={true}
                      type="number"
                      value={necessityData.item.toString()}
                      onChange={(e) => setNecessityData({ ...necessityData, item: Number(e.target.value) })}

                  />
                  <Input 
                      label="Quantidade"
                      type="number"
                      isFlex1={true}
                      value={necessityData.quantity.toString()}
                      onChange={(e) => setNecessityData({ ...necessityData, quantity: Number(e.target.value) })}
                  />
                  <div className="flex flex-col w-1/6">
                    <label>Prioridade</label>
                    <select
                        className="border border-gray-300 rounded-md p-2 mt-1"
                        onChange={(e) => setNecessityData({ ...necessityData, urgency: e.target.value as "baixa" | "media" | "alta" })}
                        value={necessityData.urgency}
                    >
                      <option value="baixa">Baixa</option>
                      <option value="media">Média</option>
                      <option value="alta">Alta</option>
                    </select>
                  </div>

              </div>

              <div className="mt-4">
                <Button size="sm" icon={<Plus />} type="submit" onClick={handleCreateNecessity}>
                  Adicionar
                </Button>
              </div>
            </div>
          </div>
        );
        case "Galeria":
          return (
            <div className="w-full flex flex-col gap-3">
              <div className="grid grid-cols-6 gap-4">
                <div className="aspect-square bg-gray-200 rounded-lg"></div>
                <div className="aspect-square bg-gray-200 rounded-lg"></div>
                <div className="aspect-square bg-gray-200 rounded-lg"></div>
                <div className="aspect-square bg-gray-200 rounded-lg"></div>
                <div className="aspect-square bg-gray-200 rounded-lg"></div>
                <div className="aspect-square bg-gray-200 rounded-lg"></div>
                <div className="aspect-square bg-gray-200 rounded-lg"></div>
              <div className="aspect-square bg-gray-200 rounded-lg"></div>

              
            </div>

            <div className="flex items-center gap-3 justify-center border border-gray-300 rounded-md p-4">
              <Input
                type="file"
                isFlex1={true}
                label="Fazer upload de fotos"
              />
              <Upload />
            </div>
        </div>
          )
      default:
        return null;
    }
  };

  return (
    <>
      <Header />

      <div className="h-[200px] bg-gray-300 mb-8 w-full"></div>

      <main className="flex flex-col items-center px-4 sm:px-6 lg:px-8 w-full pb-10">
        <div className="w-full max-w-7xl">
          <div className="flex flex-col mb-6">
            <h2 className="text-2xl font-bold mb-2">Alimentação</h2>
            <div className="flex flex-col sm:flex-row gap-4 items-center text-gray-500 text-sm">
              <span className="flex items-center gap-1">
                <MapPin className="w-5 h-5" />
                <span>São Paulo, SP</span>
              </span>
              <span className="flex items-center gap-1">
                <StarIcon className="w-5 h-5" />
                <span>4.8 (124 avaliações)</span>
              </span>
            </div>
          </div>
          
          <div className="mb-8 w-full">
            <NavigationTab
              activeTab={activeTab}
              content={["Informações", "Necessidades", "FAQ", "Galeria"]}
              handleTabClick={handleTabClick}
            />
          </div>
          
          <div className="w-full">
            {renderContent()}
          </div>
        </div>
      </main>
    </>
  );
};