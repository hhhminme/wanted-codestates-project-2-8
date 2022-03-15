import React from "react";
import { Link } from "react-router-dom";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import * as S from "./style";
const Landing = () => {
  return (
    <S.WrapDiv>
      <S.ProfileWrap>
        <div>
          <S.ProfileImg src="img/Saly-1.png" />
        </div>
        <div>
          <S.ProfileMsg>환영합니다. 👋</S.ProfileMsg>
          <S.ProifileName>원티드 님</S.ProifileName>
        </div>
      </S.ProfileWrap>

      <S.BannerWrap>
        <div>
          <S.BannerImg src="img/Saly-16.png"></S.BannerImg>
        </div>
        <S.BannerTitleWrap>
          <div>
            <S.BannerTitle>새로운 휴양림을 찾아보세요</S.BannerTitle>
            <S.BannerSubTitle>휴양림 목록에서 마음에 드는 휴양림을 저장하세요.</S.BannerSubTitle>
          </div>
          <S.BannerBtn>
            <Link to="/list">
              <S.BannerIcon />
            </Link>
          </S.BannerBtn>
        </S.BannerTitleWrap>
      </S.BannerWrap>

      <S.MyPlace>
        <S.MyPlaceTitle>나의 장소</S.MyPlaceTitle>
        <S.MyPlaceSubTitle>
          <Link to="/home">더보기</Link>
        </S.MyPlaceSubTitle>
      </S.MyPlace>
    </S.WrapDiv>
  );
};

export default Landing;
