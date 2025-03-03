
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("main.tsx is executing");
const rootElement = document.getElementById("root");
console.log("Root element found:", rootElement);

if (rootElement) {
  console.log("Creating root and rendering App");
  createRoot(rootElement).render(<App />);
} else {
  console.error("Root element not found! Cannot mount the application.");
  document.body.innerHTML = '<div style="padding: 20px; text-align: center;"><h1>Application Error</h1><p>Could not find root element to mount the application.</p></div>';
}
