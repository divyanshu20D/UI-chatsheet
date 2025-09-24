import { useState } from "react";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export const AuthContainer = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleAuth = () => setIsLogin(!isLogin);

  if (isLogin) {
    return <LoginForm onToggleAuth={toggleAuth} />;
  }

  return <RegisterForm onToggleAuth={toggleAuth} />;
};
