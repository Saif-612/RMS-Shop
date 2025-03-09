
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add console log for debugging
console.log("Main script running");

createRoot(document.getElementById("root")!).render(<App />);

// Log after render
console.log("App rendered");
