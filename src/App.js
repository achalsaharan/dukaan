import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Counter } from './features/counter/Counter';
import './App.css';
import { Header } from './features/nav';
import { Sidebar } from './features/nav';
import { Login } from './features/Login';

function App() {
  return (
    <div style={{ maxWidth: '1500px' }} className="mx-auto">
      <Header />
      <div className="grid grid-cols-6">
        <div className="hidden md:block md:col-span-1 shadow-lg pt-20 min-h-screen bg-purple-700">
          <Sidebar />
        </div>
      </div>
      <div className="col-span-6 md:col-span-5  mt-20">
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
