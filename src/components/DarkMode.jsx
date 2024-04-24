import React, { useState } from "react";
import "../components/DarkMode.css"; // import file CSS

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Menambahkan class 'dark-mode' ke <body> saat darkMode aktif
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <div className="dark-mode-toggle">
      <label className="switch">
        <input type="checkbox" checked={darkMode} onChange={toggleDarkMode} />
        <span className="slider round"></span>
      </label>
      <p style={{ color: darkMode ? "white" : "black" }}>Dark Mode</p>
    </div>
  );
};

export default DarkModeToggle;
