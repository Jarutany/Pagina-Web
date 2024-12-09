import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '/src/routes/navbar/Navbar.jsx';
import Footer from '/src/routes/footer/Footer.jsx';

export default function App() {
  return (
    <div className="relative min-h-screen">
      <Navbar />
      <div className="mt-40 sm:mt-24">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
