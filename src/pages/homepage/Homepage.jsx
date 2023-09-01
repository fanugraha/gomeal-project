import React, { useState } from "react";
import Sidebar from "../../component/layout/sidebar/Sidebar";
import "./Homepagestyle.css";
import PromoSection from "../../component/section/Promo Section/PromoSection";
import "bootstrap/dist/css/bootstrap.min.css";
import MenuSection from "../../component/section/Menu Section/MenuSection";
import CategorySection from "../../component/section/Category Section/CategorySection";
import PromoCarousel from "../../component/section/Promo Carousel/PromoCarousel";
import SearchBar from "../../component/atom/input/searchbar/SearchBar";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();
  // Ambil inputan user
  const [searchTerm, setSearchTerm] = useState("");

  // Menangkap input user kedalam state
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  console.log(searchTerm);
  // handleClick
  const handleClick = () => {
    // Navigasi ke halaman '/search' dengan mengirim searchTerm sebagai parameter URL
    navigate(`/search?menu=${searchTerm}`);
  };

  console.log(searchTerm);
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
        <CategorySection />
        <PromoSection />
        <MenuSection deskripsi="Hungry? Our Menus Have You Covered!" />
      </div>
    </div>
  );
};

export default Homepage;
