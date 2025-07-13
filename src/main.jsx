
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter basename={`${import.meta.env.VITE_PUBLIC_URL}`}>
      <App />
    </HashRouter>
  </StrictMode>
);