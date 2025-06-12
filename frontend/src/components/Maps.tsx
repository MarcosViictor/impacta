import { useEffect, useState } from 'react';
import { MapPin, AlertCircle } from 'lucide-react';
import { generateGoogleMapsUrl, formatAddressDisplay, isValidAddress } from '@/utils/maps';

interface MapsProps {
  address?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  ongName?: string;
}

export const Maps = ({ 
  address, 
  city, 
  state, 
  postalCode,
  ongName = "Localização"
}: MapsProps) => {
  const [mapSrc, setMapSrc] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const addressInfo = { address, city, state, postalCode };
  const isAddressValid = isValidAddress(addressInfo);

  useEffect(() => {
    if (!isAddressValid) {
      setIsLoading(false);
      setHasError(true);
      return;
    }

    try {
      const url = generateGoogleMapsUrl(addressInfo);
      setMapSrc(url);
      setHasError(false);
    } catch (error) {
      console.error('Erro ao gerar URL do mapa:', error);
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  }, [address, city, state, postalCode, isAddressValid]);

  const handleMapLoad = () => {
    setIsLoading(false);
  };

  const handleMapError = () => {
    setIsLoading(false);
    setHasError(true);
    console.error('Erro ao carregar o mapa');
  };

  if (!isAddressValid) {
    return (
      <div className="flex-1 w-[1000px] items-center justify-center mx-auto pt-5 pb-10 pl-10 pr-10">
        <div className="text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <AlertCircle className="w-6 h-6 text-yellow-600" />
            <h3 className="text-xl font-semibold">Localização não disponível</h3>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 inline-block">
            <p className="text-yellow-800">
              Informações de endereço insuficientes para exibir o mapa.
            </p>
            <p className="text-yellow-600 text-sm mt-1">
              É necessário pelo menos cidade e estado.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 w-[1000px] items-center justify-center mx-auto pt-5 pb-10 pl-10 pr-10">
      <div className="mb-4 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <MapPin className="w-6 h-6 text-blue-600" />
          <h3 className="text-xl font-semibold">Localização</h3>
        </div>
        <div className="bg-gray-50 rounded-lg p-4 inline-block max-w-2xl">
          <p className="text-gray-800 font-medium">{ongName}</p>
          <p className="text-gray-600 text-sm">
            {formatAddressDisplay(addressInfo)}
          </p>
        </div>
      </div>
      
      <div className="relative">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-100 rounded-lg flex items-center justify-center z-10">
            <div className="flex items-center gap-2">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
              <span className="text-gray-600">Carregando mapa...</span>
            </div>
          </div>
        )}
        
        {hasError && (
          <div className="absolute inset-0 bg-gray-100 rounded-lg flex items-center justify-center z-10">
            <div className="text-center">
              <AlertCircle className="w-8 h-8 text-red-500 mx-auto mb-2" />
              <p className="text-red-600">Erro ao carregar o mapa</p>
              <p className="text-gray-500 text-sm">Verifique sua conexão com a internet</p>
            </div>
          </div>
        )}
        
        <iframe
          src={mapSrc}
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen={true}
          loading="lazy"
          className="rounded-lg shadow-md"
          title={`Mapa da localização de ${ongName}`}
          onLoad={handleMapLoad}
          onError={handleMapError}
        />
      </div>
      
      <div className="mt-4 text-center">
        <p className="text-sm text-gray-500">
          📍 Visualize a localização da ONG no mapa acima
        </p>
        <button 
          onClick={() => window.open(`https://www.google.com/maps/search/${encodeURIComponent(formatAddressDisplay(addressInfo))}`, '_blank')}
          className="text-blue-600 hover:text-blue-800 text-sm underline mt-1"
        >
          Abrir no Google Maps
        </button>
      </div>
    </div>
  );
};
  