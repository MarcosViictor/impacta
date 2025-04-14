import { useState } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { DonationDetailsModal } from '@/components/DonationDetailModal'

import { Eye } from 'lucide-react'

import { Donation } from '@/types/Donation'
import { donationsData } from '@/data/Donations'

const ITEMS_PER_PAGE = 5

export const Dashboard = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedDonation, setSelectedDonation] = useState<Donation | null>(null)

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const endIndex = startIndex + ITEMS_PER_PAGE
  const paginatedDonations = donationsData.slice(startIndex, endIndex)
  const totalPages = Math.ceil(donationsData.length / ITEMS_PER_PAGE)

  return (
    <>
      <Header />

      <section className="container mx-auto px-20 py-8 flex flex-col">
        <div className="flex items-center gap-3 mb-8">
          <div className="bg-gray-200 w-16 h-16 rounded-full" />
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">ONG de Alimentos</h1>
            <p className="font-medium text-gray-500">Dashboard administrativo</p>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-4">Doações recebidas</h3>

          <div className="overflow-x-auto border rounded-lg border-gray-300">
            <table className="min-w-full table-auto">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-5 text-left">ID</th>
                  <th className="px-4 py-5 text-left">Doador</th>
                  <th className="px-4 py-5 text-left">Data</th>
                  <th className="px-4 py-5 text-left">Tipo</th>
                  <th className="px-4 py-5 text-left">Valor/Itens</th>
                  <th className="px-4 py-5 text-left">Status</th>
                  <th className="px-4 py-5 text-left">Ação</th>
                </tr>
              </thead>
              <tbody className="divide-y">
                {paginatedDonations.map((item) => (
                  <tr key={item.id} className="hover:bg-gray-50 border-gray-300">
                    <td className="px-4 py-5">#{item.id}</td>
                    <td className="px-4 py-5">{item.nome}</td>
                    <td className="px-4 py-5">{item.data}</td>
                    <td className="px-4 py-5">
                      <span className="px-2 py-1 rounded-full text-sm border text-gray-600">
                        {item.tipo}
                      </span>
                    </td>
                    <td className="px-4 py-3">{item.valor}</td>
                    <td className="px-4 py-3">
                      {item.status === 'Recebido' ? (
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-sm">
                          Recebido
                        </span>
                      ) : (
                        <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-sm">
                          Em trânsito
                        </span>
                      )}
                    </td>
                    <td className="px-4 py-3 flex">
                      <button title="Detalhes" onClick={() => setSelectedDonation(item)}>
                        <Eye className="w-5 h-5 text-gray-700 hover:text-black" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="px-4 py-3 text-sm text-gray-500 border-gray-300 border-t">
              Mostrando {paginatedDonations.length} de {donationsData.length} doações
            </div>
          </div>

          <div className="flex justify-end mt-2">
            <button
              className="px-4 py-1 rounded-md text-gray-400 border border-gray-300 mr-2"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => prev - 1)}
            >
              Anterior
            </button>
            <button
              className="px-4 py-1 rounded-md bg-gray-200 hover:bg-gray-300 text-gray-800"
              disabled={currentPage === totalPages}
              onClick={() => setCurrentPage((prev) => prev + 1)}
            >
              Próximo
            </button>
          </div>
        </div>
      </section>

      {selectedDonation && (
        <DonationDetailsModal
          donation={selectedDonation}
          onClose={() => setSelectedDonation(null)}
        />
      )}

      <Footer />
    </>
  )
}
