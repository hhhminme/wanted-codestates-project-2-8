import styled from "styled-components";

export const ModalInner = styled.div`
  width: 330px;
  height: 500px;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.8rem;
`;

export const Title = styled.h2`
  font-size: 2rem;
  color: lightgray;
  border-bottom: 1px solid lightgray;
  margin-bottom: 7px;
`;
export const Content = styled.h3`
  font-size: 1.7rem;
  padding: 0 5px;
`;
export const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  font-size: 1.5rem;
  border: 1px solid #929292;
  border-radius: 5px;
  padding: 0.5rem;
`;
export const BtnWrapper = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
`;
export const Button = styled.button<{ isEdit?: boolean; isDelete?: boolean }>`
  width: ${({ isEdit }) => (isEdit ? "48%" : "100%")};
  color: white;
  background-color: ${({ isDelete }) => (isDelete ? "red" : "#3ac172")};
  font-size: 1.5rem;
  padding: 0.7rem 0;
  border-radius: 10px;
`;
