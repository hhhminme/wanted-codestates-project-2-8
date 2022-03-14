import styled from "styled-components";
import { AiFillPlusCircle } from "react-icons/ai";

export const SavedListWrapper = styled.div`
  width: 100%;
  height: calc(100vh - 35px);
  padding: 20px;
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
  display: flex;
  background: rgba(83, 82, 237, 0.8);
  border-radius: 5px;
  margin-bottom: 25px;
  padding: 10px;
  box-shadow: rgba(83, 82, 237, 0.4) 5px 5px, rgba(83, 82, 237, 0.3) 10px 10px;

  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
`;
export const CardImgWrap = styled.div`
  width: 80px;
  padding: 5px;
  margin-right: 12px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const CardImg = styled.img``;

export const Title = styled.h1`
  font-size: 2rem;
  color: white;
`;

export const Line = styled.p`
  font-size: 1rem;
  color: white;
`;

export const NoMemo = styled.p`
  font-size: 1.5rem;
  text-align: center;
  margin: 20px 0;
  color: white;
`;
