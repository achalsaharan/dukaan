import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { Counter } from './features/counter/Counter';
import './App.css';
import { Header } from './features/nav';
import { Sidebar } from './features/nav';
import { Login } from './features/authentication/Login';
import { SignUp } from './features/authentication/SignUp';

function App() {
  return (
    <div style={{ maxWidth: '1500px' }} className="mx-auto h-screen">
      <Header />
      <div className="grid grid-cols-6">
        <div className="hidden md:block md:col-span-1 shadow-lg pt-20 min-h-screen bg-purple-700">
          <Sidebar />
        </div>

        <div className="col-span-6 md:col-span-5 pt-10 h-screen">
          <Routes>
            <Route path="/" element={<Counter />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
