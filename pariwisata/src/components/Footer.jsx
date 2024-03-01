import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="box-footer">
          <div className="box">
            <h2>Pantai.</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Laboriosam eius rerum quisquam perspiciatis obcaecati, quasi temporibus
              aperiam iusto aliquam doloremque.
            </p>
          </div>
          <div className="box">
            <h3>Menu</h3>
            <a href="#home">Home</a>
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
