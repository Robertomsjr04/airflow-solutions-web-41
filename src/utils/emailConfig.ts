
export const EMAIL_CONFIG = {
  SERVICE_ID: 'service_airflow',
  TEMPLATE_ID: 'template_quote_request',
  USER_ID: 'wvgkuZY_VUB081QOV',
  TO_EMAIL: 'airflow.arcondicionado@gmail.com'
} as const;

export const EMAIL_TEMPLATES = {
  QUOTE_REQUEST: 'template_quote_request',
  CONTACT_FORM: 'template_contact_form'
} as const;

// Função para verificar se o EmailJS está configurado
export const isEmailJSConfigured = (): boolean => {
  return !!(EMAIL_CONFIG.SERVICE_ID && EMAIL_CONFIG.TEMPLATE_ID && EMAIL_CONFIG.USER_ID);
};

// Função para validar configuração do EmailJS
export const validateEmailJSConfig = (): { isValid: boolean; errors: string[] } => {
  const errors: string[] = [];
  
  if (!EMAIL_CONFIG.SERVICE_ID) {
    errors.push('SERVICE_ID não configurado');
  }
  
  if (!EMAIL_CONFIG.TEMPLATE_ID) {
    errors.push('TEMPLATE_ID não configurado');
  }
  
  if (!EMAIL_CONFIG.USER_ID) {
    errors.push('USER_ID não configurado');
  }
  
  return {
    isValid: errors.length === 0,
    errors
  };
};
