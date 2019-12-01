import React from "react";

import { Container, Content, Item } from "./styles";

export default function Grid(props) {
  let elements;
  if (props.items && props.category) {
    const items = JSON.parse(props.items);

    if (items[props.category].length > 0) {
      elements = items[props.category].map((item, index) => (
        <Item key={index}>
          <div className="img-container">
            <img src={item.image} alt={item.title ? item.title : item.name} />
          </div>

          <div className="description">
            <p>{item.title ? item.title : item.name}</p>
            <span></span>
          </div>
        </Item>
      ));
    }
  }

  return (
    <Container>
      <Content>
        <>{elements}</>
      </Content>
    </Container>
  );
}
