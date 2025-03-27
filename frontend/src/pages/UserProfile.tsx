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
                        content={['Sobre', 'Doações', 'ONGs Seguidas']}
                    />
                </div>
            </section>
            
        </>
    )
}
