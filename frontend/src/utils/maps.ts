// Utilitário para gerar URLs do Google Maps

export interface AddressInfo {
  address?: string;
  city?: string;
  state?: string;
  postalCode?: string;
  country?: string;
}

/**
 * Gera uma URL do Google Maps Embed baseada nas informações de endereço
 * @param addressInfo - Informações do endereço
 * @returns URL do Google Maps Embed
 */
export const generateGoogleMapsUrl = (addressInfo: AddressInfo): string => {
  const { address, city, state, postalCode, country = 'Brasil' } = addressInfo;
  
  // Constrói o endereço completo filtrando valores vazios ou padrão
  const addressParts = [];
  
  if (address && address.trim() !== '' && address !== 'Rua') {
    addressParts.push(address.trim());
  }
  
  if (city && city.trim() !== '') {
    addressParts.push(city.trim());
  }
  
  if (state && state.trim() !== '') {
    addressParts.push(state.trim());
  }
  
  if (postalCode && postalCode.trim() !== '' && postalCode !== '123123') {
    addressParts.push(postalCode.trim());
  }
  
  addressParts.push(country);
  
  const fullAddress = addressParts.join(', ');
  const encodedAddress = encodeURIComponent(fullAddress);
  
  // Gera timestamp único para evitar cache
  const timestamp = Date.now();
  
  // URL do Google Maps Embed
  return `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.4673181167245!2d-46.63330908444329!3d-23.588019867173803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c723d4c5e3%3A0xe1f2b9e9a85fdfcb!2s${encodedAddress}!5e0!3m2!1spt-BR!2sbr!4v${timestamp}!5m2!1spt-BR!2sbr`;
};

/**
 * Formata um endereço para exibição legível
 * @param addressInfo - Informações do endereço
 * @returns String formatada do endereço
 */
export const formatAddressDisplay = (addressInfo: AddressInfo): string => {
  const { address, city, state, postalCode } = addressInfo;
  
  const parts = [];
  
  if (address && address.trim() !== '' && address !== 'Rua') {
    parts.push(address.trim());
  }
  
  if (city && city.trim() !== '') {
    parts.push(city.trim());
  }
  
  if (state && state.trim() !== '') {
    parts.push(state.trim());
  }
  
  if (postalCode && postalCode.trim() !== '' && postalCode !== '123123') {
    parts.push(`CEP: ${postalCode.trim()}`);
  }
  
  return parts.join(', ');
};

/**
 * Valida se as informações de endereço são suficientes para gerar um mapa
 * @param addressInfo - Informações do endereço
 * @returns true se o endereço é válido, false caso contrário
 */
export const isValidAddress = (addressInfo: AddressInfo): boolean => {
  const { city, state } = addressInfo;
  
  // Pelo menos cidade e estado são necessários
  return !!(city && city.trim() !== '' && state && state.trim() !== '');
};
