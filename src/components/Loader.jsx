import React from "react";

export default function Loader() {
  return (
    <div className="loader-overlay">
      <div className="loader">
        <div className="spinner"></div>
        <p>Загрузка...</p>
      </div>
    </div>
  );
}