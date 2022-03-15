import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 35px;
  font-size: 1.6rem;
  margin-top: 15px;
  padding: 0 15px;
  background-color: white;
`;

export const Select = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 66px;
  position: relative;
  padding: 0 5px;
  border: 1px solid gray;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
`;

export const Options = styled.ul`
  width: 65px;
  border: 1px solid gray;
  list-style: none;
  position: absolute;
  top: 50px;
  background-color: white;
  border-radius: 3px;
  border: 1px solid gray;
`;

export const Option = styled.li`
  padding: 3px 0;
  text-align: center;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
  }
`;

export const Refresh = styled.div`
  width: 35px;
  height: 35px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 0, 0, 0.25);
    border-radius: 50%;
  }
`;

export const Input = styled.input`
  width: calc(100% - 100px);
  padding-left: 8px;
  outline: none;
  border: 1px solid gray;
  border-radius: 3px;
`;
