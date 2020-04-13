import React from "react";
import { Container } from "reactstrap";
import NavBar from "./NavBar/index";
import Header from "./Header/index";
import FoodMenu from "./FoodMenu";
import Footer from "./Footer/index";

const App = () => {
  return (
    <React.Fragment>
      <NavBar />
      <Container>
        <Header></Header>
        <FoodMenu></FoodMenu>
        <Footer></Footer>
      </Container>
    </React.Fragment>
  );
};

export default App;
