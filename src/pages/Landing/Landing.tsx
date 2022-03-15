import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { BsFillArrowRightSquareFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import * as S from "./style";
import { LOCAL_STORAGE_KEY } from "src/constants";
import { useLocalStorage } from "src/hooks/useLocalStorage";

interface ClickedItem {
  fcNo: number;
  fcNm: string;
  fcAddr: string;
  memo: string;
  ref1: string;
}

const Landing = () => {
  const [savedItem, setSavedItem] = useLocalStorage<ClickedItem[] | []>(LOCAL_STORAGE_KEY, []);
  const [filtered, setFilteredItem] = useState<ClickedItem[]>([]);

  useEffect(() => {
    setFilteredItem(savedItem);
  }, [savedItem]);

  const navigate = useNavigate();

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
      <S.CardWrap>
        {filtered.slice(0, 4).map((item, idx) => (
          <S.Card key={idx} onClick={() => navigate("/home")}>
            <S.CardImg src="img/cardImg.png" />
            <S.CardTitle>{item.fcNm}</S.CardTitle>
            <S.CardSubTitle>
              <S.CardIcon />
              {item.fcAddr}
            </S.CardSubTitle>
          </S.Card>
        ))}
      </S.CardWrap>
    </S.WrapDiv>
  );
};

export default Landing;
