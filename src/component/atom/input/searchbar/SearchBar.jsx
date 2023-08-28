import { Input } from "@mantine/core";
import "./SearchBarstyle.css";

function SearchBar() {
  return (
    <div className="SearchBar">
      <img src="src\assets\icon\search.svg" alt="" />
      <Input placeholder="What do you want eat today..." />
    </div>
  );
}

export default SearchBar;
