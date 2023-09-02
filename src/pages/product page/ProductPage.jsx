import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Button, Loader } from "@mantine/core";
import Sidebar from "../../component/layout/sidebar/Sidebar";
import MenuSection from "../../component/section/Menu Section/MenuSection";
import "./ProductPagestyle.css";
import SearchBar from "../../component/atom/input/searchbar/SearchBar";
import ProductCard from "../../component/atom/card/product/ProductCard";

const ProductPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("menu");
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [shouldDisplayResults, setShouldDisplayResults] = useState(false);
  const searchInputRef = useRef("");

  // Tangkap inputan user
  const handleSearch = (event) => {
    searchInputRef.current = event.target.value;
  };

  // HandleClick
  const handleClick = () => {
    // Panggil fungsi pencarian dengan searchInput
    const input = searchInputRef.current;
    if (input) {
      searchMenu(input);
      setShouldDisplayResults(true);
    } else {
      setShouldDisplayResults(false);
    }
  };

  // Get Api Produk
  const searchMenu = (searchTerm) => {
    axios
      .get("https://api.mudoapi.tech/menus?name=&type" + searchTerm)
      .then((response) => {
        setSearchResults(response?.data.data.Data);
        setLoading(false);
        setIsSearching(true);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (searchTerm) {
      searchMenu(searchTerm);
      setShouldDisplayResults(true);
    } else {
      setLoading(false);
      setIsSearching(false);
      setShouldDisplayResults(false);
    }
  }, [searchTerm]);

  // Kodisi untuk menampilkan konten
  let content;
  // menampilkan loading di awal
  if (loading) {
    content = (
      <div className="container Loading">
        <Loader />
      </div>
    );

    // cek kondisi apakah inputan user ada?
  } else if (isSearching && shouldDisplayResults) {
    // jika inputan ada maka masuk kondisi ini
    // cek apakah aray result punya nilai
    if (searchResults && searchResults.length > 0) {
      content = (
        <div className="container WrapperSearch">
          {searchResults.map((item) => (
            <ProductCard key={item?.id} item={item} />
          ))}
        </div>
      );
    }
    // jika nilai kosong
    else {
      content = (
        <div className="container Loading">
          <h1>Data Kosong</h1>
        </div>
      );
    }
  }
  // jika inputan user tidak memberikan value input namun klik button
  else {
    content = <MenuSection deskripsi="Our Menu" />;
  }
  return (
    <div className="container ProductPage">
      <Sidebar />
      <div className="Content">
        <div className="Header">
          <h1 className="HeadlineText">Let's eat</h1>
          <div className="UserInput">
            <SearchBar handleSearch={handleSearch} />
            <Button onClick={handleClick} className="SearchBtn">
              Cari Menu
            </Button>
          </div>
        </div>
        {/* tampilkan konten */}
        {content}
      </div>
    </div>
  );
};

export default ProductPage;
