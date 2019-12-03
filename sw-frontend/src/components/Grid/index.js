import React from "react";

import {
  Container,
  Content,
  Item,
  ImageContainer,
  ItemDetails,
  ItemTitle,
  ItemDescription,
  // ItemDetailImage,
  TriangleCustomImage,
  TriangleContainer,
  CategoryLabel
} from "./styles";
import NextPrev from "../NextPrev";

let items = [];
export default function Grid(props) {
  let elements;
  if (props.items && props.category) {
    items = JSON.parse(props.items);

    if (items[props.category].length > 0) {
      elements = items[props.category].map((item, index) => (
        <Item key={index}>
          <ImageContainer color={localStorage.getItem("currentColor")}>
            <img src={item.image} alt={item.title ? item.title : item.name} />
          </ImageContainer>

          <ItemDetails>
            <ItemTitle color={localStorage.getItem("currentColor")}>
              {item.title ? item.title.toUpperCase() : item.name.toUpperCase()}
            </ItemTitle>
            <ItemDescription>
              {item.description ? item.description : item.opening_crawl}
            </ItemDescription>
            <CategoryLabel color={localStorage.getItem("currentColor")}>
              {`Category: ${localStorage.getItem("selectedCategoryName")}`}
            </CategoryLabel>

            <TriangleCustomImage>
              <TriangleContainer>
                <img alt="" src={item.image} />
              </TriangleContainer>
            </TriangleCustomImage>
          </ItemDetails>
          {/* <ItemDetailImage /> */}
        </Item>
      ));
    }
  }

  return (
    <Container>
      <Content>
        <>{elements}</>
      </Content>
      {items.length}
      {items.length > 0 && <NextPrev />}
    </Container>
  );
}
