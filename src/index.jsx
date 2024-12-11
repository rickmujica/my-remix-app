import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/main.scss';
import AppRoutes from './routes';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
