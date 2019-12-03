import React from "react";

import { Container, Item, ButtonPrev, ButtonNext } from "./styles";

export default function NextPrev() {
  const prevText = "prev";
  const nextText = "next";
  return (
    <Container>
      <Item>
        <ButtonPrev href="#">
          <div></div>
          <p>{prevText}</p>
        </ButtonPrev>
      </Item>
      <Item>
        <ButtonNext href="#">
          <p>{nextText}</p>
          <div></div>
        </ButtonNext>
      </Item>
    </Container>
  );
}
