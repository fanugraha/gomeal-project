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
import BestDeal from "../../component/section/Best Deal/BestDeal";
import Footer from "../../component/section/Footer/Footer";
import Navbar from "../../component/layout/navbar/Navbar";

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
    if (!searchTerm) return;
    navigate(`/products?menu=${searchTerm}`);
  };

  // handleCategory
  const handleCategory = (event) => {
    setCategory(event);
  };

  // detailProduct
  const navigateDetail = (id) => {
    navigate(`/products/${id}`);
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
          onDetailChange={navigateDetail}
        />
        <BestDeal />
        <Footer />
        <Navbar />
      </div>
    </div>
  );
};

export default Homepage;
