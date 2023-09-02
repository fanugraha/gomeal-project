import CategoryCard from "../../atom/card/category/CategoryCard";
import DataCategory from "./DataCategory";
import "./Categorystyle.css";

const handleCategory = () => {
  console.log(handleCategory);
};

// button di klik
// get api by type

const CategorySection = () => {
  return (
    <div className="Category">
      <h1 className="Headline">Category</h1>
      <div className="WrapperCategori">
        {DataCategory.map((item) => (
          <CategoryCard
            handleCategory={handleCategory}
            key={item.title}
            item={item}
          />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
