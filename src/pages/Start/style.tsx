import styled from "styled-components";
export const WrapDiv = styled.div`
  margin-top: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: xx-large;
  font-weight: 700;
  color: black;
`;

export const SubTitle = styled.p`
  text-align: center;
  font-weight: 300;
  font-size: 1.5rem;
  margin-top: 7rem;
  opacity: 70%;
  color: gray;
`;

export const Button = styled.button`
  margin-top: 20rem;
  background-color: var(--color-yellow-dark);
  border-radius: 6px;
  padding: 6px 30px;
  font-weight: 500;
  font-size: large;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
