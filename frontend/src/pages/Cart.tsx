import { Header } from "@/components/Header"
import { Button } from "@/components/Button"
import { useState } from "react"
import { CheckCircle, Circle, X, Heart } from "lucide-react"

interface DonationItem {
  id: string;
  ongName: string;
  typePerson: string;
  value: string;
  selected: boolean;
  icon?: "x" | "heart" | null;
}

export const ShoppingCart = () => {
  const [donations, setDonations] = useState<DonationItem[]>([
    { id: '1', ongName: 'Nome da ONG', typePerson: 'Tipo: Pessoa', value: 'R$ XXXX.XX', selected: true, icon: "x" },
    { id: '2', ongName: 'Nome da ONG', typePerson: 'Tipo: Pessoa', value: 'R$ XXXX.XX', selected: true, icon: null },
    { id: '3', ongName: 'Nome da ONG', typePerson: 'Tipo: Pessoa', value: 'R$ XXXX.XX', selected: false, icon: null },
    { id: '4', ongName: 'Nome da ONG', typePerson: 'Tipo: Juridica', value: 'R$ XXXX.XX', selected: true, icon: "heart" },
  ]);

  const toggleSelection = (id: string) => {
    setDonations(donations.map(donation => 
      donation.id === id ? {...donation, selected: !donation.selected} : donation
    ));
  };

  return (
    <>
      <Header />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold text-red-900 mb-6">Seu Carrinho</h1>
        
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Lista de doações */}
          <div className="w-full lg:w-2/3">
            <div className="space-y-4">
              {donations.map((donation) => (
                <div key={donation.id} className="border rounded p-4">
                  <div className="flex items-start">
                    <div className="mr-3 mt-1">
                      {donation.selected ? (
                        <div onClick={() => toggleSelection(donation.id)} className="cursor-pointer">
                          <CheckCircle className="h-5 w-5 text-blue-600" />
                        </div>
                      ) : (
                        <div onClick={() => toggleSelection(donation.id)} className="cursor-pointer">
                          <Circle className="h-5 w-5" />
                        </div>
                      )}
                    </div>
                    <div className="flex-grow">
                      {donation.icon === "x" && (
                        <div className="flex items-center mb-2">
                          <div className="h-5 w-5 bg-red-200 rounded-full flex items-center justify-center text-xs mr-2">
                            <X className="h-3 w-3" />
                          </div>
                          <span className="font-medium">{donation.ongName}</span>
                        </div>
                      )}
                      {donation.icon === "heart" && (
                        <div className="flex items-center mb-2">
                          <div className="h-5 w-5 bg-pink-100 rounded-full flex items-center justify-center text-xs mr-2">
                            <Heart className="h-3 w-3" />
                          </div>
                          <span className="font-medium">{donation.ongName}</span>
                        </div>
                      )}
                      <div className="flex items-center mb-1">
                        <span className="font-medium">{!donation.icon ? donation.ongName : 'Doação via PIX'}</span>
                      </div>
                      <div className="text-sm text-gray-600">{donation.typePerson}</div>
                    </div>
                    <div className="text-green-500 font-medium">
                      {donation.value}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Resumo do carrinho */}
          <div className="w-full lg:w-1/3">
            <div className="border rounded p-4">
              <div className="font-medium mb-2">Lista de produtos</div>
              <div className="flex justify-between text-sm mb-1">
                <span>Doação para ONG X</span>
                <span>R$ XX.XXX</span>
              </div>
              <div className="flex justify-between text-sm mb-4">
                <span>Doação para ONG Y</span>
                <span>R$ XX.XXX</span>
              </div>
              <div className="border-t pt-2">
                <div className="flex justify-between mb-4">
                  <span className="font-medium">Total</span>
                  <span className="font-medium">R$XXX.XX</span>
                </div>
                <Button
                  variant="primary"
                  width="full"
                  size="md"
                  onClick={() => console.log("Prosseguir para pagamento")}
                >
                  <p>Seguir para o pagamento</p>
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Você pode adicionar o footer aqui se necessário */}
      </div>
    </>
  );
};

export default ShoppingCart;