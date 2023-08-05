import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App';
import { BrowserRouter as Router } from 'react-router-dom';


const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(
<React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,

);


 
