import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import ContextProvider from './context/Context.jsx'
import './css/index.css'

createRoot(document.getElementById('root')).render(
  <ContextProvider>
    <App />
  </ContextProvider>,
)
