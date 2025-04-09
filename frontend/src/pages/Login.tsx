import { Button } from "@/components/Button"
import { Input } from "@/components/Input"

import { Link } from "react-router-dom"

export const Login = () => {
    return(
        <>
            <div className="justify-center flex items-center flex-1 h-screen">
                <div className="rounded-lg p-8 flex flex-col items-center justify-center border-3 border-beige-100 w-[550px] h-[500px] gap-3 shadow-lg">
                    <h1 className="text-center font-semibold text-3xl">Login</h1>
                    <p className="text-gray-600">Entre com seu e-mail e senha</p>
                    <div className="flex gap-5 flex-col w-full">
                        <Input label="E-mail" placeholder="mail@mail.com" fullWidth={true} />
                        <Input label="Senha" placeholder="********" fullWidth={true} type="password" />
                        <Button
                            size="lg"
                        >
                            Entrar
                        </Button>
                    </div>

                    <p className="flex gap-1 text-gray-600 text-[.9rem]">Não tem uma conta? 
                            <Link to={'/register'}>
                                <span className="font-bold underline text-black">
                                    Criar conta
                                </span>
                            </Link>
                    </p>

                </div>
            </div>
        </>
    )
}