import { Button } from "@mantine/core";
import SearchBar from "../../component/atom/input/searchbar/SearchBar";
import Sidebar from "../../component/layout/sidebar/Sidebar";
import "./Homepagestyle.css";
import DataCategory from "../../component/section/Category Section/DataCategory";
import CategoryCard from "../../component/atom/card/category/CategoryCard";
import ProductSection from "../../component/section/Product Section/ProductSection";
import "bootstrap/dist/css/bootstrap.min.css";

const Homepage = () => {
  return (
    <div className="container Homepage">
      <Sidebar />
      <div className="container Content">
        <div className="Header">
          <h1 className="HeadlineText">Hello, There</h1>
          <div className="UserInput">
            <SearchBar />
            <Button className="LoginBtn">Login/Register</Button>
          </div>
        </div>
        <div className="Promo">
          <img src="src\assets\image\promo.png" alt="" />
        </div>
        <div className="Category">
          <h1 className="Headline">Category</h1>
          <div className="WrapperCategory">
            {DataCategory.map((item) => (
              <CategoryCard key={item.title} item={item} />
            ))}
          </div>
        </div>
        <ProductSection />
      </div>
    </div>
  );
};

export default Homepage;
