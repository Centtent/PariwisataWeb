import React from "react";

export default function Daftar() {
  return (
    <div className="daftar" id="daftar">
      <div className="container">
        <div className="box-daftar">
          <h1>
            Ingin Berlibur? <br />
            Daftarkan Keluarga Anda Sekarang!
          </h1>
          <h2>Klik Link di Bawah Ini!</h2>
          <button>
            <i className="fa-brands fa-whatsapp"></i> Whatsapp
          </button>
          <button>
            <i className="fa-regular fa-envelope"></i> Gmail
          </button>
          <button>
            <i className="fa-brands fa-instagram"></i> intagram
          </button>
        </div>
      </div>
    </div>
  );
}
