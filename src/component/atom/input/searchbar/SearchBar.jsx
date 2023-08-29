import React, { useState } from "react";
import { Input } from "@mantine/core";
import "./SearchBarstyle.css";

function SearchBar({ searchTerm, filter }) {
  const searchProduct = (event) => {
    const searchTerm = event.target.value;
    filter(searchTerm);
  };

  return (
    <div className="SearchBar">
      <img src="src/assets/icon/search.svg" alt="" />
      <Input
        onChange={searchProduct}
        placeholder="What do you want to eat today..."
        value={searchTerm}
      />
    </div>
  );
}

export default SearchBar;
