import Sidebar from "../../component/layout/sidebar/Sidebar";
import CategorySection from "../../component/section/Category Section/CategorySection";
import MenuSection from "../../component/section/Menu Section/MenuSection";
import PromoCarousel from "../../component/section/Promo Carousel/PromoCarousel";
import "./ProductPagestyle.css";
import SearchBar from "../../component/atom/input/searchbar/SearchBar";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router";
import { useState } from "react";

const ProductPage = () => {
  const navigate = useNavigate();

  // Ambil input user
  const [searchTerm, setSearchTerm] = useState("");

  // Tangkap inputan user
  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  // HandleClick
  const handleClick = () => {
    navigate(`/seach?term=${searchTerm}`);
  };

  return (
    <div className="container ProductPage">
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
        <MenuSection deskripsi="Our Menu" />
      </div>
    </div>
  );
};

export default ProductPage;
