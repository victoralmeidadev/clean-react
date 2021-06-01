import React, { memo } from "react";
import Styles from "./styles.scss";
import Logo from "@/presentation/components/Logo";

const LoginHeader: React.FC = () => {
  return (
    <header className={Styles.header}>
      <Logo />
      <h1>4Dev Enquetes para Programadores</h1>
    </header>
  );
};

export default memo(LoginHeader);
