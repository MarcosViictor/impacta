import { Header } from "@/components/Header"
import { Input } from "@/components/Input"
import { useState } from "react"

export const UpdateOng = () => {
    const [name, setName] = useState("")

    return (
        <>
            <Header />

            <section className="container mx-auto px-4 flex gap-8 justify-center mb-8">
                <Input 
                    label="Nome" 
                    placeholder="Nome da ONG" 
                    value={name}    
                    onChange={(e) => setName(e.target.value)} 
                    type="text" 
                    
                />
            </section>
        </>
    )
}
