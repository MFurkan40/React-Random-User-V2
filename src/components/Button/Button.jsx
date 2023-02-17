import React from "react";
import ButtonStyle from "./Button.module.css";

const Button = ({ getUser }) => {
  return (
    <button onClick={getUser} className={ButtonStyle.btn}>
      Get a User
    </button>
  );
};

export default Button;
