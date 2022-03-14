import styled from "styled-components";
import { AiFillPlusCircle } from "react-icons/ai";

export const SavedListWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 35px);
  padding: 15px;
  border-top: 1px solid lightgray;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const AddMemo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background: lightgray;
  border-radius: 5px;

  &:hover {
    background: #dbdbdb;
    cursor: pointer;
  }
`;

export const AddIcon = styled(AiFillPlusCircle)`
  font-size: 2rem;
`;

export const CardWrapper = styled.div`
  background: #efefef;
  border-radius: 5px;
  margin-bottom: 15px;
  padding: 5px 10px;
  box-shadow: 0px 0px 7px 0px #00000038;

  &:hover {
    cursor: pointer;
    box-shadow: 0px 0px 7px 0px #00000060;
  }
`;

export const Title = styled.div`
  font-size: 1.2rem;
`;

export const Line = styled.div`
  font-size: 1.1rem;
`;

export const NoMemo = styled.div`
  font-size: 1.5rem;
  text-align: center;
  margin: 20px 0;
`;
