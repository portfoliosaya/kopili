// src/components/DownloadApp.js
import React, { useState, useEffect } from "react";
import "../components/DownloadApp.css";

const DownloadApp = () => {
  const [isClosed, setIsClosed] = useState(false);

  // Fungsi untuk menutup komponen DownloadApp
  const handleClose = () => {
    setIsClosed(true);
    localStorage.setItem("isDownloadAppClosed", true);
  };

  useEffect(() => {
    // Periksa apakah komponen DownloadApp sudah ditutup sebelumnya
    const isClosedPreviously = localStorage.getItem("isDownloadAppClosed");
    if (isClosedPreviously) {
      setIsClosed(true);
    }
  }, []);

  // Jika komponen sudah ditutup, kembalikan null
  if (isClosed) {
    return null;
  }

  const redirectToPlayStore = () => {
    window.open("https://play.google.com/", "_blank");
  };

  const redirectToAppStore = () => {
    window.open("https://www.apple.com/id/app-store/", "_blank");
  };

  return (
    <div className="download-app bg-warning">
      <div className="container">
        <p style={{ color: "black" }}>Download Aplikasi Kami</p>
        <div className="buttons">
          <button onClick={redirectToPlayStore}>Google Play Store</button>
          <button onClick={redirectToAppStore}>Apple App Store</button>
          <button className="close-button" onClick={handleClose}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default DownloadApp;
