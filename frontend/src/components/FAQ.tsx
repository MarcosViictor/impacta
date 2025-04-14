import { Edit, Trash2 } from "lucide-react";
import { Button } from "./Button";

type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

const FAQ = () => {
  // Static FAQ data
  const faqItems: FAQItem[] = [
    {
      id: "1",
      question: "Como posso fazer uma doação?",
      answer: "Você pode fazer doações através da nossa página de doações, onde aceitamos itens específicos e contribuições financeiras.",
    },
    {
      id: "2",
      question: "Vocês aceitam voluntários?",
      answer: "Sim! Estamos sempre em busca de voluntários. Entre em contato conosco para saber mais sobre as oportunidades disponíveis.",
    },
    {
      id: "3",
      question: "Como são utilizadas as doações?",
      answer: "Todas as doações são direcionadas para o resgate, tratamento e cuidado dos animais. Mantemos relatórios transparentes sobre a utilização dos recursos.",
    },
  ];

  // Handler functions (would be implemented in a real scenario)
  const handleEdit = (id: string) => {
    console.log("Edit item with id:", id);
    // Implement edit logic here
  };

  const handleDelete = (id: string) => {
    console.log("Delete item with id:", id);
    // Implement delete logic here
  };

  return (
    <div className="border border-gray-300 rounded-md p-4">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold mb-1">Perguntas Frequentes</h2>
          <p className="text-gray-500 text-sm">Tire suas dúvidas sobre nossa organização</p>
        </div>
        <Button
        size="sm"
        >
            Adicionar
        </Button>
        
      </div>
      
      <div className="flex flex-col gap-4">
        {faqItems.map((item) => (
          <div key={item.id} className="border border-gray-200 rounded-lg p-4">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h3 className="font-medium text-gray-700 mb-2">{item.question}</h3>
                <p className="text-gray-600 text-sm">{item.answer}</p>
              </div>
              <div className="flex gap-2 ml-4">
                <button 
                  onClick={() => handleEdit(item.id)}
                  className="text-gray-500 hover:text-blue-500 transition-colors"
                  aria-label="Editar"
                >
                  <Edit className="w-4 h-4" />
                </button>
                
                <button 
                  onClick={() => handleDelete(item.id)}
                  className="text-gray-500 hover:text-red-500 transition-colors"
                  aria-label="Excluir"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;