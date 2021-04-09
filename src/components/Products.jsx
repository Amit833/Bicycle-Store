import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import { ACTIONS } from "../reducers/ACTIONS";
import { addToBasket } from "../utilities/addToBasket";
import { Link } from "react-router-dom";

const Products = () => {
  const context = useContext(MyContext);
  const { dispatchBasket, basket, BIKES, setBasketQuantity } = context;

  const handleClick = (bike) => {
    dispatchBasket({
      type: ACTIONS.ADD_TO_BASKET,
      payload: addToBasket(
        [],
        basket,
        bike.type,
        bike.id,
        bike.img,
        bike.price,
        setBasketQuantity
      ),
    });
  };

  return (
    <section className="products">
      {BIKES.map((bike, idx) => (
        <div className="products-bike" key={idx}>
          <Link to={{ pathname: "/bike", state: { bike } }}>
            <h3>
              {bike.brand} {bike.type}
            </h3>
            <img src={bike.img} alt={bike.type} />
          </Link>
          <div>
            <h4>
              {bike.price},- {String.fromCharCode(8364)}
            </h4>
            <button onClick={() => handleClick(bike)}>Add to basket</button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Products;
