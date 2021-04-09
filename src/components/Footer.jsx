import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillCodepenCircle,
} from "react-icons/ai";

const Footer = () => {
  const context = useContext(MyContext);
  const { login } = context;
  const year = new Date().getFullYear();

  return (
    <footer className={login === "true" ? "footer-logged" : "footer-initial"}>
      <p>&#169; Amit Majumder {year}</p>
      <AiFillGithub className="footer-icon" />
      <AiFillCodepenCircle className="footer-icon" />
      <AiFillLinkedin className="footer-icon" />
    </footer>
  );
};

export default Footer;
