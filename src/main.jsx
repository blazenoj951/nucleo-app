import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Handle URL tab shortcuts (from manifest shortcuts)
const urlParams = new URLSearchParams(window.location.search);
const startTab = urlParams.get('tab') || null;
if (startTab) {
  window.__NUCLEO_START_TAB__ = startTab;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
