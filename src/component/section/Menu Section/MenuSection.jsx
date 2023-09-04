import React, { useState, useEffect } from "react";
import ProductCard from "../../atom/card/product/ProductCard";
import axios from "axios";

const MenuSection = ({ deskripsi, type }) => {
  // Menyimpan API
  const [menu, setMenu] = useState([]);

  //Fungsi untuk mengambil data dari API
  const getApiMenu = (type) => {
    axios
      .get("https://api.mudoapi.tech/menus", { params: { type } })
      .then((res) => {
        setMenu(res?.data.data.Data);
      })
      .catch((err) => {
        console.log("Gagal", err);
      });
  };

  useEffect(() => {
    getApiMenu(type);
  }, [type]);

  return (
    <div className="Product">
      <h1 className="Headline">{deskripsi}</h1>
      <div className="WrapperProduct">
        {menu.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
