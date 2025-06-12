import { useState } from "react"
import { Input } from "./Input"
import { Button } from "./Button"
import { Select } from "./Select"
import { getStates, getCitiesByState, City } from "@/data/statesAndCities"

interface UserInfo {
  nome: string
  sobre: string
  cidade: string
  estado: string
}

export const UserInfoForm = () => {
  const [availableCities, setAvailableCities] = useState<City[]>([]);
  const [formData, setFormData] = useState<UserInfo>({
    nome: "",
    sobre: "",
    cidade: "",
    estado: ""
  })

  const handleChange = (name: string, value: string) => {
    // Se o estado mudou, atualiza as cidades disponíveis
    if (name === 'estado') {
      const cities = getCitiesByState(value);
      setAvailableCities(cities);
      // Limpa a cidade selecionada quando o estado muda
      setFormData(prev => ({
        ...prev,
        estado: value,
        cidade: '',
      }));
      return;
    }
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    console.log("Dados salvos:", formData)
    // Aqui você pode enviar os dados para uma API ou outra lógica de persistência
  }

  // Opções para os selects
  const stateOptions = getStates().map(state => ({
    value: state.abbreviation,
    label: `${state.name} (${state.abbreviation})`
  }));

  const cityOptions = availableCities.map(city => ({
    value: city.name,
    label: city.name
  }));

  return (
    <div className=" rounded-lg w-full  space-y-4">
      <h2 className="text-xl font-bold mb-2">Informações do Usuário</h2>

      <Input
        label="Nome"
        name="nome"
        placeholder="Digite seu nome"
        value={formData.nome}
        onChange={(e) => handleChange("nome", e.target.value)}
      />

      <Input
        label="Sobre"
        name="sobre"
        placeholder="Fale um pouco sobre você"
        value={formData.sobre}
        onChange={(e) => handleChange("sobre", e.target.value)}
      />

      <div className="flex gap-3">
        <Select
          label="Estado"
          options={stateOptions}
          value={formData.estado}
          onChange={(e) => handleChange("estado", e.target.value)}
          placeholder="Selecione o estado"
          fullWidth
        />

        <Select
          label="Cidade"
          options={cityOptions}
          value={formData.cidade}
          onChange={(e) => handleChange("cidade", e.target.value)}
          placeholder="Selecione a cidade"
          fullWidth
          disabled={!formData.estado}
        />
      </div>

      <Button onClick={handleSubmit} width="full">
        Salvar
      </Button>
    </div>
  )
}
