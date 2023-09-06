import Sandwich from "../../../assets/image/deal1.png";
import Chicken from "../../../assets/image/deal2.png";
import Pizza from "../../../assets/image/deal3.png";
import "./BestDealstyle.css";

const BestDeal = () => {
  const data = [
    {
      title: "Best deals Crispy Sandwiches",
      paragraph:
        "Enjoy the large size of sandwiches. Complete perfect slice of sandwoches.",
      img: Sandwich,
    },
    {
      title: "Celebrate  parties with Friend Chicken",
      paragraph:
        "Get the best fried chicken smeared with a lip smacking lemon chili flavor. Check out best deal for fried chicken",
      img: Chicken,
    },
    {
      title: "Wanna eat hot & Spicy Pizza?",
      paragraph:
        "Pair up with a friend and enjoy the hot and crispy pizza pops. Try it with the best deals.",
      img: Pizza,
    },
  ];
  return (
    <div className="container Deal">
      <h1 className="Headline">Best deal for you!</h1>
      {data.map((item, index) => (
        <div className="DealCard" key={index}>
          <div className="LeftCard">
            <div className="DealTitle">{item.title}</div>
            <div className="DealParagraph">{item.paragraph}</div>
          </div>
          <div className="RightCard">
            <img src={item.img} alt="" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestDeal;
