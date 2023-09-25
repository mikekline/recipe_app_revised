import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import { CookiesProvider } from 'react-cookie';
import  Auth from './pages/auth/Auth'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <CookiesProvider >
    <BrowserRouter>
     <Auth>
        <App />
      </Auth>
    </BrowserRouter>
    </CookiesProvider>
);


