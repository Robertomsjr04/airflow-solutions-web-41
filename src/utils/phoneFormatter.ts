
export const formatBrazilianPhone = (value: string): string => {
  // Remove tudo que não é número
  const numbers = value.replace(/\D/g, '');
  
  // Se está vazio, retorna vazio
  if (!numbers) return '';
  
  // Se começa com 55 (código do Brasil), remove para processar
  let phone = numbers;
  if (phone.startsWith('55') && phone.length > 11) {
    phone = phone.substring(2);
  }
  
  // Limita a 11 dígitos (celular brasileiro)
  phone = phone.substring(0, 11);
  
  // Aplica formatação baseada no tamanho
  if (phone.length <= 2) {
    return `+55 ${phone}`;
  } else if (phone.length <= 7) {
    return `+55 ${phone.substring(0, 2)} ${phone.substring(2)}`;
  } else {
    // Formato completo: +55 81 98887-8888
    const areaCode = phone.substring(0, 2);
    const firstPart = phone.substring(2, 7);
    const secondPart = phone.substring(7);
    
    if (secondPart) {
      return `+55 ${areaCode} ${firstPart}-${secondPart}`;
    } else {
      return `+55 ${areaCode} ${firstPart}`;
    }
  }
};

export const validateBrazilianPhone = (phone: string): boolean => {
  const numbers = phone.replace(/\D/g, '');
  
  // Aceita números com 11 dígitos (celular) ou 13 dígitos (com código do país)
  if (numbers.length === 11) {
    return true;
  }
  
  if (numbers.length === 13 && numbers.startsWith('55')) {
    return true;
  }
  
  return false;
};
