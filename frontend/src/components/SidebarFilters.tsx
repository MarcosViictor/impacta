import { useState } from "react"
import { Button } from "@/components/Button"

export const SidebarFilters = ({ onApplyFilters }: any) => {
  const [selectedState, setSelectedState] = useState("todos")

  const handleApplyFilters = () => {
    onApplyFilters(selectedState)
  }

  return (
    <aside className="fixed right-0 top-0 h-screen w-[300px] bg-white border-l border-gray-200 shadow-lg p-6 z-50">
      <h2 className="text-xl font-bold mb-1">Filtros de Busca</h2>
      <p className="text-sm text-gray-600 mb-4">
        Refine sua busca por ONGs com os filtros abaixo
      </p>

      <label htmlFor="estado" className="block text-sm font-medium mb-1">
        Estado
      </label>
      <select
        id="estado"
        name="estado"
        className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
        value={selectedState}
        onChange={(e) => setSelectedState(e.target.value)}
      >
        <option value="todos">Todos os estados</option>
        <option value="AC">Acre</option>
        <option value="AL">Alagoas</option>
        <option value="AP">Amapá</option>
        <option value="AM">Amazonas</option>
        <option value="BA">Bahia</option>
        <option value="CE">Ceará</option>
        <option value="DF">Distrito Federal</option>
        <option value="ES">Espírito Santo</option>
        <option value="GO">Goiás</option>
        <option value="MA">Maranhão</option>
        <option value="MT">Mato Grosso</option>
        <option value="MS">Mato Grosso do Sul</option>
        <option value="MG">Minas Gerais</option>
        <option value="PA">Pará</option>
        <option value="PB">Paraíba</option>
        <option value="PR">Paraná</option>
        <option value="PE">Pernambuco</option>
        <option value="PI">Piauí</option>
        <option value="RJ">Rio de Janeiro</option>
        <option value="RN">Rio Grande do Norte</option>
        <option value="RS">Rio Grande do Sul</option>
        <option value="RO">Rondônia</option>
        <option value="RR">Roraima</option>
        <option value="SC">Santa Catarina</option>
        <option value="SP">São Paulo</option>
        <option value="SE">Sergipe</option>
        <option value="TO">Tocantins</option>
      </select>

      <Button className="w-full mt-6" onClick={handleApplyFilters}>
        Aplicar Filtros
      </Button>
    </aside>
  )
}
