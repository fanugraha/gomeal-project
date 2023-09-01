import { useEffect } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import ProductCard from "../../component/atom/card/product/ProductCard";
import { Loader } from "@mantine/core";
import "./SearchPagestyle.css";

const SearchPage = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(true);

  // Logic
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchTerm = searchParams.get("menu");

  // Get Api Produk
  const searchMenu = () => {
    axios
      .get("https://api.mudoapi.tech/menus?name=" + searchTerm)
      .then((response) => {
        setSearchResults(response?.data.data.Data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    searchMenu();
  }, []);

  return (
    <div className="container WrapperSearch">
      {loading ? (
        <Loader />
      ) : (
        <>
          {searchResults && searchResults.length > 0 ? (
            searchResults.map((item) => (
              <ProductCard key={item?.id} item={item} />
            ))
          ) : (
            <h1>Data Kosong</h1>
          )}
        </>
      )}
    </div>
  );
};

export default SearchPage;
