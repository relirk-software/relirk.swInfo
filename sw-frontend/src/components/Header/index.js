/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {
  Container,
  Logo,
  Navigator,
  List,
  ListItem,
  LinkButton
} from "../Header/styles";
import logo from "../../assets/logo-horizontal.png";

export default function Header() {
  return (
    <Container className="header">
      <Logo href="#">
        <img src={logo} alt="SW Info" />
      </Logo>

      <Navigator>
        <List>
          <ListItem>
            <LinkButton href="#">About</LinkButton>
          </ListItem>
          <ListItem>
            <LinkButton href="https://swapi.co/" target="_blank">
              SW api
            </LinkButton>
          </ListItem>
          <ListItem>
            <LinkButton href="#">Contact</LinkButton>
          </ListItem>
        </List>
      </Navigator>
    </Container>
  );
}
