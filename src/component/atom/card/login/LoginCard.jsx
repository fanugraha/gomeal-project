import { Button, Modal, Input } from "@mantine/core";
import { PasswordInput } from "@mantine/core";
import "./Loginstyle.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import { useDisclosure } from "@mantine/hooks";

function LoginCard({ handleRegister }) {
  // Value input
  const [emailLogin, setEmailLogin] = useState("");
  const [passwordLogin, setPasswordLogin] = useState("");

  // Modal
  const [opened, { open, close }] = useDisclosure(false);

  // Deklarasi variable navigate
  const navigate = useNavigate();

  //   Post Api
  const handleSumbitLogin = () => {
    const payload = {
      username: emailLogin,
      password: passwordLogin,
    };
    axios
      .post("https://api.mudoapi.tech/login", payload)
      .then((res) => {
        localStorage.setItem("token", res?.data?.data?.token);
        navigate("/");
      })
      .catch(() => {
        open();
      });
  };

  return (
    <div className="Card">
      <div className="Label">
        <h1 className="TitleAuth">Sign in to order your meal</h1>
        <p className="ParagraphAuth">Please enter your details below</p>
      </div>
      <div className="WrapperInput">
        <p className="LabelInput">Email</p>
        <Input
          placeholder="Enter your email"
          className="Input"
          onChange={(event) => {
            setEmailLogin(event.target.value);
          }}
        />
      </div>
      <div className="WrapperInput">
        <p className="LabelInput">Password</p>
        <PasswordInput
          placeholder="Enter your Password"
          onChange={(event) => {
            setPasswordLogin(event.target.value);
          }}
        />
      </div>
      <p className="ParagraphAuth">or continue with</p>
      <Modal
        opened={opened}
        onClose={close}
        title="Upss! user not found"
        centered
      >
        <p>
          We're sorry, but it seems that we couldn't locate the user
          information.
        </p>
        <div className="WrapperBtnModal">
          <Button onClick={handleRegister} className="BtnModal">
            Register
          </Button>
        </div>
      </Modal>
      <Button className="LoginBtn" onClick={handleSumbitLogin}>
        Login
      </Button>
      <div className="SocialMedia">
        <img src="src\assets\image\aplelogo.png" alt="" />
        <img src="src\assets\image\google.png" alt="" />
        <img src="src\assets\image\facebook.png" alt="" />
      </div>
      <p className="ParagraphAuth">
        Dont have acount?{" "}
        <span>
          <a href="#" onClick={handleRegister}>
            Register
          </a>
        </span>
      </p>
    </div>
  );
}

export default LoginCard;
