import styled from "styled-components";
import { AiFillPlusCircle } from "react-icons/ai";

export const SavedListWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 115px);
  padding: 15px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
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
