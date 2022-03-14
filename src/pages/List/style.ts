import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  height: 100vh;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  width: 90%;
  height: 50px;
`;

export const Main = styled.main`
  width: 90%;
`;

export const ListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  list-style-type: none;
`;
