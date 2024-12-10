import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import Tab from "./components/Tab"

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <App /> */}
    <Tab/>
  </StrictMode>,
)
