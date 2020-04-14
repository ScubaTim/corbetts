import React from "react";
import { Container, Button } from "reactstrap";

import UrberEats from "../Images/uber-eats.png";

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
        <Button size="sm">
          Delivery with
          <a href="https://www.ubereats.com/miami/food-delivery/corbetts-sports-bar-and-grill/p17_xWy0RZ2zZjz4Qpl0iw">
            <img src={UrberEats} width="15%"></img>
          </a>
        </Button>
        <Footer></Footer>
      </Container>
    </React.Fragment>
  );
};

export default App;
