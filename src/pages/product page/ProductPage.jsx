import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import { Button, Loader } from "@mantine/core";
import Sidebar from "../../component/layout/sidebar/Sidebar";
import "./ProductPagestyle.css";
import SearchBar from "../../component/atom/input/searchbar/SearchBar";
import ProductCard from "../../component/atom/card/product/ProductCard";

const ProductPage = () => {
  // ReactQuery
  const [searchParams] = useSearchParams();

  // useState
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [search, setSearch] = useState(searchParams.get("menu"));

  // Tangkap inputan user
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  // HandleClick
  const handleClick = () => {
    // Panggil fungsi pencarian dengan searchInput
    searchMenu(search);
  };

  // Get Api Produk
  const searchMenu = (name = searchParams.get("menu")) => {
    setLoading(true);
    axios
      .get(`https://api.mudoapi.tech/menus?perPage=12&page=1`, {
        params: { name: name },
      })
      .then((response) => {
        setSearchResults(response?.data.data.Data);
        setLoading(false);
        setIsSearching(true);
        console.log(searchResults);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  };

  useEffect(() => {
    searchMenu();
  }, []);

  return (
    <div className="container ProductPage">
      <Sidebar />
      <div className="Content">
        <div className="Header">
          <h1 className="HeadlineText">Let's eat</h1>
          <div className="UserInput">
            <SearchBar value={search} handleSearch={handleSearch} />
            <Button onClick={handleClick} className="SearchBtn">
              Cari Menu
            </Button>
          </div>
        </div>
        {loading && (
          <>
            <div className="containe Loading">
              <Loader />
            </div>
          </>
        )}
        <div className="container WrapperSearch">
          {!loading &&
            searchResults.map((item) => (
              <ProductCard key={item?.id} item={item} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
