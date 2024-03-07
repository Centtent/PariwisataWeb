import React from "react";
import Pelayanan from "./Pelayanan";
import Card from "./Card";
import Daftar from "./Daftar";
import Footer from "./Footer";
import Header from "./Header";
import { useState } from "react";
import { useEffect } from "react";
import { apiHandler } from "../Api/apiHandler";
// import { all } from "axios";

export default function Main() {
  const [input, setInput] = useState("");
  const [data, setData] = useState();
  useEffect(() => {
    apiHandler.get().then((result) => setData(result));
  }, []);

  if (!data) return "loading...";

  const deleteHandling = async (id) => {
    setData(data.filter((data) => data.id != id));
    await apiHandler.delete(id);
  };
  console.log(data?.filter((i) => i.nama.toLowerCase().indexOf(input) > -1))
  return (
    <>
      <Header />
      <Pelayanan />
      <div className="pantai" id="pantai">
        <div className="container">
          <center>
            <input placeholder="search.." className="search" onChange={(e) => setInput(e.target.value)} type="text" />
          </center>
          <div className="box-pantai">
            {data?.filter((i) => i.city.toLowerCase().indexOf(input) > -1).map((item, i) => (
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
