import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { OngCard } from "@/components/OngCard"
import { Input } from "@/components/Input"
import { SidebarFilters } from "@/components/SidebarFilters"

import { Search } from "lucide-react"
import { Filter } from "lucide-react"

// import { DataOng } from "@/data/DataOng"
import { Button } from "@/components/Button"
import { useEffect, useState } from "react"
import { getOngs } from "@/api/listOngsApi"
import { OngTypes } from "@/types/OngTypes"

export const SearchPage = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false)
    const [ongs, setOngs] = useState<OngTypes[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')

    useEffect(() => {
        fetchOngs()
    }, [])

    const fetchOngs = async () => {
        try {
            const response = await getOngs()
            setOngs(response)
            console.log(response)
        } catch (error) {
            setError('Erro ao carregar ONGs')
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    const handleApplyFilters = (selectedState: string) => {
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
                        {loading ? (
                            <p>Carregando ONGs...</p>
                        ) : error ? (
                            <p className="text-red-500">{error}</p>
                        ) : (
                            <div className="grid grid-cols-3 gap-6">
                                {ongs.map(ong => (
                                    <OngCard
                                        key={ong.id}
                                        id={ong.id}
                                        name={ong.name}
                                        description={ong.description}
                                        // city={ong.city || ''}
                                        // state={ong.state || ''}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}