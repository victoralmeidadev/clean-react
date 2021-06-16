import React, { useCallback } from "react";
import Styles from "./styles.scss";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const Input: React.FC<Props> = (props: Props) => {
  const enableInput = useCallback(
    (event: React.FocusEvent<HTMLInputElement>): void => {
      event.target.readOnly = false;
    },
    []
  );
  return (
    <div className={Styles.inputWrap}>
      <input {...props} readOnly onFocus={enableInput} />
      <span className={Styles.status}>🔴</span>
    </div>
  );
};

export default Input;
