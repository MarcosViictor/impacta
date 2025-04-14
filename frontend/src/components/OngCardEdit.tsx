import { Edit, Trash2 } from "lucide-react";

type OngCardEditItem = {
  id: string;
  name: string;
  quantity: string;
  priority: "Alta" | "Média" | "Baixa";
};

export const OngCardEdit = () => {
  // Static data
  const foodItem: OngCardEditItem = {
    id: "1",
    name: "Ração para cães",
    quantity: "20 kg",
    priority: "Alta",
  };

  // Handler functions
  const handleEdit = () => {
    console.log("Edit item:", foodItem.id);
  };

  const handleDelete = () => {
    console.log("Delete item:", foodItem.id);
  };

  // Priority color mapping
  const priorityColors = {
    Alta: "bg-red-100 text-red-800",
    Média: "bg-yellow-100 text-yellow-800",
    Baixa: "bg-green-100 text-green-800",
  };

  return (
    <div className="border border-gray-300 rounded-md p-4 w-[300px]">
      <div className="flex justify-between items-start mb-2">
        <h2 className="text-xl font-bold">{foodItem.name}</h2>
        <div className="flex gap-2">
          <button 
            onClick={handleEdit}
            className="text-gray-500 hover:text-blue-500 transition-colors"
            aria-label="Editar"
          >
            <Edit className="w-4 h-4" />
          </button>
          <button 
            onClick={handleDelete}
            className="text-gray-500 hover:text-red-500 transition-colors"
            aria-label="Excluir"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        <div>
          <p className="text-gray-500 text-sm">Quantidade:</p>
          <p className="font-medium">{foodItem.quantity}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Prioridade:</p>
          <span className={`px-2 py-1 rounded-full text-xs font-medium ${priorityColors[foodItem.priority]}`}>
            {foodItem.priority}
          </span>
        </div>
      </div>
    </div>
  );
};