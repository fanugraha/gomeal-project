import CategoryCard from "../../atom/card/category/CategoryCard";
import DataCategory from "./DataCategory";

const CategorySection = () => {
  return (
    <div className="Category">
      <h1 className="Headline">Category</h1>
      <div className="WrapperCategory">
        {DataCategory.map((item) => (
          <CategoryCard key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
