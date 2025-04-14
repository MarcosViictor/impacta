import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { OngCard } from "@/components/OngCard"
import { Input } from "@/components/Input"
import { SidebarFilters } from "@/components/SidebarFilters"

import { Search } from "lucide-react"
import { Filter } from "lucide-react"

import { DataOng } from "@/data/DataOng"
import { Button } from "@/components/Button"
import { useState } from "react"

export const SearchPage = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false)

    const handleApplyFilters = (selectedState) => {
        console.log("Estado selecionado:", selectedState)
        setIsSidebarVisible(false)
    }

    const toggleSidebar = () => {
        setIsSidebarVisible(!isSidebarVisible)
    }

    return (
        <>
            <Header />
            <section className="container mx-auto px-4 py-8 flex flex-col items-center">
                <div className="w-full max-w-[78rem]">
                    <div className="flex w-full mb-6 items-center justify-between">
                        <div>
                            <h1 className="text-2xl font-bold mb-2">Buscar ONGs</h1>
                            <p className="text-gray-600">Encontre ONGs por localização, causa ou necessidades específicas</p>
                        </div>
                        
                        <Button
                            icon={<Filter className="w-5 h-5"/>}
                            size="sm"
                            variant="light"
                            onClick={toggleSidebar}
                        >
                            Filtros
                        </Button>
                    </div>
                    
                    <div className="flex gap-4 mb-8">
                        <Input
                            placeholder="Buscar por nome, localização..."
                            fullWidth
                        />
                        <Button
                            icon={<Search className="w-5 h-5"/>}
                        >
                            Buscar
                        </Button>
                    </div>
                </div>
                
                <div className="flex">
                    {isSidebarVisible && <SidebarFilters onApplyFilters={handleApplyFilters} />}
                    <div className="w-full max-w-[78rem]">
                        <div className="grid grid-cols-3 gap-6">
                            {DataOng.map(data => (
                                <OngCard
                                    key={data.id}
                                    name={data.name}
                                    description={data.description}
                                    city={data.city}
                                    state={data.state}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
            
            <Footer />
        </>
    )
}