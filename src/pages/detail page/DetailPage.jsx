import { Button } from "@mantine/core";

const DetailPage = () => {
  return (
    <div className="container DetailMenu">
      <div className="LeftDetail">
        <img src="" alt="" />
      </div>
      <div className="RightDetail">
        <h1 className="HeadlineDetail">Lorem Ipsum</h1>
        <p className="DeskripsiDetail">Lorem Ipsum</p>
        <div className="DetailRating">
          <p className="TextRatingDetail">4.3</p>
          <img src="" alt="" />
        </div>
        <h1 className="PriceDetail">Lorem</h1>
        <div className="BtnDetail">
          <Button>Tes</Button>
          <Button>Tes</Button>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
