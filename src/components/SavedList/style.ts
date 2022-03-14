import styled from "styled-components";
import { AiFillPlusCircle } from "react-icons/ai";

export const SavedListWrapper = styled.div`
  width: 100%;
  height: 90vh;
  background: gray;
  padding: 15px;
  overflow: auto;
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
  font-size: 20px;
`;
