import { Button } from './Button'
import { Phone, Mail, MapPin } from 'lucide-react'
import { useState } from 'react'
import { ContactOng } from '@/types/ContactOng'

import { DonationModal } from './DonationModal'
import { DonationType } from '@/types/Donation'
import { createDonation } from '@/api/donationApi'
import { getCookie } from '@/utils/cookies'
import { useParams } from 'react-router-dom'

type CardInformationsProps = ContactOng

export const CardInformations = (props: CardInformationsProps) => {
  const [showDonationModal, setShowDonationModal] = useState(false)
  const userIdCookie = getCookie('user_id');
  const userId = userIdCookie ? parseInt(userIdCookie, 10) : 0;
  const ongId = useParams<{ id: string }>().id;
  const [donationData, setDonationData] = useState<DonationType>({
          org: ongId ? parseInt(ongId, 10) : 0, // Convert ongId to number
          item_id: 0,
          donor: userId,
          quantity: 0,
          status: 'pendente'
    })


  const handleCreateDonation = async () => {
          try {
              const response = await createDonation(donationData);
              console.log('Doação criada com sucesso:', response);
              setShowDonationModal(false); 
          }
          catch (error) {
              console.error('Erro ao buscar necessidades da ONG:', error);
          }
      }

  return (
    <>
      <div className="w-[400px] h-fit bg-white rounded-lg p-6 shadow-md sticky">
        <h2 className="text-2xl font-bold mb-6">Informações de Contato</h2>

        {/* Informações principais */}
        <div className="space-y-4 mb-6">
          <div className="flex items-center gap-3">
            <Phone className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700">{props.phone}</span>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="w-5 h-5 text-blue-600" />
            <span className="text-gray-700">{props.email}</span>
          </div>

          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-blue-600 mt-1" />
            <div className="flex flex-col">
              <span className="font-semibold text-gray-900">Endereço</span>
              <span className="text-gray-700">{props.address}</span>
              <span className="text-gray-700">{props.city}, {props.state}</span>
            </div>
          </div>
        </div>

        {/* Botões de Ação */}
        <div className="space-y-3">
          <Button
            variant="primary"
            width="full"
            className="flex items-center justify-center gap-2"
            onClick={() => setShowDonationModal(true)}
          >
            <span>♥</span> Doar Agora
          </Button>
          
        </div>
      </div>

      {/* Modal */}
      {showDonationModal && (
        <DonationModal 
          onClose={() => setShowDonationModal(false)} 
          onCreateDonation={handleCreateDonation}
          donationData={donationData}
          setDonationData={setDonationData}
        />
      )}
    </>
  )
}
