import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ItemDetail from "./components/ItemDetail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Main />} />
          <Route path="/item/:id" Component={ItemDetail} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
