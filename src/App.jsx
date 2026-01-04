import { useState } from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import PropertyPage from "./pages/PropertyPage";
import PropertiesPage from "./pages/PropertiesPage";
import SignInPage from "./pages/SignInPage"; // <-- 1. Import new page

function App() {
  return (
    <div className="app-container">
      
      {/* --- HEADER --- */}
      <header className="app-header">
        <div className="header-content">
          <Link to="/" className="logo">Estately</Link>
          <nav className="nav-links">
            <Link to="/properties">Properties</Link>
            <Link to="/signin" className="signin-btn">Sign In</Link>
          </nav>
        </div>
      </header>

      {/* --- MAIN CONTENT --- */}
      <main className="app-content">
        <Routes>
          <Route path="/" element={<SearchPage />} />
          <Route path="/properties" element={<PropertiesPage />} />
          <Route path="/property/:id" element={<PropertyPage />} />
          <Route path="/signin" element={<SignInPage />} /> {/* <-- 2. Add Route */}
        </Routes>
      </main>

      {/* --- FOOTER --- */}
      <footer className="app-footer">
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Estately. All rights reserved.</p>
          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;