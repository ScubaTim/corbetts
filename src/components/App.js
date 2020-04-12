import React from "react";
import { Container } from "reactstrap";
import NavBar from "./NavBar/index";
import Header from "./Header/index";

const App = () => {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Container>
        <Header></Header>
      </Container>
    </React.Fragment>
  );
};

export default App;
