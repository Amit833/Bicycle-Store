import React, { useContext } from "react";
import { ACTIONS } from "../reducers/ACTIONS";
import MyContext from "../context/MyContext";
import { addToBasket } from "../utilities/addToBasket";
import { Link } from "react-router-dom";
import { FaBackward } from "react-icons/fa";

const Bike = (props) => {
  console.log("props", props);
  const {
    brand,
    color,
    img,
    price,
    size,
    type,
    frame,
    id,
  } = props.location.state.bike; // props came from route and bike came from products

  const context = useContext(MyContext);
  const { basket, dispatchBasket, setBasketQuantity } = context;

  return (
    <section className="bike">
      <Link to="/products">
        <button>
          <FaBackward /> Back to Products page
        </button>
      </Link>
      <div className="bike-container">
        <h2>
          {brand} {type}
        </h2>
        <img src={img} alt={type} />
        <div>
          <h3>
            Price: {price},- {String.fromCharCode(8364)}
          </h3>
          <button
            className="navigate-btn"
            onClick={() => {
              dispatchBasket({
                type: ACTIONS.ADD_TO_BASKET,
                payload: addToBasket(
                  [],
                  basket,
                  type,
                  id,
                  img,
                  price,
                  setBasketQuantity
                ),
              });
            }}
          >
            Add to basket
          </button>
        </div>

        <details>
          <summary>Details</summary>
          <ul className="details-ul">
            <li>
              <strong>Frame:</strong> {frame}
            </li>
            <li>
              <strong>Size:</strong> {size}
            </li>
            <li>
              <strong>Colour: </strong> {color}
            </li>
          </ul>
        </details>
      </div>
    </section>
  );
};

export default Bike;
