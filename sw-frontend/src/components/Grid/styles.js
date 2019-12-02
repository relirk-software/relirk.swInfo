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

  @media (max-width: 760px) {
    margin: 0;
    width: auto;
  }
`;

export const Item = styled.div`
  cursor: pointer;
  width: 210px;
  max-width: 210px;
  min-height: 208px;
  margin: 5px;
  border-radius: 5px;
  background: #282727;

  &:hover {
    border: 1px solid #fff;
    box-shadow: 0 0 6px 2px;
    color: #e15021;
  }

  .img-container {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: white;

    img {
      border-top-left-radius: 5px;
      border-top-right-radius: 5px;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: solid 1px #e15021;
      height: 20em;
      object-fit: cover;
    }
  }

  .description {
    position: relative;
    height: 3.4em;

    p {
      font-size: 1.1em;
      margin: 10px;
      color: white;
    }

    span {
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
    }
  }

  @media (max-width: 760px) {
    max-width: 150px;
  }
`;
