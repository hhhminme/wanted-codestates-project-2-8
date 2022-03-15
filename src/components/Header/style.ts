import styled from "styled-components";

export const Header = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px 15px;
  font-size: 2rem;
  border-bottom: 1px solid lightgray;
`;

export const Nav = styled.div`
  width: 23px;
  & :hover {
    cursor: pointer;
  }
`;

export const AddMemo = styled.button`
  width: fit-content;
  height: 30px;
  padding: 0 10px;
  border: 1px solid black;
  border-radius: 5px;
  text-align: center;
  font-weight: bold;

  & * {
    margin: auto;
  }
`;
