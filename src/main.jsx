//área para importação de arquivos do React. Usando o modelo ESModule.
//Usando a tag import + nomde da importação + from + Caminho para o arquivo.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './global.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
