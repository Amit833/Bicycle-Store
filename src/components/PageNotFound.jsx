import React from "react";
import { useHistory } from "react-router-dom";

const PageNotFound = () => {
  const history = useHistory();

  return (
    <section className="order-confirmation">
      <div>
        <h1>404 Page not found !</h1>
        <button className="navigate-btn" onClick={() => history.goBack()}>
          Zurück!
        </button>
      </div>
    </section>
  );
};

export default PageNotFound;
