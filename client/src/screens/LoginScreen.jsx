import React, { useState } from "react";
import LogoHeaderArea from "../components/Headers/LogoHeaderArea";
import LoginForm from "../components/Form/LoginForm";
import SignupForm from "../components/Form/SignupForm";

function LoginScreen() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div
      className="flex flex-col w-full min-h-screen"
      style={{ fontFamily: "cursive" }}
    >
      <div className="flex h-40">
        <LogoHeaderArea />
      </div>
      <div
        className="flex items-center justify-center w-full h-full"
        style={{ backgroundColor: "#8D8FAF" }}
      >
        {isLogin ? (
          <LoginForm setIsLogin={setIsLogin} />
        ) : (
          <SignupForm setIsLogin={setIsLogin} />
        )}
      </div>
    </div>
  );
}

export default LoginScreen;
