import { Header } from "@/components/Header";
import { useState } from "react";
import { NavigationTab } from "@/components/NavigationTab";

const faqs = [
  { question: "Como doar?", answer: "Você pode doar através do nosso site..." },
  { question: "A doação é segura?", answer: "Sim, utilizamos métodos seguros..." },
  { question: "Quais são os métodos de pagamento?", answer: "Aceitamos cartões..." },
  { question: "Onde encontrar as ONGs parceiras?", answer: "Confira nossa lista..." },
  { question: "Quem somos?", answer: "Somos uma plataforma..." },
  { question: "Como faço para ser parceiro?", answer: "Entre em contato..." },
  { question: "Pergunta X", answer: "Resposta X..." },
  { question: "Pergunta Y", answer: "Resposta Y..." }
];

export const FAQPage = () => {
  const [activeTab, setActiveTab] = useState("Perguntas Frequentes");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <Header />
      <section className="container mx-auto px-4 flex flex-col gap-8 justify-center mb-8">
      <NavigationTab
          activeTab={activeTab}
          handleTabClick={handleTabClick}
          content={["Perguntas Frequentes"]}
        />

        <div className="max-w-7xl mt-[80px] mx-auto flex flex-col items-center justify-between px-6 py-4 gap-16">
            
            <div className="flex justify-between align-items-center gap-55">
                <div className="flex flex-col gap-[52px]">
                    <h2 className="text-[#612928] font-bold text-brown-700 text-[36px]">Perguntas Frequentes</h2>
                    <p className="text-[24px]">
                        Tem dúvidas? Estamos aqui para ajudar! Confira abaixo as respostas para as perguntas mais comuns. Caso não encontre o que procura, entre em contato conosco.          </p>
                </div>
            </div>
          
          <div className="mt-6 flex flex-wrap justify-between gap-[24px]">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-[#E3DEC1] py-2 w-[48%]">
                <button
                  className="w-full flex justify-between text-left font-medium text-lg p-2 bg-white shadow-sm rounded-md"
                  onClick={() => toggleFAQ(index)}
                >
                  {faq.question}
                  <p className="">+</p>
                </button>
                {openIndex === index && (
                  <p className="p-2 text-gray-700 bg-gray-50 rounded-md mt-1">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};