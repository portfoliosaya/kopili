import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const [darkMode, setDarkMode] = useState(false);
  const [textMode, setTextMode] = useState("dark"); // Tambahkan state textMode

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Menambahkan class 'dark-mode' ke <body> saat darkMode aktif
    document.body.classList.toggle("dark-mode", !darkMode);
    // Mengubah mode teks
    setTextMode(textMode === "dark" ? "light" : "dark");
  };

  return (
    <nav className={`navbar bg-${darkMode ? "dark" : "light"} border-bottom border-warning border-2 shadow fixed-top`}>
      <div className="container-fluid">
        <a className={`navbar-brand fw-bold text-${darkMode ? "light" : "warning"} fs-2`} href="/">
          KOPILI
        </a>
        <div className="dark-mode-toggle">
          <label className="switch">
            <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
            <span className="slider round"></span>
          </label>
          <p style={{ color: darkMode ? "white" : "black" }}>{textMode === "dark" ? "Dark Mode" : "Light Mode"}</p>
        </div>
        <ul className="nav">
          <li className="nav-item">
            <a className={`nav-link link-${textMode} fw-semibold`} href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a onClick={() => navigate("/About")} className={`nav-link link-${textMode} fw-semibold`} href="">
              List Menu
            </a>
          </li>
          <li className="nav-item">
            <a onClick={() => navigate("/")} className={`nav-link link-${textMode} fw-semibold`} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
