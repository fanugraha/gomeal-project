import "./ProductCardstyle.css";

const ProductCard = ({ item }) => {
  return (
    <button className="ProductCard">
      <div className="ImageWrapper">
        <img src={item?.imageUrl} alt="" />
      </div>
      <p className="TextProduct">{item?.name}</p>
      <p className="PriceProduct">{item?.priceFormatted}</p>
      <p className="Distance">4.97 km - 21 min</p>
    </button>
  );
};

export default ProductCard;
