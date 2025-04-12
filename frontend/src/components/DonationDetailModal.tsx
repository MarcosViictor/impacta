import { X } from 'lucide-react'

interface Donation {
  id: number
  nome: string
  data: string
  tipo: string
  valor: string
  status: string
}

interface DonationDetailsModalProps {
  donation: Donation | null
  onClose: () => void
}

export const DonationDetailsModal = ({ donation, onClose }: DonationDetailsModalProps) => {
  if (!donation) return null

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6 relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 hover:text-black">
          <X />
        </button>

        <h2 className="text-2xl font-bold mb-4">Detalhes da Doação</h2>

        <div className="space-y-2 text-gray-700">
          <p><strong>ID:</strong> #{donation.id}</p>
          <p><strong>Doador:</strong> {donation.nome}</p>
          <p><strong>Data:</strong> {donation.data}</p>
          <p><strong>Tipo:</strong> {donation.tipo}</p>
          <p><strong>Valor/Itens:</strong> {donation.valor}</p>
          <p><strong>Status:</strong> {donation.status}</p>
        </div>
      </div>
    </div>
  )
}
