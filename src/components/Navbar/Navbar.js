import React from "react";
import storeLogo from "../../assets/location.png";

export default function Navbar() {
  return (
    <div className="d-flex flex-justify-space-between nav-yellow-shadow p-1 align-items-center">
      <div className="nav-logo-section">
        <img src={storeLogo} alt="Greengrocer-logo" className="mb-1" />
        <h3 className="ml-4 aqua-color">Greengrocer</h3>
      </div>
      <div className="mr-4">
        <h5> Products</h5>
      </div>
    </div>
  );
}
