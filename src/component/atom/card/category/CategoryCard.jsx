import React from "react";
import "./Category.css";

const CategoryCard = (props) => {
  const { item } = props;
  return (
    <button className="CategoryCard">
      <img src={item.img} alt="" />
      <p className="TextCategory">{item.title}</p>
    </button>
  );
};

export default CategoryCard;
