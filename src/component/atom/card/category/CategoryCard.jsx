import React from "react";
import "./Category.css";

const CategoryCard = ({ item, handleCategory }) => {
  return (
    <button onClick={handleCategory} className="CategoryCard">
      <img src={item.img} alt="" />
      <p className="TextCategory">{item.title}</p>
    </button>
  );
};

export default CategoryCard;
