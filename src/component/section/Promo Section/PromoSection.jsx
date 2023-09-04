import axios from "axios";
import { useEffect, useState } from "react";
import PopularCard from "../../atom/card/popular/PopularCard";
import "./PromoSectionstyle.css";

const PromoSection = () => {
  const [product, setProduct] = useState([]);

  // Get Api
  const getApiProduct = () => {
    axios
      .get("https://api.mudoapi.tech/menus")
      .then((res) => {
        setProduct(res?.data.data.Data);
      })
      .catch((err) => {
        console.log("Gagal", err);
      });
  };

  // Mounting
  useEffect(() => {
    getApiProduct();
  }, []);

  // Tampilkan 3 produk saja
  const popularProducts = product.slice(0, 3);
  return (
    <div className="Product">
      <h1 className="Headline">What would you like to eat today?</h1>
      <div className="WrapperProduct">
        {popularProducts.map((item) => (
          <PopularCard key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PromoSection;
