import React, { useEffect } from "react";
import { useNavigate } from "react-router";

import * as S from "./style";

import { ClickedItem } from "../../pages/Home/Home";

interface Props {
  filtered: ClickedItem[];
}

function SavedList({ filtered }: Props) {
  const navigation = useNavigate();

  return (
    <S.SavedListWrapper>
      {filtered.length > 0 ? (
        filtered.map((item) => {
          return (
            <S.CardWrapper key={item.fcNo}>
              <S.Title>{item.fcNm}</S.Title>
              <S.Line>{item.fcAddr}</S.Line>
              <S.Line>{item.ref1}</S.Line>
              <S.Line>{item.memo}</S.Line>
            </S.CardWrapper>
          );
        })
      ) : (
        <S.NoMemo>저장한 메모가 없습니다.</S.NoMemo>
      )}
      <S.AddMemo
        onClick={() => {
          navigation("/list");
        }}
      >
        <S.AddIcon />
      </S.AddMemo>
    </S.SavedListWrapper>
  );
}

export default SavedList;
