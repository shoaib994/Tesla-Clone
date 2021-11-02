import React from "react";
import Section from "./section";
import styled from "styled-components";
import logo from "../images/down-arrow.svg";
import model1 from "../images/model-3.jpg";
import model2 from "../images/model-s.jpg";
import model3 from "../images/model-x.jpg";
import newInterior from "../images/new-interior.jpg";
import solarPanel from "../images/solar-panel.jpg";
import solarRoof from "../images/solar-roof.jpg";
import accessories from "../images/accessories.jpg";
const Home = () => {
  return (
    <Container>
      <Section
        title="Model-3"
        discription="
        Order Online for Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        image={model1}
      />
      <Section
        title="Model-X"
        discription="
        Order Online for Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        image={model3}
      />
      <Section
        title="Model-s"
        discription="
        Order Online for Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        image={model2}
      />
      <Section
        title="New interior"
        discription="
        Order Online for Touchless Delivery"
        leftButton="Custom Order"
        rightButton="Existing Inventory"
        image={newInterior}
      />
      <Section
        title="Solar Panel"
        discription="
        Low Cost Solar Panels in america "
        leftButton="Custom Order"
        rightButton="Learn Now"
        image={solarPanel}
      />
      <Section
        title="Solar for New Roof"
        discription="
      Solar Roof Less Then a New Roof Plus Solar Pannel"
        leftButton="Custom Order"
        rightButton="Learn Now"
        image={solarRoof}
      />
      <Section
        title="Solar Roof"
        discription="
        Order Online for Touchless Delivery"
        leftButton="Shop Now"
        image={accessories}
      />
    </Container>
  );
};

export default Home;

const Container = styled.div`
  height: 100vh;
`;
