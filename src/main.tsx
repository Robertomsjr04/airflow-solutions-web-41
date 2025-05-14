
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { loadPolyfills } from './utils/browserSupport.ts'

// Load polyfills before rendering the app
const renderApp = async () => {
  // Load any necessary polyfills first
  await loadPolyfills();
  
  // Then render the app
  createRoot(document.getElementById("root")!).render(<App />);
};

renderApp();
