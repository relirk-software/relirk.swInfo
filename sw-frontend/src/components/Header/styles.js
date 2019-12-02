import styled from "styled-components";

export const Container = styled.header`
  grid-area: header;
  background-position: center;
  background-image: url(https://static-mh.content.disney.io/starwars/assets/navigation/navigation_stars-c6452e016c73.jpg);
  background-size: cover;
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  border-bottom: solid 1px #333333;

  li + li {
    margin-left: 30px;

    @media (max-width: 760px) {
      margin-left: 10px;
    }
  }

  @media (max-width: 760px) {
    grid-template-columns: auto;
  }
`;

export const Logo = styled.a`
  max-width: 200px;

  @media (max-width: 760px) {
    margin-bottom: 20px;
  }
`;

export const Navigator = styled.nav``;

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const ListItem = styled.li`
  border: solid 1px #333333;
`;

export const LinkButton = styled.a`
  display: block;
  padding: 10px;
  color: #999;
  font-size: 1.125em;
  background: transparent;
  border-radius: 5px;
  transition: 0.1s;

  &:hover {
    color: rgba(255, 255, 255, 1);
  }

  @media (max-width: 760px) {
    font-size: 1em;
  }
`;
