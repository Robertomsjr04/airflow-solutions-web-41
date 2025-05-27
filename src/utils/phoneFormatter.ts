
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
  if (numbers.length !== 10 && numbers.length !== 11) {
    return false;
  }

  // Validações adicionais para DDD válidos (11-99)
  const ddd = parseInt(numbers.substring(0, 2));
  if (ddd < 11 || ddd > 99) {
    return false;
  }

  // Para celular (11 dígitos), o terceiro dígito deve ser 9
  if (numbers.length === 11 && numbers[2] !== '9') {
    return false;
  }

  // Para telefone fixo (10 dígitos), o terceiro dígito não pode ser 0 ou 1
  if (numbers.length === 10 && (numbers[2] === '0' || numbers[2] === '1')) {
    return false;
  }

  return true;
};

export const cleanPhoneNumber = (phone: string): string => {
  return phone.replace(/\D/g, '');
};

export const isValidPhoneFormat = (phone: string): boolean => {
  const phoneRegex = /^\(\d{2}\)\s\d{4,5}-\d{4}$/;
  return phoneRegex.test(phone);
};
