import { Edit, Trash2, X } from "lucide-react";
import { Button } from "./Button";
import { Input } from "./Input";
import { useState, useEffect } from "react";
import { FaqTypes } from "@/types/FaqTypes";
import { createFaq, getFaqs } from "@/api/fapApi";

const FAQ = () => {
  const [faqItems, setFaqItems] = useState<FaqTypes[]>([]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newQuestion, setNewQuestion] = useState("");
  const [newAnswer, setNewAnswer] = useState("");
  

  useEffect(() => {
    fetchFaqs();
  }, []);

  const handleEdit = (id: string) => {
    console.log("Edit item with id:", id);
    // Implement edit logic here
  };

  const handleDelete = (id: string) => {
    console.log("Delete item with id:", id);
    // Implement delete logic here
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setNewQuestion("");
    setNewAnswer("");
  };

  
  const fetchFaqs = async () => {
    try {
      const response = await getFaqs();
      setFaqItems(response);
    } catch (error) {
      console.error("Error fetching FAQs:", error);
    }
  };
  
  const handleCreateFaq = async (faq: FaqTypes) => {
    try {
      const response = await createFaq(faq);
      console.log("Creating FAQ:", response);
      await fetchFaqs();
    } catch (error) {
      console.error("Error creating FAQ:", error);
    }
  };

  const handleAddFAQ = async () => {
    if (newQuestion.trim() && newAnswer.trim()) {
      const newFAQ: FaqTypes = {
        question: newQuestion.trim(),
        answer: newAnswer.trim(),
      };
      
      await handleCreateFaq(newFAQ);
      handleCloseModal();
    }
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
        onClick={handleOpenModal}
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
                  // onClick={() => handleEdit(item.id)}
                  className="text-gray-500 hover:text-blue-500 transition-colors"
                  aria-label="Editar"
                >
                  <Edit className="w-4 h-4" />
                </button>
                
                <button 
                  // onClick={() => handleDelete(item.id)}
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

      {/* Modal para adicionar FAQ */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/75 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-md mx-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold">Adicionar nova pergunta</h3>
              <button
                onClick={handleCloseModal}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4">
              <Input
                label="Pergunta"
                placeholder="Digite a pergunta"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                fullWidth
              />

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium">Resposta</label>
                <textarea
                  placeholder="Digite a resposta"
                  value={newAnswer}
                  onChange={(e) => setNewAnswer(e.target.value)}
                  className="mt-1 border border-gray-300 rounded-md p-2 min-h-[100px] resize-vertical"
                  rows={4}
                />
              </div>

              <div className="flex gap-2 justify-end">
                <Button
                  variant="light"
                  size="sm"
                  onClick={handleCloseModal}
                >
                  Cancelar
                </Button>
                <Button
                  size="sm"
                  onClick={handleAddFAQ}
                  disabled={!newQuestion.trim() || !newAnswer.trim()}
                >
                  Adicionar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FAQ;