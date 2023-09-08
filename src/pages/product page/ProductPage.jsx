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

  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(searchParams.get("menu"));
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
        setShowPagination(true);
      })
      .catch(() => {
        setLoading(false);
        setShowPagination(false);
      });
  };

  // Tangkap inputan user
  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  // HandleClick
  const handleClick = () => {
    // Panggil fungsi pencarian dengan searchInput
    searchMenu(search);
  };

  const handleDetail = (id) => {
    navigate(`/products/${id}`);
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

        {/* Kondisi untuk menampilkan atau menyembunyikan Pagination */}
        {showPagination && (
          <div className="Pagination">
            {currentPage > 1 ? (
              <Button
                className="ActivePagination"
                onClick={() => setCurrentPage(currentPage - 1)}
              >
                Previouse
              </Button>
            ) : (
              <Button
                className="UnactivePagination"
                data-disabled
                sx={{ "&[data-disabled]": { pointerEvents: "all" } }}
                onClick={(event) => event.preventDefault()}
              >
                Previouse
              </Button>
            )}
            {nextPage !== 0 ? (
              <Button
                className="ActivePagination"
                onClick={() => setCurrentPage(currentPage + 1)}
              >
                Next
              </Button>
            ) : (
              <Button
                className="UnactivePagination"
                data-disabled
                sx={{ "&[data-disabled]": { pointerEvents: "all" } }}
                onClick={(event) => event.preventDefault()}
              >
                Next
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductPage;
