import axios from "axios";
import { useEffect, useState } from "react";
import PopularCard from "../../atom/card/popular/PopularCard";
import "./ProductSectionstyle.css";

const ProductSection = () => {
  const [product, setProduct] = useState([]);

  // Get Api
  const getApiProduct = () => {
    axios
      .get("https://api.mudoapi.tech/menus")
      .then((res) => {
        console.log("Berhasil", res);
        setProduct(res?.data?.data?.Data);
      })
      .catch((err) => {
        console.log("Gagal", err);
      });
  };

  // Mounting
  useEffect(() => {
    getApiProduct();
  }, []);

  return (
    <div className="Product">
      <h1 className="Headline">What would you like to eat today?</h1>
      <div className="WrapperProduct">
        {product.map((item) => (
          <PopularCard item={item} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
