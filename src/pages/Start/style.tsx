import styled from "styled-components";

export const WrapDiv = styled.div`
  padding-top: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1`
  padding-right: 50px;
  font-size: 3rem;
  font-weight: 500;
  color: black;

  & span {
    font-weight: 800;
    outline: none;
    text-transform: uppercase;
    background: linear-gradient(
      135deg,
      #5335cf 0%,
      #de005e 25%,
      #f66e48 50%,
      #de005e 75%,
      #5335cf 100%
    );
    background-size: 400%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: animate 10s linear infinite;
  }
`;

export const Button = styled.button`
  border-radius: 45px;
  padding: 10px 50px;
  font-weight: 600;
  margin-top: 100px;
  font-size: large;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: var(--color-blue);
  color: white;
`;

export const ImgBtm = styled.img``;
