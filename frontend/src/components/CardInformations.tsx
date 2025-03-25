import { Button } from './Button'
import { Phone, Mail, MapPin } from 'lucide-react'

import { ContactOng } from '@/types/ContactOng'

type CardInformationsProps = ContactOng

export const CardInformations = (props: CardInformationsProps) => {
  return (
    <div className="w-[400px] bg-white rounded-lg p-6 shadow-md">
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

      {/* Redes Sociais */}
      {/* <div className="mb-6">
        <h3 className="font-semibold text-gray-900 mb-3">Redes Sociais</h3>
        <div className="flex gap-2">
          <Button 
            size='sm'
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors flex items-center gap-2">
            <Facebook className="w-4 h-4" />
            Facebook
          </Button>
          <Button
            size='sm'
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors flex items-center gap-2">
            <Instagram className="w-4 h-4" />
            Instagram
          </Button>
          <Button 
            size='sm'
          className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors flex items-center gap-2">
            <Twitter className="w-4 h-4" />
            Twitter
          </Button>
        </div>
      </div> */}

      {/* Botões de Ação */}
      <div className="space-y-3">
        <Button 
          variant="primary"
          width="full"
          className="flex items-center justify-center gap-2"
        >
          <span>♥</span> Doar Agora
        </Button>
        <Button 
          variant="light"
          width="full"
          className="flex items-center justify-center gap-2"
        >
          <Mail className="w-4 h-4" /> Entrar em Contato
        </Button>
      </div>
    </div>
  )
}
