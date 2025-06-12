import { CardInformations } from "@/components/CardInformations"
// import { CardNumbers } from "@/components/CardNumbers"
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
import { getFaqs } from "@/api/fapApi"
import { FaqTypes } from "@/types/FaqTypes"

type NecessityType = {
  id: number;
  item_name: string;
  quantity: number;
  urgency: 'Alta' | 'Média' | 'Baixa';
}


export const OngDetails = () => {
    const { id } = useParams<{ id: string }>();
    const [activeTab, setActiveTab] = useState('Sobre')
    const [ong, setOng] = useState<OngTypes | null>(null)
    const [faq, setFaq] = useState<FaqTypes[]>([])
    const [loading, setLoading] = useState(true)
    const [necessities, setNecessities] = useState<NecessityType[]>([])
    


    useEffect(() => {
        const fetchOngDetails = async () => {
            if (!id) return;
            try {
                const data = await getOngById(id)
                setOng(data)
                // Map the necessities to the correct type structure
                if (data.necessities && Array.isArray(data.necessities)) {
                    const formattedNecessities = data.necessities.map((item: any) => ({
                        id: item.id || 0,
                        item_name: item.item_name || '',
                        quantity: item.quantity || 0,
                        urgency: (item.urgency as 'Alta' | 'Média' | 'Baixa') || 'Média'
                    }));
                    setNecessities(formattedNecessities);
                }
                console.log('ONG details fetched:', data);
            } catch (error) {
                console.error('Erro ao buscar ONG:', error)
            } finally {
                setLoading(false)
            }
        }

        const fetchFaqs = async () => {
            try {
                const faqs = await getFaqs();
                setFaq(faqs);
            } catch (error) {
                console.error('Erro ao buscar FAQs:', error)
            }
        }

        
        fetchFaqs();
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
                        <p className="text-gray-700 leading-relaxed">{ong.description}</p>
                    </div>
                )
            case 'Necessidades':
                return (
                    <div className="space-y-4">
                        <h3 className="text-xl font-semibold">Itens necessários:</h3>
                        <ul className="grid grid-cols-2 gap-2">
                            {necessities.map((necessity) => (
                                <Itens 
                                    key={necessity.id}
                                    name={necessity.item_name || ''}
                                    quantity={(necessity.quantity || 0).toString()}
                                    priority={necessity.urgency as "Alta" | "Média" | "Baixa"}
                                />
                            ))}
                            
                        </ul>
                    </div>
                )
            case 'FAQ':
                return (
                    <div className="space-y-4">
                        {faq.map((item) => (
                            <CardFAQ 
                                key={item.id}
                                title={item.question}
                                content={item.answer}
                            />
                        ))}
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
            <section className="container mt-15 mx-auto px-4 flex gap-8 justify-center mb-8">
                <div className="w-[50%]">
                    <h2 className="text-2xl font-bold mb-2">{ong.name}</h2>
                    
                    <div className="mb-6 flex flex-col gap-2 text-gray-500 text-sm">
                        <div className="flex gap-4 items-center text-gray-500 text-sm">
                            <span className="flex items-center gap-1">
                                <MapPin className="w-5 h-5" />
                                <span>{ong.user.city}, {ong.user.state}</span>
                            </span>
                            <span className="flex items-center gap-1">
                                <StarIcon className="w-5 h-5" />
                                <span>{ong.avarage_rating > 0 ? ong.avarage_rating : 'Nenhuma avaliação'}</span>
                            </span>
                        </div>

                            <p className="text-[1.5rem] ">{ong.description}</p>
                    </div>

                    <NavigationTab
                        activeTab={activeTab}
                        handleTabClick={handleTabClick}
                        content={['Necessidades', 'FAQ']}
                    />

                    {renderTabContent()}
                </div>
            
                <div className="flex">
                    <CardInformations 
                        phone="11 99999-9999"
                        email={ong.user.email || ''}
                        address={`${ong.user.address} - ${ong.user.postal_code}`}
                        city={ong.user.city}
                        state={ong.user.state}
                    />
                </div>
            </section>

            <Maps 
                address={ong.user.address}
                city={ong.user.city}
                state={ong.user.state}
                postalCode={ong.user.postal_code}
                ongName={ong.name}
            />
        </>
    )
}