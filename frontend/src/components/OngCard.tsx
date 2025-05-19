// import { MapPin } from "lucide-react"
import { Button } from "./Button"
import { Link } from "react-router-dom"

interface OngCardProps {
    id: number
    name: string
    description?: string
    // city?: string
    // state?: string
}

export const OngCard = ( {id, name, description  } : OngCardProps) => {
    return (
        <>
            <div className="w-[400px]">

                <div className="bg-gray-200 h-40 rounded-t-[10px]">

                </div>

                <div className="flex flex-col gap-2 border-2 border-gray-200 rounded-b-[10px] p-4">
                    <h3 className="text-[1.5rem] font-bold">{name}</h3>
                    <span className="text-gray-700 text-[.9rem]">{description}</span>
                    {/* <div className="flex gap-1.5 items-center text-gray-700">
                        <span>
                            <MapPin className="w-5 h-5"/>
                        </span>
                        <span className="text-[.9rem]">
                            {city}, {state}
                        </span>
                    </div> */}

                    <div className=" pt-5">
                        <Button
                            variant="light"
                            size="sm"
                            as={Link}
                            to={`/ong/${id}`}
                            
                        >
                            Ver detalhes
                        </Button>

        
                    </div>
                </div>
            </div>
        
        </>
    )
}