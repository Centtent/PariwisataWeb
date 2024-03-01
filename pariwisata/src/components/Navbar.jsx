import React from "react";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <div className="box-navbar">
          <div className="logo">
            <h1>Pantai.</h1>
          </div>
          <ul className="menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#pantai">Pantai</a>
            </li>
            <li className="active">
              <a href="#daftar">Daftar</a>
            </li>
          </ul>
          <i className="fa-solid fa-bars menu-bar"></i>
        </div>
      </div>
    </div>
  );
}
