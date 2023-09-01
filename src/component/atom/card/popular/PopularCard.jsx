import { Button, Card } from "@mantine/core";
import "./Popularstyle.css";

const PopularCard = ({ item }) => {
  return (
    <Card className=" PopularCard">
      <div className="ImageWrapper">
        <div className="PromoProduct">
          <p className="TextPomo">15% off</p>
        </div>
        <img src={item?.imageUrl} alt="" />
      </div>
      <div className="Rating">
        <p className="TextRating">4.9</p>
        <img src="src\assets\icon\star.svg" alt="" />
      </div>
      <div className="CardBody">
        <div className="LeftBody">
          <p className="TextFood">{item?.name}</p>
          <div className="Price">{item?.priceFormatted}</div>
        </div>
        <div className="RightBody">
          <Button className="BtnPopularCard">
            <img src="src\assets\icon\plus.svg" alt="" />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default PopularCard;
