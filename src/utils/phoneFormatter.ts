
export const formatBrazilianPhone = (value: string): string => {
  // Remove tudo que não é número
  const numbers = value.replace(/\D/g, '');
  
  // Se está vazio, retorna vazio
  if (!numbers) return '';
  
  // Limita a 11 dígitos (celular brasileiro)
  const phone = numbers.substring(0, 11);
  
  // Aplica formatação baseada no tamanho
  if (phone.length <= 2) {
    return phone;
  } else if (phone.length <= 6) {
    return `(${phone.substring(0, 2)}) ${phone.substring(2)}`;
  } else if (phone.length <= 10) {
    // Telefone fixo: (11) 1234-5678
    return `(${phone.substring(0, 2)}) ${phone.substring(2, 6)}-${phone.substring(6)}`;
  } else {
    // Celular: (11) 91234-5678
    return `(${phone.substring(0, 2)}) ${phone.substring(2, 7)}-${phone.substring(7)}`;
  }
};

export const validateBrazilianPhone = (phone: string): boolean => {
  const numbers = phone.replace(/\D/g, '');
  
  // Aceita números com 10 dígitos (fixo) ou 11 dígitos (celular)
  return numbers.length === 10 || numbers.length === 11;
};
