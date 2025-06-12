// Função para formatar CEP
export const formatCEP = (value: string): string => {
  // Remove tudo que não é número
  const numericValue = value.replace(/\D/g, '');
  
  // Aplica a máscara XXXXX-XXX
  if (numericValue.length <= 5) {
    return numericValue;
  }
  
  return `${numericValue.slice(0, 5)}-${numericValue.slice(5, 8)}`;
};

// Função para formatar Estado (apenas 2 letras maiúsculas)
export const formatState = (value: string): string => {
  // Remove tudo que não é letra e converte para maiúsculo
  const letterValue = value.replace(/[^A-Za-z]/g, '').toUpperCase();
  
  // Limita a 2 caracteres
  return letterValue.slice(0, 2);
};

// Função para remover máscara do CEP
export const removeCEPMask = (value: string): string => {
  return value.replace(/\D/g, '');
};
