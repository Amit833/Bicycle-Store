import React, { useContext, useEffect } from "react";
import MyContext from "../context/MyContext";
import { Link } from "react-router-dom";
import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { ACTIONS } from "../reducers/ACTIONS";

const ShoppingBasket = () => {
  const context = useContext(MyContext);
  const { basket, dispatchBasket, setHideBasket, setBasketQuantity } = context;
  const basketQuantity = basket.reduce(
    (acc, item) => (acc += item.quantity),
    0
  );
  const totalProductValue = basket.reduce(
    (acc, item) => (acc += item.quantity * item.price),
    0
  );

  const handleClick = () => {
    dispatchBasket({ type: ACTIONS.EMPTY_BASKET, payload: [] });
    setBasketQuantity(0);
  };

  useEffect(() => {
    setHideBasket(true);
    return () => {
      setHideBasket(false);
    };
  }, [setHideBasket]);

  return (
    <section className="shopping-basket-page">
      {basket.length === 0 ? (
        <h2>Your shopping basket is empty</h2>
      ) : (
        basket.map((item) => (
          <div key={item.id} className="basket-item">
            <img src={item.img} alt="basket item" />
            <div className="item-id-wrapper">
              <p>Item: {item.item}</p>
              {/* <p>Item no.{item.id}</p> */}
              <p>
                <strong>
                  Item price:
                  {item.price},- {String.fromCharCode(8364)}
                </strong>
              </p>
            </div>

            <div className="quantity-wrapper">
              <p>Quantity:</p>
              <div>
                <AiOutlinePlusCircle
                  onClick={() =>
                    dispatchBasket({
                      type: ACTIONS.INCREMENT_ITEM,
                      id: item.id,
                    })
                  }
                />{" "}
                {item.quantity}{" "}
                <AiOutlineMinusCircle
                  onClick={() =>
                    dispatchBasket({
                      type: ACTIONS.DECREMENT_ITEM,
                      id: item.id,
                    })
                  }
                />
              </div>
            </div>
            <BsTrash
              onClick={() =>
                dispatchBasket({
                  type: ACTIONS.DELETE_FROM_BASKET,
                  id: item.id,
                })
              }
            />
            <p className="item-total">
              Item total:{" "}
              <strong>
                {item.quantity * item.price},- {String.fromCharCode(8364)}
              </strong>
            </p>
          </div>
        ))
      )}
      {basket.length > 0 && (
        <div className="total-price">
          <p>
            Total product value for <strong>{basketQuantity}</strong> items
            (incl. VAT):{" "}
            <strong>
              {totalProductValue},- {String.fromCharCode(8364)}
            </strong>
          </p>
          <p>
            Shipping costs: 20,- {String.fromCharCode(8364)}/bicycle | Shipping
            total:{" "}
            <strong>
              {20 * basketQuantity},- {String.fromCharCode(8364)}
            </strong>{" "}
          </p>
          <h3>
            Total value:{" "}
            <strong>
              {totalProductValue + basketQuantity * 20},-{" "}
              {String.fromCharCode(8364)}
            </strong>
          </h3>
          <Link to="/orderConfirmation">
            <button onClick={handleClick}>Buy</button>
          </Link>
        </div>
      )}
    </section>
  );
};

export default ShoppingBasket;
