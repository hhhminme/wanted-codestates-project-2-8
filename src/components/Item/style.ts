import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  width: 100%;
  height: 100px;
  cursor: pointer;
  font-size: 1.4rem;
  background: rgba(83, 82, 237, 0.8);
  border-radius: 5px;
  padding: 10px;
  box-shadow: rgba(83, 82, 237, 0.4) 5px 5px, rgba(83, 82, 237, 0.3) 10px 10px;

  &:hover {
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  }
`;

export const ItemTitle = styled.p`
  font-size: 2rem;

  color: white;
`;

export const ItemSubTitle = styled.p`
  font-size: 1rem;
  color: white;
`;

export const CardImgWrap = styled.div`
  width: 80px;
  padding: 5px;
  margin-right: 12px;
  background-color: rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`;

export const CardImg = styled.img``;

export const ContentWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
