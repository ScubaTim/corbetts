import React from "react";
import { Container } from "reactstrap";
import NavBar from "./NavBar/index";

const App = () => {
  return (
    <React.Fragment>
      <NavBar></NavBar>
      <Container>
        {" "}
        <div>I'm the corbetts site</div>
      </Container>
    </React.Fragment>
  );
};

export default App;
