import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import First from './first.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <App />
    <First />
  </>
)
