import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from '@react-oauth/google';

const clientId = '839950613432-42casnpsam1hv2jvvofvtefdvngsc0eb.apps.googleusercontent.com';
console.log("Google Client ID: ", clientId);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GoogleOAuthProvider clientId={clientId}>
    <App />
  </GoogleOAuthProvider>
);

reportWebVitals();
