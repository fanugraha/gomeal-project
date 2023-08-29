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

const Homepage = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchValue) => {
    setSearchTerm(searchValue);
  };

  return (
    <div className="container Homepage">
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
        <PromoSection />
        <MenuSection deskripsi="Hungry? Our Menus Have You Covered!" />
      </div>
    </div>
  );
};

export default Homepage;
