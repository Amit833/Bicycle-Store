import React, { useReducer, useState } from "react";
import MyContext from "./MyContext";
import { v4 as uuidv4 } from "uuid";
import hightower from "../assets/bike6.jpg";
import jeffsy from "../assets/bike4.jpg";
import meta from "../assets/bike7.jpg";
import remedy from "../assets/bike5.jpg";
import sb150 from "../assets/bike2.jpg";
import tyee from "../assets/bike3.jpg";
import { basketReducer } from "../reducers/basketReducer";
// import { basketItemReducer } from "../reducers/basketItemReducer";

const MyProvider = (props) => {
  const initialUser = { username: "", email: "", password: "" };

  //   const ACCOUNT = {
  //     username: process.env.REACT_APP_USER_NAME,
  //     email: process.env.REACT_APP_EMAIL,
  //     password: process.env.REACT_APP_PASSWORD,
  //   };

  const ACCOUNT = {
    username: "amit",
    email: "amitmajumder833@gmail.com",
    password: "1234",
  };

  const BIKES = [
    {
      brand: "Santa Cruz",
      type: "Hightower AL R",
      color: "smoke grey",
      img: hightower,
      size: "M",
      price: 3899,
      frame: "alloy 6061",
      id: uuidv4(),
    },
    {
      brand: "YT",
      type: "Jeffsy 29 Pro",
      color: "black magic",
      img: jeffsy,
      size: "L",
      price: 3899,
      frame: "carbon fiber",
      id: uuidv4(),
    },
    {
      brand: "Trek",
      type: "Remedy 8 XT",
      color: "lithium grey",
      img: remedy,
      size: "S",
      price: 3399,
      frame: "alloy 6061",
      id: uuidv4(),
    },
    {
      brand: "Yeti",
      type: "SB 150 Mega",
      color: "turquoise",
      img: sb150,
      size: "M",
      price: 6290,
      frame: "carbon fiber",
      id: uuidv4(),
    },
    {
      brand: "Propain",
      type: "Tyee CF",
      color: "marsred dark glanz",
      img: tyee,
      size: "L",
      price: 4809,
      frame: "carbon fiber",
      id: uuidv4(),
    },
    {
      brand: "Commencal",
      type: "Meta AM",
      color: "signature black",
      img: meta,
      size: "M",
      price: 5499,
      frame: "alloy 6061",
      id: uuidv4(),
    },
  ];

  const [user, setUser] = useState(initialUser);
  const [login, setLogin] = useState(false);
  const [basket, dispatchBasket] = useReducer(basketReducer, []);
  const [basketQuantity, setBasketQuantity] = useState(0);
  const [hideBasket, setHideBasket] = useState(false);

  return (
    <MyContext.Provider
      value={{
        initialUser,
        user,
        setUser,
        login,
        setLogin,
        ACCOUNT,
        BIKES,
        uuidv4,
        basket,
        dispatchBasket,
        basketQuantity,
        setBasketQuantity,
        hideBasket,
        setHideBasket,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
