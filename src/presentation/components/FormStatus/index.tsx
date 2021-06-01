import React from "react";
import Styles from "./styles.scss";
import Spinner from "@/presentation/components/Spinner";

const FormStatus: React.FC = () => {
  return (
    <div className={Styles.errorWrap}>
      <Spinner className={Styles.spinner} />
      <span className={Styles.error}>Error</span>
    </div>
  );
};

export default FormStatus;
