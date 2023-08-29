import { Button, Input } from "@mantine/core";
import { PasswordInput } from "@mantine/core";
import axios from "axios";
import { useState } from "react";

function RegisterCard({ handleLogin }) {
  // Value Input
  const [emailRegister, setEmailRegister] = useState("");
  const [passwordRegister, setPasswrodRegister] = useState("");

  // Post Api
  const postApiRegister = () => {
    axios
      .post("https://api.mudoapi.tech/register", {
        username: emailRegister,
        password: passwordRegister,
      })
      .then((ress) => {
        console.log("Berhasil", ress);
      })
      .catch((err) => {
        console.log("Gagal", err);
      });
  };

  return (
    <div className="container">
      <div className="Card">
        <div className="Label">
          <h1 className="TitleAuth">Please Register First</h1>
          <p className="ParagraphAuth">Please enter your details below</p>
        </div>
        <div className="WrapperInput">
          <p className="LabelInput">Email</p>
          <Input
            placeholder="Enter your email"
            className="Input"
            onChange={(event) => {
              setEmailRegister(event.target.value);
            }}
          />
        </div>
        <div className="WrapperInput">
          <p className="LabelInput">Password</p>
          <PasswordInput
            placeholder="Create your Password"
            onChange={(event) => {
              setPasswrodRegister(event.target.value);
            }}
          />
        </div>
        <p className="ParagraphAuth">or register with</p>
        <Button onClick={postApiRegister} className="LoginBtn">
          Register
        </Button>
        <div className="SocialMedia">
          <img src="src\assets\image\aplelogo.png" alt="" />
          <img src="src\assets\image\google.png" alt="" />
          <img src="src\assets\image\facebook.png" alt="" />
        </div>
        <p className="ParagraphAuth">
          Have acount?{" "}
          <span>
            <a href="#" onClick={handleLogin}>
              Login
            </a>
          </span>
        </p>
      </div>
    </div>
  );
}

export default RegisterCard;
