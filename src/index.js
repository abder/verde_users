import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Home, User } from './pages';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/user/:id" element={<User />} />
    </Routes>
  </BrowserRouter>
);
