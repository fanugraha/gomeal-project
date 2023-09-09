import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button, Loader } from "@mantine/core";
import Sidebar from "../../component/layout/sidebar/Sidebar";
import "./ProductPagestyle.css";
import SearchBar from "../../component/atom/input/searchbar/SearchBar";
import ProductCard from "../../component/atom/card/product/ProductCard";

const ProductPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(searchParams.get("menu"));
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState(1);

  // State untuk mengontrol apakah pagination harus ditampilkan atau disembunyikan
  const [showPagination, setShowPagination] = useState(true);

  // Get Api Produk
  const searchMenu = (name = searchParams.get("menu")) => {
    setLoading(true);
    axios
      .get(`https://api.mudoapi.tech/menus?perPage=6&page=${currentPage}`, {
        params: { name: name },
      })
      .then((response) => {
        setSearchResults(response?.data.data.Data);
        setLoading(false);
        setCurrentPage(response?.data?.data?.currentPage);
        setNextPage(response?.data?.data?.nextPage);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  // Tangkap inputan user
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  // HandleClick
  const handleClick = () => {
    // Panggil fungsi pencarian dengan searchInput
    hanlePagination();
    searchMenu(search);
  };

  const handleDetail = (id) => {
    navigate(`/products/${id}`);
  };

  // Pagination
  const hanlePagination = () => {
    if (!searchResults) return;
    setShowPagination(false);
  };

  useEffect(() => {
    searchMenu();
  }, [currentPage]);

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
          <div className="container Loading">
            <Loader />
          </div>
        )}

        {searchResults.length === 0 && !loading ? (
          <div className="container Loading">
            <h1>Data tidak tersedia</h1>
          </div>
        ) : (
          <div className="container WrapperSearch">
            {!loading &&
              searchResults.map((item) => (
                <ProductCard
                  onDetail={() => handleDetail(item.id)}
                  key={item?.id}
                  item={item}
                />
              ))}
          </div>
        )}
        {showPagination && (
          <div className="Pagination">
            <Button
              className={`${
                currentPage > 1 ? "ActivePagination" : "UnactivePagination"
              }`}
              onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
              disabled={currentPage <= 1}
            >
              Previous
            </Button>
            <Button
              className={`${
                nextPage !== 0 ? "ActivePagination" : "UnactivePagination"
              }`}
              onClick={() => nextPage !== 0 && setCurrentPage(currentPage + 1)}
              disabled={nextPage === 0}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
