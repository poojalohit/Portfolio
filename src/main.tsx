import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add dark class to document element
document.documentElement.classList.add('dark')

// Error boundary for better debugging
const rootElement = document.getElementById('root')
if (!rootElement) {
  throw new Error('Root element not found')
}

try {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
} catch (error) {
  console.error('Failed to render app:', error)
  rootElement.innerHTML = `
    <div style="padding: 20px; color: white; background: #1f2937; min-height: 100vh; display: flex; align-items: center; justify-content: center; flex-direction: column;">
      <h1 style="color: #ef4444;">Error Loading Portfolio</h1>
      <p>Please check the browser console for details.</p>
      <pre style="background: #111827; padding: 20px; border-radius: 8px; margin-top: 20px; overflow: auto;">${error}</pre>
    </div>
  `
}
