import React from "react";
import Styles from "./login-styles.scss";
import Spinner from "@/presentation/components/Spinner";
import Header from "@/presentation/components/LoginHeader";
import Footer from "@/presentation/components/Footer";
import Input from "@/presentation/components/Input";

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />
      <form className={Styles.form}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Digite o seu e-mail" />
        <Input type="password" name="password" placeholder="Digite sua senha" />
        <button className={Styles.submit} type="submit">
          Entrar
        </button>
        <span className={Styles.link}>Criar conta</span>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />
          <span className={Styles.error}>Error</span>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Login;
