import { Button } from "@mantine/core";
import "./SidebarButtonstyle.css";

const SidebarButton = (props) => {
  return (
    <div>
      <Button className="BtnActive">
        <img
          className="BtnActiveImg"
          src="src\assets\icon\btnactive.svg"
          alt=""
        />
        <p className="TextSidebarActive">Home</p>
      </Button>
    </div>
  );
};

export default SidebarButton;
