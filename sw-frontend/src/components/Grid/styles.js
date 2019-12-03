import styled from "styled-components";

export const Container = styled.section`
  padding-top: 2em;
`;

export const Content = styled.div`
  display: flex;
  justify-content: left;
  align-items: flex-start;
  flex-wrap: wrap;
  margin: 0 auto;
  width: 90%;
`;

export const Item = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  width: 100%;
  margin: 5px;
  border-radius: 5px;
  background: #282727;
`;

export const ImageContainer = styled.div`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 6px;
  background: black;
  width: 50%;

  img {
    border-top-left-radius: 5px;
    border-top-right-radius: 0px;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 0px;
    border-right: solid 2px ${props => props.color};
    height: 20em;
    object-fit: cover;
  }
`;

export const ItemDetails = styled.div`
  position: relative;
  height: 20em;
  width: 50%;
  background-image: url(https://static-mh.content.disney.io/starwars/assets/shared/bg_hash_top-dca2c5ab1b2e.png);
  background-size: 7px;
  background-repeat: repeat-x;
  background-position: top left;
`;

export const ItemTitle = styled.p`
  font-size: 2em;
  margin: 10px;
  color: white;

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  &:hover {
    color: ${props => props.color};
  }
`;

export const ItemDescription = styled.p`
  font-size: 1em;
  margin: 10px;
  color: white;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 7;
  -webkit-box-orient: vertical;
`;

export const ItemDetailImage = styled.span`
  z-index: 1;
  background-image: url(https://static-mh.content.disney.io/starwars/assets/shared/decal-a67af2e7d567.png);
  background-size: 300% 200%;
  background-position: -100% 0;
  position: absolute;
  opacity: 0.06;
  width: 47px;
  height: 47px;
  right: 10px;
  bottom: 0px;
`;

export const TriangleCustomImage = styled.div`
  overflow: hidden;
  position: absolute;
  width: 7em;
  height: 5em;
  bottom: -0.1em;
  right: 0em;
  border-bottom-right-radius: 6px;
`;

export const TriangleContainer = styled.div`
  overflow: hidden;
  position: absolute;
  transform: skewX(-55.98deg);
  right: -0.25em;
  bottom: 0.1em;
  transform-origin: 0 100%;

  img {
    width: 100%;
    height: 100%;
    transform: skewX(55.98deg);
    transform-origin: inherit;
  }
`;

export const CategoryLabel = styled.p`
  margin: 10px;
  color: ${props => props.color};
`;
