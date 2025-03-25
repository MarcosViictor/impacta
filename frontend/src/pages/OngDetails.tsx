import { CardInformations } from "@/components/CardInformations"
import { CardNumbers } from "@/components/CardNumbers"
import { Header } from "@/components/Header"

export const OngDetails = () => {
    return (
        <>
            <Header />  
            <div className="flex">
                <CardInformations 
                    phone="11 99999-9999"
                    email="contato@amigosdosanimais.org"
                    address="Rua dos Animais, 123 - Jardim Esperança"
                    city="São Paulo"
                    state="SP"
                />
                <CardInformations 
                    phone="11 99999-9999"
                    email="contato@amigosdosanimais.org"
                    address="Rua dos Animais, 123 - Jardim Esperança"
                    city="São Paulo"
                    state="SP"
                />
            </div>

            <div className="flex gap-2">
                <CardNumbers number={43} label="Comunidades Atendidas" />
                <CardNumbers number={32} label="Pessoas ajudadas" />
                <CardNumbers number={12} label="KG de Alimentos arrecadados" />
            </div>
        </>
    )
}
