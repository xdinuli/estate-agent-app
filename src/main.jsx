import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "./App.css";
import React from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { DndProvider } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { FavoritesProvider } from './context/FavoritesContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <DndProvider backend={HTML5Backend}>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </DndProvider>
  </BrowserRouter>,
);
