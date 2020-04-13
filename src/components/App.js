import React from "react";
import { Container } from "reactstrap";
import NavBar from "./NavBar/index";
import Header from "./Header/index";
import FoodMenu from "./FoodMenu";

const App = () => {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Container>
        <Header></Header>
        <FoodMenu></FoodMenu>
      </Container>
    </React.Fragment>
  );
};

export default App;
