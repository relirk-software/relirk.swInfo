import styled from "styled-components";

export const Container = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 40px;
`;

export const Item = styled.li`
  padding: 10px;
`;

export const ButtonPrev = styled.a`
  display: flex;
  align-items: center;

  p {
    font-size: 2em;
    color: #999;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  div {
    height: 30px;
    width: 30px;
  }

  &:hover {
    p {
      color: white;
      padding-left: 15px;
    }

    div {
      background: url(https://static-mh.content.disney.io/starwars/assets/utility/arrows/square_arrow-81b2a8828cce.svg)
        center no-repeat;
      background-position: right;
      background-size: 10px 20px;
    }
  }

  @media (max-width: 760px) {
    p {
      color: white;
      padding-left: 15px;
    }

    div {
      background: url(https://static-mh.content.disney.io/starwars/assets/utility/arrows/square_arrow-81b2a8828cce.svg)
        center no-repeat;
      background-position: right;
      background-size: 10px 20px;
    }
  }
`;

export const ButtonNext = styled.a`
  display: flex;
  align-items: center;

  p {
    font-size: 2em;
    color: #999;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  div {
    height: 30px;
    width: 30px;
    transform: scale(-1, 1);
  }

  &:hover {
    p {
      color: white;
      padding-right: 15px;
    }

    div {
      background: url(https://static-mh.content.disney.io/starwars/assets/utility/arrows/square_arrow-81b2a8828cce.svg)
        center no-repeat;
      background-position: right;
      background-size: 10px 20px;
    }
  }

  @media (max-width: 760px) {
    p {
      color: white;
      padding-right: 15px;
    }

    div {
      background: url(https://static-mh.content.disney.io/starwars/assets/utility/arrows/square_arrow-81b2a8828cce.svg)
        center no-repeat;
      background-position: right;
      background-size: 10px 20px;
    }
  }
`;
