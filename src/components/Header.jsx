import React, { useContext } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { Link } from "react-router-dom";
import MyContext from "../context/MyContext";

const Header = () => {
  const context = useContext(MyContext);
  const { login, basketQuantity, hideBasket, ACCOUNT } = context;

  return (
    <header>
      <div className="logo">
        <Link to="/products">
          <h1>A.M.B</h1>
          <p>Online store for mountain bikes & accessories</p>
        </Link>
      </div>
      {login === "true" ? (
        <div className="user-status-block">
          <h4>Signed in as:</h4>
          <h3>{ACCOUNT.username}</h3>
          {!hideBasket && (
            <Link to="/basket">
              <FaShoppingBasket className="basket-icon" />
              {basketQuantity > 0 && <p>{basketQuantity}</p>}
            </Link>
          )}
        </div>
      ) : (
        <div className="user-status-block">
          <Link to="/">
            <h4>Please sign in</h4>
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
