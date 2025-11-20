import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Complet from './Complet'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Complet />
  </StrictMode>,
)
