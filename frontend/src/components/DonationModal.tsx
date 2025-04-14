import { Button } from "./Button"
import { Input } from "./Input"
import { NavigationTab } from "./NavigationTab"

import { useState } from "react"
import { X } from "lucide-react"

interface DonationModalProps {
  onClose: () => void
}

export const DonationModal = ({ onClose }: DonationModalProps) => {
  const [activeTab, setActiveTab] = useState("Doar itens")

  const renderTabContent = () => {
    switch (activeTab) {
      case "Doar itens":
        return (
          <div className="flex flex-col gap-3">
            <div className="flex gap-2">
              <Input placeholder="Nome do item" label="Item" isFlex1 />
              <Input placeholder="Ex.: 1" label="Quantidade" />
            </div>
            <div>
              <ul className="list-disc list-inside text-sm text-gray-700 pl-2">
                <li>Pão x10</li>
                <li>Pacote de arroz x50</li>
              </ul>
            </div>
            <Button variant="light" size="sm" className="mb-4">
              Adicionar Item
            </Button>
            <Input
              placeholder="Deixe uma mensagem para ONG"
              label="Mensagem (Opcional)"
            />
            <Button>Doar</Button>
          </div>
        )
      case "Doar valor":
        return (
          <div className="flex flex-col gap-3">
            <Input label="Valor da doação" placeholder="0,00" />
            <Input
              placeholder="Deixe uma mensagem para ONG"
              label="Mensagem (Opcional)"
            />
            <Button>Doar</Button>
          </div>
        )
    }
  }

  return (
    <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
      <div className="container mx-auto px-4 flex flex-col gap-2 justify-center w-[600px] bg-white p-5 rounded-[10px] relative">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-[1.2rem] font-bold">Fazer Doação</h3>
            <p className="font-medium text-[.9rem] text-gray-500">
              Escolha os itens que deseja doar ou faça uma doação financeira.
            </p>
          </div>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-600 hover:text-black" />
          </button>
        </div>

        <NavigationTab
          content={["Doar itens", "Doar valor"]}
          activeTab={activeTab}
          handleTabClick={setActiveTab}
        />

        {renderTabContent()}
      </div>
    </div>
  )
}
