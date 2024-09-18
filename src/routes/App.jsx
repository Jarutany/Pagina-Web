import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '/src/routes/navbar/Navbar.jsx';
import Footer from '/src/routes/footer/Footer.jsx';

export default function App() {
  return (
    <div>
      <Navbar />
      <Outlet /> {/* This will render the matched child route */}
      <Footer />
    </div>
  );
}
