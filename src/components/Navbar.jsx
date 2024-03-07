import React from "react";

export default function Navbar() {
  const username = localStorage.getItem("username")
  return (
    <div className="navbar">
      <div className="container">
        <div className="box-navbar">
          <div className="logo">
            <h1>Pantai.</h1>
          </div>
          <ul className="menu">
            <li>
              <a href="/#home">Home</a>
            </li>
            <li>
              <a href="/#pelayanan">Pelayanan</a>
            </li>
            <li>
              <a href="/#pantai">Pantai</a>
            </li>
            <li className="">
              <a href="/#daftar">Daftar</a>
            </li>
            {username ?
              <>
                <li className="username">{username}</li>
                <li className="active">
                  <a href="/logout">Logout</a>
                </li>
              </>
              : <li className="active">
                <a href="/login">Login</a>
              </li>}
          </ul>
          <i className="fa-solid fa-bars menu-bar"></i>
        </div>
      </div>
    </div>
  );
}
