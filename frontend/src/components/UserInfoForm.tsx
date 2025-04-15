import { useState } from "react"
import { Input } from "./Input"
import { Button } from "./Button"

interface UserInfo {
  nome: string
  sobre: string
  cidade: string
  estado: string
}

export const UserInfoForm = () => {
  const [formData, setFormData] = useState<UserInfo>({
    nome: "",
    sobre: "",
    cidade: "",
    estado: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    console.log("Dados salvos:", formData)
    // Aqui você pode enviar os dados para uma API ou outra lógica de persistência
  }

  return (
    <div className=" rounded-lg w-full  space-y-4">
      <h2 className="text-xl font-bold mb-2">Informações do Usuário</h2>

      <Input
        label="Nome"
        name="nome"
        placeholder="Digite seu nome"
        value={formData.nome}
        onChange={handleChange}
      />

      <Input
        label="Sobre"
        name="sobre"
        placeholder="Fale um pouco sobre você"
        value={formData.sobre}
        onChange={handleChange}
      />

      <div className="flex gap-3">
        <Input
          label="Cidade"
          name="cidade"
          placeholder="Cidade"
          value={formData.cidade}
          onChange={handleChange}
          isFlex1
          fullWidth
        />

        <Input
          label="Estado"
          name="estado"
          placeholder="Estado"
          value={formData.estado}
          onChange={handleChange}
        />
      </div>

      <Button onClick={handleSubmit} width="full">
        Salvar
      </Button>
    </div>
  )
}
