import styled from "styled-components";

export const ModalInner = styled.div`
  width: 330px;
  height: 500px;
  padding: 50px 20px 20px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 1.8rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: lightgray;
`;
export const Content = styled.h3`
  font-size: 2rem;
`;
export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  font-size: 1.5rem;
  padding: 0.5rem;
`;
export const BtnWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  gap: 1rem;
  width: 100%;
`;
export const Button = styled.button<{ isEdit?: boolean; isDelete?: boolean }>`
  width: ${({ isEdit }) => (isEdit ? "50%" : "100%")};
  color: white;
  background-color: ${({ isDelete }) => (isDelete ? "red" : "#3ac172")};
  font-size: 1.5rem;
  padding: 0.7rem;
`;
