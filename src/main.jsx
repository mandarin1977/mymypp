
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename={`${import.meta.env.VITE_PUBLIC_URL}`}>
      <App />
    </BrowserRouter>
  </StrictMode>
);