type Props = {
    id?: number;
    name: string;
    quantity: string;
    priority?: "Alta" | "Média" | "Baixa";
};

export const Itens = ({ name, quantity, priority} : Props) => {
    return (
        <div  className=" flex justify-between items-center bg-white rounded-lg text-sm w-full p-3 border-2 border-gray-200">
            <div>
                <h3 className="text-sm font-semibold">{name}</h3>
                <p className="text-gray-700">Quantidade: {quantity}</p>
            </div>

           <span className="text-[.7rem] text-green-700 bg-green-300 px-2 py-1 rounded-full font-semibold">{priority}</span> 
        </div>
    )
}
