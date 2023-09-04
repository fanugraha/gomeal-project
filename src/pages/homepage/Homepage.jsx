import React, { useState } from "react";
import Sidebar from "../../component/layout/sidebar/Sidebar";
import "./Homepagestyle.css";
import PromoSection from "../../component/section/Promo Section/PromoSection";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuSection from "../../component/section/Menu Section/MenuSection";
import PromoCarousel from "../../component/section/Promo Carousel/PromoCarousel";
import SearchBar from "../../component/atom/input/searchbar/SearchBar";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import CategorySection from "../../component/section/Category Section/CategorySection";

const Homepage = () => {
  const navigate = useNavigate();
  // Ambil inputan user
  const [searchTerm, setSearchTerm] = useState("");
  const [category, setCategory] = useState("");

  // Menangkap input user kedalam state
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // handleClick
  const handleClick = () => {
    // Navigasi ke halaman '/search' dengan mengirim searchTerm sebagai parameter URL
    navigate(`/products?menu=${searchTerm}`);
  };

  // handlecategiry
  const handleCategory = (beverage) => {
    setCategory(beverage);
  };

  return (
    <div className="container Homepage">
      <Sidebar />
      <div className="Content">
        <div className="Header">
          <h1 className="HeadlineText">Hello, There</h1>
          <div className="UserInput">
            <SearchBar handleSearch={handleSearch} />
            <Button onClick={handleClick} className="SearchBtn">
              Cari Menu
            </Button>
          </div>
        </div>
        <PromoCarousel />
        <PromoSection />
        <CategorySection onCategoryChange={handleCategory} />
        <MenuSection
          type={category}
          deskripsi="Hungry? Our Menus Have You Covered!"
        />
      </div>
    </div>
  );
};

export default Homepage;
