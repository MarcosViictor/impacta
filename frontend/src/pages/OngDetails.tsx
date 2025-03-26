import { Button } from "@/components/Button"
import { CardInformations } from "@/components/CardInformations"
import { CardNumbers } from "@/components/CardNumbers"
import { Header } from "@/components/Header"

import { useState } from "react"

import { StarIcon, MapPin } from 'lucide-react'

export const OngDetails = () => {
    const [activeTab, setActiveTab] = useState('Sobre')

    const handleTabClick = (tab: string) => {
        setActiveTab(tab)
    }

    return (
        <>
            <Header /> 

            <section className="flex gap-4 justify-center">
                <div className="w-[40%]">
                    <h2>Amigos dos anmais</h2>
                    
                    <div>
                        <span className="flex items-center gap-2">
                            <MapPin className="w-5" />
                            <span>São Paulo, SP</span>
                        </span>
                        <span className="flex items-center gap-2">
                            <StarIcon className="w-5" />
                            <span>4.8
                            (124 avaliações)</span>
                        </span>
                    </div>

                    <div className="flex gap-2 bg-gray-100 rounded-md p-1 justify-around my-6">
                        <Button
                            variant="active"
                            size="sm"
                            width="full"
                            onClick={() => handleTabClick('Sobre')}
                            className={activeTab === 'Sobre' ? 'bg-white' : ''}
                        >
                            <span>Sobre</span>
                        </Button>

                        <Button
                            variant="active"
                            size="sm"
                            width="full"
                            onClick={() => handleTabClick('Necessidades')}
                            className={activeTab === 'Necessidades' ? 'bg-white' : ''}
                        >
                            <span>Necessidades</span>
                        </Button>
                        <Button
                            variant="active"
                            size="sm"
                            width="full"
                            onClick={() => handleTabClick('Eventos')}
                            className={activeTab === 'Eventos' ? 'bg-white' : ''}
                        >           
                            <span>Eventos</span>
                        </Button>
                        <Button
                            variant="active"
                            size="sm"
                            width="full"
                            onClick={() => handleTabClick('Galeria')}
                            className={activeTab === 'Galeria' ? 'bg-white' : ''}
                        >
                            <span>Galeria</span>
                        </Button>
                    </div>

                    <div>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. In quam et praesentium velit voluptate voluptatem alias? Blanditiis, iure nobis dolor, quidem excepturi totam placeat earum nam commodi sed provident dignissimos!
                        </p>
                    </div>
                    <div className="flex gap-2">
                    <CardNumbers number={43} label="Comunidades Atendidas" />
                    <CardNumbers number={32} label="Pessoas ajudadas" />
                        <CardNumbers number={12} label="KG de Alimentos arrecadados" />
                    </div>

                
                </div>
            
            
             
            <div className="flex">
                <CardInformations 
                    phone="11 99999-9999"
                    email="contato@amigosdosanimais.org"
                    address="Rua dos Animais, 123 - Jardim Esperança"
                    city="São Paulo"
                    state="SP"
                />
            
            </div>

        </section>

           
        </>
    )
}
