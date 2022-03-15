import React from "react";

import * as S from "./style";

import { ClickedItem } from "../../pages/Home/Home";

interface Props {
  filtered: ClickedItem[];
}

function SavedList({ filtered }: Props) {
  return (
    <S.SavedListWrapper>
      {filtered.length > 0 ? (
        filtered.map((item) => {
          return (
            <S.CardWrapper key={index}>
              <S.CardImgWrap>
                <S.CardImg src="img/Saly-44.png"></S.CardImg>
              </S.CardImgWrap>
              <div>
                <S.Title>{memo.fcNm}</S.Title>
                <S.Line>{memo.fcAddr}</S.Line>
                <S.Line>{memo.ref1}</S.Line>
                <S.Line>메모</S.Line>
              </div>
            </S.CardWrapper>
          );
        })
      ) : (
        <S.NoMemo>저장한 메모가 없습니다.</S.NoMemo>
      )}
    </S.SavedListWrapper>
  );
}

export default SavedList;
