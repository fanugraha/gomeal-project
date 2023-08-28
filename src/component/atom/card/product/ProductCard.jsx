import "./ProductCardstyle.css";

const ProductCard = () => {
  return (
    <div className="ProductCard">
      <img src="src\assets\image\sample.png" alt="" />
      <p className="TextProduct">xxxx</p>
      <p className="PriceProduct">
        <span>$</span>5.5
      </p>
      <p className="Distance">4.97 km - 21 min</p>
    </div>
  );
};

export default ProductCard;
