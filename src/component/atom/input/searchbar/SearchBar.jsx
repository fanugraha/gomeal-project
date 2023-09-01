import { Input } from "@mantine/core";
import "./SearchBarstyle.css";

function SearchBar({ handleSearch }) {
  return (
    <div className="SearchBar">
      <img src="src/assets/icon/search.svg" alt="" />
      <Input
        onChange={handleSearch}
        placeholder="What do you want to eat today..."
      />
    </div>
  );
}

export default SearchBar;
