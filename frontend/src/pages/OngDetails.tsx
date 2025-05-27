import { CardInformations } from "@/components/CardInformations"
import { CardNumbers } from "@/components/CardNumbers"
import { Header } from "@/components/Header"
import { Itens } from "@/components/Itens"
import Review from '@/pages/Review'
import { Maps } from "@/components/Maps"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOngById } from "@/api/listOngsApi"
import { OngTypes } from "@/types/OngTypes"

import { StarIcon, MapPin } from 'lucide-react'
import { NavigationTab } from "@/components/NavigationTab"
import { CardFAQ } from "@/components/CardFAQ"

export const OngDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [activeTab, setActiveTab] = useState('Sobre')
    const [ong, setOng] = useState<OngTypes | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchOngDetails = async () => {
            if (!id) return;
            try {
                const data = await getOngById(id)
                setOng(data)
            } catch (error) {
                console.error('Erro ao buscar ONG:', error)
            } finally {
                setLoading(false)
            }
        }

        fetchOngDetails()
    }, [id])

    if (loading) return <div>Carregando...</div>
    if (!ong) return <div>ONG não encontrada</div>

    const handleTabClick = (tab: string) => {
        setActiveTab(tab)
    }

    const renderTabContent = () => {
        switch (activeTab) {
            case 'Sobre':
                return (
                    <div className="space-y-6">
                        <p className="text-gray-700 leading-relaxed">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quam et praesentium velit voluptate voluptatem alias? Blanditiis, iure nobis dolor, quidem excepturi totam placeat earum nam commodi sed provident dignissimos!
                        </p>
                        <div className="flex gap-2">
                            <CardNumbers number={43} label="Comunidades Atendidas" />
                            <CardNumbers number={32} label="Pessoas ajudadas" />
                            <CardNumbers number={12} label="KG de Alimentos arrecadados" />
                        </div>
                    </div>
                )
            case 'Necessidades':
                return (
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Itens necessários:</h3>
                        <ul className="grid grid-cols-2 gap-2">
                            <Itens />
                            <Itens />
                            <Itens />
                            <Itens />
                            <Itens />
                            <Itens />
                            <Itens />
                            <Itens />
                        </ul>
                    </div>
                )
            case 'FAQ':
                return (
                    <div className="space-y-4">
                        <CardFAQ 
                            title="exemplo"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quam et praesentium velit voluptate voluptatem alias? Blanditiis, iure nobis dolor, quidem excepturi totam placeat earum nam commodi sed provident dignissimos!"
                        />
                         <CardFAQ 
                            title="exemplo"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quam et praesentium velit voluptate voluptatem alias? Blanditiis, iure nobis dolor, quidem excepturi totam placeat earum nam commodi sed provident dignissimos!"
                        />
                         <CardFAQ 
                            title="exemplo"
                            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quam et praesentium velit voluptate voluptatem alias? Blanditiis, iure nobis dolor, quidem excepturi totam placeat earum nam commodi sed provident dignissimos!"
                        />
                    </div>
                )
            case 'Galeria':
                return (
                    <div className="grid grid-cols-3 gap-4">
                        <div className="aspect-square bg-gray-200 rounded-lg"></div>
                        <div className="aspect-square bg-gray-200 rounded-lg"></div>
                        <div className="aspect-square bg-gray-200 rounded-lg"></div>
                        <div className="aspect-square bg-gray-200 rounded-lg"></div>
                        <div className="aspect-square bg-gray-200 rounded-lg"></div>
                        <div className="aspect-square bg-gray-200 rounded-lg"></div>
                    </div>
                )
            case 'Avaliações':
                return (
                    <div className="space-y-4">
                        <Review />
                    </div>
                )
            default:
                return null
        }
    }

    return (
        <>
            <Header /> 
            <div className="h-[200px] bg-gray-300 mb-8"></div>
            <section className="container mx-auto px-4 flex gap-8 justify-center mb-8">
                <div className="w-[50%]">
                    <h2 className="text-2xl font-bold mb-2">{ong.name}</h2>
                    
                    <div className="mb-6 flex gap-4 items-center text-gray-500 text-sm">
                        <span className="flex items-center gap-1">
                            <MapPin className="w-5 h-5" />
                            <span>{ong.city}</span>
                        </span>
                        <span className="flex items-center gap-1">
                            <StarIcon className="w-5 h-5" />
                            <span>4.8 (124 avaliações)</span>
                        </span>
                    </div>

                    <NavigationTab
                        activeTab={activeTab}
                        handleTabClick={handleTabClick}
                        content={['Sobre', 'Necessidades', 'FAQ', 'Galeria', 'Avaliações']}
                    />

                    {renderTabContent()}
                </div>
            
                <div className="flex">
                    <CardInformations 
                        phone="11 99999-9999"
                        email={ong.email || ''}
                        address="Rua dos Animais, 123 - Jardim Esperança"
                        city="São Paulo"
                        state="SP"
                    />
                </div>
            </section>

            <Maps />
        </>
    )
}