import { CardInformations } from "@/components/CardInformations"
import { Header } from "@/components/Header"

export const OngDetails = () => {
    return (
        <>
            <Header />  
            <div className="flex">
                <CardInformations />
                <CardInformations />
            </div>
        </>
    )
}
