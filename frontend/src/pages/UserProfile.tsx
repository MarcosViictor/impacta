import { Header } from "@/components/Header"
import { CardNumbers } from "@/components/CardNumbers"
import { CircleUserRound } from "lucide-react"
import { NavigationTab } from "@/components/NavigationTab"
import { Button } from "@/components/Button"

import { useState } from "react"

import { Edit } from "lucide-react"


export const UserProfile = () => {
    const [activeTab, setActiveTab] = useState("Sobre")

    const handleTabClick = (tab: string) => {
        setActiveTab(tab)
    }

    const renderTabContent = () => {
        switch (activeTab) {
            case "Sobre":
            return (
                <div className={`rounded-lg p-4 flex flex-col items-start justify-center border-3 border-beige-100`}>
                    <h3 className="text-2xl font-bold">Sobre</h3>
                    <p className="text-gray-500 text-sm pb-2">Informações pessoais e biografia</p>
                    <p className="">Lorem ipsum dolor sit amet  </p>
                </div>
            )   
        case "Doações":
            return (
                <div  className={`rounded-lg p-4 flex flex-col items-start justify-center border-3 border-beige-100`}>
                    <h3 className="text-2xl font-bold">Histórico de Doações</h3>
                    <p className="text-gray-500 text-sm pb-5">Veja todas as doações que você já fez</p>
                    <div className="flex flex-col gap-4 w-full">
                        <div className="rounded-lg p-4 flex flex-col items-start justify-center border-1 border-beige-200  bg-gray-100">
                            <p className="text-2xl font-bold">ONG</p>
                            <p className="text-gray-700 text-sm pb-1">Itens doados</p>
                            <ul className="list-disc list-inside">
                                {/* fazer uma lista iterativa depois */}
                                <li>Item 1 (100 unidades)</li>
                                <li>Item 2 (100 unidades)</li>
                                <li>Item 3 (100 unidades)</li>
                            </ul>
                        </div>
                        <Button
                            variant="light"
                            width="full"
                            size="sm"
                            className="ml-auto"
                            onClick={() => {console.log("Ver mais")}}
                        >
                            <p>Ver mais</p>
                        </Button>
                    </div>
                        
                </div>
            )
        }
    }   

    return (
        <>
            <Header />

            <div className="h-[200px] bg-gray-300 mb-7">
                
            </div>
            
            <section className="container mx-auto px-4 flex gap-8 justify-center mb-8">

                <div className="flex flex-col gap-8">
                    <div className="flex gap-2 items-center">
                        <CircleUserRound className="w-20 h-20" />
                        <div>
                            <h3 className="text-2xl font-bold">Julio</h3>
                            <p className="text-gray-500">São Paulo, SP</p>
                        </div>
                        <Button
                            variant="light"
                            size="sm"
                            className="ml-auto"
                            onClick={() => {console.log("Editar Perfil")}}
                        >
                            <Edit className="w-4 h-4" />
                        </Button>
                    </div>
                    <div className="flex gap-2">
                        <CardNumbers number={100} label="Doações" />
                        <CardNumbers number={100} label="Doações" />
                        <CardNumbers number={100} label="Doações" />
                    </div>
                    <NavigationTab
                        activeTab={activeTab}
                        handleTabClick={handleTabClick}
                        content={['Sobre', 'Doações']}
                    />
                    
                    {renderTabContent()}

                    
                </div>
            </section>
            
        </>
    )
}
