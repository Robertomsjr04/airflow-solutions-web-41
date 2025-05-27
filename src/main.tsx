
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import emailjs from 'emailjs-com'
import { loadPolyfills } from './utils/browserSupport.ts'

// Inicializar EmailJS
emailjs.init('YCl2SLRuE85ciO20p')
console.log('📧 EmailJS inicializado com sucesso')

// Load polyfills before rendering the app
const renderApp = async () => {
  // Load any necessary polyfills first
  await loadPolyfills();

  // Then render the app
  createRoot(document.getElementById("root")!).render(<App />);
};

renderApp();
