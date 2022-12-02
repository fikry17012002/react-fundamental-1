import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import HomePage from '../pages/HomePage';
import AddPage from '../pages/AddPage';
import DetailPage from '../pages/DetailPage';

function CatatanApp() {
  return (
    <div className="catatan-app">
      <header className='catatan-app__header'>
        <h1>Aplikasi Catatan</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
          <Route path="/catatans/:id" element={<DetailPage />} />
        </Routes>
      </main>
    </div>
  );
}
 
export default CatatanApp;