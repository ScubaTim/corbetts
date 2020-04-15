import React from "react";
import { Container } from "reactstrap";

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
        <h2 className="text-center uber-eats-container">
          <a href="https://www.ubereats.com/miami/food-delivery/corbetts-sports-bar-and-grill/p17_xWy0RZ2zZjz4Qpl0iw">
            Delivery with
            <img src={UrberEats} width="15%" alt="Uber Eats Logo"></img>
          </a>
        </h2>
        <Footer></Footer>
      </Container>
    </React.Fragment>
  );
};

export default App;
