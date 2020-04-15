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
      <h5 className="m-3 text-center"><em>Good Food, Cold Drinks, Great People.</em></h5>
      <Container>
        <Header></Header>
        <FoodMenu></FoodMenu>
        <UberEats />
        <Footer></Footer>
      </Container>
    </React.Fragment>
  );
};

export default App;
