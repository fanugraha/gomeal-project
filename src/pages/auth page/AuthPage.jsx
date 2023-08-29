import { useState } from "react";
import LoginCard from "../../component/atom/card/login/LoginCard";
import RegisterCard from "../../component/atom/card/register/RegisterCard";

const AuthPage = () => {
  // Mengatur Default tampilan Auth
  const [authType, setAuthType] = useState(true);

  const handleLogin = () => {
    setAuthType(true);
  };

  const handleRegister = () => {
    setAuthType(false);
  };

  return (
    <div>
      {authType === true && <LoginCard handleRegister={handleRegister} />}
      {authType === false && <RegisterCard handleLogin={handleLogin} />}
    </div>
  );
};

export default AuthPage;
