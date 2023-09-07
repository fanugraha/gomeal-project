import React, { useState, useEffect } from "react";
import ProductCard from "../../atom/card/product/ProductCard";
import axios from "axios";

const MenuSection = ({ deskripsi, type, onDetailChange }) => {
  // Menyimpan API
  const [menu, setMenu] = useState([]);

  //Fungsi untuk mengambil data dari API
  const getApiMenu = (type) => {
    axios
      .get("https://api.mudoapi.tech/menus?perPage=12&page=1", {
        params: { type },
      })
      .then((res) => {
        setMenu(res?.data.data.Data);
      })
      .catch((err) => {
        console.log("Gagal", err);
      });
  };

  const handleDetail = (id) => {
    onDetailChange(id);
    console.log(id);
  };

  useEffect(() => {
    getApiMenu(type);
  }, [type]);

  return (
    <div className="Product">
      <h1 className="Headline">{deskripsi}</h1>
      <div className="WrapperProduct">
        {menu.map((item) => (
          <ProductCard
            onDetail={() => handleDetail(item.id)}
            key={item.id}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default MenuSection;
