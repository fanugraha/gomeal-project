import { Input } from "@mantine/core";
import "./SearchBarstyle.css";

function SearchBar({ handleSearch, value }) {
  return (
    <div className="SearchBar">
      <img src="src/assets/icon/search.svg" alt="" />
      <Input
        value={value}
        onChange={handleSearch}
        placeholder="What do you want to eat today..."
      />
    </div>
  );
}

export default SearchBar;
