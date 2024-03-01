import React from "react";
import Card from "./Card";
import Daftar from "./Daftar";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import { useEffect } from "react";
import { apiHandler } from "../Api/apiHandler";
// import { all } from "axios";

export default function Main() {
  const [data, setData] = useState();
  useEffect(() => {
    apiHandler.get().then((result) => setData(result));
  }, []);

  if (!data) return "loading...";

  const deleteHandling = async (id) => {
    setData(data.filter((data) => data.id != id));
    await apiHandler.delete(id);
  };
  return (
    <>
      <Header />
      <div className="pantai" id="pantai">
        <div className="container">
          <div className="box-pantai">
            {data.map((item, i) => (
              <Card key={i} {...{ item, deleteHandling }} setAllData={setData} allData={data} />
            ))}
          </div>
        </div>
      </div>
      <Daftar />
      <Footer />
    </>
  );
}
