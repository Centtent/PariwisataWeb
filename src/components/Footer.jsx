import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="box-footer">
          <div className="box">
            <h2>Pantai.</h2>
            <p>
              Di website ini anda dapat melihat berbagai jenis kriteria pantai di berbagai daerah yg sangat menarik dan wajib untuk dikunjungi
            </p>
          </div>
          <div className="box">
            <h3>Menu</h3>
             <a href="#home">Home</a>
            <a href="#pelayanan">Pelayanan</a>
            <a href="#pantai">Pantai</a>
            <a href="#daftar">Daftar</a>
          </div>
          <div className="box">
            <p>
              &copy; Copyright by <span>Vincent</span> All Rights Reserved 2024, Indonesia
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
