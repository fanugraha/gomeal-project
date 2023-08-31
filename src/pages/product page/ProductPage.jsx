import Sidebar from "../../component/layout/sidebar/Sidebar";
import CategorySection from "../../component/section/Category Section/CategorySection";
import MenuSection from "../../component/section/Menu Section/MenuSection";
import PromoCarousel from "../../component/section/Promo Carousel/PromoCarousel";
import "./ProductPagestyle.css";
import SearchBar from "../../component/atom/input/searchbar/SearchBar";
import { Button } from "@mantine/core";
import React, { useState } from "react";

const ProductPage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };
  return (
    <div className="container ProductPage">
      <Sidebar />
      <div className="Content">
        <div className="Header">
          <h1 className="HeadlineText">Hello, There</h1>
          <div className="UserInput">
            <SearchBar searchTerm={searchTerm} filter={handleSearch} />
            <Button className="SearchBtn">Cari Menu</Button>
          </div>
        </div>
        <PromoCarousel />
        <CategorySection />
        <MenuSection deskripsi="Our Menu" />
      </div>
    </div>
  );
};

export default ProductPage;
