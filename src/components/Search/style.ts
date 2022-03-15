import styled from "styled-components";
import { BsChevronDown } from "react-icons/bs";
import { BsChevronUp } from "react-icons/bs";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  height: 35px;
  font-size: 1.6rem;
  margin: 5px 0;
  margin: 10px;
`;

export const Select = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 66px;
  position: relative;
  padding: 0 5px;
  border-radius: 3px;
  cursor: pointer;
  user-select: none;
`;

export const Options = styled.ul`
  width: 140px;
  list-style: none;
  position: absolute;
  top: 110px;
  background-color: white;
  border-radius: 3px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`;

export const Option = styled.li`
  padding: 3px 0;
  padding-left: 10px;
  cursor: pointer;

  :last-child {
    border: 0;
  }

  &:hover {
    background-color: var(--color-blue);
    color: white;
    border-radius: 3px;
  }
`;

export const UpBtn = styled(BsChevronUp)`
  color: var(--color-blue);
  font-size: 20px;
`;

export const DownBtn = styled(BsChevronDown)`
  font-size: 20px;
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
    background-color: rgba(83, 82, 237, 0.3);
    border-radius: 50%;
  }
`;
export const InputWrap = styled.div`
  display: flex;
  justify-content: space-between;
  width: 250px;
  background-color: rgba(83, 82, 237, 0.1);
  border-radius: 20px;
  font-size: 1.3rem;
  margin: 0px 5px;

  ::placeholder {
    color: gray;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding-left: 20px;
  outline: none;
  border: 0;
  background: none;
`;
