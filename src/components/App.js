import React from "react";
import { Container } from "reactstrap";


import NavBar from "./NavBar";
import Header from "./Header";
import FoodMenu from "./FoodMenu";
import UberEats from "./UberEats";
import Footer from "./Footer";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <h4 className="m-3 text-center orange"><em>Good Food, Cold Drinks, Great People.</em></h4>
      <Container>
        <Header />
        <FoodMenu />
        <UberEats />
      </Container>
      <Footer />
    </React.Fragment>
  );
};

export default App;
