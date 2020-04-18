import React from "react";
import { Card, CardGrid, Container, Header } from "./Elements";
import "./App.css";
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";
import Toggle from './components/Toggle';
import Inc from './components/Inc';
import Mount from './components/Mount';
import Hover from './components/Hover';
import { PageWrapper } from "./state";
import Nav from './components/Nav';

function App() {
  return (
    <PageWrapper>
      <div>
        <Header>
        <Menu />
        <h1>Header</h1>
        </Header>
        <Nav />
        <Container>
          <h2>Super Cool</h2>
          <Toggle />
          <Inc />
          <Mount />
          <Hover />
          <CardGrid>
            <Card style={{ background: "var(--purp)" }}>
              <h3>Some card</h3>
              <img src={purp} alt='image1' />
            </Card>
            <Card style={{ background: "var(--blue)" }}>
              <h3>Some card</h3>
              <img src={blue} alt='image2' />
            </Card>
            <Card style={{ background: "var(--black)" }}>
              <h3>Some card</h3>
              <img src={black} alt='image3' />
            </Card>
            <Card style={{ background: "var(--green)" }}>
              <h3>Some card</h3>
              <img src={green} alt='image4' />
            </Card>
          </CardGrid>
        </Container>
      </div>
    </PageWrapper>
  );
}

export default App;
