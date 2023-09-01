import React, { useState, useEffect } from "react";
import ProductCard from "../../atom/card/product/ProductCard";
import axios from "axios";

const MenuSection = ({ deskripsi }) => {
  // Menyimpan API
  const [menu, setMenu] = useState([]);

  //Fungsi untuk mengambil data dari API
  const getApiMenu = () => {
    axios
      .get("https://api.mudoapi.tech/menus")
      .then((res) => {
        setMenu(res?.data.data.Data);
      })
      .catch((err) => {
        console.log("Gagal", err);
      });
  };

  useEffect(() => {
    getApiMenu();
  }, []);

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
