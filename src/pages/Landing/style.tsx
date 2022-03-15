import { BsFillArrowRightSquareFill } from "react-icons/bs";
import styled from "styled-components";
import { HiLocationMarker } from "react-icons/hi";
export const WrapDiv = styled.div`
  padding: 20px;
`;

export const ProfileWrap = styled.div`
  margin-top: 20px;
  display: flex;
  margin-left: 20px;
`;

export const ProfileImg = styled.img`
  width: 70px;
  margin-right: 20px;
  background-color: rgba(255, 165, 2, 0.7);
  border-radius: 100%;
`;

export const ProfileMsg = styled.p`
  margin-top: 12px;
  font-size: 1.5rem;
  color: gray;
`;

export const ProifileName = styled.p`
  margin-top: 8px;
  margin-bottom: 30px;
  font-size: 1.75rem;
  font-weight: bold;
`;

export const BannerWrap = styled.div`
  width: 280px;
  height: 280px;
  margin: auto;
  padding: 10px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  border-radius: 10px;
`;

export const BannerImg = styled.img`
  position: relative;
  top: 25px;
  left: 70px;
  width: 200px;
  margin-top: 18px; ;
`;

export const BannerTitle = styled.p`
  font-size: 1.5rem;
  font-weight: bold;
  color: white;
`;

export const BannerSubTitle = styled.p`
  margin-top: 3px;
  font-size: 0.9rem;
  font-weight: 100;
  color: white;
  opacity: 85%;
`;

export const BannerTitleWrap = styled.div`
  display: flex;
  background-color: var(--color-blue);
  border-radius: 10px;
  padding: 10px 20px;
`;

export const BannerBtn = styled.button`
  margin: auto;
`;

export const BannerIcon = styled(BsFillArrowRightSquareFill)`
  margin-left: 18px;
  font-size: 32px;
  color: white;
  background: linear-gradient(
    135deg,
    #5335cf 0%,
    #de005e 25%,
    #f66e48 50%,
    #de005e 75%,
    #5335cf 100%
  );
  border-radius: 5px;
`;

export const MyPlace = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 50px 20px 0px 20px;
`;

export const MyPlaceTitle = styled.p`
  font-size: 1.75rem;
  font-weight: bold;
`;

export const MyPlaceSubTitle = styled.p`
  margin-top: 5px;
  color: grey;
`;

export const CardWrap = styled.div`
  display: flex;

  width: 300px;
  padding: 10px;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;
`;

export const Card = styled.div`
  background-color: white;
  width: 140px;
  height: 145px;
  padding: 10px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 10px;
  margin-right: 15px;

  :last-child {
    margin: 0;
  }
`;

export const CardTitle = styled.li`
  padding-top: 8px;
  list-style: none;
  font-size: 1.2rem;
  font-weight: 600;
  width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardIcon = styled(HiLocationMarker)`
  display: inline;
  color: var(--color-yellow);
  margin-right: 3px;
`;

export const CardSubTitle = styled.li`
  list-style: none;
  font-size: 0.8rem;
  width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const CardImg = styled.img`
  border-radius: 10px;
  width: 120px;
  height: 80px;
  margin: auto;
  margin-bottom: 5px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const CardNotice = styled.div`
  width: 250px;
  margin: auto;
  text-align: center;
  margin-top: 20px;
  padding-left: 15px;
`;
