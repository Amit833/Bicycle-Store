import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Bike from "./Bike";
import Login from "./Login";
import Products from "./Products";
import Footer from "./Footer";
import ShoppingBasket from "./ShoppingBasket";
import OrderConfirmationPage from "./OrderConfirmationPage";
import PageNotFound from "./PageNotFound";

const App = () => {
  return (
    <Router>
      <main>
        <Header />
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/products" component={Products} />
          <Route path="/bike" component={Bike} />
          <Route path="/basket" component={ShoppingBasket} />
          <Route path="/orderConfirmation" component={OrderConfirmationPage} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </main>
    </Router>
  );
};

export default App;
