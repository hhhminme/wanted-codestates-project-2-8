import { BsFillArrowRightSquareFill } from "react-icons/bs";
import styled from "styled-components";

export const WrapDiv = styled.div`
  padding: 2rem;
`;

export const ProfileWrap = styled.div`
  margin-top: 20px;
  display: flex;
`;

export const ProfileImg = styled.img`
  width: 5rem;
  margin-right: 1rem;
`;

export const ProfileMsg = styled.p`
  margin-top: 0.75rem;
  font-size: 1.125rem;
  color: gray;
`;

export const ProifileName = styled.p`
  margin-top: 0.25rem;
  margin-bottom: 3rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const BannerWrap = styled.div`
  width: 250px;
  height: 250px;
  margin: auto;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  border-radius: 10px;
`;

export const BannerImg = styled.img`
  position: relative;
  top: 25px;
  left: 55px;
  width: 200px;
`;

export const BannerTitle = styled.p`
  font-size: 1.25rem;
  font-weight: bold;
  color: white;
`;

export const BannerSubTitle = styled.p`
  margin-top: 3px;
  font-size: 0.8rem;
  font-weight: 100;
  color: white;
  opacity: 85%;
`;

export const BannerTitleWrap = styled.div`
  display: flex;
  background-color: var(--color-green-dark);
  border-radius: 10px;
  padding: 8px;
`;

export const BannerBtn = styled.button`
  margin: auto;
`;

export const BannerIcon = styled(BsFillArrowRightSquareFill)`
  margin-left: 10px;
  font-size: 28px;
  color: var(--color-yellow-dark);
  background-color: black;
  border-radius: 5px;
`;

export const MyPlace = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 35px 0px 35px;
`;

export const MyPlaceTitle = styled.p`
  font-size: 1.75rem;
  font-weight: bold;
`;

export const MyPlaceSubTitle = styled.p`
  margin-top: 5px;
  color: grey;
`;
