import React from "react";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header id="home"> 
      <Navbar />
      <div className="hero">
        <div className="container">
          <div className="box-hero">
            <div className="box">
              <h1>
                Pilihan Pantai Terbaik <br />
                Liburan Bersama Keluarga
              </h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, autem?</p>
              <button>Selengkapnya</button>
            </div>
            <div className="box">
              <img src="/Hero.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
